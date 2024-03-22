<template>
    <div class="bg-white p-6 py-9 rounded-3xl w-full max-w-[50em] relative overflow-hidden my-2">
        <div class="text-center mb-6">
            <h3 class="text-3xl mb-2 capitalize font-medium text-primary">Daftar</h3>
            <p class="text-slate-500 text-sm">Daftar GRATIS dan dapatkan pekerjaan yang sesuai dengan mudah kemudian lamar.</p>
        </div>
        <div class="grid grid-cols-12 gap-3">
            <input @input="applyFilters" v-model="registForm.name" type="text" class="col-span-12 md:col-span-6 p-3 px-4 rounded-xl border-2 block w-full focus:outline-primary" placeholder="Name">
            <input @input="()=>{applyFilters; registForm.username = registForm.username.replace(/[^a-z0-9]/g, '')}" v-model="registForm.username" type="text" class="col-span-12 md:col-span-6 p-3 px-4 rounded-xl border-2 block w-full focus:outline-primary" placeholder="Username">
            <input @input="applyFilters" v-model="registForm.email" type="email" class="col-span-12 md:col-span-6 p-3 px-4 rounded-xl border-2 block w-full focus:outline-primary" placeholder="Email">
            <input @input="applyFilters" v-model="registForm.mobile" oninput="this.value=this.value.replace(/[^0-9]/g,'');" type="text" class="col-span-12 md:col-span-6 p-3 px-4 rounded-xl border-2 block w-full focus:outline-primary" placeholder="No. Handphone">
            <div class="col-span-12 md:col-span-6 flex items-center gap-2 border-2 hover:border-2 p-3 px-4 rounded-xl hover:border-primary mb-3">
                <input @input="applyFilters" v-model="registForm.password" :type="isShowPwd ? 'text' : 'password'" class="w-full block focus:outline-0" placeholder="Password">
                <div v-if="isShowPwd" @click="hidePassword" class="w-[20px] cursor-pointer text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.34" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                </div>
                <div v-else @click="showPassword" class="w-[20px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.92187 12.1867C10.502 12.1867 11.0584 11.9563 11.4687 11.546C11.8789 11.1358 12.1094 10.5794 12.1094 9.99924C12.1094 9.93518 12.1064 9.87171 12.101 9.80901L9.73163 12.1783C9.79433 12.1838 9.85761 12.1867 9.92187 12.1867ZM17.1625 3.23284L16.3281 2.39924C16.2988 2.36996 16.2591 2.35352 16.2177 2.35352C16.1762 2.35352 16.1365 2.36996 16.1072 2.39924L13.9721 4.53499C12.7942 3.93303 11.4702 3.63206 9.99999 3.63206C6.24608 3.63206 3.4453 5.58713 1.59765 9.49729C1.52338 9.65455 1.48486 9.82631 1.48486 10.0002C1.48486 10.1741 1.52338 10.3459 1.59765 10.5031C2.33593 12.0582 3.22493 13.3046 4.26464 14.2424L2.19843 16.3078C2.16915 16.3371 2.1527 16.3769 2.1527 16.4183C2.1527 16.4597 2.16915 16.4994 2.19843 16.5287L3.03222 17.3625C3.06152 17.3918 3.10124 17.4083 3.14267 17.4083C3.18409 17.4083 3.22382 17.3918 3.25312 17.3625L17.1625 3.45393C17.177 3.43942 17.1885 3.42219 17.1964 3.40322C17.2043 3.38425 17.2083 3.36392 17.2083 3.34338C17.2083 3.32285 17.2043 3.30252 17.1964 3.28355C17.1885 3.26458 17.177 3.24735 17.1625 3.23284ZM6.48437 9.99924C6.48431 9.40551 6.63805 8.82188 6.93059 8.30521C7.22314 7.78855 7.64452 7.35646 8.15369 7.05106C8.66286 6.74565 9.24245 6.57733 9.836 6.5625C10.4296 6.54767 11.0168 6.68683 11.5406 6.96643L10.591 7.91604C10.208 7.79341 9.79869 7.77865 9.40788 7.87336C9.01707 7.96807 8.6599 8.16859 8.37556 8.45294C8.09121 8.73728 7.89069 9.09445 7.79598 9.48526C7.70127 9.87607 7.71604 10.2854 7.83866 10.6684L6.88905 11.618C6.62257 11.1201 6.48353 10.564 6.48437 9.99924Z" fill="#FA6900"/>
                        <path d="M18.4025 9.49707C17.715 8.04915 16.8967 6.86849 15.9477 5.95508L13.1324 8.77051C13.3697 9.39085 13.4223 10.0666 13.2839 10.7162C13.1454 11.3658 12.8218 11.9614 12.3522 12.4311C11.8825 12.9007 11.2869 13.2243 10.6373 13.3628C9.98773 13.5012 9.31194 13.4486 8.6916 13.2113L6.30371 15.5992C7.41152 16.1118 8.64369 16.3682 10.0002 16.3682C13.7541 16.3682 16.5549 14.4131 18.4025 10.5029C18.4768 10.3457 18.5153 10.1739 18.5153 10C18.5153 9.82608 18.4768 9.65433 18.4025 9.49707Z" fill="#FA6900"/>
                    </svg>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 flex items-center gap-2 border-2 hover:border-2 p-3 px-4 rounded-xl hover:border-primary mb-3">
                <input @input="applyFilters" v-model="registForm.confirm_password" :type="isShowPwd ? 'text' : 'password'" class="w-full block focus:outline-0" placeholder="Konfirmasi Password">
                <div v-if="isShowPwd" @click="hidePassword" class="w-[20px] cursor-pointer text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.34" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                </div>
                <div v-else @click="showPassword" class="w-[20px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.92187 12.1867C10.502 12.1867 11.0584 11.9563 11.4687 11.546C11.8789 11.1358 12.1094 10.5794 12.1094 9.99924C12.1094 9.93518 12.1064 9.87171 12.101 9.80901L9.73163 12.1783C9.79433 12.1838 9.85761 12.1867 9.92187 12.1867ZM17.1625 3.23284L16.3281 2.39924C16.2988 2.36996 16.2591 2.35352 16.2177 2.35352C16.1762 2.35352 16.1365 2.36996 16.1072 2.39924L13.9721 4.53499C12.7942 3.93303 11.4702 3.63206 9.99999 3.63206C6.24608 3.63206 3.4453 5.58713 1.59765 9.49729C1.52338 9.65455 1.48486 9.82631 1.48486 10.0002C1.48486 10.1741 1.52338 10.3459 1.59765 10.5031C2.33593 12.0582 3.22493 13.3046 4.26464 14.2424L2.19843 16.3078C2.16915 16.3371 2.1527 16.3769 2.1527 16.4183C2.1527 16.4597 2.16915 16.4994 2.19843 16.5287L3.03222 17.3625C3.06152 17.3918 3.10124 17.4083 3.14267 17.4083C3.18409 17.4083 3.22382 17.3918 3.25312 17.3625L17.1625 3.45393C17.177 3.43942 17.1885 3.42219 17.1964 3.40322C17.2043 3.38425 17.2083 3.36392 17.2083 3.34338C17.2083 3.32285 17.2043 3.30252 17.1964 3.28355C17.1885 3.26458 17.177 3.24735 17.1625 3.23284ZM6.48437 9.99924C6.48431 9.40551 6.63805 8.82188 6.93059 8.30521C7.22314 7.78855 7.64452 7.35646 8.15369 7.05106C8.66286 6.74565 9.24245 6.57733 9.836 6.5625C10.4296 6.54767 11.0168 6.68683 11.5406 6.96643L10.591 7.91604C10.208 7.79341 9.79869 7.77865 9.40788 7.87336C9.01707 7.96807 8.6599 8.16859 8.37556 8.45294C8.09121 8.73728 7.89069 9.09445 7.79598 9.48526C7.70127 9.87607 7.71604 10.2854 7.83866 10.6684L6.88905 11.618C6.62257 11.1201 6.48353 10.564 6.48437 9.99924Z" fill="#FA6900"/>
                        <path d="M18.4025 9.49707C17.715 8.04915 16.8967 6.86849 15.9477 5.95508L13.1324 8.77051C13.3697 9.39085 13.4223 10.0666 13.2839 10.7162C13.1454 11.3658 12.8218 11.9614 12.3522 12.4311C11.8825 12.9007 11.2869 13.2243 10.6373 13.3628C9.98773 13.5012 9.31194 13.4486 8.6916 13.2113L6.30371 15.5992C7.41152 16.1118 8.64369 16.3682 10.0002 16.3682C13.7541 16.3682 16.5549 14.4131 18.4025 10.5029C18.4768 10.3457 18.5153 10.1739 18.5153 10C18.5153 9.82608 18.4768 9.65433 18.4025 9.49707Z" fill="#FA6900"/>
                    </svg>
                </div>
            </div>
            <div class="col-span-12 mb-4">
                <div class="text-xs text-slate-500"><span class="text-rose-600">*</span>password harus berisi kombinasi huruf kapital, huruf kecil, dan angka</div>
            </div>
        </div>
        <!-- <PartialsSelect @selected="" class="border-2 rounded-xl mb-4" :options="sources" :label="`Dari mana kamu mengetahui kami ?`" /> -->
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-start gap-2">
                <input @change="applyFilters" v-model="registForm.agree" type="checkbox" class="mt-1">
                <div class="text-slate-500 text-sm">Saya setuju terhadap <NuxtLink to="" class="text-primary underline">Aturan Penggunaan</NuxtLink> dan <NuxtLink to="" class="text-primary underline">Kebijakan Privasi</NuxtLink> dari gojobs</div>
            </div>
        </div>
        <div v-if="error" class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-2xl bg-yellow-50" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Ooopss!</span> {{error?.message}}
            </div>
        </div>
        <div class="flex justify-center">
            <PartialsButton @click="registHandle" class="text-center px-6 min-w-[15em]">Daftar</PartialsButton>
        </div>
        <div class="flex items-center gap-3 text-slate-500 my-6 text-sm">
            <hr class="w-full" />
            <span>atau</span>
            <hr class="w-full" />
        </div>
        <!-- <button class="flex items-center gap-4 bg-blue-500 p-2 pe-5 max-w-[16em] mx-auto rounded-3xl">
            <div class="bg-white flex items-center p-1 justify-center w-[30px] rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                    <path d="M18.1711 8.36727H17.4998V8.33268H9.99984V11.666H14.7094C14.0223 13.6064 12.1761 14.9993 9.99984 14.9993C7.23859 14.9993 4.99984 12.7606 4.99984 9.99935C4.99984 7.2381 7.23859 4.99935 9.99984 4.99935C11.2744 4.99935 12.434 5.48018 13.3169 6.2656L15.674 3.90852C14.1857 2.52143 12.1948 1.66602 9.99984 1.66602C5.39775 1.66602 1.6665 5.39727 1.6665 9.99935C1.6665 14.6014 5.39775 18.3327 9.99984 18.3327C14.6019 18.3327 18.3332 14.6014 18.3332 9.99935C18.3332 9.4406 18.2757 8.89518 18.1711 8.36727Z" fill="#FFC107"/>
                    <path d="M2.62744 6.1206L5.36536 8.12852C6.10619 6.29435 7.90036 4.99935 9.99994 4.99935C11.2745 4.99935 12.4341 5.48018 13.317 6.2656L15.6741 3.90852C14.1858 2.52143 12.1949 1.66602 9.99994 1.66602C6.79911 1.66602 4.02327 3.4731 2.62744 6.1206Z" fill="#FF3D00"/>
                    <path d="M9.9998 18.3336C12.1523 18.3336 14.1081 17.5099 15.5869 16.1703L13.0077 13.9878C12.1429 14.6454 11.0862 15.0011 9.9998 15.0003C7.8323 15.0003 5.99189 13.6182 5.29855 11.6895L2.58105 13.7832C3.96022 16.482 6.76105 18.3336 9.9998 18.3336Z" fill="#4CAF50"/>
                    <path d="M18.1712 8.36857H17.5V8.33398H10V11.6673H14.7096C14.3809 12.5908 13.7889 13.3978 13.0067 13.9886L13.0079 13.9877L15.5871 16.1702C15.4046 16.3361 18.3333 14.1673 18.3333 10.0007C18.3333 9.4419 18.2758 8.89648 18.1712 8.36857Z" fill="#1976D2"/>
                </svg>
            </div>
            <span class="text-white text-sm md:text-normal">Daftar dengan Google</span>
        </button> -->
        <div class="text-center text-sm md:text-normal text-gray-800 mt-6">
            Sudah mempunyai akun gojobs? <NuxtLink to="/" class="text-primary underline">Kembali dan Login</NuxtLink>
        </div>

        <!-- Modal Data CV -->
        <div v-if="confirm_datacv" class="bg-black/30 fixed top-0 bottom-0 start-0 end-0 flex items-center justify-center">
            <div class="bg-white p-5 rounded-xl m-5 w-full max-w-[30em]">
                <h4 class="text-primary text-lg">Gunakan Data CV ?</h4>
                <p class="mb-4 text-sm text-slate-500">Data CV terdeteksi, gunakan data dari CV Gratis untuk mengisi formulir ?</p>
                <div class="flex gap-x-3 items-center justify-end">
                    <button @click="confirm_datacv = false" class="p-2 px-3 rounded-lg text-sm bg-slate-100 text-slate-600">Batal</button>
                    <button @click="useDataCv" class="p-2 px-3 rounded-lg text-sm bg-primary text-white">Gunakan Data</button>
                </div>
            </div>
        </div>
        <ModalAuthSuccess v-if="successRegister" :title="`Berhasil Daftar`" :message="`Kami telah mengirimkan kode verifikasi ke ${registForm.email}, Silahkan periksa email anda (termasuk folder spam)`"/>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})
