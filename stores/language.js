import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useLanguageStore = defineStore('language',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        languages: [],
        on_edit: null,
    }),
    getters : {
        
    },
    actions : {
        async getLanguages(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const language = await $fetch(`${this.API_URL}/biodata-language/read`, {
                method : 'GET',
                headers: headers,
            })
            if(language?.success){
                this.languages = language?.data;
            }

            return language;
        },

        async addLanguage(lang, understand, read, write, speak){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("language", lang);
            formdata.append("speaking", parseInt(speak));
            formdata.append("writing", parseInt(write));
            formdata.append("reading", parseInt(read));
            formdata.append("understanding", "0");

            const language = await $fetch(`${this.API_URL}/biodata-language/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            this.getLanguages();
            return language;
        },

        async editLanguage(id){
            const fetch = await this.getLanguages();
            this.on_edit = this.languages.find(data => data.id == parseInt(id, 10));
            return fetch?.success;
        },

        async updateLanguage(id, lang, read, write, speak){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("language", lang);
            formdata.append("speaking", speak);
            formdata.append("writing", write);
            formdata.append("reading", read);
            formdata.append("understanding", "0");

            const language = await $fetch(`${this.API_URL}/biodata-language/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            this.getLanguages();
            return language;
        },

        async delLanguage(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const language = await $fetch(`${this.API_URL}/biodata-language/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })
            this.getLanguages();
            return language;
        },
    },
    
})