import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useCityStore = defineStore('city',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        citys: [],
    }),
    getters : {
        
    },
    actions : {
        async getOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const city = await $fetch(`${this.API_URL}/mapping-city/read?id=&city_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })
            this.citys = city?.data;
            let options = city?.data.map(ct => ({ key: ct.city_id, value : ct.city_name}));
            
            return options;
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})