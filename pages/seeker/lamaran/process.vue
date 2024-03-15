<template>
    <div class="container mx-auto py-12 px-5">
        <h1 class="text-2xl font-medium mb-5">Diproses</h1>
        <div class="flex items-center gap-x-9 lg:gap-x-12 border-b-2 border-slate-100 mb-5 overflow-x-auto">
            <div @click="makeStatus(null)" class="cursor-pointer py-5 border-b-2 text-sm whitespace-nowrap" :class="{'border-slate-150 hover:border-primary' : filter.status != null, 'border-primary' : filter.status == null}">Semua</div>
            <div @click="makeStatus(1) " class="cursor-pointer py-5 border-b-2 text-sm whitespace-nowrap" :class="{'border-slate-150 hover:border-primary' : filter.status != 1, 'border-primary' : filter.status == 1}">Seleksi</div>
            <div @click="makeStatus(2) " class="cursor-pointer py-5 border-b-2 text-sm whitespace-nowrap" :class="{'border-slate-150 hover:border-primary' : filter.status != 2, 'border-primary' : filter.status == 2}">Psikotest</div>
            <div @click="makeStatus(3) " class="cursor-pointer py-5 border-b-2 text-sm whitespace-nowrap" :class="{'border-slate-150 hover:border-primary' : filter.status != 3, 'border-primary' : filter.status == 3}">Interview HR</div>
            <div @click="makeStatus(4) " class="cursor-pointer py-5 border-b-2 text-sm whitespace-nowrap" :class="{'border-slate-150 hover:border-primary' : filter.status != 4, 'border-primary' : filter.status == 4}">Interview User</div>
        </div>
        <PartialsSelect @selected="handleUrutkan" class="block max-w-[15em] ms-auto" :label="`Urutkan`" :options="[{key: 0, value: 'Terlama'},{key: 1, value: 'Terbaru'}]"/>
        <div class="grid grid-cols-12 gap-4 mt-6">
            <template v-if="jobs?.length > 0">
                <div v-for="job in jobs" class="col-span-12">
                    <NuxtLink :to="job?.joborder?.job_status == 'Closed' ? `` : `/lowongan/${job?.joborder?.id}`" class="flex items-start gap-4 bg-white p-8 rounded-2xl flex-wrap" :class="job?.joborder?.job_status == 'Closed' ? `opacity-50` : ``">
                        <div class="flex-initial w-[6em]">
                            <NuxtImg :src="`${job?.joborder?.job_company_logo ?? '/image/logo-ish.png'}`" :alt="`PT Infomedia Solusi Humanika Logo`" class="block w-full max-w-[5em] object-contain" />
                        </div>
                        <div class="">
                            <h3 class="font-medium capitalize">{{job?.joborder?.job_title.toLowerCase()}}</h3>
                            <p class="text-slate-500 text-sm">
                                PT Infomedia Solusi Humanika
                                <!-- {{job?.joborder?.job_company}} -->
                            </p>
                            <ul class="flex items-center gap-6 my-4 text-sm">
                                <li class="flex items-center gap-3">
                                    <div class="w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#A6A6A6"/>
                                        </svg>
                                    </div>
                                    <span>{{job?.joborder?.job_location}}</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="w-[20px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                            <path d="M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.25 9H21.75M6 14.0625H8.25V15H6V14.0625Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>IDR {{job?.joborder?.salary_start ?? '~'}} s/d {{job?.joborder?.salary_end ?? '~'}}</span>
                                </li>
                            </ul>
                            <p class="text-xs">Dikirim {{daysAgo(job?.created_time)}}</p>
                        </div>
                        <div class="ms-auto text-end">
                            <span v-if="job?.joborder?.job_status == 'Closed'" class="block mb-2 text-sm">Lowongan di tutup</span>
                            <span class="bg-orange-100 text-orange-700 px-2 rounded text-sm">
                                {{ job?.status_name }}
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </template>
            <template v-else>
                <div class="col-span-12 flex items-center w-full justify-center text-xl">
                    <StateEmpty />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';
definePageMeta({
    title: 'Lowongan / Job - DiProses',
    layout:'seeker',
    middleware: ["auth"]
})
const toast = useToast();
const filter = ref({
    order : 0,
    status : null,
});

const store = useJobStore();
const jobs = ref(null);

onMounted(async () => {
    if(filter.value.status == null){
        try {
            const fetch = await store.getJobsByStatus(filter.value.status);  
            if(fetch.success){
                jobs.value = fetch?.data;
            }
            console.log(jobs.value)
        } catch (error) {
            toast.error(`Error : ${error}`)
        }
    }
})

const handleUrutkan = async (value) => {
    filter.value.order = value?.key;
    if(filter.value.order == 1){
        jobs.value = jobs.value.reverse();
    }else{
        try {
            const fetch = await store.getJobsByStatus(filter.value.status, 12);  
            if(fetch.success){
                jobs.value = fetch?.data;
            }
        } catch (error) {
            toast.error(error)
        }
    }
}

const makeStatus = async (value) => {
    filter.value.status = value;
    store.updateFilter('status', value);
    try {
        const fetch = await store.getJobsByStatus(value, 13);
        if (fetch.success) {
            jobs.value = fetch?.data;
        } else {
            toast.error(fetch.message);
        }
    } catch (error) {
        toast.error(`Error: ${error}`);
    }
}
</script>

<style scoped>
*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

*::-webkit-scrollbar-track {
  @apply bg-slate-100;
}

*::-webkit-scrollbar-thumb {
  @apply bg-slate-100 rounded-2xl;
}
</style>