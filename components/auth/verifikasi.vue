<template>
    <div class="bg-white p-6 py-12 rounded-3xl w-full max-w-[30em] relative overflow-hidden my-2">
        <div class="text-center mb-6">
            <h3 class="text-3xl mb-2 uppercase font-medium text-primary">Konfirmasi Kode</h3>
            <p class="text-slate-500 text-sm">Isi dengan kode token yang telah dikirimkan ke : <strong>********@gm***.com</strong></p>
        </div>
        <div class="grid grid-cols-12 gap-8 mb-7">
            <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="no-arrow block text-center col-span-3 p-4 text-4xl border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="no-arrow block text-center col-span-3 p-4 text-4xl border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="no-arrow block text-center col-span-3 p-4 text-4xl border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
            <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');"  class="no-arrow block text-center col-span-3 p-4 text-4xl border-b-2 focus:outline-0 focus:border-b-2 focus:border-b-primary" />
        </div>
        <div class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-2xl bg-yellow-50" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
            </div>
        </div>
        <div class="flex justify-center">
            <PartialsButton @click="verifHandle" class="px-6 min-w-[15em] text-center">Verifikasi</PartialsButton>
        </div>
        <div class="text-center text-sm md:text-normal text-gray-800 mt-6">
            Kirim ulang kode <span class="cursor-pointer text-primary underline">Kirim</span>
        </div>

        <div v-if="verifSuccess">
            <ModalAuthSuccess :title="`Berhasil Verifikasi`" :message="`Berhasil mendaftarkan akun, Mulai mencari kerjaan impian anda!`" />
        </div>
    </div>
</template>

<script setup>
let verifSuccess = ref(false);

const verifHandle = () => {
    verifSuccess.value = true;
}

watch(verifSuccess, (newValue) => {
    if (newValue) {
        setTimeout(() => {
            useRouter().push(`/personalization`);
        }, 3000);
    }
});
</script>