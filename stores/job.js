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
            console.log(this.jobs);
            this.selectedJob = this.jobs?.data?.find(job => job.id == id);  
            console.log(this.selectedJob);
            console.log(id);
        },

        async getJobById(id = "39550"){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const job = await $fetch(`${this.API_URL}/joborder/detail?id=${id}`, {
                method : 'GET',
                headers: headers,
            })
            console.log(typeof(id)+': '+id);
            console.log(job);
            this.selectedJob = job;
        },
        async getJobs(page_size = this.filter.page_size){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const job = await $fetch(`${this.API_URL}/joborder/read?page_size=${page_size}&page=${this.filter.page}`, {
                method : 'GET',
                headers: headers,
            })
            
            this.jobs = job;
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