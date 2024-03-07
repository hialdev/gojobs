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

        getCityProvinces(province_id = ''){
            const filtereds = this.other_citys.filter(city => city.province_id == province_id);

            let options = filtereds?.map(ct => ({ key: ct.id, value : ct.city_name}));
            console.log(options);
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

        async getProvinceOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const province = await $fetch(`${this.API_URL}/master-province/read?page_size=999`, {
                method : 'GET',
                headers: headers,
            })

            console.log(province);
            let options = province?.data.map(item => ({ key: item.id, value : item.province_name}));
            return options;
        },

        async getProvinceById(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const province = await $fetch(`${this.API_URL}/master-province/read?id=${id}`, {
                method : 'GET',
                headers: headers,
            })

            return province?.data[0]?.province_name;
        },

        async getCityById(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const city = await $fetch(`${this.API_URL}/master-city/read?id=${id}`, {
                method : 'GET',
                headers: headers,
            })
            console.log(city);
            return city?.data[0]?.city_name;
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})