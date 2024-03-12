<template>
    <div class="bg-white p-6 py-12 rounded-3xl w-full max-w-[30em] relative overflow-hidden my-2">
        <div class="text-center mb-6">
            <h3 class="text-3xl mb-2 uppercase font-medium text-primary">{{route?.query?.forgot == 'true' ? 'Konfirmasi Kode Reset' : 'Konfirmasi Kode'}}</h3>
            <p class="text-slate-500 text-sm">Isi dengan kode token yang telah dikirimkan ke : <strong>{{profile?.email ?? route?.query?.email}}</strong></p>
        </div>
        <div class="grid grid-cols-12 gap-3 px-7 mb-7">
            <input ref="input1" v-model="token.satu" @input="onInput(1)" type="text" maxlength="1"  class="no-arrow block text-center col-span-2 text-2xl text-slate-600 border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input ref="input2" v-model="token.dua" @input="onInput(2)" type="text" maxlength="1"  class="no-arrow block text-center col-span-2 text-2xl text-slate-600 border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input ref="input3" v-model="token.tiga" @input="onInput(3)" type="text" maxlength="1"  class="no-arrow block text-center col-span-2 text-2xl text-slate-600 border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input ref="input4" v-model="token.empat" @input="onInput(4)" type="text" maxlength="1"  class="no-arrow block text-center col-span-2 text-2xl text-slate-600 border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input ref="input5" v-model="token.lima" @input="onInput(5)" type="text" maxlength="1"  class="no-arrow block text-center col-span-2 text-2xl text-slate-600 border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input ref="input6" v-model="token.enam" @input="onInput(6)" type="text" maxlength="1"  class="no-arrow block text-center col-span-2 text-2xl text-slate-600 border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
        </div>
        <div v-if="error" class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-2xl bg-yellow-50" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Ooops!</span> {{error?.message}}
            </div>
        </div>
        <div v-if="!route?.query?.forgot" class="flex justify-center">
            <PartialsButton @click="verifHandle" class="px-6 min-w-[15em] text-center">Verifikasi</PartialsButton>
        </div>
        <div v-if="route?.query?.forgot" class="flex justify-center">
            <PartialsButton @click="resetHandle" class="px-6 min-w-[15em] text-center">Verifikasi Reset Password</PartialsButton>
        </div>
        <div class="text-center text-sm md:text-normal text-gray-800 mt-6">
            Kirim ulang kode <span v-if="!route?.query?.forgot" @click="resendCode" class="cursor-pointer text-primary underline">Kirim</span><span v-if="route?.query?.forgot" @click="resendResetCode" class="cursor-pointer text-primary underline">Kirim Ulang Kode Reset</span>
        </div>

        <div v-if="verifSuccess">
            <ModalAuthSuccess :title="`Berhasil Verifikasi`" :message="`Berhasil mendaftarkan akun, Mulai mencari kerjaan impian anda!`" />
        </div>
        <div v-if="resend">
            <ModalAuthSuccess :title="`Berhasil Mengirim Kode Terbaru`" :message="`Kode telah terkirim ke ${profile?.email}, Silahkan cek email anda (termasuk di folder spam)`" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';
const route = useRoute();

const user = useUserStore();
const resend = ref(null);
const profile = ref(null);
const error = ref(null);
const token = ref({
    satu : '',
    dua : '',
    tiga : '',
    empat : '',
    lima : '',
    enam : '',
})

const inputs = [
    'input1',
    'input2',
    'input3',
    'input4',
    'input5',
    'input6',
];
const toast = useToast();
const instance = getCurrentInstance();
const onInput = (index) => {
    const numtostring = {
        1 : 'satu',
        2 : 'dua',
        3 : 'tiga',
        4 : 'empat',
        5 : 'lima',
        6 : 'enam',
    }
    if (token.value[numtostring[index]] != '') {
        instance.refs[inputs[index]].focus();
    }else{
        instance.refs[inputs[index - 2]].focus();
    }
}

let verifSuccess = ref(false);
const resendCode = async () => {
    const getResend = await user.resendCode();
    if(getResend.success){
        resend.value = getResend;
        setTimeout(() => {
            resend.value = null;
        }, 3000);
    }else{
        error.value = getResend;
    }
}
const resendResetCode = async () => {
    const getResend = await user.forgotPassword(route?.query?.email);
    if(getResend.success){
        resend.value = getResend;
        setTimeout(() => {
            resend.value = null;
        }, 3000);
    }else{
        error.value = getResend;
    }
}

const resetHandle = () => {
    navigateTo(`/auth/ubah-sandi`)
}

const verifHandle = async () => {
    const fulltoken = token.value.satu+token.value.dua+token.value.tiga+token.value.empat+token.value.lima+token.value.enam;
    const verif = await user.verify(fulltoken);
    if(verif.success){
        const profile = await user.getProfile();
        localStorage.setItem('profile',JSON.stringify(profile));
        toast.success('Profile diterapkan');
        verifSuccess.value = true;
    }else{
        error.value = verif;
    }
}
onMounted(async () => {
    const fetch = await user.getProfile();
    profile.value = fetch;
    console.log(profile.value);
}),
watch(verifSuccess, (newValue) => {
    if (newValue) {
        setTimeout(() => {
            useRouter().push(`/seeker/profile/create`);
        }, 3000);
    }
});
</script>