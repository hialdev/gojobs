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
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const job = await $fetch(`${this.API_URL}/joborder/detail?id=${id}`, {
                method : 'GET',
                headers: headers,
            })

            this.selectedJob = job;
        },
        async getJobs(page_size = this.filter.page_size){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const job = await $fetch(`${this.API_URL}/joborder/read?page_size=${page_size}&page=1`, {
                method : 'GET',
                headers : headers,
            });

            console.log(job);
            this.jobs = job?.data;
        },
        
        async getApplies(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const job = await $fetch(`${this.API_URL}/recruitment/applyhistory`, {
                method : 'GET',
                headers : headers,
            });

            console.log(job);
            return job?.data;
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

            console.log(favorite);
            return favorite;
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },

        moreJobs(){
            this.filter.page_size += 12;
            this.getJobs();
        }


        
    },
    
})