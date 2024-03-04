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
        other_citys: [],
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

        async getOptionsMaster(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const city = await $fetch(`${this.API_URL}/master-city/read?id=&city_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })

            this.other_citys = city?.data;
            let options = city?.data.map(ct => ({ key: ct.id, value : ct.city_name}));

            return options;
        },

        async getCityById(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const city = await $fetch(`${this.API_URL}/master-city/read?id=${id}&city_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })

            return city?.data[0]?.city_name;
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})