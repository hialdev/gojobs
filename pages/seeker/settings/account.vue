<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady" class="grid grid-cols-12 gap-x-4 ">
        <div class="col-span-12">
            <div class="bg-white p-6 rounded-xl mb-6">
                <div class="py-3 border-b">
                    <h3 class="font-medium">Perbarui Akun</h3>
                </div>
                <div v-if="error.account" class="flex items-center p-4 mt-4 text-sm text-yellow-800 border border-yellow-300 rounded-2xl bg-yellow-50" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Ooopsss!</span> {{error.account}}
                    </div>
                </div>
                <div class="grid grid-cols-12">
                    <div class="col-span-12 md:col-span-6 py-6">
                        <div class="mb-2">
                            <div class="text-xs text-slate-500 mb-2">Email</div>
                            {{profile?.email}}
                        </div>
                        <div class="mb-2">
                            <div class="text-xs text-slate-500 mb-2">No. HP</div>
                            {{profile?.profile?.phone}}
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 py-6">
                        <PartialsInput v-model="dataStore.new_email" :modelValue="dataStore?.new_email" class="m-0" :inputClass="`border rounded-xl`" :placeholder="`Masukan Email Baru`" />
                        <PartialsInput :typeInput="`number`" v-model="dataStore.new_phone" :modelValue="dataStore?.new_phone" :inputClass="`border rounded-xl`" :placeholder="`Nomor Telepon / Whatsapp baru`" />
                        <div v-if="in_change" class="p-4 rounded-xl bg-orange-50 mb-3 text-orange-700">
                            <div class="text-sm text-orange-600 mb-2">Verifikasi Password</div>
                            <PartialsInput v-model="dataStore.password" :modelValue="dataStore.password" :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Kata sandi`" />
                            <PartialsInput v-model="dataStore.cpassword" :modelValue="dataStore.cpassword" :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Konfirmasi Kata sandi`" />
                            <button @click="() => {in_change = false}" class="p-2 px-3 bg-orange-200 text-orange-600 rounded-xl text-sm">Batal</button>
                        </div>
                        <PartialsButton @click="changeData" :primary="in_change">Perbarui</PartialsButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="bg-white p-6 rounded-xl">
                <div class="py-3 border-b">
                    <h3 class="font-medium">Ganti Kata Sandi</h3>
                </div>
                <div v-if="error.changePwd" class="flex items-center p-4 mt-4 text-sm text-yellow-800 border border-yellow-300 rounded-2xl bg-yellow-50" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Ooopsss!</span> {{error.changePwd}}
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 md:col-span-6 py-6">
                        <div class="flex items-center gap-2 border-2 hover:border-2 p-3 px-4 rounded-xl hover:border-primary mb-3">
                            <input v-model="dataStore.new_password" :type="isShowPwd ? 'text' : 'password'" class="w-full text-sm block focus:outline-0" placeholder="password">
                            <div v-if="isShowPwd" @click="isShowPwd = false" class="w-[20px] cursor-pointer text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.34" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                            </div>
                            <div v-else @click="isShowPwd = true" class="w-[20px] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.92187 12.1867C10.502 12.1867 11.0584 11.9563 11.4687 11.546C11.8789 11.1358 12.1094 10.5794 12.1094 9.99924C12.1094 9.93518 12.1064 9.87171 12.101 9.80901L9.73163 12.1783C9.79433 12.1838 9.85761 12.1867 9.92187 12.1867ZM17.1625 3.23284L16.3281 2.39924C16.2988 2.36996 16.2591 2.35352 16.2177 2.35352C16.1762 2.35352 16.1365 2.36996 16.1072 2.39924L13.9721 4.53499C12.7942 3.93303 11.4702 3.63206 9.99999 3.63206C6.24608 3.63206 3.4453 5.58713 1.59765 9.49729C1.52338 9.65455 1.48486 9.82631 1.48486 10.0002C1.48486 10.1741 1.52338 10.3459 1.59765 10.5031C2.33593 12.0582 3.22493 13.3046 4.26464 14.2424L2.19843 16.3078C2.16915 16.3371 2.1527 16.3769 2.1527 16.4183C2.1527 16.4597 2.16915 16.4994 2.19843 16.5287L3.03222 17.3625C3.06152 17.3918 3.10124 17.4083 3.14267 17.4083C3.18409 17.4083 3.22382 17.3918 3.25312 17.3625L17.1625 3.45393C17.177 3.43942 17.1885 3.42219 17.1964 3.40322C17.2043 3.38425 17.2083 3.36392 17.2083 3.34338C17.2083 3.32285 17.2043 3.30252 17.1964 3.28355C17.1885 3.26458 17.177 3.24735 17.1625 3.23284ZM6.48437 9.99924C6.48431 9.40551 6.63805 8.82188 6.93059 8.30521C7.22314 7.78855 7.64452 7.35646 8.15369 7.05106C8.66286 6.74565 9.24245 6.57733 9.836 6.5625C10.4296 6.54767 11.0168 6.68683 11.5406 6.96643L10.591 7.91604C10.208 7.79341 9.79869 7.77865 9.40788 7.87336C9.01707 7.96807 8.6599 8.16859 8.37556 8.45294C8.09121 8.73728 7.89069 9.09445 7.79598 9.48526C7.70127 9.87607 7.71604 10.2854 7.83866 10.6684L6.88905 11.618C6.62257 11.1201 6.48353 10.564 6.48437 9.99924Z" fill="#FA6900"/>
                                    <path d="M18.4025 9.49707C17.715 8.04915 16.8967 6.86849 15.9477 5.95508L13.1324 8.77051C13.3697 9.39085 13.4223 10.0666 13.2839 10.7162C13.1454 11.3658 12.8218 11.9614 12.3522 12.4311C11.8825 12.9007 11.2869 13.2243 10.6373 13.3628C9.98773 13.5012 9.31194 13.4486 8.6916 13.2113L6.30371 15.5992C7.41152 16.1118 8.64369 16.3682 10.0002 16.3682C13.7541 16.3682 16.5549 14.4131 18.4025 10.5029C18.4768 10.3457 18.5153 10.1739 18.5153 10C18.5153 9.82608 18.4768 9.65433 18.4025 9.49707Z" fill="#FA6900"/>
                                </svg>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 border-2 hover:border-2 p-3 px-4 rounded-xl hover:border-primary mb-3">
                            <input v-model="dataStore.new_cpassword" :type="isShowPwd ? 'text' : 'password'" class="w-full block text-sm focus:outline-0" placeholder="konfirmasi password">
                            <div v-if="isShowPwd" @click="isShowPwd = false" class="w-[20px] cursor-pointer text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.34" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                            </div>
                            <div v-else @click="isShowPwd = true" class="w-[20px] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.92187 12.1867C10.502 12.1867 11.0584 11.9563 11.4687 11.546C11.8789 11.1358 12.1094 10.5794 12.1094 9.99924C12.1094 9.93518 12.1064 9.87171 12.101 9.80901L9.73163 12.1783C9.79433 12.1838 9.85761 12.1867 9.92187 12.1867ZM17.1625 3.23284L16.3281 2.39924C16.2988 2.36996 16.2591 2.35352 16.2177 2.35352C16.1762 2.35352 16.1365 2.36996 16.1072 2.39924L13.9721 4.53499C12.7942 3.93303 11.4702 3.63206 9.99999 3.63206C6.24608 3.63206 3.4453 5.58713 1.59765 9.49729C1.52338 9.65455 1.48486 9.82631 1.48486 10.0002C1.48486 10.1741 1.52338 10.3459 1.59765 10.5031C2.33593 12.0582 3.22493 13.3046 4.26464 14.2424L2.19843 16.3078C2.16915 16.3371 2.1527 16.3769 2.1527 16.4183C2.1527 16.4597 2.16915 16.4994 2.19843 16.5287L3.03222 17.3625C3.06152 17.3918 3.10124 17.4083 3.14267 17.4083C3.18409 17.4083 3.22382 17.3918 3.25312 17.3625L17.1625 3.45393C17.177 3.43942 17.1885 3.42219 17.1964 3.40322C17.2043 3.38425 17.2083 3.36392 17.2083 3.34338C17.2083 3.32285 17.2043 3.30252 17.1964 3.28355C17.1885 3.26458 17.177 3.24735 17.1625 3.23284ZM6.48437 9.99924C6.48431 9.40551 6.63805 8.82188 6.93059 8.30521C7.22314 7.78855 7.64452 7.35646 8.15369 7.05106C8.66286 6.74565 9.24245 6.57733 9.836 6.5625C10.4296 6.54767 11.0168 6.68683 11.5406 6.96643L10.591 7.91604C10.208 7.79341 9.79869 7.77865 9.40788 7.87336C9.01707 7.96807 8.6599 8.16859 8.37556 8.45294C8.09121 8.73728 7.89069 9.09445 7.79598 9.48526C7.70127 9.87607 7.71604 10.2854 7.83866 10.6684L6.88905 11.618C6.62257 11.1201 6.48353 10.564 6.48437 9.99924Z" fill="#FA6900"/>
                                    <path d="M18.4025 9.49707C17.715 8.04915 16.8967 6.86849 15.9477 5.95508L13.1324 8.77051C13.3697 9.39085 13.4223 10.0666 13.2839 10.7162C13.1454 11.3658 12.8218 11.9614 12.3522 12.4311C11.8825 12.9007 11.2869 13.2243 10.6373 13.3628C9.98773 13.5012 9.31194 13.4486 8.6916 13.2113L6.30371 15.5992C7.41152 16.1118 8.64369 16.3682 10.0002 16.3682C13.7541 16.3682 16.5549 14.4131 18.4025 10.5029C18.4768 10.3457 18.5153 10.1739 18.5153 10C18.5153 9.82608 18.4768 9.65433 18.4025 9.49707Z" fill="#FA6900"/>
                                </svg>
                            </div>
                        </div>
                        <PartialsButton @click="handleChangePwd">Perbarui Password</PartialsButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useToast} from 'vue-toastification';

