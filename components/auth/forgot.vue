<template>
    <div class="bg-white p-6 py-9 rounded-3xl w-full max-w-[30em] relative overflow-hidden my-2 shadow-xl">
        <div class="text-center mb-6">
            <h3 class="text-3xl mb-2 uppercase font-medium text-primary">Lupa Password</h3>
            <p class="text-slate-500 text-sm">Jangan khawatir! Masukkan email Anda di bawah ini dan kami akan membantu Anda mengatur ulang password Anda.</p>
        </div>
        <input v-model="email" type="email" class="p-3 px-4 mb-4 rounded-xl border-2 block w-full focus:outline-primary" placeholder="Email akun">
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
            <PartialsButton @click="resetHandle" class="px-6 min-w-[15em] text-center">Reset Password</PartialsButton>
        </div>
        <div class="text-center text-sm md:text-normal text-gray-800 mt-6">
            Mulai mengingat kembali? <NuxtLink to="/auth/login" class="text-primary underline">Masuk</NuxtLink>
        </div>

        <ModalAuthSuccess v-if="forgot" :title="`Berhasil Mengirim Kode Reset`" :message="`Kode reset telah terkirim ke ${email}, Silahkan cek email anda (termasuk di folder spam)`" />

    </div>
</template>

<script setup>
const user = useUserStore();
const email = ref('');
const forgot = ref(null);
const error = ref(null);

const resetHandle = async () => {
    const reset = await user.forgotPassword(email.value);
    console.log(reset);
    if(reset.success){
        forgot.value = reset;
        setTimeout(() => {
            navigateTo(`/auth/verifikasi?forgot=true&email=${email.value}`);
        }, 2000);
    }else{
        error.value = reset;
    }
}
</script>