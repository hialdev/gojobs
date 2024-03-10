import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useSkillStore = defineStore('skill',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        options : [],
        skills : [],
        my_skills : [],
    }),
    getters : {
        arrayId(state){
            return state.my_skills.map(skill => skill.id);
        }
    },
    actions : {
        async getSkills(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/biodata-skill/read`, {
                method : 'GET',
                headers: headers,
            })

            // const skill = await $fetch(`${this.API_URL}/master-skill/read?id=&status_name=&page=&page_size=`, {
            //     method : 'GET',
            //     headers: headers,
            // })
            
            this.my_skills = skill?.data;
            return skill;
        },

        async getOptions(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/master-skill/read?id=&status_name=&page=&page_size=`, {
                method : 'GET',
                headers: headers,
            })
            
            let opts = skill?.data.map(item => ({ key: item.id, value : item.skill_name}));
            
            if(skill?.success){
                this.skills = skill?.data;
            }
            this.options = opts;

            return opts;
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

        async saveSkill(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("skill_id", id);

            const skill = await $fetch(`${this.API_URL}/biodata-skill/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getSkills();
            return skill;
        },

        async delAllSkill(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/biodata-skill/deleteall`, {
                method : 'DELETE',
                headers: headers,
            })
            
            this.getSkills();
            return skill;
        },

        async delSkill(id = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const skill = await $fetch(`${this.API_URL}/biodata-skill/delete?id=${id}`, {
                method : 'DELETE',
                headers: headers,
            })
            
            this.getSkills();
            return skill;
        },

        async addMasterSkill(skill_name = ''){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');
            const formdata = new FormData();
            formdata.append("skill_name", `${skill_name}`);

            const skill = await $fetch(`${this.API_URL}/master-skill/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            this.getOptions();
            return skill;
        },

        async updateSkill(id, name){
            var headers = new Headers();
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
