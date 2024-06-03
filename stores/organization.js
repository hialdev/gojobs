import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';

export const useOrganizationStore = defineStore('organization',{
    state : () => ({
        API_URL : useGeneralStore().API_URL,
        organizations: [],
        on_edit: null,
    }),
    getters : {
        
    },
    actions : {
        async getOrganizations(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const organization = await $fetch(`${this.API_URL}/biodata-organization/read`, {
                method : 'GET',
                headers: headers,
            })
            if(organization?.success){
                this.organizations = organization?.data;
            }

            return organization;
        },

        async addOrganization(position, organization_name, location, duration){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("organization_name", organization_name);
            formdata.append("organization_place", location);
            formdata.append("organization_skill", "skill");
            formdata.append("organization_address", location);
            formdata.append("duration", duration);
            formdata.append("position", position);
            
            const organization = await $fetch(`${this.API_URL}/biodata-organization/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            this.getOrganizations();
            return organization;
        },

        async editOrganization(id){
            const fetch = await this.getOrganizations();
            this.on_edit = this.organizations.find(data => data.id == parseInt(id, 10));
            return fetch?.success;
        },

        async updateOrganization(id, position, organization_name, location, duration ){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const formdata = new FormData();
            formdata.append("organization_name", organization_name);
            formdata.append("organization_place", location);
            formdata.append("organization_skill", "skill");
            formdata.append("organization_address", location);
            formdata.append("duration", duration);
            formdata.append("position", position);
            
            const organization = await $fetch(`${this.API_URL}/biodata-organization/update?id=${id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            this.getOrganizations();
            return organization;
        },

        async delOrganization(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token') ?? 'rbkmzydqknor0t5q236n01j38');

            const organization = await $fetch(`${this.API_URL}/biodata-organization/delete?id=${id}`, {
                method : 'POST',
                headers: headers,
            })
            this.getOrganizations();
            return organization;
        },
    },
    
})