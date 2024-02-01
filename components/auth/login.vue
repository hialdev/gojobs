<template>
    <div v-if="isOpen === true">
        <div class="bg-black/60 flex items-center justify-center p-5 lg:p-12 min-h-screen fixed top-0 w-full z-[9999] max-h-screen">
            <div class="bg-white p-6 py-9 rounded-3xl w-full max-w-[30em] relative overflow-hidden">
                <div class="cursor-pointer rounded-3xl absolute top-0 end-0" @click="closeLogin">
                    <div class="flex items-center rounded-bl-3xl bg-slate-50 text-slate-200 hover:text-orange-300 justify-center p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.48954 5.63546C7.24073 5.40362 6.91165 5.27741 6.57162 5.28341C6.23159 5.28941 5.90717 5.42715 5.6667 5.66763C5.42623 5.9081 5.28848 6.23252 5.28248 6.57255C5.27648 6.91258 5.4027 7.24166 5.63454 7.49046L12.1445 14.0005L5.63454 20.5105C5.50558 20.6306 5.40216 20.7755 5.33042 20.9365C5.25868 21.0975 5.22011 21.2713 5.217 21.4476C5.21389 21.6238 5.24631 21.7988 5.31232 21.9623C5.37833 22.1257 5.47659 22.2741 5.60122 22.3988C5.72585 22.5234 5.87431 22.6217 6.03774 22.6877C6.20117 22.7537 6.37622 22.7861 6.55245 22.783C6.72868 22.7799 6.90248 22.7413 7.06348 22.6696C7.22448 22.5978 7.36938 22.4944 7.48954 22.3655L13.9995 15.8555L20.5095 22.3655C20.6297 22.4944 20.7746 22.5978 20.9356 22.6696C21.0966 22.7413 21.2704 22.7799 21.4466 22.783C21.6229 22.7861 21.7979 22.7537 21.9613 22.6877C22.1248 22.6217 22.2732 22.5234 22.3979 22.3988C22.5225 22.2741 22.6207 22.1257 22.6867 21.9623C22.7528 21.7988 22.7852 21.6238 22.7821 21.4476C22.779 21.2713 22.7404 21.0975 22.6687 20.9365C22.5969 20.7755 22.4935 20.6306 22.3645 20.5105L15.8545 14.0005L22.3645 7.49046C22.5964 7.24166 22.7226 6.91258 22.7166 6.57255C22.7106 6.23252 22.5728 5.9081 22.3324 5.66763C22.0919 5.42715 21.7675 5.28941 21.4274 5.28341C21.0874 5.27741 20.7583 5.40362 20.5095 5.63546L13.9995 12.1455L7.48954 5.63546Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <div class="text-center mb-6">
                    <h3 class="text-3xl mb-2 uppercase font-medium text-primary">LOGIN</h3>
                    <p class="text-slate-500 text-sm">Masuk ke akun gojobs Anda untuk melanjutkan</p>
                </div>
                <input v-model="loginForm.username" @input="error = null;" type="text" class="p-3 px-4 rounded-xl border-2 mb-3 block w-full focus:outline-primary text-slate-900" placeholder="username">
                <div class="flex items-center gap-2 border-2 hover:border-2 p-3 px-4 rounded-xl hover:border-primary mb-3">
                    <input v-model="loginForm.password" @input="error = null;" :type="isShowPwd ? 'text' : 'password'" class="text-slate-900 w-full block focus:outline-0" placeholder="password">
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
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" name="" class="">
                        <span class="text-slate-500 text-sm">ingat saya</span>
                    </div>
                    <NuxtLink to="/auth/lupa-sandi" class="text-blue-600 underline text-sm">Lupa Sandi</NuxtLink>
                </div>
                <div v-if="error" class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-2xl bg-yellow-50" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Warning!</span> {{error.message}}
                    </div>
                </div>
                <div class="flex justify-center">
                    <PartialsButton @click="loginHandle" class="px-6 min-w-[15em] block text-center">Login</PartialsButton>
                </div>
                <div class="flex items-center gap-3 text-slate-500 my-6 text-sm">
                    <hr class="w-full" />
                    <span>atau</span>
                    <hr class="w-full" />
                </div>
                <button class="flex items-center gap-4 bg-blue-500 p-2 pe-5 max-w-[16em] mx-auto rounded-3xl">
                    <div class="bg-white flex items-center p-1 justify-center w-[30px] rounded-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M18.1711 8.36727H17.4998V8.33268H9.99984V11.666H14.7094C14.0223 13.6064 12.1761 14.9993 9.99984 14.9993C7.23859 14.9993 4.99984 12.7606 4.99984 9.99935C4.99984 7.2381 7.23859 4.99935 9.99984 4.99935C11.2744 4.99935 12.434 5.48018 13.3169 6.2656L15.674 3.90852C14.1857 2.52143 12.1948 1.66602 9.99984 1.66602C5.39775 1.66602 1.6665 5.39727 1.6665 9.99935C1.6665 14.6014 5.39775 18.3327 9.99984 18.3327C14.6019 18.3327 18.3332 14.6014 18.3332 9.99935C18.3332 9.4406 18.2757 8.89518 18.1711 8.36727Z" fill="#FFC107"/>
                            <path d="M2.62744 6.1206L5.36536 8.12852C6.10619 6.29435 7.90036 4.99935 9.99994 4.99935C11.2745 4.99935 12.4341 5.48018 13.317 6.2656L15.6741 3.90852C14.1858 2.52143 12.1949 1.66602 9.99994 1.66602C6.79911 1.66602 4.02327 3.4731 2.62744 6.1206Z" fill="#FF3D00"/>
                            <path d="M9.9998 18.3336C12.1523 18.3336 14.1081 17.5099 15.5869 16.1703L13.0077 13.9878C12.1429 14.6454 11.0862 15.0011 9.9998 15.0003C7.8323 15.0003 5.99189 13.6182 5.29855 11.6895L2.58105 13.7832C3.96022 16.482 6.76105 18.3336 9.9998 18.3336Z" fill="#4CAF50"/>
                            <path d="M18.1712 8.36857H17.5V8.33398H10V11.6673H14.7096C14.3809 12.5908 13.7889 13.3978 13.0067 13.9886L13.0079 13.9877L15.5871 16.1702C15.4046 16.3361 18.3333 14.1673 18.3333 10.0007C18.3333 9.4419 18.2758 8.89648 18.1712 8.36857Z" fill="#1976D2"/>
                        </svg>
                    </div>
                    <span class="text-white text-sm md:text-normal">Masuk dengan Google</span>
                </button>
                <div class="text-center text-sm md:text-normal text-gray-800 mt-6">
                    Belum mempunyai akun gojobs? <NuxtLink to="/auth/daftar" class="text-primary underline">Daftar</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const store = useUserStore();
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})
const error = ref(null)
const loginForm = ref({
    username : '',
    password : '',
})
const isShowPwd = ref(false);
const emit = defineEmits(['close']);
const closeLogin = () => {
    emit('close')
}
const showPassword = () => {
    isShowPwd.value = true
}
const hidePassword = () => {
    isShowPwd.value = false
}
const loginHandle = async () => {
    const login = await store.login(loginForm.value.username, loginForm.value.password);
    console.log(login);
    if(login?.success){
        const profile = await store.getProfile();
        if(profile?.verify_status == 1){
            localStorage.setItem('profile',JSON.stringify(profile));
            setTimeout(() => {
                navigateTo('/seeker/dashboard');
            }, 1000);
        }else{
            setTimeout(() => {
                navigateTo('/auth/verifikasi');
            }, 1000);
        }
    }else{
        error.value = login;
    }
}
</script>