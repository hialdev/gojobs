import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useContractStore = defineStore('contract',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        contracts: [],
    }),
    getters : {
        
    },
    actions : {
        async getOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const contract = await $fetch(`${this.API_URL}/master-contract/read?contract_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })
            this.contracts = contract?.data;
            let options = contract?.data.map(ct => ({ key: ct.id, value : ct.contract_name}));
            
            return options;
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})