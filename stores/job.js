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

            const job = await $fetch(`${this.API_URL}${url}?${title != '' ? 'job_name='+title : ''}${contract?.length != 0 ? contractQuery : '' }${location?.length ? locationQuery : '' }&page_size=${page_size}&page=1`, {
                method : 'GET',
                headers : headers,
            });

            console.log(job);
            this.jobs = job?.data;
        },
        
        async getApplies(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const jobApplied = await $fetch(`${this.API_URL}/recruitment/applyhistory`, {
                method : 'GET',
                headers : headers,
            });

            return jobApplied;
        },

        async applyJob(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
            var formdata = new FormData();
            formdata.append("joborder_id", `${id}`);

            const apply = await $fetch(`${this.API_URL}/recruitment/applyjob`, {
                method : 'POST',
                headers : headers,
                body: formdata,
            });

            console.log(apply);
            return apply;
        },

        async getFavorites(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const job = await $fetch(`${this.API_URL}/recruitment/list-favorite`, {
                method : 'GET',
                headers : headers,
            });

            console.log(job);
            return job?.data;
        },

        async makeFavorite(favoriteId){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
            var formdata = new FormData();
            formdata.append("joborder_id", `${favoriteId}`);

            const favorite = await $fetch(`${this.API_URL}/recruitment/favorite-job`, {
                method : 'POST',
                headers : headers,
                body: formdata,
            });

            return favorite;
        },

        async unFavorite(favoriteId){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
            var formdata = new FormData();
            formdata.append("joborder_id", `${favoriteId}`);

            const unfavorite = await $fetch(`${this.API_URL}/recruitment/unfavorite-job?id=1`, {
                method : 'POST',
                headers : headers,
                body: formdata,
            });

            return unfavorite;
        },

        updateFilter(column, value){
            this.filter[column] = value;
            console.log(this.filter);
        },

        moreJobs(){
            this.filter.page_size += 12;
            this.getJobs();
        }
        
    },
    
})