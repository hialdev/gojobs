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
            var headers = new Headers();

            if(access){
                url = '/joborder/detail';
                headers.append("token",access);
            }

            const jobdetail = await $fetch(`${this.API_URL}${url}?id=${id}`, {
                method : 'GET',
                headers: headers,
            })

            this.selectedJob = jobdetail;
        },

        async getJobs(){
            const access = localStorage.getItem('access_token');
            var url = 'readpublic';
            var headers = new Headers();

            if(access){
                url = 'read';
                headers.append("token",access);
            }
            const fetchjob = await $fetch(`${this.API_URL}/joborder/${url}?page_size=${this.filter.page_size}&page=1`, {
                method : 'GET',
                headers : headers,
            });

            this.jobs = fetchjob?.data;
            return fetchjob;
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

            return favorite;
        },

        async unFavorite(favoriteId){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const unfavorite = await $fetch(`${this.API_URL}/recruitment/unfavoritejob?id=${favoriteId}`, {
                method : 'POST',
                headers : headers,
            });

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