const confirm_datacv = ref(false);
const data_cv = ref(null);
const successRegister = ref(false);
const store = useUserStore()
const registForm = ref({
            name : '',
            username : '',
            email : '',
            mobile : '',
            password : '',
            confirm_password : '',
            agree : false,
        });
const sources = [
                { key: 'teman', value: 'Dari teman' },
                { key: 'internet', value: 'Melalui internet' },
                { key: 'iklan', value: 'Melalui iklan' },
                { key: 'media-sosial', value: 'Melalui media sosial' },
                { key: 'acara', value: 'Melalui acara atau seminar' },
                { key: 'pencarian', value: 'Melalui mesin pencari' },
                { key: 'email', value: 'Melalui email' },
                { key: 'koran', value: 'Melalui koran' },
                { key: 'radio', value: 'Melalui radio' },
                { key: 'televisi', value: 'Melalui televisi' },
                { key: 'komunitas', value: 'Dari komunitas' },
                { key: 'lainnya', value: 'Lainnya' },
            ]
const isShowPwd = ref(false);
const showPassword = () => {
    isShowPwd.value = true
};
const hidePassword = () => {
    isShowPwd.value = false
};
const error = ref(null);

onMounted(() => {
    data_cv.value = JSON.parse(localStorage.getItem('data_buat_cv'));
    if(data_cv.value != null){
        confirm_datacv.value = true;
    }
})

const useDataCv = () => {
    if(data_cv.value != null){
        registForm.value.name = data_cv.value.profile?.name;
        registForm.value.email = data_cv.value.profile?.email;
        registForm.value.mobile = data_cv.value.profile?.phone;
    }
    confirm_datacv.value = false;
}

const registHandle = async () => {
    console.log(registForm.value);
    console.log(store.registForm);

    const regist = await store.register();
    console.log(regist);

    if (regist.success) {
        successRegister.value = true;
        const autoLogin = await store.login(registForm.value.username, registForm.value.password);
        console.log(autoLogin);

        if (autoLogin.success) {
            setTimeout(() => {
                navigateTo('/auth/verifikasi');
                successRegister.value = false;
            }, 2000);
        }
    }else{
        error.value = regist;
    }
}
const applyFilters = () => {
    store.setRegist('name',registForm.value.name);
    store.setRegist('username',registForm.value.username);
    store.setRegist('email',registForm.value.email);
    store.setRegist('mobile',registForm.value.mobile);
    store.setRegist('password',registForm.value.password);
    store.setRegist('confirm_password',registForm.value.confirm_password);
    store.setRegist('agree',registForm.value.agree);
}
</script>