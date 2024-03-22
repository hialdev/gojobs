<template>
    <div class="bg-white rounded-3xl lg:overflow-hidden lg:max-h-[84vh] lg:overflow-y-scroll listjob">
        <div v-if="job?.selectedJob == null" class="p-5 bg-gray-100 hidden">
            <div class="h-[70vh] lg:h-[76vh] w-full border-2 border-dashed bg-transparent rounded-2xl flex items-center justify-center">
                <div class="text-sm text-slate-500">Job yang dipilih akan ditampilkan disini</div>
            </div>
        </div>
        <div v-if="job?.selectedJob != null" class="grid grid-cols-12 relative">
            <div class="col-span-12 px-5">
                <div class="mb-3 mt-6 px-5">
                    <NuxtImg :src="`${job?.selectedJob?.job_company_logo ?? '/image/logo-ish.png'}`" :alt="`logo PT Infomedia Solusi Humanika`" class="h-[4em] mb-2" />
                    <div>
                        <h2 class="text-lg capitalize">{{job?.selectedJob?.job_title.toLowerCase()}}</h2>
                        <p class="text-sm text-slate-500">
                            PT Infomedia Solusi Humanika
                            <!-- {{job?.selectedJob?.job_company}} -->
                        </p>
                    </div>
                </div>
                <ul class="text-sm text-slate-600 px-5">
                    <li class="flex items-center gap-3 text-sm">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#A6A6A6"/>
                            </svg>
                        </div>
                        <span>{{ job?.selectedJob?.job_location }}</span>
                    </li>
                    <li class="flex items-center gap-3 text-sm">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.25 9H21.75M6 14.0625H8.25V15H6V14.0625Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>IDR {{ job?.selectedJob?.salary_start ?? '~' }} s/d {{ job?.selectedJob?.salary_end ?? '~' }}</span>
                    </li>
                    <li class="flex items-center gap-3 text-sm">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#A6A6A6"/>
                            </svg>
                        </div>
                        <span>{{ job?.selectedJob?.job_contract }}</span>
                    </li>
                    <li class="flex items-center gap-3 text-sm">
                        <div class="w-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M12.0039 6V12.005L16.2434 16.245" stroke="#A6A6A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>terbit {{ daysAgo(job?.selectedJob?.job_post_date) }}</span>
                    </li>
                </ul>
                <div class="py-6 border-t-2 px-5">
                    <h5 class="font-medium">Requirement</h5>
                    <div class="text-sm text-slate-500 mb-5">
                        <div v-html="convertText(job?.selectedJob?.job_requirement)"></div>
                    </div>
                    <!-- <h5 class="font-medium">Keuntungan</h5>
                    <div class="text-sm text-slate-500 mb-5">
                        <ul class="list-decimal ms-4">
                            <li>Fast placed</li>
                            <li>Hybrid working arrangement</li>
                            <li>Casual working environment</li>
                        </ul>
                    </div>
                    <h5 class="font-medium">Spesialisasi Pekerjaan</h5>
                    <div class="text-sm text-slate-500 mb-5">
                        <p>Sumber Daya Manusia/Personalia, Staf / Administrasi umum</p>
                    </div> -->
                    <h5 class="font-medium">Deskripsi Pekerjaan</h5>
                    <div class="text-sm text-slate-500 content">
                        <div v-html="convertText(job?.selectedJob?.job_description)"></div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 sticky bottom-0 z-[100]">
                <div class="flex items-center gap-3 bg-white p-5 rounded-3xl">
                    <PartialsButton v-if="!access" class="w-full text-center cursor-base" :primary="false">Masuk terlebih dahulu</PartialsButton>
                    <PartialsButton v-else-if="job?.selectedJob?.job_status == 2" class="w-full text-center cursor-base" :primary="false">Lowongan Terpenuhi</PartialsButton>
                    <PartialsButton v-else-if="job?.selectedJob?.is_applied == 0" class="w-full text-center" @click="lamarHandle(job?.selectedJob?.id)">Lamar</PartialsButton>
                    <PartialsButton v-else class="w-full text-center cursor-base" :primary="false">Telah Dilamar</PartialsButton>
                    <button @click="beFavorite" class="p-2.5 rounded-3xl" :class="[{'bg-gray-100 hover:bg-orange-100 hover:border-orange-400' :  job?.selectedJob?.is_favorite == 0}, {'bg-orange-400/30 hover:bg-orange-300/60 border-orange-400 hover:border-orange-600' : job?.selectedJob?.is_favorite == 1}]">
                        <div class="w-[24px] h-[24px] text-primary">
                            <svg v-if="!job?.selectedJob?.is_favorite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g fill="none"><path fill="currentColor" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07" opacity=".16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071"/></g></svg>
                            <svg v-if="job?.selectedJob?.is_favorite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="currentColor" fill-rule="evenodd" d="M4.222 5.364A6.002 6.002 0 0 1 12 4.758a6.002 6.002 0 0 1 7.778 9.091l-5.657 5.657a3 3 0 0 1-4.242 0L4.222 13.85a6 6 0 0 1 0-8.485" clip-rule="evenodd"/></svg>
                        </div>
                    </button>
                    <button @click="isShare = true" class="p-2.5 rounded-3xl bg-slate-100 hover:bg-orange-100 hover:border-orange-100">
                        <div class="w-[24px] h-[24px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22Z" fill="#FA6900"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <div v-if="isShare" class="fixed bg-black/20 z-[999] top-0 bottom-0 start-0 end-0 p-5 flex items-center justify-center">
            <div class="bg-white p-7 rounded-lg">
                <div class="flex mb-3 pb-3 border-b items-center justify-between">
                    <h4 class="text-lg font-medium">Bagikan Lowongan</h4>
                    <div @click="isShare = false" class="cursor-pointer text-slate-500 hover:text-rose-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8"/></svg>
                    </div>
                </div>
                <div class="flex mb-3 w-full items-center justify-between gap-6 p-4 rounded-lg border">
                    <div class="font-medium text-xs flex-1">https://gojobs.id{{ route?.fullPath }}</div>
                    <button class="text-primary text-sm" @click="copyToClipboard">Copy</button>
                </div>
                <div class="flex flex-wrap gap-4 text-white">
                    <SocialShare
                        v-for="network in ['facebook', 'twitter', 'whatsapp','telegram', 'linkedin', 'email']"
                        :key="network"
                        :network="network"
                        :styled="true"
                        :label="false"
                        class="p-2 rounded-lg"
                    />
                </div>
            </div>
        </div>
        <div v-if="lamarSuccess === true">
            <ModalLamarSuccess />
        </div>
    </div>    
