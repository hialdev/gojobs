import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useJobStore = defineStore('job',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        filter: {
            page_size : 12,
            page : 1,
            location : [],
            contract : [],
            search : '',
            status : null,
        },
        jobs: [],
        selectedJob : null,
    }),
    getters : {
        getStateJobs(state){
            return state.jobs
        },
        getStateSJob(state){
            return state.selectedJob
        }
    },
    actions : {
        viewJob(id){
            this.selectedJob = this.jobs?.find(job => job.id == id);  
        },

        async getJobById(id){
            const access = localStorage.getItem('access_token');
            let url = '/joborder/detailpublic';
            
            if(access){
                url = '/joborder/detail';
                var headers = new Headers();
                headers.append("token",access);
            }

            const job = await $fetch(`${this.API_URL}${url}?id=${id}`, {
                method : 'GET',
                headers: headers,
            })

            this.selectedJob = job;
        },
        async getJobs(page_size = this.filter.page_size, location = this.filter.location, contract = this.filter.contract, title = this.filter.search){
            const access = localStorage.getItem('access_token');
            let url = '/joborder/readpublic';

            if(access){
                url = '/joborder/read';
                var headers = new Headers();
                headers.append("token",access);
            }

            let contractQuery = contract.map(c => '&job_contract[]=' + c).join('');
            let locationQuery = location.map(loc => '&job_location[]=' + loc).join('');

            const job = await $fetch(`${this.API_URL}${url}?${'job_name='+title}${contract?.length != 0 ? contractQuery : '' }${location?.length ? locationQuery : '' }&page_size=${page_size}&page=1`, {
                method : 'GET',
                headers : headers,
            });

            console.log(job);
            this.jobs = job?.data;
        },
        
        async getJobSuggests(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const job = await $fetch(`${this.API_URL}/joborder/recommendation`, {
                method : 'GET',
                headers : headers,
            });

            return job;
        },
        
        async getJobsByStatus(status = this.filter.status, page_size = this.filter.page_size){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
            const statusQuery =  status != null && status != '' ? `&status=${status}` : '';
            const jobStatus = await $fetch(`${this.API_URL}/recruitment/applyhistory?page_size=${page_size}&page=1${statusQuery}`, {
                method : 'GET',
                headers : headers,
            });

            return jobStatus;
        },

        async getApplies(page_size = 800){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const jobApplied = await $fetch(`${this.API_URL}/recruitment/applyhistory?page_size=${page_size}&page=1&status=0`, {
                method : 'GET',
                headers : headers,
            });

            return jobApplied;
        },

        async applyJob(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const apply = await $fetch(`${this.API_URL}/recruitment/applyjob?id=${id}`, {
                method : 'POST',
                headers : headers,
            });
            console.log(apply);
            return apply;
        },

        async getFavorites(page_size = 12){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const job = await $fetch(`${this.API_URL}/recruitment/list-favorite?page_size=${page_size}&page=1`, {
                method : 'GET',
                headers : headers,
            });

            return job;
        },

        async makeFavorite(favoriteId){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
           
            const favorite = await $fetch(`${this.API_URL}/recruitment/favoritejob?id=${favoriteId}`, {
                method : 'POST',
                headers : headers,
            });

            this.getJobs();
            return favorite;
        },

        async unFavorite(favoriteId){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const unfavorite = await $fetch(`${this.API_URL}/recruitment/unfavoritejob?id=${favoriteId}`, {
                method : 'POST',
                headers : headers,
            });
            
            this.getJobs();
            return unfavorite;
        },

        updateFilter(column, value){
            this.filter[column] = value;
            this.getJobs();
            console.log(this.filter);
        },

        moreJobs(){
            this.filter.page_size += 12;
            this.getJobs();
        }
        
    },
    
})