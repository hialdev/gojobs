import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useDocumentStore = defineStore('document',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        documents: [],
    }),
    getters : {
        
    },
    actions : {
        async getDocuments(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const document = await $fetch(`${this.API_URL}/biodata-document/read`, {
                method : 'GET',
                headers: headers,
            })
            this.documents = document?.data;
            
            return document;
        },
        
        async createDocument(type="", number = '', fileData = null){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
            let url_create = '';
            const formdata = new FormData();

            if(type == 'resume'){
                formdata.append("resume", fileData);
                url_create = 'create-resume';
            }
            if(type == 'ktp'){
                formdata.append("id_number", number);
                formdata.append("id_card", fileData);
                url_create = 'create-idcard';
            }
            if(type == 'kk'){
                formdata.append("family_number", number);
                formdata.append("family_card", fileData);
                url_create = 'create-familycard';
            }
            if(type == 'ijazah'){
                formdata.append("degree_card", fileData);
                url_create = 'create-degreecard';
            }
            if(type == 'transkrip'){
                formdata.append("transcript_card", fileData);
                url_create = 'create-transcriptcard';
            }
            if(type == 'npwp'){
                formdata.append("npwp_number", number);
                formdata.append("npwp_card", fileData);
                url_create = 'create-npwpcard';
            }
            if(type == 'bpjs'){
                formdata.append("bpjs_number", number);
                formdata.append("bpjs_card", fileData);
                url_create = 'create-bpjscard';
            }
            if(type == 'jamsostek'){
                formdata.append("jamsostek_number", number);
                formdata.append("jamsostek_card", fileData);
                url_create = 'create-jamsostekcard';
            }
            if(type == 'simc'){
                formdata.append("driving_motor_number", number);
                formdata.append("driving_motor_card", fileData);
                url_create = 'create-drivingmotor';
            }
            if(type == 'simab'){
                formdata.append("driving_car_number", number);
                formdata.append("driving_car_card", fileData);
                url_create = 'create-drivingcar';
            }
            if(type == 'vaksin1'){
                formdata.append("vaccine_number_1", number);
                formdata.append("vaccinde_card_1", fileData);
                url_create = 'create-vaccinecard';
            }
            if(type == 'vaksin2'){
                formdata.append("vaccine_number_2", number);
                formdata.append("vaccinde_card_2", fileData);
                url_create = 'create-vaccinecard';
            }
            if(type == 'cover'){
                formdata.append("cover_letter", fileData);
                url_create = 'create-coverletter';
            }

            const document = await $fetch(`${this.API_URL}/biodata-document/${url_create}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            return document;
        },

        async updateDocument(type="", number = '', fileData = null){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));
            let url_create = '';
            const formdata = new FormData();

            if(type == 'resume'){
                formdata.append("resume", fileData);
                url_create = 'update-resume';
            }
            if(type == 'ktp'){
                formdata.append("id_number", number);
                formdata.append("id_card", fileData);
                url_create = 'update-idcard';
            }
            if(type == 'kk'){
                formdata.append("family_number", number);
                formdata.append("family_card", fileData);
                url_create = 'update-familycard';
            }
            if(type == 'ijazah'){
                formdata.append("degree_card", fileData);
                url_create = 'update-degreecard';
            }
            if(type == 'transkrip'){
                formdata.append("transcript_card", fileData);
                url_create = 'update-transcriptcard';
            }
            if(type == 'npwp'){
                formdata.append("npwp_number", number);
                formdata.append("npwp_card", fileData);
                url_create = 'update-npwpcard';
            }
            if(type == 'bpjs'){
                formdata.append("bpjs_number", number);
                formdata.append("bpjs_card", fileData);
                url_create = 'update-bpjscard';
            }
            if(type == 'jamsostek'){
                formdata.append("jamsostek_number", number);
                formdata.append("jamsostek_card", fileData);
                url_create = 'update-jamsostekcard';
            }
            if(type == 'simc'){
                formdata.append("driving_motor_number", number);
                formdata.append("driving_motor_card", fileData);
                url_create = 'update-drivingmotor';
            }
            if(type == 'simab'){
                formdata.append("driving_car_number", number);
                formdata.append("driving_car_card", fileData);
                url_create = 'update-drivingcar';
            }
            if(type == 'vaksin1'){
                formdata.append("vaccine_number_1", number);
                formdata.append("vaccinde_card_1", fileData);
                url_create = 'update-vaccinecard';
            }
            if(type == 'vaksin2'){
                formdata.append("vaccine_number_2", number);
                formdata.append("vaccinde_card_2", fileData);
                url_create = 'update-vaccinecard';
            }
            if(type == 'cover'){
                formdata.append("cover_letter", fileData);
                url_create = 'update-coverletter';
            }

            const id = '';
            const document = await $fetch(`${this.API_URL}/biodata-document/${url_create}?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            return document;
        },
    },
    
})