</template>

<script setup>
import {useToast} from 'vue-toastification'

const toast = useToast();
const lamarSuccess = ref(false);
const isShare = ref(false);
const job = useJobStore();
const { id } = useRoute().params;
const access = ref(null);
const route = useRoute();

const lamarHandle = async (id) => {
    const apply = await job.applyJob(id)
    if(apply?.success){
        lamarSuccess.value = true;
        setTimeout(() => {
            lamarSuccess.value = false;
            job.getJobById(id);
        }, 3000);
    }else{
        toast.error(`${apply?.message}`);
    }
}

const convertText = (text) => {
  return text?.replace(/\n/g, '<br>');
}

onMounted(async () => {
    await job.getJobById(id);
    access.value = localStorage.getItem('access_token');
})

const beFavorite = async () => {
    if(localStorage.getItem('access_token')){
        if(job?.selectedJob?.is_favorite == 0){
            try {
                const fav = await job.makeFavorite(id);
                if(fav?.success){
                    toast.success(`Success!! ${fav?.message}`);
                    await job.getJobById(id);
                }
            } catch (error) {
                toast.error(`${error}`);
            }
        }else{
            const fav = await job.unFavorite(id);
            if(!fav.success){
                toast.error(`${fav?.code} - ${fav?.message}`);
            }else{
                toast.success(`Success!! ${fav?.message}`);
                await job.getJobById(id);
            }
        }
    }else{
        toast.warning('Ooopss... Silahkan masuk / daftar terlebih dahulu');
    }
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(`https://gojobs.id${route.fullPath}`)
    .then(() => toast.success('Success copying profile link to clipboard'))
    .catch((error) => toast.error('Error copying text to clipboard : ' + error));
};
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