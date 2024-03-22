<template>
    <div v-if="isReady" class="p-5">
        <div class="flex items-center justify-center gap-3 mb-4 px-5">
            <PartialsInput v-model="username" :placeholder="`Cari Username`" class="border-2 rounded-3xl w-full max-w-[30em] mb-0" :inputClass="`mb-0 bg-slate-200 border-slate-200 block w-full`" />
            <button @click="findUsername" class="p-3 px-4 text-sm bg-primary text-white rounded-3xl mb-3">Cari</button>
        </div>

        <div v-if="error">
            <StateEmpty :title="error" />
        </div>

        <div v-if="!error" class="container mx-auto">
            <div class="flex items-center gap-6 bg-slate-50 rounded-3xl p-5">
                <NuxtImg :src="`${profile?.profile?.photo}`" :alt="`Image Profile ${profile?.name}`" width="200" height="200" class="block w-[200px] h-[200px] object-cover rounded-[99px] p-2 border-2 border-slate-5" />
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-4"><h1 class="text-3xl font-medium">{{profile?.name}}</h1> - <span class="italic text-lg">{{profile?.profile?.work_type}}</span></div>
                    <div class="flex items-start justify-start w-full gap-3">
                        <div class="flex items-center">
                            <a :href="`https://instagram.com/${profile?.mediasocial?.instagram}`" target="_blank" class="flex items-center p-2 rounded-xl text-red-600 bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/></svg>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <a :href="`https://twitter.com/${profile?.mediasocial?.twitter}`" target="_blank" class="flex items-center p-2 rounded-xl text-gray-600 bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <a :href="`https://facebook.com/${profile?.mediasocial?.facebook}`" target="_blank" class="flex items-center p-2 rounded-xl text-blue-600 bg-blue-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M11.6673 11.2503H13.7507L14.584 7.91699H11.6673V6.25033C11.6673 5.39199 11.6673 4.58366 13.334 4.58366H14.584V1.78366C14.3123 1.74783 13.2865 1.66699 12.2032 1.66699C9.94065 1.66699 8.33398 3.04783 8.33398 5.58366V7.91699H5.83398V11.2503H8.33398V18.3337H11.6673V11.2503Z" fill="#277DA1"/>
                                </svg>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <a :href="`https://linkedin.com/in/${profile?.mediasocial?.linkedin}`" target="_blank" class="flex items-center p-2 rounded-xl text-green-600 bg-green-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z" fill="#90BE6D"/>
                                </svg>
                            </a> 
                        </div>
                        <div class="flex items-center">
                            <a :href="`${profile?.mediasocial?.others}`" target="_blank" class="flex items-center p-2 rounded-xl text-slate-600 bg-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"/></svg>
                            </a> 
                        </div>
                    </div>
                    <p class="text-sm text-slate-500">
                        {{profile?.profile_detail?.summary}}
                    </p>
                </div>
            </div>
        </div>

        <div v-if="!error" class="grid grid-cols-12 container mx-auto mt-5">
            <div class="col-span-6 p-5">
                <h3 class="text-xl font-medium mb-4">Pengalaman Kerja</h3>
                <ol v-for="experience in profile?.experience" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">
                    <li class="mb-7 ms-6">            
                        <span class="absolute flex items-center justify-center w-10 h-10 bg-orange-100 text-primary rounded-full -start-5">
                            {{experience.last_position.substring(0,1)}}
                        </span>
                        <div class="ps-4">
                            <h4 class="text-sm md:text-base font-medium mb-1">{{experience.last_position}}</h4>
                            <div class="flex flex-wrap items-center gap-x-4 mb-3 text-xs md:text-sm">
                                <span>{{experience.company_name}}</span>|
                                <span>{{ formatDate(experience.start_date)}} - {{experience.status ? 'sekarang' : formatDate(experience.end_date)}}</span>|
                                <span>
                                    {{
                                        calculateDate(
                                            experience.start_date,
                                            experience.status ? new Date().toISOString().split('T')[0] : experience.end_date
                                        )
                                    }}
                                </span>
                            </div>
                            <ul class="flex items-center gap-6 text-xs md:text-sm mb-3">
                                <li class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12 7.83398C12 8.36442 11.7893 8.87312 11.4142 9.2482C11.0391 9.62327 10.5304 9.83398 10 9.83398C9.46957 9.83398 8.96086 9.62327 8.58579 9.2482C8.21071 8.87312 8 8.36442 8 7.83398C8 7.30355 8.21071 6.79484 8.58579 6.41977C8.96086 6.0447 9.46957 5.83398 10 5.83398C10.5304 5.83398 11.0391 6.0447 11.4142 6.41977C11.7893 6.79484 12 7.30355 12 7.83398Z" fill="#797979"/>
                                        <path d="M15.6243 7.39616C15.6243 10.5607 13.541 14.167 9.89518 18.3337C6.24935 14.167 4.16602 10.5607 4.16602 7.39616C4.16602 5.87669 4.76962 4.41945 5.84405 3.34503C6.91848 2.2706 8.37571 1.66699 9.89518 1.66699C11.4147 1.66699 12.8719 2.2706 13.9463 3.34503C15.0207 4.41945 15.6243 5.87669 15.6243 7.39616Z" stroke="#797979" stroke-linejoin="round"/>
                                    </svg>
                                    <span>{{experience.company_address}}</span>
                                </li>
                                <!-- <li class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.9996 4.43959H13.6276V3.37559C13.6276 3.00428 13.4801 2.64819 13.2176 2.38564C12.955 2.12309 12.5989 1.97559 12.2276 1.97559H7.77161C7.40031 1.97559 7.04421 2.12309 6.78166 2.38564C6.51911 2.64819 6.37161 3.00428 6.37161 3.37559V4.43959H1.99961C1.62831 4.43959 1.27221 4.58709 1.00966 4.84964C0.747109 5.11219 0.599609 5.46828 0.599609 5.83959V16.6236C0.599609 16.9949 0.747109 17.351 1.00966 17.6135C1.27221 17.8761 1.62831 18.0236 1.99961 18.0236H17.9996C18.3709 18.0236 18.727 17.8761 18.9896 17.6135C19.2521 17.351 19.3996 16.9949 19.3996 16.6236V5.83959C19.3996 5.46828 19.2521 5.11219 18.9896 4.84964C18.727 4.58709 18.3709 4.43959 17.9996 4.43959ZM7.17161 3.37559C7.17161 3.21646 7.23482 3.06384 7.34734 2.95132C7.45987 2.8388 7.61248 2.77559 7.77161 2.77559H12.2276C12.3867 2.77559 12.5394 2.8388 12.6519 2.95132C12.7644 3.06384 12.8276 3.21646 12.8276 3.37559V4.43959H7.17161V3.37559ZM1.39961 5.83959C1.39961 5.68046 1.46282 5.52784 1.57535 5.41532C1.68787 5.3028 1.84048 5.23959 1.99961 5.23959H17.9996C18.1587 5.23959 18.3114 5.3028 18.4239 5.41532C18.5364 5.52784 18.5996 5.68046 18.5996 5.83959V8.38759C18.5986 9.08319 18.3218 9.75 17.8299 10.2419C17.338 10.7337 16.6712 11.0105 15.9756 11.0116H11.6416V9.77559C11.6416 9.6695 11.5995 9.56776 11.5245 9.49274C11.4494 9.41773 11.3477 9.37559 11.2416 9.37559H8.75761C8.65152 9.37559 8.54978 9.41773 8.47477 9.49274C8.39975 9.56776 8.35761 9.6695 8.35761 9.77559V11.0116H4.02361C3.32801 11.0105 2.6612 10.7337 2.16933 10.2419C1.67746 9.75 1.40067 9.08319 1.39961 8.38759V5.83959ZM10.8416 10.1756V12.6476H9.15761V10.1756H10.8416ZM18.5996 16.6236C18.5996 16.7827 18.5364 16.9353 18.4239 17.0478C18.3114 17.1604 18.1587 17.2236 17.9996 17.2236H1.99961C1.84048 17.2236 1.68787 17.1604 1.57535 17.0478C1.46282 16.9353 1.39961 16.7827 1.39961 16.6236V10.5836C1.72037 10.9679 2.12164 11.2772 2.57507 11.4894C3.02849 11.7015 3.52299 11.8116 4.02361 11.8116H8.35761V13.0476C8.35761 13.1537 8.39975 13.2554 8.47477 13.3304C8.54978 13.4054 8.65152 13.4476 8.75761 13.4476H11.2416C11.3477 13.4476 11.4494 13.4054 11.5245 13.3304C11.5995 13.2554 11.6416 13.1537 11.6416 13.0476V11.8116H15.9756C16.4762 11.8116 16.9707 11.7015 17.4242 11.4894C17.8776 11.2772 18.2788 10.9679 18.5996 10.5836V16.6236Z" fill="#797979"/>
                                    </svg>
                                    <span>{{experience.type_contract}}</span>
                                </li> -->
                            </ul>
                            <div class="text-sm font-light">
                                {{experience.job_description}}
                            </div>
                        </div>
                    </li>
                </ol>
            </div>

            <div class="col-span-6 p-5">
                <h3 class="text-xl font-medium mb-4">Pendidikan</h3>
                <ol v-for="edu in profile?.education" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">                 
                    <li class="mb-7 ms-6">            
                        <span class="absolute flex items-center justify-center w-10 h-10 bg-orange-100 text-primary rounded-full -start-5">
                            {{ edu.institutions.substring(0,1) }}
                        </span>
                        <div class="ps-4">
                            <h4 class="text-sm md:text-base mb-1 font-medium">{{ edu.institutions }}</h4>
                            <div class="flex items-center gap-4 mb-3 text-xs flex-wrap md:text-sm">
                                <!-- <span>{{ educationStore.getLevelById(edu.educational_level) }}</span> | -->
                                <span>{{ formatDate(edu.start_date) }} - {{ edu.status ? 'sekarang' : formatDate(edu.end_date) }}</span> <!-- | -->
                                <!-- <span>{{ edu.city_name }}</span> -->
                            </div>
                            <div class="flex items-center gap-7 text-xs md:text-sm mb-4">
                                <div class="font-medium">
                                    Jurusan<br/>
                                    Nilai Akhir
                                </div>
                                <div>
                                    {{ edu.majoring }}<br/>
                                    {{ edu.gpa }}
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>

            <div class="col-span-6 p-5">
                <h3 class="text-xl font-medium mb-4">Organisasi</h3>
                <ol v-for="org in profile?.organization" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">
                    <li class="mb-7 ms-6">            
                        <span class="absolute flex items-center justify-center w-10 h-10 bg-orange-100 text-primary rounded-full -start-5">
                            {{ org.organization_name.substring(0,1) }}
                        </span>
                        <div class="ps-4">
                            <h4 class="text-sm md:text-base mb-1 font-medium">{{ org.organization_name}} <span class="text-xs font-light"> - {{ org.organization_address }}</span></h4>
                            <div class="flex items-center gap-x-4 text-sm text-slate-500 mb-4">
                                <div class="flex items-center gap-3 flex-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"/></g></svg>
                                    {{ org.duration }}
                                </div>
                                <div class="flex items-center gap-3 flex-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><circle cx="16.86" cy="9.73" r="6.46" fill="currentColor"/><path fill="currentColor" d="M21 28h7v1.4h-7z"/><path fill="currentColor" d="M15 30v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1h-7v-1.47a1 1 0 0 0-2 0V22h-2v-3.58a32.12 32.12 0 0 0-5.14-.42a26 26 0 0 0-11 2.39a3.28 3.28 0 0 0-1.88 3V30Zm17 2H17v-8h7v.42a1 1 0 0 0 2 0V24h6Z"/></svg>
                                    {{ org.position }}
                                </div>
                            </div>
                        </div>
                    </li>
                    
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
const username = ref('');
const profile = ref(null);
const error = ref(null);
const isReady = ref(false);
const route = useRoute();
const educationStore = useEducationStore();
const user = useUserStore();

onMounted(async () => {
    username.value = route.params.username;
    const fetchProfile = await user.getUsernameProfile(route.params.username);
    if(fetchProfile.message != 'User not Found or set not Visible'){
        profile.value = fetchProfile;
    }else{
        error.value = fetchProfile.message;
    }
    isReady.value = true;
})

const findUsername = () => {
    navigateTo('/u/'+username.value);
}
</script>