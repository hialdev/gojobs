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
        }
    }),
    getters : {
        
    },
    actions : {
        async getJobs(page_size = this.filter.page_size){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const job = await $fetch(`${this.API_URL}/joborder/read?page_size=${page_size}&page=${this.filter.page}`, {
                method : 'GET',
                headers: headers,
            })
            console.log(job);
            return job;
        },
        
        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})