definePageMeta({
    layout:'seeker-setting',
})
const profile = ref(null);
const in_change = ref(false);
const isReady = ref(false);
const toast = useToast();
const userStore = useUserStore();
const isShowPwd = ref(false);

const error = ref({
    account: null,
    changePwd: null,
})
const dataStore = ref({
    new_phone: '',
    new_email: '',
    email: '',
    username: '',
    password: '',
    cpassword: '',
    new_password: '',
    new_cpassword: '',
})

const changeData = async () => {
    if(in_change.value == false){
        if(dataStore.value.new_email != profile.value.email || dataStore.value.new_phone != profile.value.profile.phone){
            in_change.value = true;
        }
    }else{
        const change = await userStore.changeData(
            dataStore.value.username,
            dataStore.value.new_email,
            dataStore.value.new_phone,
            dataStore.value.password,
            dataStore.value.cpassword,
        );

        if(change.success){
            toast.success(change.message);
            in_change.value = false;
        }else{
            error.value.account = change.message;
        }
    }
}

const handleChangePwd = async () => {
    const change = await userStore.changePassword(
        dataStore.value.email,
        dataStore.value.username,
        dataStore.value.new_password,
        dataStore.value.new_cpassword,
    )
    if(change.success){
        toast.success(change.message);
    }else{
        error.value.changePwd = change.message;
    }
}

onMounted(async () => {
    const fetch = await userStore.getProfile();
    profile.value = fetch;  
    dataStore.value.email = profile?.value.email;  
    dataStore.value.username = profile?.value.username;  
    dataStore.value.new_email = profile?.value.email;  
    dataStore.value.new_phone = profile?.value.profile?.phone;  
    isReady.value = true;
})
</script>