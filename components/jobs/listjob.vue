<template>
    <div v-for="job in jobs" :key="job?.id">
        <NuxtLink :to="`/lowongan/${job.id}`" activeClass="ring-4 ring-orange-700/20 border-primary border" class="cursor-pointer block mb-5 bg-white rounded-3xl p-6 hover:ring-4 hover:ring-orange-700/20 border border-white hover:border-primary">
            <div class="flex items-center justify-between">
                <NuxtImg :src="job?.logo" :alt="`Logo PT Infomedia Solusi Humanika`" class="h-[3em] mb-3" />
                <div class="w-[24px] cursor-pointer text-orange-100 hover:text-orange-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor">
                        <path d="M23.75 26.25L15 21.25L6.25 26.25V6.25C6.25 5.58696 6.51339 4.95107 6.98223 4.48223C7.45107 4.01339 8.08696 3.75 8.75 3.75H21.25C21.913 3.75 22.5489 4.01339 23.0178 4.48223C23.4866 4.95107 23.75 5.58696 23.75 6.25V26.25Z" stroke="#FA6900" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <h3 class="text-base md:text-xl">{{job?.title}}</h3>
            <p class="text-slate-500 text-sm mb-3 uppercase">
                PT Infomedia Solusi Humanika
                <!-- {{ job?.job_company.toLowerCase() }} -->
            </p>
            <div class="font-medium">{{job?.location}}</div>
            <div class="font-medium">{{job?.salary}}</div>
            <div class="flex items-center gap-4 mt-4">
                <div class="flex items-center gap-2">
                    <div class="text-slate-500 w-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M12.0039 6V12.005L16.2434 16.245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="text-sm italic text-slate-500">{{job?.datePosted}}</p>
                </div>
                <div class="flex items-center gap-2">
                    <div class="text-slate-500 w-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#A6A6A6"/>
                        </svg>
                    </div>
                    <p class="text-sm italic text-slate-500">{{job?.applicants}} Aplicants</p>
                </div>
            </div>
        </NuxtLink>
    </div>       
</template>

<script>
export default {
    props: ['jobs'],
    data(){
        return{
            
        }
    },
    mounted() {
        console.log('JobsListjob received jobs:', this.jobs);
    },
    methods: {
        
    },
}
</script>