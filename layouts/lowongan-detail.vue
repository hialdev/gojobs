<template>
  <div>
        <NuxtLayout name="lowongan">
            <div class="grid grid-cols-12 gap-4">
                <!-- List Jobs -->
                <div class="col-span-12 order-last lg:order-first lg:col-span-6 max-h-[75vh] listjob lg:overflow-auto p-1 grid grid-cols-12 gap-4 pe-3">
                    <JobsCard v-if="jobs && jobs.length > 0" :jobs="jobs" />
                </div>
                <!-- End List Jobs -->

                <!-- Jobs Detail -->
                <div class="col-span-12 lg:col-span-6">
                  <slot />
                </div>
                <!-- End Jobs Detail -->
            </div>
        </NuxtLayout>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs : [
                {
                    id:1,
                    title: 'Administrative Assistant',
                    company: 'Cogency Marketing Indonesia',
                    location: 'Jakarta Barat',
                    salary: '4,8 - 6jt per bulan',
                    datePosted: '3 hari yang lalu',
                    typeJob: 'full-time',
                    logo: '/image/company/4.png',
                },
                {
                    id:2,
                    title: 'Software Developer',
                    company: 'Tech Solutions Inc.',
                    location: 'Jakarta Selatan',
                    salary: '8 - 10jt per bulan',
                    datePosted: '5 hari yang lalu',
                    typeJob: 'part-time',
                    logo: '/image/company/1.png',
                },
                {
                    id:3,
                    title: 'Marketing Specialist',
                    company: 'Dynamic Marketing Agency',
                    location: 'Tangerang',
                    salary: '5 - 7jt per bulan',
                    datePosted: '1 minggu yang lalu',
                    typeJob: 'freelance',
                    logo: '/image/company/2.png',
                },
                {
                    id:4,
                    title: 'Graphic Designer',
                    company: 'Creative Designs Studio',
                    location: 'Depok',
                    salary: '6 - 8jt per bulan',
                    datePosted: '2 minggu yang lalu',
                    typeJob: 'temporary',
                    logo: '/image/company/3.png',
                },
                {
                    id:5,
                    title: 'Customer Support Specialist',
                    company: 'Supportive Solutions LLC',
                    location: 'Bekasi',
                    salary: '5 - 7jt per bulan',
                    datePosted: '2 minggu yang lalu',
                    typeJob: 'full-time',
                    logo: '/image/company/4.png',
                },
                {
                    id:6,
                    title: 'Accounting Assistant',
                    company: 'Numbers Crunch Inc.',
                    location: 'Bogor',
                    salary: '4,5 - 6,5jt per bulan',
                    datePosted: '3 minggu yang lalu',
                    typeJob:'remote',
                    logo: '/image/company/2.png',
                },
                {
                    id:7,
                    title: 'Sales Representative',
                    company: 'Sales Dynamics Ltd.',
                    location: 'Cirebon',
                    salary: '6 - 8jt per bulan',
                    datePosted: '1 bulan yang lalu',
                    typeJob: 'full-time',
                    logo: '/image/company/1.png',
                },
                {
                    id:8,
                    title: 'Human Resources Manager',
                    company: 'PeopleFirst Solutions',
                    location: 'Serang',
                    salary: '8 - 10jt per bulan',
                    datePosted: '1 bulan yang lalu',
                    typeJob: 'part-time',
                    logo: '/image/company/3.png',
                },
            ]
        }
    },
    computed:{
        
    },
    methods: {
        
    },
}
</script>

<style scoped>
.listjob::-webkit-scrollbar {
    width: 10px;
}
   
.listjob::-webkit-scrollbar-track {
    @apply bg-slate-200 rounded-3xl;
}
   
.listjob::-webkit-scrollbar-thumb {
    @apply bg-slate-300;
}
</style>
