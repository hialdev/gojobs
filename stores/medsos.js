import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useMedsosStore = defineStore('medsos',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        medsos: null,
        on_edit: null,
    }),
    getters : {
        
    },
    actions : {
        async getMedsos(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const medsos = await $fetch(`${this.API_URL}/biodata-mediasocial/read`, {
                method : 'GET',
                headers: headers,
            })
            if(medsos.success){
                this.medsos = medsos?.data;
            }

            return medsos;
        },

        async addMedsos(instagram, twitter, facebook, linkedin, others = "https://devtektif.com/"){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("instagram", instagram);
            formdata.append("twitter", twitter);
            formdata.append("facebook", facebook);
            formdata.append("linkedin", linkedin);
            formdata.append("others", others);

            const medsos = await $fetch(`${this.API_URL}/biodata-mediasocial/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })

            return medsos;
        },

        async editMedsos(){
            const fetch = await this.getMedsos();
            this.on_edit = this.medsos?.data;
            return fetch?.success;
        },

        async updateMedsos(id = this.medsos?.data?.id, instagram, twitter, facebook, linkedin, others = "https://devtektif.com/"){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("instagram", instagram);
            formdata.append("twitter", twitter);
            formdata.append("facebook", facebook);
            formdata.append("linkedin", linkedin);
            formdata.append("others", others);

            const medsos = await $fetch(`${this.API_URL}/biodata-mediasocial/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })

            return medsos;
        },

        async delMedsos(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const medsos = await $fetch(`${this.API_URL}/biodata-mediasocial/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })

            return medsos;
        },
    },
    
})