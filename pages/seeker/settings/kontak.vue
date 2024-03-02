<template>
    <div>
        <div class="bg-white p-6 rounded-xl">
            <div class="py-3 border-b">
                <h3 class="font-medium">Edit No Handphone</h3>
            </div>
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-6 py-6">
                    <PartialsInput :typeInput="`number`" v-model="dataStore.phone" :modelValue="dataStore.phone" :inputClass="`border rounded-xl`" :placeholder="`Nomor Telepon`" />
                    <PartialsInput :typeInput="`password`" :inputClass="`border rounded-xl`" :placeholder="`Konfirmasi Kata sandi baru`" />
                    <PartialsButton class="min-w-[10em] px-8">Perbarui Nomor</PartialsButton>
                </div>
                <div class="col-span-12 md:col-span-6 py-6">
                    <div class="bg-emerald-50 flex items-start gap-3 p-5 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></g></svg>
                        <span class="text-sm">
                            Setelah memperbaharui nomor, anda akan diminta verifikasi melalui whatsapp
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'seeker-setting',
})

const dataStore = ref({
    phone : null,
})

onMounted(() => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    dataStore.value.phone = profile?.mobile;
    console.log(dataStore.value);
})
</script>