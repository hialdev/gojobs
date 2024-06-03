import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useExperienceStore = defineStore('experience',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        experiences: [],
        on_edit: null,
    }),
    getters : {
        
    },
    actions : {
        async getExperiences(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const experience = await $fetch(`${this.API_URL}/biodata-experience/read`, {
                method : 'GET',
                headers: headers,
            })

            this.experiences = experience.data;

            return experience;
        },

        async addExperience(position, company_name, company_address, start_date, end_date, still, contract, description){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("company_name", company_name);
            formdata.append("company_address", company_address);
            formdata.append("start_date", start_date);
            formdata.append("is_stillwork", still);
            formdata.append("end_date", end_date);
            formdata.append("last_position", position);
            formdata.append("industry", "Not Defined");
            formdata.append("salary", "0");
            formdata.append("type_contract", contract);
            formdata.append("job_description", description);

            const experience = await $fetch(`${this.API_URL}/biodata-experience/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            if(experience.success){
                this.getExperiences();
            }
            
            return experience;
        },

        async editExperience(id){
            const fetch = await this.getExperiences();
            this.on_edit = this.experiences.find(data => data.id == parseInt(id, 10));
            return fetch?.success;
        },

        async updateExperience(id, position, company_name, company_address, start_date, end_date, still, contract, description ){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("company_name", company_name);
            formdata.append("company_address", company_address);
            formdata.append("start_date", start_date);
            formdata.append("is_stillwork", still);
            formdata.append("end_date", end_date);
            formdata.append("last_position", position);
            formdata.append("industry", "Not Defined");
            formdata.append("salary", "0");
            formdata.append("type_contract", contract);
            formdata.append("job_description", description);

            const experience = await $fetch(`${this.API_URL}/biodata-experience/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            if(experience.success){
                this.getExperiences();
            }
            
            return experience;
        },

        async delExperience(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const experience = await $fetch(`${this.API_URL}/biodata-experience/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })

            if(experience.success){
                this.getExperiences();
            }

            return experience;
        },
    },
    
})