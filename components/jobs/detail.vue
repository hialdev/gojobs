<template>
    <div class="bg-white rounded-3xl lg:overflow-hidden lg:max-h-[47em] lg:overflow-y-scroll listjob">
        <div class="grid grid-cols-12 relative">
            <div class="col-span-12 px-5">
                <div class="py-6 px-5">
                    <NuxtImg :src="`${selectedJob?.logo}`" :alt="`logo ${selectedJob?.company}`" class="h-[4em]" />
                    <div>
                        <h2 class="text-lg md:text-xl">{{selectedJob?.title}}</h2>
                        <p class="text-sm md:text-base text-slate-500">{{selectedJob?.company}}</p>
                    </div>
                </div>
                <ul class="text-sm text-slate-600 px-5">
                    <li class="flex items-center gap-3">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#A6A6A6"/>
                            </svg>
                        </div>
                        <span>{{ selectedJob?.location }}</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.25 9H21.75M6 14.0625H8.25V15H6V14.0625Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>{{ selectedJob?.salary }}</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#A6A6A6"/>
                            </svg>
                        </div>
                        <span>{{ selectedJob?.typeJob }}</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M12.0039 6V12.005L16.2434 16.245" stroke="#A6A6A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>{{ selectedJob?.datePosted }}</span>
                    </li>
                </ul>
                <div class="py-6 border-t-2 px-5">
                    <h5 class="font-medium">Deskripsi Pekerjaan</h5>
                    <div class="text-sm md:text-base">
                        <ol class="list-decimal ms-4 text-slate-500">
                            <li class="text-sm">Buat agenda rapat, buat notulensi, dan buat memo.</li>
                            <li class="text-sm">Memelihara dokumentasi digital dan fisik, memperbarui database secara berkala.</li>
                            <li class="text-sm">Memproses faktur, kwitansi, dan dokumentasi akuntansi dasar.</li>
                            <li class="text-sm">Menyiapkan dan memproses faktur dan kuitansi pajak.</li>
                            <li class="text-sm">Membuat laporan harian, mingguan, dan bulanan untuk piutang, PPH, PPN, dll.</li>
                            <li class="text-sm">Menyimpan catatan kehadiran karyawan, cuti, dan informasi terkait SDM secara akurat.</li>
                            <li class="text-sm">Perbarui dan kelola daftar kontak internal dan eksternal.</li>
                            <li class="text-sm">Berkolaborasi dengan departemen lain demi kelancaran operasional.</li>
                            <li class="text-sm">Memberikan dukungan administratif/logistik ke berbagai tim.</li>
                            <li class="text-sm">Melaporkan dan mengeskalasi permasalahan yang kompleks ke saluran yang tepat.</li>
                            <li class="text-sm">Rajin menindaklanjuti pembayaran yang tertunda.</li>
                            <li class="text-sm">Menangani tugas administratif lainnya yang mungkin timbul.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="col-span-12 sticky bottom-0 z-[100]">
                <div class="flex items-center gap-3 bg-white p-5 rounded-3xl">
                    <PartialsButton class="w-full text-center" @click="lamarHandle">Lamar</PartialsButton>
                    <PartialsButton class="bg-transparent border-primary" :primary="false">
                        <div class="w-[24px] h-[24px] text-orange-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
                                <path d="M23.75 26.25L15 21.25L6.25 26.25V6.25C6.25 5.58696 6.51339 4.95107 6.98223 4.48223C7.45107 4.01339 8.08696 3.75 8.75 3.75H21.25C21.913 3.75 22.5489 4.01339 23.0178 4.48223C23.4866 4.95107 23.75 5.58696 23.75 6.25V26.25Z" stroke="#FA6900" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </PartialsButton>
                    <PartialsButton class="bg-transparent border-primary" :primary="false">
                        <div class="w-[24px] h-[24px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22Z" fill="#FA6900"/>
                            </svg>
                        </div>
                    </PartialsButton>
                </div>
            </div>
        </div>

        <div v-if="lamarSuccess === true">
            <ModalLamarSuccess />
        </div>
    </div>    
</template>

<script setup>

const props = defineProps({
    selectedJob : Object,
})
const route = useRoute()
const lamarSuccess = ref(false);

const lamarHandle = () => {
    lamarSuccess.value = true;
}

watch(lamarSuccess, (newValue) => {
    if (newValue) {
        setTimeout(() => {
        useRouter().push(`/lowongan`);
        }, 3000);
    }
});
</script>

<style scoped>
.listjob::-webkit-scrollbar {
    width: 0px;
}
   
.listjob::-webkit-scrollbar-track {
    @apply bg-transparent;
}
   
.listjob::-webkit-scrollbar-thumb {
    @apply bg-transparent;
}
</style>