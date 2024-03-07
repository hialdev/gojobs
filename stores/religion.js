import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useReligionStore = defineStore('religion',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        religions: [],
    }),
    getters : {
        
    },
    actions : {
        async getOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const religion = await $fetch(`${this.API_URL}/master-religion/read`, {
                method : 'GET',
                headers: headers,
            })
            this.religions = religion?.data;
            let options = religion?.data.map(item => ({ key: item.religion, value : item.religion}));
            
            return options;
        },

        async getReligionById(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const religion = await $fetch(`${this.API_URL}/master-religion/read?id=${id}`, {
                method : 'GET',
                headers: headers,
            })

            return religion?.data[0];
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})