import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
    token.value = localStorage.getItem('access_token');
});

export const useNotificationStore = defineStore('notification',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        notifications: [],
    }),
    getters : {

    },
    actions : {
        async getNotifications(){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const notification = await $fetch(`${this.API_URL}/user/notification`, {
                method : 'GET',
                headers: headers,
            })

            this.notifications = notification?.data;
            
            return notification;
        },

        async readNotification(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const read = await $fetch(`${this.API_URL}/user/notification-read?id=${id}`, {
                method : 'GET',
                headers: headers,
            })
            
            await this.getNotifications();
            return read;
        },

        async updateNotification(id){
            var headers = new Headers();
            headers.append("token",localStorage.getItem('access_token'));

            const read = await $fetch(`${this.API_URL}/user/notification-read?id=${id}`, {
                method : 'GET',
                headers: headers,
            })
            
            await this.getNotifications();
            return read;
        },

        updateFilter(column, value){
            this.filter[column] = value;
        },
        
    },
    
})