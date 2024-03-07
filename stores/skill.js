import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useSkillStore = defineStore('skill',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        skills : [],
    }),
    actions : {
        async getSkills(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/master-skill/read?id=&status_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })
            
            return skill;
        },

        async getOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/master-skill/read?id=&status_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })
            
            let options = skill?.data.map(item => ({ key: item.id, value : item.skill_name}));
            
            if(skill?.success){
                this.skills = skill?.data;
            }

            return options;
        },

        async getSkillById(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/master-skill/read?id=${id}&status_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })
               
            return skill;
        },

        async addSkill(){
            var headers = new Headers(name);
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            const formdata = new FormData();
            formdata.append("skill_name", `${name}`);

            const skill = await $fetch(`${this.API_URL}/master-skill/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getOptions();
            return skill;
        },

        async updateSkill(id, name){
            var headers = new Headers(name);
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            const formdata = new FormData();
            formdata.append("skill_name", `${name}`);

            const skill = await $fetch(`${this.API_URL}/master-skill/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getOptions();
            return skill;
        },

        async delSkill(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/master-skill/delete?id=${id}`, {
                method : 'DELETE',
                headers: headers,
            })
            
            this.getOptions();
            return skill;
        },

    },
});
