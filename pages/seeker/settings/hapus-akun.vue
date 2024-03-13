<template>
    <div>
        <div class="bg-white p-6 rounded-xl">
            <div class="py-3 border-b">
                <h3 class="font-medium">Hapus Akun</h3>
            </div>
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 text-sm pt-6">
                    Hapus akun dan semua informasi Anda yang telah tersimpan. Hal ini tidak dapat dibatalkan.
                </div>
                <div class="col-span-12 md:col-span-6">
                    <PartialsInput v-model="password" :modelValue="password" :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Kata Sandi`" />
                    <PartialsButton @click="hapusClicked" class="min-w-[10em] px-8" :primary="buttonize">Hapus Akun</PartialsButton>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="bg-red-50 flex items-start gap-3 p-5 rounded-lg">
                        <svg class="text-red-800" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/><path stroke-linecap="round" d="m33 31l8 8m-8 0l8-8m-14-3h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21"/></g></svg>
                        <span class="text-xs text-red-800">
                            Menghapus akun akan membuat akun anda nonaktif, anda bisa menghidupkan kembali akun anda setelah 30 hari kemudian.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="pressed" class="relative z-[99]">
            <ModalHapusAkun :title="`Anda yakin ingin menghapus akun?`" :message="`Menghapus akun akan membuat akun anda nonaktif, anda bisa menghidupkan kembali akun anda setelah 30 hari kemudian.`" 
                @hapus="hapusHandle"
                @cancel="cancelHandle"
            />
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';

definePageMeta({
    layout:'seeker-setting',
})

const toast = useToast();
const password = ref(null);
let pressed = ref(false)

const hapusClicked = ()=>{
    if(password.value.length > 3){
        pressed.value = true;
    }
}

const cancelHandle = ()=>{
    pressed.value = false;
    console.log('Cancel button clicked, Now :'+pressed.value);
}

const hapusHandle = async ()=>{
    const deactive = await user.deactive(password.value);
    if(deactive.success){
        toast.success('Akun anda berhasil di nonaktifkan');
        pressed.value = false;
        const logout = await user.logout();
        if(logout.success){
            navigateTo('/');
        }else{
            toast.error(logout.message);
        }
    }else{
        toast.error(deactive.message);
    }
}
</script>