import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useFamcontactStore = defineStore('famcontact',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        familys: [],
        contacts: [],
    }),
    getters : {
        allData(state) {
            return state.familys.map((family, index) => ({
                family: family,
                contact: state.contacts[index] || null,
            }));
        },
    },
    actions : {
        // Family ===============
        async getFamilys(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const family = await $fetch(`${this.API_URL}/biodata-family/read`, {
                method : 'GET',
                headers: headers,
            })
            this.familys = family?.data;
            
            return family;
        },

        getFamilyById(id){
            const family = this.familys.find(family => family.id == id);
            return family;
        },

        async addFamily(fullname = '', gender = '', birth_place = '', birth_date = '', last_education = '', job_title = '', company_name = '', relationship = '', description = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            
            const formdata = new FormData();
            formdata.append("fullname", fullname);
            formdata.append("gender", gender);
            formdata.append("birth_place", birth_place);
            formdata.append("birth_date", birth_date);
            formdata.append("last_education", last_education);
            formdata.append("job_title", job_title);
            formdata.append("company_name", company_name);
            formdata.append("relationship", relationship);
            formdata.append("description", description);
            
            const family = await $fetch(`${this.API_URL}/biodata-family/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getFamilys();
            return family;
        },

        async updateFamily(id, fullname = null, gender = null, birth_place = null, birth_date = null, last_education = null, job_title = null, company_name = null, relationship = null, description = null){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            
            const famEdit = this.getFamilyById(id);

            const formdata = new FormData();
            formdata.append("fullname", fullname ?? famEdit.fullname);
            formdata.append("gender", gender ?? famEdit.gender);
            formdata.append("birth_place", birth_place ?? famEdit.birth_place);
            formdata.append("birth_date", birth_date ?? famEdit.birth_date);
            formdata.append("last_education", last_education ?? famEdit.last_education);
            formdata.append("job_title", job_title ?? famEdit.job_title);
            formdata.append("company_name", company_name ?? famEdit.company_name);
            formdata.append("relationship", relationship ?? famEdit.relationship);
            formdata.append("description", description ?? famEdit.description);
            
            const family = await $fetch(`${this.API_URL}/biodata-family/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getFamilys();
            return family;
        },

        async delFamily(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const family = await $fetch(`${this.API_URL}/biodata-family/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })
            
            return family;
        },

        // ---------------
        async getContacts(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const contact = await $fetch(`${this.API_URL}/biodata-emergency/read`, {
                method : 'GET',
                headers: headers,
            })
            this.contacts = contact?.data;
            
            return contact;
        },

        getContactById(id){
            const contact = this.contacts.find(contact => contact.id == id);
            return contact;
        },

        async addContact(fullname = '', phone = '', address = '', relationship = '', province_id = '', city_id = '', postal_code = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            
            const formdata = new FormData();
            formdata.append("fullname", fullname);
            formdata.append("phone", phone);
            formdata.append("address", address);
            formdata.append("relationship", relationship);
            formdata.append("province_id", province_id);
            formdata.append("city_id", city_id);
            formdata.append("postal_code", postal_code);
            
            const emergency = await $fetch(`${this.API_URL}/biodata-emergency/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getContacts();
            return emergency;
        },

        async updateContact(id, fullname = null, phone = null, address = null, relationship = null, province_id = null, city_id = null, postal_code = null){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            
            const contactEdit = this.getContactById(id);

            const formdata = new FormData();
            formdata.append("fullname", fullname ?? contactEdit.fullname);
            formdata.append("phone", phone ?? contactEdit.phone);
            formdata.append("address", address ?? contactEdit.address);
            formdata.append("relationship", relationship ?? contactEdit.relationship);
            formdata.append("province_id", province_id ?? contactEdit.province_id);
            formdata.append("city_id", city_id ?? contactEdit.city_id);
            formdata.append("postal_code", postal_code ?? contactEdit.postal_code);
            
            const emergency = await $fetch(`${this.API_URL}/biodata-emergency/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            return emergency;
        },

        async delContact(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const contact = await $fetch(`${this.API_URL}/biodata-emergency/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })
            
            return contact;
        },
        
    },
    
})