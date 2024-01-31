<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady" class="container mx-auto px-5 py-12">
        <h1 class="text-3xl md:text-3xl mb-10">Hi,<span class="font-bold text-primary"> Name Surname</span></h1>
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6 md:col-span-4 lg:col-span-3">
                <NuxtLink to="/seeker/lamaran/process" class="block p-6 bg-white rounded-2xl hover:ring-[4px] border border-white hover:border-primary hover:ring-orange-700/10">
                    <div class="w-[70px] h-[70px] text-orange-300 mb-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22h4c3.771 0 5.657 0 6.828-1.171C22 19.657 22 17.77 22 14s0-5.657-1.172-6.828c-.362-.363-.794-.613-1.328-.786v2.773c.003.34.009.911-.236 1.433c-.244.522-.686.884-.95 1.1c-.026.02-.051.041-.073.06l-1.507 1.255c-.86.718-1.61 1.342-2.284 1.776c-.725.466-1.51.812-2.45.812c-.94 0-1.724-.346-2.45-.812c-.674-.434-1.423-1.058-2.284-1.775l-1.507-1.256a13.705 13.705 0 0 0-.073-.06c-.264-.216-.705-.578-.95-1.1c-.244-.522-.24-1.093-.237-1.433l.001-.096V6.385c-.534.173-.966.424-1.328.787C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.829C4.343 22 6.229 22 10 22Z"/><path fill="currentColor" fill-rule="evenodd" d="m6.72 10.6l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295c1.086 0 2.005-.765 3.841-2.296l1.44-1.2c.353-.294.53-.442.625-.643c.094-.202.094-.432.094-.893V7c0-.32 0-.62-.002-.898c-.012-1.771-.098-2.737-.73-3.37C16.536 2 15.358 2 13 2h-2c-2.357 0-3.535 0-4.268.732c-.632.633-.72 1.599-.732 3.37c-.002.279 0 .577 0 .898v2.063c0 .46 0 .691.095.893c.094.201.27.349.625.644ZM9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6Zm1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg></div>
                    <h3 class="text-base font-medium">Diproses</h3>
                </NuxtLink>
            </div>
            <div class="col-span-6 md:col-span-4 lg:col-span-3">
                <NuxtLink to="/seeker/lamaran/applied" class="block p-6 bg-white rounded-2xl hover:ring-[4px] border border-white hover:border-primary hover:ring-orange-700/10">
                    <div class="w-[70px] h-[70px] text-orange-300 mb-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.646.647-1.582.818-3.158.863a3.204 3.204 0 0 0-.767-2.066a.211.211 0 0 1-.05-.12a3.21 3.21 0 0 0-2.944-2.945a.21.21 0 0 1-.12-.05a3.21 3.21 0 0 0-4.164 0a.21.21 0 0 1-.12.05a3.21 3.21 0 0 0-2.945 2.945a.21.21 0 0 1-.05.12a3.204 3.204 0 0 0-.766 2.066c-1.576-.045-2.512-.216-3.158-.863C2 16.243 2 14.828 2 12Zm6.25-6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6ZM7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z"/><path d="M13.11 13.945a1.71 1.71 0 0 0-2.22 0a1.71 1.71 0 0 1-.973.403a1.71 1.71 0 0 0-1.569 1.57c-.028.358-.17.698-.403.973a1.71 1.71 0 0 0 0 2.218c.234.274.375.615.403.973a1.71 1.71 0 0 0 1.57 1.57c.358.028.699.169.973.402a1.71 1.71 0 0 0 2.218 0a1.71 1.71 0 0 1 .973-.403a1.71 1.71 0 0 0 1.57-1.569a1.71 1.71 0 0 1 .402-.973a1.71 1.71 0 0 0 0-2.219a1.71 1.71 0 0 1-.403-.973a1.71 1.71 0 0 0-1.569-1.569a1.71 1.71 0 0 1-.973-.403Zm.902 3.603a.75.75 0 1 0-1.024-1.096l-1.63 1.522l-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0l2.143-2Z"/></g></svg></div>
                    <h3 class="text-base font-medium">Dilamar</h3>
                </NuxtLink>
            </div>
            <div class="col-span-6 md:col-span-4 lg:col-span-3">
                <NuxtLink to="/seeker/lamaran/saved" class="block p-6 bg-white rounded-2xl hover:ring-[4px] border border-white hover:border-primary hover:ring-orange-700/10">
                    <div class="w-[70px] h-[70px] text-orange-300 mb-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M16.486 3.143L12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857z"/></g></svg></div>
                    <h3 class="text-base font-medium">Tersimpan</h3>
                </NuxtLink>
            </div>
            <div class="col-span-6 md:col-span-4 lg:col-span-3">
                <NuxtLink to="/seeker/lamaran/seen" class="block p-6 bg-white rounded-2xl hover:ring-[4px] border border-white hover:border-primary hover:ring-orange-700/10">
                    <div class="w-[70px] h-[70px] text-orange-300 mb-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20c4.182 0 7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12Zm10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z" clip-rule="evenodd"/></svg></div>
                    <h3 class="text-base font-medium">Dilihat</h3>
                </NuxtLink>
            </div>
        </div>
        <hr class="my-10">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-medium">Job yang cocok untuk kamu</h3>
                    <NuxtLink to="/lowongan" class="font-medium underline decoration-orange-500">See All</NuxtLink>
                </div>
            </div>
            <div v-for="job in job?.jobs?.data" :key="job?.id" class="col-span-12 md:col-span-6 lg:col-span-3">
                <NuxtLink :to="`/lowongan/${job?.id}`" activeClass="activeCard" class="block bg-white p-6 rounded-3xl hover:ring-4 hover:ring-orange-700/20 border border-white hover:border hover:border-primary">
                    <div class="flex items-start justify-between">
                        <NuxtImg
                            :src="`${job?.logo ?? '/image/logo-ish.png'}`"
                            alt=""
                            width=""
                            height=""
                            class="h-[3em] mb-3 object-fit-contain"
                        />
                        <PartialsFavbtn :job="job" />
                    </div>
                    <h2 class="text-base">{{ job?.job_title }}</h2>
                    <p class="text-slate-500 text-sm mb-3">{{ job?.job_number }}</p>
                    <ul class="text-slate-600">
                        <li class="flex items-center gap-3 text-sm">
                            <div class="w-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#A6A6A6"/>
                                </svg>
                            </div>
                            <!-- Location -->
                            <span>{{ job?.sap_area }}</span>
                        </li>
                        <li class="flex items-center gap-3 text-sm">
                            <div class="w-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.125 4.5H4.875C3.42525 4.5 2.25 5.67525 2.25 7.125V16.875C2.25 18.3247 3.42525 19.5 4.875 19.5H19.125C20.5747 19.5 21.75 18.3247 21.75 16.875V7.125C21.75 5.67525 20.5747 4.5 19.125 4.5Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.25 9H21.75M6 14.0625H8.25V15H6V14.0625Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <!-- Salary -->
                            <span>up to {{ job?.salary ?? 'IDR 20.000.000' }}</span>
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
                            <span>{{ job?.datePosted ?? '2 hari yang lalu' }}</span>
                        </li>
                    </ul>
                </NuxtLink>
            </div>
        </div>
        <hr class="my-10">
        <div class="grid grid-cols-12 sm:gap-8">
            <div class="mb-4 col-span-12 lg:col-span-6">
                <h2 class="text-xl font-medium mb-5">Pengembangan diri</h2>
                <NuxtImg src="/image/img-dash.png" alt="Dashboard Image" class="w-full" />
            </div>
            <div class="mb-4 col-span-12 lg:col-span-6">
                <h2 class="text-xl font-medium mb-3">Dapatkan kecocokan lowongan</h2>
                <p class="text-slate-500 text-sm">Perbarui profil Anda dengan informasi terbaru agar rekomendasi pekerjaan dapat mencerminkan perkembangan dan kemampuan terbaru yang Anda miliki.</p>
                <div class="bg-white my-6 p-8 rounded-2xl">
                    <div class="flex items-start justify-between pb-4 border-b">
                        <div class="font-medium">
                            <h6 class="text-primary">Pemula</h6>
                        </div>
                        <div class="text-center">
                            <h6 class="font-medium text-slate-700">Medium</h6>
                            <p class="text-slate-500 text-sm hidden md:block">Syarat untuk bisa melamar pekerjaan</p>
                        </div>
                        <div class="font-medium">
                            <h6 class="text-slate-700">Proffesional</h6>
                        </div>
                    </div>
                    
                    <div class="py-6">
                        <div class="relative">
                            <div class="flex items-center gap-2">
                                <span v-for="index in 10" :key="index" class="bg-slate-100 p-2 flex-auto rounded-2xl"></span>
                            </div>
                            <div class="absolute top-0 right-0 left-0 flex items-center gap-2">
                                <span v-for="index in 10" :key="index" class="p-2 flex-auto rounded-2xl" :class="{ 'bg-orange-200': index <= 3 }"></span>
                            </div>
                            <div class="absolute top-0 right-0 left-0 mt-[-0.7em] flex items-center justify-between">
                                <div class="flex items-center justify-center p-2 border-2 border-primary rounded-3xl bg-primary text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5H8Z" clip-rule="evenodd"/></svg>
                                </div>
                                <div class="flex items-center justify-center p-2 border-2 border-primary rounded-3xl bg-white text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63z"/><path fill="currentColor" d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3zM19 9h-2V7h2v2z"/></svg>
                                </div>
                                <div class="flex items-center justify-center p-2 border-2 border-primary rounded-3xl bg-white text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.285 2.142a3 3 0 0 0-4.57 0l-.042.05a1 1 0 0 1-.842.348l-.065-.005a3 3 0 0 0-3.23 3.231l.004.065a1 1 0 0 1-.348.842l-.05.042a3 3 0 0 0 0 4.57l.05.042a1 1 0 0 1 .348.842l-.005.065A3.002 3.002 0 0 0 8 15.429V22a1 1 0 0 0 1.555.832L12 21.202l2.445 1.63A1 1 0 0 0 16 22v-6.57a3.002 3.002 0 0 0 2.465-3.196l-.005-.065a1 1 0 0 1 .348-.842l.05-.042a3 3 0 0 0 0-4.57l-.05-.042a1 1 0 0 1-.348-.842l.005-.065a3 3 0 0 0-3.231-3.23l-.065.004a1 1 0 0 1-.842-.348l-.042-.05ZM10 20.132V16.15a3.002 3.002 0 0 0 4 0v3.98l-1.445-.963a1 1 0 0 0-1.11 0L10 20.131Zm4.707-11.425a1 1 0 0 0-1.414-1.414L11 9.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l3-3Z" clip-rule="evenodd"/></svg>
                                </div>
                            </div>
                            <div class="my-6 font-medium">kelengkapan profilmu <span class="text-primary">35%</span></div>
                            <p class="text-slate-500 mb-6 text-sm">Lengkapi profil Anda dengan detail yang tepat. Semakin lengkap profil Anda, semakin mudah bagi Anda untuk menemukan dan melamar posisi impian Anda</p>
                            <PartialsButton :path="`/seeker/profile`" class="px-5 text-center min-w-[15em] mb-0 text-sm">Lengkapi Profile</PartialsButton>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'seeker'
})
const isReady = ref(false);
const job = useJobStore();
onMounted(() => {
    isReady.value = true;
    job.getJobs(8);
})
</script>