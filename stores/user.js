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
        detail :{
            profile : {
                image : '',
                name : '',
                summary : '',
                email : '',
                phone : '',
                city : '',
                province : '',
                postal_code : '',
                address :  '',
                role: '',
                sosmed : {
                    ig : '',
                    fb: '',
                    x: '',
                    in: '',
                },
            },
            biodata : {
                birth_place : '',
                birth_date : null,
                gender : '',
                marritage_status : '',
                religion : '',
                expected_salary : '',
                weight_body : '',
                height_body : '',
            },
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

            const verif = await $fetch(`${this.API_URL}/auth/verify?verify_code=${code_token}`, {
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
            const resend = await $fetch(`${this.API_URL}/auth/resend-token`, {
                method : 'POST',
                headers: headers,
            })

            return resend;
        },

        async deactive(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));
            const resend = await $fetch(`${this.API_URL}/auth/deactive`, {
                method : 'POST',
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

            const fetchProfile = await $fetch(`${this.API_URL}/user/profile-detail`, {
                method : 'GET',
                headers: headers,
            })
            
            const medsos = useMedsosStore();
            const fetchSosmed = await medsos.getMedsos();
            if(fetchProfile.success){
                this.detail.profile = {
                    image : fetchProfile.profile.photo,
                    name : fetchProfile.name,
                    summary : fetchProfile.profile_detail?.summary ?? "",
                    email : fetchProfile.email,
                    phone : fetchProfile.mobile,
                    city : fetchProfile.profile.city_id,
                    province : fetchProfile.profile.province_id,
                    postal_code : fetchProfile.profile.postalcode,
                    address :  fetchProfile.profile.address,
                    role: fetchProfile.profile.work_type,
                    sosmed : {
                        id : fetchSosmed?.data?.id ?? '',
                        ig : fetchSosmed?.data?.instagram ?? '',
                        fb: fetchSosmed?.data?.facebook ?? '',
                        x: fetchSosmed?.data?.twitter ?? '',
                        in: fetchSosmed?.data?.linkedin ?? '',
                        others: fetchSosmed?.data?.others ?? '',
                    },
                };
                this.detail.biodata = {
                    birth_place : fetchProfile.profile.birth_place,
                    birth_date : fetchProfile.profile.birth_date,
                    gender : fetchProfile.profile.gender,
                    marritage_status : fetchProfile.profile.marital_status,
                    religion : fetchProfile.profile.religion,
                    expected_salary : fetchProfile.profile_detail?.expect_salary ?? "",
                    weight_body : fetchProfile.profile.weight_body,
                    height_body : fetchProfile.profile.height_body,
                };
            }

            console.log(fetchProfile);
            console.log(this.detail);
            return fetchProfile;
        },

        async getCompleation(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const compleation = await $fetch(`${this.API_URL}/user/compleation-data`, {
                method : 'GET',
                headers: headers,
            })

            return compleation
        },


        // Profiling
        async getProfileDetail(){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const detail = await $fetch(`${this.API_URL}/biodata-profile/read`, {
                method : 'GET',
                headers: headers,
            })

            return detail
        },

        async addProfile(
                phone = this.detail?.profile?.phone,
                fullname = this.detail?.profile?.name,
                role = '',
                summary = '',
                gender = '',
                birth_date = '12-12-2012',
                birth_place = '',
                religion = '',
                marital_status = '',
                height_body = 0,
                weight_body = 0,
                province = '',
                city = '',
                address = '',
                postal_code = "",
                expect_salary = 0,
                photo = null,
                ig = '',
                fb = '',
                x = '',
                linkedin = '',
                others = '',
                identity_number = '',
                kk_number = '',
                jamsostek_number = '',
                bpjs_number = '',
                npwp_number = '',
                drivinglicencecar_number = '',
                drivinglicencemotorcycle_number = ''
            ){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const formdata = new FormData();
            formdata.append("fullname", fullname);
            formdata.append("nickname", fullname);
            formdata.append("gender", gender);
            formdata.append("birth_date", birth_date);
            formdata.append("birth_place", birth_place);
            formdata.append("phone", phone);
            formdata.append("address", address);
            formdata.append("nationality", "Indonesia");
            formdata.append("postal_code", postal_code);
            formdata.append("blood_type", "O");
            formdata.append("religion", religion);
            formdata.append("marital_status", marital_status);
            formdata.append("wedding_date", "null");
            formdata.append("domicile_status", "rent");
            formdata.append("domicile_statusdescription", "null");
            formdata.append("identity_number", identity_number);
            formdata.append("kk_number", kk_number);
            formdata.append("jamsostek_number", jamsostek_number);
            formdata.append("bpjs_number", bpjs_number);
            formdata.append("npwp_number", npwp_number);
            formdata.append("drivinglicencecar_number", drivinglicencecar_number);
            formdata.append("drivinglicencemotorcycle_number", drivinglicencemotorcycle_number);
            formdata.append("city_id", city);
            formdata.append("province_id", province);
            formdata.append("is_sameforktp", "");
            formdata.append("province_idktp", "1");
            formdata.append("city_idktp", city);
            formdata.append("postal_codektp", postal_code);
            formdata.append("height_body", height_body ?? 0);
            formdata.append("weight_body", weight_body ?? 0);
            formdata.append("work_location", "Jakarta");
            formdata.append("work_type", role);
            formdata.append("photo", photo);
            
            const additional = new FormData();
            additional.append("summary", summary);
            additional.append("expect_salary", expect_salary);

            const createProfile = await $fetch(`${this.API_URL}/biodata-profile/create`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })
            
            const createAdditional = await $fetch(`${this.API_URL}/biodata-detail/create`, {
                method : 'POST',
                headers: headers,
                body: additional,
            }) 
            if(ig != null || x != null || fb != null || others != null || linkedin != null || ig != '' || x != '' || fb != '' || others != '' || linkedin != '')
            {
                const medsos = useMedsosStore();
                const createSosmed = await medsos.addMedsos(ig, x, fb, linkedin, others)
            }

            this.getFullProfile();

            return createProfile;
        },

        async updateProfile(
                phone = this.detail?.profile?.phone,
                fullname = this.detail?.profile?.name,
                role = this.detail?.profile?.role,
                summary = this.detail?.profile?.summary,
                gender = this.detail?.biodata?.gender,
                birth_date = this.detail?.biodata?.birth_date,
                birth_place = this.detail?.biodata?.birth_place,
                religion = this.detail?.biodata?.religion,
                marital_status = this.detail?.biodata?.marital_status,
                height_body = this.detail?.biodata?.height_body,
                weight_body = this.detail?.biodata?.weight_body,
                province = this.detail?.profile?.province,
                city = this.detail?.profile?.city,
                address = this.detail?.profile?.address,
                postal_code = this.detail?.profile?.postal_code,
                expect_salary = this.detail?.biodata?.expected_salary,
                photo = null,
                ig = this.detail?.profile?.sosmed?.ig,
                fb = this.detail?.profile?.sosmed?.fb,
                x = this.detail?.profile?.sosmed?.x,
                linkedin = this.detail?.profile?.sosmed?.in,
                others = this.detail?.profile?.sosmed?.others,
                identity_number = '',
                kk_number = '',
                jamsostek_number = '',
                bpjs_number = '',
                npwp_number = '',
                drivinglicencecar_number = '',
                drivinglicencemotorcycle_number = ''
            ){
            var headers = new Headers();
            headers.append("token", localStorage.getItem('access_token'));

            const formdata = new FormData();
            formdata.append("fullname", fullname);
            formdata.append("nickname", fullname);
            formdata.append("gender", gender);
            formdata.append("birth_date", birth_date);
            formdata.append("birth_place", birth_place);
            formdata.append("phone", phone);
            formdata.append("address", address);
            formdata.append("nationality", "Indonesia");
            formdata.append("postal_code", postal_code);
            formdata.append("blood_type", "O");
            formdata.append("religion", religion);
            formdata.append("marital_status", marital_status);
            formdata.append("wedding_date", "null");
            formdata.append("domicile_status", "rent");
            formdata.append("domicile_statusdescription", "null");
            formdata.append("identity_number", identity_number);
            formdata.append("kk_number", kk_number);
            formdata.append("jamsostek_number", jamsostek_number);
            formdata.append("bpjs_number", bpjs_number);
            formdata.append("npwp_number", npwp_number);
            formdata.append("drivinglicencecar_number", drivinglicencecar_number);
            formdata.append("drivinglicencemotorcycle_number", drivinglicencemotorcycle_number);
            formdata.append("city_id", city);
            formdata.append("province_id", province);
            formdata.append("is_sameforktp", "");
            formdata.append("province_idktp", "1");
            formdata.append("city_idktp", city);
            formdata.append("postal_codektp", postal_code);
            formdata.append("height_body", height_body ?? 0);
            formdata.append("weight_body", weight_body ?? 0);
            formdata.append("work_location", "Jakarta");
            formdata.append("work_type", role);
            formdata.append("photo", photo);
            
            const additional = new FormData();
            additional.append("summary", summary);
            additional.append("expect_salary", expect_salary);

            const user_id = JSON.parse(localStorage.getItem('profile')).userid;
            
            const updateProfile = await $fetch(`${this.API_URL}/biodata-profile/update?id=${user_id}`, {
                method : 'POST',
                headers: headers,
                body: formdata,
            })

            const getAdditional = await $fetch(`${this.API_URL}/biodata-detail/read`, {
                method : 'GET',
                headers: headers,
            }) 

            let updateAdditional = null;
            if(getAdditional.success){
                updateAdditional = await $fetch(`${this.API_URL}/biodata-detail/update?id=${getAdditional?.data?.id}`, {
                    method : 'POST',
                    headers: headers,
                    body: additional,
                }) 
            }

            const medsos = useMedsosStore();
            const updateMedsos = await medsos.updateMedsos(this.detail?.profile?.sosmed?.id, ig, x, fb, linkedin, others)
            console.log(updateMedsos)

            this.getFullProfile();

            return updateProfile;
        }
    },
    
})