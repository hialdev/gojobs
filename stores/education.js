import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useEducationStore = defineStore('education',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        educations: [],
        opt_educations: [],
        on_edit: null,
    }),
    getters : {
        
    },
    actions : {
        async getOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const edus = await $fetch(`${this.API_URL}/master-education/read`, {
                method : 'GET',
                headers: headers,
            })
            this.opt_educations = edus?.data;
            let options = edus?.data.map(item => ({ key: item.id, value : item.education_name}));
            
            return options;
        },

        getLevelById(id = ''){
            const edu = this.opt_educations.find(opt => opt.id == id);
            return edu ? edu?.education_name : 'undefined';
        },

        async getEducations(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const education = await $fetch(`${this.API_URL}/biodata-education/read`, {
                method : 'GET',
                headers: headers,
            })
            if(education.success){
                this.educations = education?.data;
            }

            return education;
        },

        async addEducation(
                institute_name,
                location,
                majoring, 
                educational_level, 
                start_date,
                end_date, 
                status, 
                gpa, 
                description
            ){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("majoring", majoring);
            formdata.append("educational_level", educational_level);
            formdata.append("city", location);
            formdata.append("institutions", institute_name);
            formdata.append("start_date", start_date);
            formdata.append("end_date", end_date);
            formdata.append("status",  status == '' || status == null ? false : true);
            formdata.append("gpa", gpa);
            formdata.append("description", description);

            const education = await $fetch(`${this.API_URL}/biodata-education/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })

            this.getEducations();

            return education;
        },

        async editEducation(id){
            const fetch = await this.getEducations();
            this.on_edit = this.educations.find(data => data.id == parseInt(id, 10));
            return fetch?.success;
        },

        async updateEducation(id, institute_name, location, majoring, start_date, end_date, status, gpa, description ){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("majoring", majoring);
            formdata.append("educational_level", "2");
            formdata.append("city", location);
            formdata.append("institutions", institute_name);
            formdata.append("start_date", start_date);
            formdata.append("end_date", end_date);
            formdata.append("status", status == '' || status == null ? false : true);
            formdata.append("gpa", gpa);
            formdata.append("description", description);

            const education = await $fetch(`${this.API_URL}/biodata-education/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            this.getEducations();
            return education;
        },

        async delEducation(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const education = await $fetch(`${this.API_URL}/biodata-education/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })
            this.getEducations();
            return education;
        },
    },
    
})