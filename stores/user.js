import { defineStore } from "pinia";
import { useGeneralStore } from '@/stores/general';
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
    }),
    getters : {
        async getData(){
            const profile = await $fetch (`${this.API_URL}/user/profile`, {
                method : 'GET',
                body: {

                }
            })
        },
    },
    actions : {
        async login(){
            let formdata = new FormData();
            formdata.append("username", "hisyamk");
            formdata.append("password", "IshRaya098")
            const login = await $fetch(`${this.API_URL}/auth/login`, {
                method : 'POST',
                body: formdata,
            })
            if(login.success){
                localStorage.setItem('token',login.access_token)
            }else{
                console.log(login)
            };
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
            if(register.success){
                console.log(register)
            }else{
                console.log(register)
            };
        },
        setRegist(column, value){
            this.registForm[column] = value;
        }
    },
    
})