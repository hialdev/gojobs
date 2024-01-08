<template>
    <div class="container mx-auto py-12 px-5">
        <h1 class="text-2xl font-medium mb-5">Diproses</h1>
        <div class="flex items-center gap-12 border-b-2 mb-5">
            <div class="mb-[-2px] cursor-pointer py-5 border-b-2 border-primary">Semua</div>
            <div class="mb-[-2px] cursor-pointer py-5 border-b-2 border-slate-150 hover:border-primary">Seleksi</div>
            <div class="mb-[-2px] cursor-pointer py-5 border-b-2 border-slate-150 hover:border-primary">Psikotest</div>
            <div class="mb-[-2px] cursor-pointer py-5 border-b-2 border-slate-150 hover:border-primary">Wawancara HR</div>
            <div class="mb-[-2px] cursor-pointer py-5 border-b-2 border-slate-150 hover:border-primary">Wawancara User</div>
            <div class="mb-[-2px] cursor-pointer py-5 border-b-2 border-slate-150 hover:border-primary">Hiring</div>
        </div>
        <PartialsSelect class="block max-w-[15em] ms-auto" :label="`Urutkan`" />
        <div class="grid grid-cols-12 gap-4 mt-6">
            <div v-for="job in jobs" class="col-span-12">
                <NuxtLink :to="!job.open ? `` : `/lowongan/${job?.id}`" class="flex items-start gap-4 bg-white p-8 rounded-2xl flex-wrap" :class="!job.open ? `opacity-50` : ``">
                    <div class="flex-initial w-[6em]">
                        <NuxtImg :src="`${job?.logo}`" :alt="`${job.company} Logo`" class="block w-full" />
                    </div>
                    <div class="">
                        <h3 class="font-medium">{{job?.title}}</h3>
                        <p class="text-slate-500 text-sm">{{job?.company}}</p>
                        <ul class="flex items-center gap-6 my-4 text-sm">
                            <li class="flex items-center gap-3">
                                <div class="w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#A6A6A6"/>
                                    </svg>
                                </div>
                                <span>{{job?.location}}</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <div class="w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 9H21.75M6 14.0625H8.25V15H6V14.0625Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <span>{{job?.salary}}</span>
                            </li>
                        </ul>
                        <p class="text-xs">Dikirim {{job?.sent}}</p>
                    </div>
                    <div class="ms-auto text-end">
                        <span v-if="!job?.open" class="block mb-2 text-sm">Lowongan di tutup</span>
                        <span class="bg-orange-100 text-orange-700 px-2 rounded text-sm">
                            {{ status(job?.status) }}
                        </span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'seeker'
})

const jobs = [
    {
        id:1,
        title: 'Administrative Assistant',
        company: 'Cogency Marketing Indonesia',
        location: 'Jakarta Barat',
        salary: '4,8 - 6jt per bulan',
        sent: '3 hari yang lalu',
        status: 3,
        open: true,
        logo: '/image/company/4.png',
    },
    {
        id:2,
        title: 'Software Developer',
        company: 'Tech Solutions Inc.',
        location: 'Jakarta Selatan',
        salary: '8 - 10jt per bulan',
        sent: '5 hari yang lalu',
        status: 4,
        open: false,
        logo: '/image/company/1.png',
    },
    {
        id:3,
        title: 'Marketing Specialist',
        company: 'Dynamic Marketing Agency',
        location: 'Tangerang',
        salary: '5 - 7jt per bulan',
        sent: '1 minggu yang lalu',
        status: 5,
        open: true,
        logo: '/image/company/2.png',
    },
    {
        id:4,
        title: 'Graphic Designer',
        company: 'Creative Designs Studio',
        location: 'Depok',
        salary: '6 - 8jt per bulan',
        sent: '2 minggu yang lalu',
        status: 6,
        open: true,
        logo: '/image/company/3.png',
    },
    {
        id:5,
        title: 'Customer Support Specialist',
        company: 'Supportive Solutions LLC',
        location: 'Bekasi',
        salary: '5 - 7jt per bulan',
        sent: '2 minggu yang lalu',
        status: 4,
        open: true,
        logo: '/image/company/4.png',
    },
    {
        id:6,
        title: 'Accounting Assistant',
        company: 'Numbers Crunch Inc.',
        location: 'Bogor',
        salary: '4,5 - 6,5jt per bulan',
        sent: '3 minggu yang lalu',
        status: 3,
        open: true,
        logo: '/image/company/2.png',
    },
    {
        id:7,
        title: 'Sales Representative',
        company: 'Sales Dynamics Ltd.',
        location: 'Cirebon',
        salary: '6 - 8jt per bulan',
        sent: '1 bulan yang lalu',
        status: 5,
        open: false,
        logo: '/image/company/1.png',
    },
    {
        id:8,
        title: 'Human Resources Manager',
        company: 'PeopleFirst Solutions',
        location: 'Serang',
        salary: '8 - 10jt per bulan',
        sent: '1 bulan yang lalu',
        status: 4,
        open: true,
        logo: '/image/company/3.png',
    },
]

const status = (key) => {
    let status = ""
    switch (key) {
        case 3:
            status = "Psikotest"
            break;
        case 4:
            status = "Wawancara HR"
            break;
        case 5:
            status = "Wawancara User"
            break;
        case 6:
            status = "Hiring"
            break;
        default:
            status = "-"
            break;
    }
    return status;
}
</script>