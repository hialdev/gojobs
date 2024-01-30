<template>
  <div>
    <div v-if="isLogin === 'true'">
        <SeekerHeader />
    </div>
    <div v-else>
        <AppHeader />
    </div>
    <div class="bg-[#fafafa] min-h-screen py-[1em]">
        <div class="container mx-auto px-5">
            <div class="lg:sticky lg:top-0 lg:bg-[#fafafa] pt-1 pb-1 mb-2 z-10">
                <Filtering />
            </div>

            <slot />
        </div>

    </div>
  </div>
</template>

<script>
import JobsListjob from '@/components/jobs/listjob.vue'
import AppHeader from '@/components/AppHeader.vue'
import Filtering from '@/components/Filtering.vue'

export default {
    components:{
      JobsListjob,
      Filtering,
      AppHeader
    },
    data(){
        return{
            isLogin : process.client ? localStorage.getItem('login') : null,
            jobs : [
                {
                    id:1,
                    title: 'Administrative Assistant',
                    company: 'Cogency Marketing Indonesia',
                    location: 'Jakarta Barat',
                    salary: '4,8 - 6jt per bulan',
                    benefits: ['Fast paced', 'Hybrid working arrangement', 'Casual working environment'],
                    datePosted: '3 hari yang lalu',
                    applicants: 15,
                    logo: '/image/company/4.png',
                },
                {
                    id:2,
                    title: 'Software Developer',
                    company: 'Tech Solutions Inc.',
                    location: 'Jakarta Selatan',
                    salary: '8 - 10jt per bulan',
                    benefits: ['Flexible working hours', 'Health insurance coverage', 'Professional development opportunities'],
                    datePosted: '5 hari yang lalu',
                    applicants: 20,
                    logo: '/image/company/1.png',
                },
                {
                    id:3,
                    title: 'Marketing Specialist',
                    company: 'Dynamic Marketing Agency',
                    location: 'Tangerang',
                    salary: '5 - 7jt per bulan',
                    benefits: ['Generous commission structure', 'Team building events', 'Career advancement opportunities'],
                    datePosted: '1 minggu yang lalu',
                    applicants: 10,
                    logo: '/image/company/2.png',
                },
                {
                    id:4,
                    title: 'Graphic Designer',
                    company: 'Creative Designs Studio',
                    location: 'Depok',
                    salary: '6 - 8jt per bulan',
                    benefits: ['Creative and collaborative work environment', 'Flexible work hours', 'Career growth opportunities'],
                    datePosted: '2 minggu yang lalu',
                    applicants: 12,
                    logo: '/image/company/3.png',
                },
                {
                    id:5,
                    title: 'Customer Support Specialist',
                    company: 'Supportive Solutions LLC',
                    location: 'Bekasi',
                    salary: '5 - 7jt per bulan',
                    benefits: ['Comprehensive training programs', 'Health and wellness programs', 'Opportunities for advancement'],
                    datePosted: '2 minggu yang lalu',
                    applicants: 18,
                    logo: '/image/company/4.png',
                },
                {
                    id:6,
                    title: 'Accounting Assistant',
                    company: 'Numbers Crunch Inc.',
                    location: 'Bogor',
                    salary: '4,5 - 6,5jt per bulan',
                    benefits: ['Competitive salary', 'Professional development opportunities', 'Flexible work schedule'],
                    datePosted: '3 minggu yang lalu',
                    applicants: 8,
                    logo: '/image/company/2.png',
                },
                {
                    id:7,
                    title: 'Sales Representative',
                    company: 'Sales Dynamics Ltd.',
                    location: 'Cirebon',
                    salary: '6 - 8jt per bulan',
                    benefits: ['Uncapped commission structure', 'Sales training programs', 'Opportunities for career growth'],
                    datePosted: '1 bulan yang lalu',
                    applicants: 25,
                    logo: '/image/company/1.png',
                },
                {
                    id:8,
                    title: 'Human Resources Manager',
                    company: 'PeopleFirst Solutions',
                    location: 'Serang',
                    salary: '8 - 10jt per bulan',
                    benefits: ['Competitive compensation package', 'Employee wellness programs', 'Career development opportunities'],
                    datePosted: '1 bulan yang lalu',
                    applicants: 14,
                    logo: '/image/company/3.png',
                },
            ],
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
    width: 0px;
}
   
.listjob::-webkit-scrollbar-track {
    @apply bg-transparent;
}
   
.listjob::-webkit-scrollbar-thumb {
    @apply bg-transparent;
}
</style>
