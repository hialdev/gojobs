<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady" class="container mx-auto py-10 px-5">
        <h1 class="text-2xl font-medium mb-8">Terakhir Dilihat</h1>
        <div class="grid grid-cols-12 gap-4">
            <template v-for="job in jobs" :key="job?.id">
                <div v-if="job?.id != null" class="col-span-12 md:col-span-6 lg:col-span-3">
                    <NuxtLink :to="`/lowongan/${job?.id}`" class="block bg-white flex flex-col justify-between h-full p-6 rounded-3xl hover:ring-4 hover:ring-orange-700/20 border border-white hover:border hover:border-primary">
                        <div class="flex items-start justify-between">
                            <NuxtImg
                                :src="`${job?.logo ?? '/image/logo-ish.png'}`"
                                :alt="`image logo PT Infomedia Solusi Humanika - ${job?.job_title.toLowerCase()}`"
                                width=""
                                height=""
                                class="h-[3em] mb-3 object-fit-contain"
                            />
                            <PartialsFavbtn :job="job" />
                        </div>
                        <h2 class="text-base capitalize mb-1">{{ job?.job_title.toLowerCase() }}</h2>
                        <p class="text-slate-500 text-sm mb-3 uppercase">
                            PT Infomedia Solusi Humanika
                            <!-- {{ job?.job_company.toLowerCase() }} -->
                        </p>
                        <ul class="text-slate-600 mt-auto">
                            <li class="flex items-center gap-3 text-sm">
                                <div class="w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#A6A6A6"/>
                                    </svg>
                                </div>
                                <!-- Location -->
                                <span class="capitalize">{{ job?.job_location.toLowerCase() }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <div class="w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 9H21.75M6 14.0625H8.25V15H6V14.0625Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <!-- Salary -->
                                <span>IDR {{ job?.salary_start ?? '~' }} s/d {{ job?.salary_end ?? '~' }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <div class="w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#A6A6A6"/>
                                    </svg>
                                </div>
                                <!-- Type -->
                                <span>{{ job?.job_contract }}</span>
                            </li>
                            <li class="flex items-center gap-3 text-sm">
                                <div class="w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                        <path d="M12.0039 6V12.005L16.2434 16.245" stroke="#A6A6A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <span>publish {{ daysAgo(job?.job_post_date) }}</span>
                            </li>
                        </ul>
                    </NuxtLink>
                </div>
            </template>
            <div class="col-span-12">
                <StateEmpty v-if="jobs?.length == 0 || jobs == null || jobs[0] == null" />
            </div>
        </div>
    </div>

</template>

<script setup>
definePageMeta({
    title: 'Lowongan / Job - Terakhir dilihat',
    layout:'seeker',
    middleware: ["auth"]
})

const jobs = ref(null);
const isReady = ref(false);

onMounted(() => {
    if(localStorage.getItem('lastseens')){
        jobs.value = JSON.parse(localStorage.getItem('lastseens')).reverse();
    }else{
        jobs.value = null;
    }
    isReady.value = true;
})

</script>