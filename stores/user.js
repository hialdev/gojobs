import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
import loginVue from "~/components/auth/login.vue";
const token = ref('');

onMounted(() => {
  token.value = localStorage.getItem('token');
});

export const useUserStore = defineStore('user',{
    state : () => ({
        token : token.value,
        API_URL : useGeneralStore().API_URL,
        loginForm : {
            username : '',
            password : '',
        },
        registForm : {
            name : '',
            username : '',
            email : '',
            mobile : '',
            password : '',
            confirm_password : '',
            agree : null,
        },
        profile: null,
    }),
    getters : {
        
    },
    actions : {
        async getProfile(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const profile = await $fetch(`${this.API_URL}/user/profile`, {
                method : 'GET',
                headers: headers,
            })
            console.log(profile);
            return profile;
        },
        async login(username = this.loginForm.username, password = this.loginForm.password){
            let formdata = new FormData();
            formdata.append("username", username);
            formdata.append("password", password)
            const login = await $fetch(`${this.API_URL}/auth/login`, {
                method : 'POST',
                body: formdata,
            })
            if(login.success){
                localStorage.setItem('login','true');
                localStorage.setItem('profile',JSON.stringify(login));
                localStorage.setItem('access_token',login.access_token);
            }

            return login;
        },
        async register(){
            let formdata = new FormData();
            formdata.append("name", this.registForm.name);
            formdata.append("email", this.registForm.email );
            formdata.append("username", this.registForm.username);
            formdata.append("mobile", this.registForm.mobile);
            formdata.append("password", this.registForm.password);
            formdata.append("confirm_password", this.registForm.confirm_password);
            formdata.append("agree", this.registForm.agree == true ? '1' : '0');
            const register = await $fetch(`${this.API_URL}/auth/register`, {
                method : 'POST',
                body: formdata,
            })
            
            return register;
        },
        setRegist(column, value){
            this.registForm[column] = value;
        },

        async verify(code_token){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const user_id = JSON.parse(localStorage.getItem('profile')).userid;
            const verif = await $fetch(`${this.API_URL}/auth/verify?user_id=${user_id}&verify_code=${code_token}`, {
                method : 'POST',
                headers: headers,
            })

            return verif;
        },

        async logout(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));
            const logout = await $fetch(`${this.API_URL}/auth/logout`, {
                method : 'POST',
                headers: headers,
            })
            if(logout.success){
                localStorage.removeItem('access_token');
                localStorage.removeItem('profile');
                localStorage.setItem('login','false');
            }
            return logout;
        },

        async resendCode(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));
            const user_id = JSON.parse(localStorage.getItem('profile')).userid;
            const resend = await $fetch(`${this.API_URL}/auth/resendtoken?user_id=${user_id}`, {
                method : 'GET',
                headers: headers,
            })

            return resend;
        },

        async forgotPassword(email){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));
            
            let formdata = new FormData();
            formdata.append("email", email );

            const forgot = await $fetch(`${this.API_URL}/auth/forgotpassword`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })

            return forgot;
        },

        async getFullProfile(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const profiles = await $fetch(`${this.API_URL}/user/profile`, {
                method : 'GET',
                headers: headers,
            })

            // const experiences = await $fetch(`${this.API_URL}/biodata-experience/read`, {
            //     method : 'GET',
            //     headers: headers,
            // })

            // const educations = await $fetch(`${this.API_URL}/biodata-education/read`, {
            //     method : 'GET',
            //     headers: headers,
            // })

            const organizations = await $fetch(`${this.API_URL}/organization/read`, {
                method : 'GET',
                headers: headers,
            })

            // const languanges = await $fetch(`${this.API_URL}/biodata-languange/read`, {
            //     method : 'GET',
            //     headers: headers,
            // })

            // const eduNonformals = await $fetch(`${this.API_URL}/biodata-education-nonformal/read`, {
            //     method : 'GET',
            //     headers: headers,
            // })

            return {
                profile : profiles,
                //experiences : experiences,
                //educations : educations,
                organizations : organizations,
                //languanges : languanges,
                //eduNonformals : eduNonformals,
            }
        }
    },
    
})