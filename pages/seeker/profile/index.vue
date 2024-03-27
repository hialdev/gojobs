<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady" class="bg-slate-50">

        <div v-if="isShare" class="fixed bg-black/20 z-[999] top-0 bottom-0 start-0 end-0 p-5 flex items-center justify-center">
            <div class="bg-white p-7 rounded-lg max-w-[30em]">
                <div class="flex mb-3 pb-3 border-b items-center justify-between">
                    <h4 class="text-lg font-medium">Bagikan Profil</h4>
                    <div @click="isShare = false" class="cursor-pointer text-slate-500 hover:text-rose-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8"/></svg>
                    </div>
                </div>
                <div class="flex mb-3 w-full items-center justify-between gap-6 p-4 rounded-lg border">
                    <div class="font-medium text-xs flex-1">{{url?.protocol}}//{{url?.host}}/u/{{ profileData?.username }}</div>
                    <button class="text-primary text-sm" @click="copyToClipboard">Copy</button>
                </div>
                <div class="flex flex-wrap gap-4 mb-3 text-white">
                    <SocialShare
                        v-for="network in ['facebook', 'twitter', 'whatsapp','telegram', 'linkedin', 'email']"
                        :key="network"
                        :network="network"
                        :styled="true"
                        :label="false"
                        :url="`https://gojobs.id/u/${profileData?.username}`"
                        class="p-2 rounded-lg"
                    />
                </div>
                <p class="text-sm text-slate-500 mb-3">Pastikan anda mengidzinkan visibilitas profil anda agar dapat dilihat orang lain, <strong>Pergi ke Account Setting -> Notification -> Visibility</strong></p>
            </div>
        </div>

        <div class="container mx-auto p-8 px-0 md:px-8">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12">
                    <div class="relative flex flex-wrap items-center justify-end gap-4 my-5 px-5 lg:px-0">
                        
                        <PartialsButton :is_submit="true" @click="saveData" class="ms-auto border-2 border-primary text-sm" :primary="false">Simpan</PartialsButton>
                        <PartialsButton @click="downloadHandle" class="flex gap-5 items-center justify-between px-5 rounded-lg text-sm">Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/></svg>
                        </PartialsButton>

                        <button @click="isShare = true" class="p-2.5 rounded-3xl bg-slate-100 hover:bg-orange-100 hover:border-orange-100">
                            <div class="w-[24px] h-[24px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22Z" fill="#FA6900"/>
                                </svg>
                            </div>
                        </button>

                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4">
                    <div class="sticky text-xs md:text-sm top-0 mb-4 z-10 md:relative flex items-center gap-x-3 bg-white p-2 justify-center md:justify-start md:bg-transparent md:rounded-none">
                        <div @click="() => {page.fam = false; page.cv = true;}" class="hover:outline hover:outline-orange-500/30 cursor-pointer flex items-center gap-2 p-3 px-4 rounded-xl text-slate-500 hover:bg-orange-50" :class="[{'bg-orange-500 text-white hover:bg-orange-600' : page.cv}, {'' : !page.cv}]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"/><path stroke-linejoin="round" d="M3.5 5.94a2.22 2.22 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304c.351 0 .697.104 1.003.304c.307.199.563.486.746.834"/><path stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"/><path d="M3.5 8.5h7m-7 2.5h4"/></g></svg>
                            </div>
                            <span class="text-xs md:text-sm">Biodata / CV</span>
                        </div>
                        <div @click="() => { page.cv = false;page.fam = true;}" class="hover:outline hover:outline-orange-500/30 cursor-pointer flex items-center gap-2 p-3 px-4 rounded-xl text-slate-500 hover:bg-orange-50" :class="[{'bg-orange-500 text-white hover:bg-orange-600' : page.fam}, {'' : !page.fam}]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path d="M10 19s-5.143 2-6 9m34-9s5.143 2 6 9m-26-9s4.8 1.167 6 7m6-7s-4.8 1.167-6 7m-4 8s-4.2.75-6 6m14-6s4.2.75 6 6"/><circle cx="24" cy="31" r="5" stroke-linejoin="round"/><circle cx="34" cy="14" r="6" stroke-linejoin="round"/><circle cx="14" cy="14" r="6" stroke-linejoin="round"/></g></svg>
                            </div>
                            <span class="text-xs md:text-sm">Family Contact</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-none md:rounded-2xl p-6">
                        <div v-if="!show.editImageSosmed" class="flex flex-col items-center gap-1 border-b pb-5 relative">
                            <div @click="show.editImageSosmed = true" class="cursor-pointer absolute top-0 end-0 flex items-center justify-center text-slate-300 hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <NuxtImg :src="userStore?.detail?.profile?.image != null || userStore?.detail?.profile?.image != '' ? userStore?.detail?.profile?.image : `https://ui-avatars.com/api/?name=${userStore?.detail?.profile?.name}`" alt="Image Buat CV" width="150" height="150" class="block rounded-full border p-1" />
                            <h2 class="text-xl font-medium">{{userStore?.detail?.profile.name}}</h2>
                            <div>{{userStore?.detail?.profile?.role}}</div>
                            <div class="py-3 flex w-full items-center gap-x-3">
                                <hr class="bg-slate-100 h-[1px] w-full" />
                                <h3 class="text-slate-400 text-sm whitespace-nowrap">Social Media</h3>
                                <hr class="bg-slate-100 h-[1px] w-full" />
                            </div>
                            <div class="flex flex-col items-start justify-start w-full gap-3 my-3">
                                <div class="flex items-center gap-x-4">
                                    <NuxtLink :to="`https://instagram.com/${userStore?.detail?.profile?.sosmed?.ig}`" target="_blank" class="flex items-center p-2 rounded-xl text-red-600 bg-red-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/></svg>
                                    </NuxtLink>
                                    <span class="text-sm">{{userStore?.detail?.profile?.sosmed?.ig}}</span>
                                </div>
                                <div class="flex items-center gap-x-4">
                                    <NuxtLink :to="`https://twitter.com/${userStore?.detail?.profile?.sosmed?.x}`" target="_blank" class="flex items-center p-2 rounded-xl text-gray-600 bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                                    </NuxtLink>
                                    <span class="text-sm">{{userStore?.detail?.profile?.sosmed?.x}}</span>
                                </div>
                                <div class="flex items-center gap-x-4">
                                    <NuxtLink :to="`https://facebook.com/${userStore?.detail?.profile?.sosmed?.fb}`" target="_blank" class="flex items-center p-2 rounded-xl text-blue-600 bg-blue-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M11.6673 11.2503H13.7507L14.584 7.91699H11.6673V6.25033C11.6673 5.39199 11.6673 4.58366 13.334 4.58366H14.584V1.78366C14.3123 1.74783 13.2865 1.66699 12.2032 1.66699C9.94065 1.66699 8.33398 3.04783 8.33398 5.58366V7.91699H5.83398V11.2503H8.33398V18.3337H11.6673V11.2503Z" fill="#277DA1"/>
                                        </svg>
                                    </NuxtLink>
                                    <span class="text-sm">{{userStore?.detail?.profile?.sosmed?.fb}}</span>
                                </div>
                                <div class="flex items-center gap-x-4">
                                    <NuxtLink :to="`https://linkedin.com/in/${userStore?.detail?.profile?.sosmed?.in}`" target="_blank" class="flex items-center p-2 rounded-xl text-green-600 bg-green-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z" fill="#90BE6D"/>
                                        </svg>
                                    </NuxtLink> 
                                    <span class="text-sm">{{userStore?.detail?.profile?.sosmed?.in}}</span>
                                </div>
                                <div class="flex items-center gap-x-4">
                                    <NuxtLink :to="`${userStore?.detail?.profile?.sosmed?.others}`" target="_blank" class="flex items-center p-2 rounded-xl text-slate-600 bg-slate-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"/></svg>
                                    </NuxtLink> 
                                    <span class="text-sm">{{userStore?.detail?.profile?.sosmed?.others}}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="show.editImageSosmed" class="flex flex-col items-center md:gap-1 border-b pb-5 relative">
                            <div @click="saveData('editImageSosmed')" class="cursor-pointer absolute top-0 end-0 flex items-center justify-center text-slate-300 hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18m-6-8h9V6H6z"/></svg>
                            </div>
                            <PartialsImage :activeImage="dataStore.profile.image" @changeimage="(value) => {dataStore.profile.image = value; console.log(value)}" />
                            <span class="text-xs text-slate-500">Klik gambar untuk upload</span>
                            <PartialsInput :required="true" :submitted="submit.biodata" v-model="dataStore.profile.name" :modelValue="dataStore.profile.name" :inputClass="`text-center border-b rounded-none focus:rounded-3xl focus:border-transparent mb-0 w-full block`" :placeholder="`Nama Lengkap`" />
                            <PartialsInput :required="true" :submitted="submit.biodata" v-model="dataStore.profile.role" :modelValue="dataStore.profile.role" :inputClass="`text-center border-none focus:border-none focus:rounded-3xl rounded-none block mt-[-1em]`" :placeholder="`Role / Posisi`" />
                            <div class="text-sm text-gray-500 text-start">Social Media</div>
                            <div class="flex w-full flex-col gap-3 my-3">
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center justify-center p-2 rounded-xl text-red-600 bg-red-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/></svg>
                                    </div>
                                    <input v-model="dataStore.profile.sosmed.ig" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username instagram" />
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center justify-center p-2 rounded-xl text-gray-600 bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                                    </div>
                                    <input v-model="dataStore.profile.sosmed.x" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username twitter" />
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center justify-center p-2 rounded-xl text-sky-600 bg-sky-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M11.6673 11.2503H13.7507L14.584 7.91699H11.6673V6.25033C11.6673 5.39199 11.6673 4.58366 13.334 4.58366H14.584V1.78366C14.3123 1.74783 13.2865 1.66699 12.2032 1.66699C9.94065 1.66699 8.33398 3.04783 8.33398 5.58366V7.91699H5.83398V11.2503H8.33398V18.3337H11.6673V11.2503Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <input v-model="dataStore.profile.sosmed.fb" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username facebook" />
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center justify-center p-2 rounded-xl text-green-600 bg-green-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <input v-model="dataStore.profile.sosmed.in" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username linkedin" />
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center justify-center p-2 rounded-xl text-slate-600 bg-slate-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"/></svg>
                                    </div>
                                    <input v-model="dataStore.profile.sosmed.others" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="Link / Tautan pribadi lainnya (https://)" />
                                </div>
                            </div>
                        </div>

                        <ul v-if="!show.biodata" class="flex flex-col py-5 border-b">
                            <li class="flex items-center justify-between">
                                <h3 class="font-medium">Biodata</h3>
                                <div @click="show.biodata = true" class="cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_927_182)">
                                        <path d="M16.4844 9.33117H12.1875V5.58117H10.7812C11.2165 5.00008 11.4504 4.29287 11.4474 3.56684C11.4474 2.48715 10.9365 1.47266 10.1141 0.919336L9.76519 0.68457L9.41633 0.919336C8.59375 1.47273 8.08301 2.48719 8.08301 3.56684C8.08008 4.29288 8.31403 5.00008 8.74937 5.58113H7.1875V9.33113H3.51562C2.91495 9.33182 2.33908 9.57073 1.91434 9.99547C1.4896 10.4202 1.25068 10.9961 1.25 11.5968V18.6254C1.25037 18.9568 1.38219 19.2746 1.61653 19.5089C1.85087 19.7432 2.16859 19.8751 2.5 19.8754H17.5C17.8314 19.8751 18.1491 19.7432 18.3835 19.5089C18.6178 19.2746 18.7496 18.9568 18.75 18.6254V11.5968C18.7493 10.9961 18.5104 10.4203 18.0857 9.99551C17.6609 9.57077 17.085 9.33185 16.4844 9.33117ZM9.76519 2.27941C10.0382 2.61863 10.1974 3.07887 10.1974 3.56688C10.1974 4.05488 10.0382 4.51516 9.76519 4.85434C9.49219 4.51516 9.33301 4.05488 9.33301 3.56684C9.33301 3.07879 9.49219 2.61863 9.76519 2.27941ZM8.4375 6.83117H10.9375V9.33117H8.4375V6.83117ZM2.5 11.5968C2.50031 11.3275 2.60741 11.0694 2.79781 10.879C2.98821 10.6886 3.24636 10.5815 3.51562 10.5812H16.4844C16.7536 10.5815 17.0118 10.6886 17.2022 10.879C17.3926 11.0694 17.4997 11.3275 17.5 11.5968V12.8303L16.6562 13.2026C16.4912 13.2752 16.3129 13.3127 16.1326 13.3127C15.9524 13.3127 15.774 13.2752 15.609 13.2026L14.1406 12.5547L12.6719 13.2025C12.5069 13.2752 12.3285 13.3127 12.1482 13.3127C11.968 13.3127 11.7896 13.2752 11.6246 13.2025L10.1562 12.5546L8.6875 13.2025C8.52248 13.2751 8.34416 13.3126 8.16387 13.3126C7.98357 13.3126 7.80525 13.2751 7.64023 13.2025L6.17188 12.5547L4.7034 13.2025C4.53838 13.2751 4.36006 13.3126 4.17977 13.3126C3.99947 13.3126 3.82115 13.2751 3.65613 13.2025L2.5 12.6925V11.5968ZM17.5 18.6254H2.5V14.0588L3.15148 14.3462C3.47552 14.4888 3.82567 14.5624 4.17969 14.5624C4.53371 14.5624 4.88385 14.4888 5.20789 14.3462L6.17188 13.9209L7.1359 14.3462C7.45993 14.4888 7.81007 14.5624 8.16408 14.5624C8.51809 14.5624 8.86824 14.4888 9.19227 14.3462L10.1562 13.9209L11.1202 14.3462C11.4442 14.4888 11.7944 14.5624 12.1484 14.5624C12.5024 14.5624 12.8525 14.4888 13.1765 14.3462L14.1406 13.9209L15.1046 14.3462C15.4286 14.4888 15.7788 14.5624 16.1328 14.5624C16.4868 14.5624 16.8369 14.4888 17.1609 14.3462L17.5005 14.1964L17.5008 18.6254H17.5Z" fill="#797979"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_927_182">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="">{{userStore?.detail?.biodata?.birth_place == '' ? '-' : userStore?.detail?.biodata?.birth_place }}, {{userStore.detail.biodata.birth_date == null ? 'YYYY - MM - DD' : formatDate(userStore.detail.biodata.birth_date)}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M16.2495 2.375H13.1245C12.9587 2.375 12.7997 2.44085 12.6825 2.55806C12.5653 2.67527 12.4995 2.83424 12.4995 3C12.4995 3.16576 12.5653 3.32473 12.6825 3.44194C12.7997 3.55915 12.9587 3.625 13.1245 3.625H14.7409L12.776 5.58984C12.1991 5.05218 11.5032 4.65861 10.7451 4.44128C9.98698 4.22396 9.18823 4.18903 8.41406 4.33936C7.63989 4.4897 6.91226 4.82102 6.2906 5.30628C5.66894 5.79154 5.17088 6.41696 4.8371 7.13148C4.50332 7.84599 4.34329 8.62932 4.37007 9.4175C4.39686 10.2057 4.6097 10.9763 4.99122 11.6665C5.37273 12.3567 5.9121 12.9469 6.56527 13.3888C7.21844 13.8308 7.96688 14.1119 8.74947 14.2094V15.5H6.87447C6.70871 15.5 6.54974 15.5658 6.43253 15.6831C6.31532 15.8003 6.24947 15.9592 6.24947 16.125C6.24947 16.2908 6.31532 16.4497 6.43253 16.5669C6.54974 16.6842 6.70871 16.75 6.87447 16.75H8.74947V18.625C8.74947 18.7908 8.81532 18.9497 8.93253 19.0669C9.04974 19.1842 9.20871 19.25 9.37447 19.25C9.54023 19.25 9.6992 19.1842 9.81641 19.0669C9.93362 18.9497 9.99947 18.7908 9.99947 18.625V16.75H11.8745C12.0402 16.75 12.1992 16.6842 12.3164 16.5669C12.4336 16.4497 12.4995 16.2908 12.4995 16.125C12.4995 15.9592 12.4336 15.8003 12.3164 15.6831C12.1992 15.5658 12.0402 15.5 11.8745 15.5H9.99947V14.2094C10.8372 14.1047 11.6348 13.7894 12.3176 13.2928C13.0004 12.7963 13.5461 12.1347 13.9038 11.37C14.2615 10.6052 14.4195 9.76228 14.363 8.9199C14.3065 8.07753 14.0374 7.26324 13.5807 6.55313L15.6245 4.50859V6.125C15.6245 6.29076 15.6903 6.44973 15.8075 6.56694C15.9247 6.68415 16.0837 6.75 16.2495 6.75C16.4152 6.75 16.5742 6.68415 16.6914 6.56694C16.8086 6.44973 16.8745 6.29076 16.8745 6.125V3C16.8745 2.83424 16.8086 2.67527 16.6914 2.55806C16.5742 2.44085 16.4152 2.375 16.2495 2.375ZM9.37447 13C8.63279 13 7.90777 12.7801 7.29108 12.368C6.6744 11.956 6.19375 11.3703 5.90993 10.6851C5.6261 9.99984 5.55183 9.24584 5.69653 8.51841C5.84122 7.79098 6.19838 7.1228 6.72282 6.59835C7.24727 6.0739 7.91546 5.71675 8.64288 5.57206C9.37031 5.42736 10.1243 5.50162 10.8095 5.78545C11.4948 6.06928 12.0804 6.54993 12.4925 7.16661C12.9045 7.7833 13.1245 8.50832 13.1245 9.25C13.1234 10.2442 12.728 11.1975 12.025 11.9005C11.3219 12.6035 10.3687 12.999 9.37447 13Z" fill="#797979"/>
                                </svg>
                                <span class="">{{userStore?.detail?.biodata?.gender}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M6.4 3.5C3.97 3.5 2 5.47 2 7.9C2 12.3 7.2 16.3 10 17.2304C12.8 16.3 18 12.3 18 7.9C18 5.47 16.03 3.5 13.6 3.5C12.112 3.5 10.796 4.2388 10 5.3696C9.59427 4.79168 9.05526 4.32004 8.42861 3.9946C7.80196 3.66915 7.10612 3.4995 6.4 3.5Z" stroke="#797979" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="">{{userStore?.detail?.biodata?.marritage_status}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_927_194)">
                                        <mask id="mask0_927_194" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                        <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white"/>
                                        </mask>
                                        <g mask="url(#mask0_927_194)">
                                        <path d="M4.87109 12.0229L6.3373 10.8357L7.39445 2.54863C7.48637 1.90348 8.03879 1.42418 8.69043 1.42418C9.41336 1.42418 9.99945 2.01027 9.99945 2.7332V11.5376C9.99945 11.8709 9.86703 12.1905 9.63141 12.4262L7.55461 14.5029" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.19738 11.3381L8.03199 15.2336L4.72488 18.5762L0.585938 14.1228L4.19738 11.3381Z" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.1284 12.0229L13.6621 10.8357L12.605 2.54863C12.5131 1.90348 11.9607 1.42418 11.309 1.42418C10.5861 1.42418 10 2.01027 10 2.7332V11.5376C10 11.8709 10.1324 12.1905 10.368 12.4262L12.4448 14.5029" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.8034 11.3381L11.9688 15.2336L15.2759 18.5762L19.4148 14.1228L15.8034 11.3381Z" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_927_194">
                                        <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="">{{userStore?.detail?.biodata?.religion}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 6.66667C9.34073 6.66667 8.69626 6.86216 8.1481 7.22844C7.59994 7.59471 7.17269 8.1153 6.9204 8.72439C6.66811 9.33348 6.6021 10.0037 6.73072 10.6503C6.85933 11.2969 7.1768 11.8908 7.64298 12.357C8.10915 12.8232 8.7031 13.1407 9.3497 13.2693C9.9963 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4001 12.7716 11.8519C13.1378 11.3037 13.3333 10.6593 13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667ZM10 12C9.60444 12 9.21776 11.8827 8.88886 11.6629C8.55996 11.4432 8.30362 11.1308 8.15224 10.7654C8.00087 10.3999 7.96126 9.99778 8.03843 9.60982C8.1156 9.22186 8.30608 8.86549 8.58579 8.58579C8.86549 8.30608 9.22186 8.1156 9.60982 8.03843C9.99778 7.96126 10.3999 8.00087 10.7654 8.15224C11.1308 8.30362 11.4432 8.55996 11.6629 8.88886C11.8827 9.21776 12 9.60444 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12ZM19.3333 4H0.666667C0.489856 4 0.320286 4.07024 0.195262 4.19526C0.0702379 4.32029 0 4.48986 0 4.66667V15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16H19.3333C19.5101 16 19.6797 15.9298 19.8047 15.8047C19.9298 15.6797 20 15.5101 20 15.3333V4.66667C20 4.48986 19.9298 4.32029 19.8047 4.19526C19.6797 4.07024 19.5101 4 19.3333 4ZM15.4708 14.6667H4.52917C4.30534 13.9097 3.89567 13.2207 3.33749 12.6625C2.7793 12.1043 2.09033 11.6947 1.33333 11.4708V8.52917C2.09033 8.30534 2.7793 7.89567 3.33749 7.33749C3.89567 6.7793 4.30534 6.09033 4.52917 5.33333H15.4708C15.6947 6.09033 16.1043 6.7793 16.6625 7.33749C17.2207 7.89567 17.9097 8.30534 18.6667 8.52917V11.4708C17.9097 11.6947 17.2207 12.1043 16.6625 12.6625C16.1043 13.2207 15.6947 13.9097 15.4708 14.6667ZM18.6667 7.11417C17.867 6.77033 17.2297 6.13297 16.8858 5.33333H18.6667V7.11417ZM3.11417 5.33333C2.77033 6.13297 2.13297 6.77033 1.33333 7.11417V5.33333H3.11417ZM1.33333 12.8858C2.13297 13.2297 2.77033 13.867 3.11417 14.6667H1.33333V12.8858ZM16.8858 14.6667C17.2297 13.867 17.867 13.2297 18.6667 12.8858V14.6667H16.8858Z" fill="#797979"/>
                                </svg>
                                <span class="">{{userStore?.detail?.biodata?.expected_salary}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-500" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1.45A3.08 3.08 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.08 3.08 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34a1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/></svg>
                                <span class="">{{userStore?.detail?.biodata?.weight_body}}kg / {{userStore?.detail?.biodata?.height_body}}cm</span>
                            </li>
                        </ul>
                        <ul v-if="show.biodata" class="flex flex-col py-5 border-b">
                            <li class="flex items-center justify-between">
                                <h3 class="font-medium">Biodata</h3>
                                <div @click="saveData('biodata')" class="cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18m-6-8h9V6H6z"/></svg>
                                </div>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_927_182)">
                                        <path d="M16.4844 9.33117H12.1875V5.58117H10.7812C11.2165 5.00008 11.4504 4.29287 11.4474 3.56684C11.4474 2.48715 10.9365 1.47266 10.1141 0.919336L9.76519 0.68457L9.41633 0.919336C8.59375 1.47273 8.08301 2.48719 8.08301 3.56684C8.08008 4.29288 8.31403 5.00008 8.74937 5.58113H7.1875V9.33113H3.51562C2.91495 9.33182 2.33908 9.57073 1.91434 9.99547C1.4896 10.4202 1.25068 10.9961 1.25 11.5968V18.6254C1.25037 18.9568 1.38219 19.2746 1.61653 19.5089C1.85087 19.7432 2.16859 19.8751 2.5 19.8754H17.5C17.8314 19.8751 18.1491 19.7432 18.3835 19.5089C18.6178 19.2746 18.7496 18.9568 18.75 18.6254V11.5968C18.7493 10.9961 18.5104 10.4203 18.0857 9.99551C17.6609 9.57077 17.085 9.33185 16.4844 9.33117ZM9.76519 2.27941C10.0382 2.61863 10.1974 3.07887 10.1974 3.56688C10.1974 4.05488 10.0382 4.51516 9.76519 4.85434C9.49219 4.51516 9.33301 4.05488 9.33301 3.56684C9.33301 3.07879 9.49219 2.61863 9.76519 2.27941ZM8.4375 6.83117H10.9375V9.33117H8.4375V6.83117ZM2.5 11.5968C2.50031 11.3275 2.60741 11.0694 2.79781 10.879C2.98821 10.6886 3.24636 10.5815 3.51562 10.5812H16.4844C16.7536 10.5815 17.0118 10.6886 17.2022 10.879C17.3926 11.0694 17.4997 11.3275 17.5 11.5968V12.8303L16.6562 13.2026C16.4912 13.2752 16.3129 13.3127 16.1326 13.3127C15.9524 13.3127 15.774 13.2752 15.609 13.2026L14.1406 12.5547L12.6719 13.2025C12.5069 13.2752 12.3285 13.3127 12.1482 13.3127C11.968 13.3127 11.7896 13.2752 11.6246 13.2025L10.1562 12.5546L8.6875 13.2025C8.52248 13.2751 8.34416 13.3126 8.16387 13.3126C7.98357 13.3126 7.80525 13.2751 7.64023 13.2025L6.17188 12.5547L4.7034 13.2025C4.53838 13.2751 4.36006 13.3126 4.17977 13.3126C3.99947 13.3126 3.82115 13.2751 3.65613 13.2025L2.5 12.6925V11.5968ZM17.5 18.6254H2.5V14.0588L3.15148 14.3462C3.47552 14.4888 3.82567 14.5624 4.17969 14.5624C4.53371 14.5624 4.88385 14.4888 5.20789 14.3462L6.17188 13.9209L7.1359 14.3462C7.45993 14.4888 7.81007 14.5624 8.16408 14.5624C8.51809 14.5624 8.86824 14.4888 9.19227 14.3462L10.1562 13.9209L11.1202 14.3462C11.4442 14.4888 11.7944 14.5624 12.1484 14.5624C12.5024 14.5624 12.8525 14.4888 13.1765 14.3462L14.1406 13.9209L15.1046 14.3462C15.4286 14.4888 15.7788 14.5624 16.1328 14.5624C16.4868 14.5624 16.8369 14.4888 17.1609 14.3462L17.5005 14.1964L17.5008 18.6254H17.5Z" fill="#797979"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_927_182">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="w-full">
                                    <PartialsSelect :required="true" :submitted="submit.biodata" :selectedData="dataStore.biodata.birth_place" :options="options.citys" :customClass="`p-2 px-3 border-b focus:outline-none block w-full rounded-none w-full`" class="relative z-[16]" @selected="(value) => {dataStore.biodata.birth_place = value?.value}" :label="`Tempat Lahir`"/>
                                    <input type="date" class="p-2 px-3 border-b focus:outline-none block w-full" v-model="dataStore.biodata.birth_date" placeholder="Tgl Lahir" required/>
                                </div>
                            </li>
                            <li class="flex items-center gap-4 text-sm w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M16.2495 2.375H13.1245C12.9587 2.375 12.7997 2.44085 12.6825 2.55806C12.5653 2.67527 12.4995 2.83424 12.4995 3C12.4995 3.16576 12.5653 3.32473 12.6825 3.44194C12.7997 3.55915 12.9587 3.625 13.1245 3.625H14.7409L12.776 5.58984C12.1991 5.05218 11.5032 4.65861 10.7451 4.44128C9.98698 4.22396 9.18823 4.18903 8.41406 4.33936C7.63989 4.4897 6.91226 4.82102 6.2906 5.30628C5.66894 5.79154 5.17088 6.41696 4.8371 7.13148C4.50332 7.84599 4.34329 8.62932 4.37007 9.4175C4.39686 10.2057 4.6097 10.9763 4.99122 11.6665C5.37273 12.3567 5.9121 12.9469 6.56527 13.3888C7.21844 13.8308 7.96688 14.1119 8.74947 14.2094V15.5H6.87447C6.70871 15.5 6.54974 15.5658 6.43253 15.6831C6.31532 15.8003 6.24947 15.9592 6.24947 16.125C6.24947 16.2908 6.31532 16.4497 6.43253 16.5669C6.54974 16.6842 6.70871 16.75 6.87447 16.75H8.74947V18.625C8.74947 18.7908 8.81532 18.9497 8.93253 19.0669C9.04974 19.1842 9.20871 19.25 9.37447 19.25C9.54023 19.25 9.6992 19.1842 9.81641 19.0669C9.93362 18.9497 9.99947 18.7908 9.99947 18.625V16.75H11.8745C12.0402 16.75 12.1992 16.6842 12.3164 16.5669C12.4336 16.4497 12.4995 16.2908 12.4995 16.125C12.4995 15.9592 12.4336 15.8003 12.3164 15.6831C12.1992 15.5658 12.0402 15.5 11.8745 15.5H9.99947V14.2094C10.8372 14.1047 11.6348 13.7894 12.3176 13.2928C13.0004 12.7963 13.5461 12.1347 13.9038 11.37C14.2615 10.6052 14.4195 9.76228 14.363 8.9199C14.3065 8.07753 14.0374 7.26324 13.5807 6.55313L15.6245 4.50859V6.125C15.6245 6.29076 15.6903 6.44973 15.8075 6.56694C15.9247 6.68415 16.0837 6.75 16.2495 6.75C16.4152 6.75 16.5742 6.68415 16.6914 6.56694C16.8086 6.44973 16.8745 6.29076 16.8745 6.125V3C16.8745 2.83424 16.8086 2.67527 16.6914 2.55806C16.5742 2.44085 16.4152 2.375 16.2495 2.375ZM9.37447 13C8.63279 13 7.90777 12.7801 7.29108 12.368C6.6744 11.956 6.19375 11.3703 5.90993 10.6851C5.6261 9.99984 5.55183 9.24584 5.69653 8.51841C5.84122 7.79098 6.19838 7.1228 6.72282 6.59835C7.24727 6.0739 7.91546 5.71675 8.64288 5.57206C9.37031 5.42736 10.1243 5.50162 10.8095 5.78545C11.4948 6.06928 12.0804 6.54993 12.4925 7.16661C12.9045 7.7833 13.1245 8.50832 13.1245 9.25C13.1234 10.2442 12.728 11.1975 12.025 11.9005C11.3219 12.6035 10.3687 12.999 9.37447 13Z" fill="#797979"/>
                                </svg>
                                <PartialsSelect :required="true" :submitted="submit.biodata" :selectedData="dataStore?.biodata?.gender" @selected="(value) => { dataStore.biodata.gender = value.key }" :options="[{key: 'male', value: 'Laki Laki'},{key: 'female', value: 'Perempuan'}]" class="flex-1 relative z-[14]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Gender`" />
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M6.4 3.5C3.97 3.5 2 5.47 2 7.9C2 12.3 7.2 16.3 10 17.2304C12.8 16.3 18 12.3 18 7.9C18 5.47 16.03 3.5 13.6 3.5C12.112 3.5 10.796 4.2388 10 5.3696C9.59427 4.79168 9.05526 4.32004 8.42861 3.9946C7.80196 3.66915 7.10612 3.4995 6.4 3.5Z" stroke="#797979" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <PartialsSelect :required="true" :submitted="submit.biodata" :selectedData="dataStore?.biodata?.marritage_status" @selected="(value) => { dataStore.biodata.marritage_status = value.key }" :options="[{key: 'single', value: 'Single'}, {key: 'married', value: 'Menikah'}]" class="flex-1 relative z-[13]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Status Pernikahan`" />
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_927_194)">
                                        <mask id="mask0_927_194" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                        <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white"/>
                                        </mask>
                                        <g mask="url(#mask0_927_194)">
                                        <path d="M4.87109 12.0229L6.3373 10.8357L7.39445 2.54863C7.48637 1.90348 8.03879 1.42418 8.69043 1.42418C9.41336 1.42418 9.99945 2.01027 9.99945 2.7332V11.5376C9.99945 11.8709 9.86703 12.1905 9.63141 12.4262L7.55461 14.5029" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.19738 11.3381L8.03199 15.2336L4.72488 18.5762L0.585938 14.1228L4.19738 11.3381Z" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.1284 12.0229L13.6621 10.8357L12.605 2.54863C12.5131 1.90348 11.9607 1.42418 11.309 1.42418C10.5861 1.42418 10 2.01027 10 2.7332V11.5376C10 11.8709 10.1324 12.1905 10.368 12.4262L12.4448 14.5029" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15.8034 11.3381L11.9688 15.2336L15.2759 18.5762L19.4148 14.1228L15.8034 11.3381Z" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_927_194">
                                        <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <PartialsSelect :required="true" :submitted="submit.biodata" :selectedData="capitalize(dataStore.biodata.religion)" @selected="(value) => { dataStore.biodata.religion = value.key; }" :options="options.religions" class="flex-1 relative z-[12]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Agama`" />
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 6.66667C9.34073 6.66667 8.69626 6.86216 8.1481 7.22844C7.59994 7.59471 7.17269 8.1153 6.9204 8.72439C6.66811 9.33348 6.6021 10.0037 6.73072 10.6503C6.85933 11.2969 7.1768 11.8908 7.64298 12.357C8.10915 12.8232 8.7031 13.1407 9.3497 13.2693C9.9963 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4001 12.7716 11.8519C13.1378 11.3037 13.3333 10.6593 13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667ZM10 12C9.60444 12 9.21776 11.8827 8.88886 11.6629C8.55996 11.4432 8.30362 11.1308 8.15224 10.7654C8.00087 10.3999 7.96126 9.99778 8.03843 9.60982C8.1156 9.22186 8.30608 8.86549 8.58579 8.58579C8.86549 8.30608 9.22186 8.1156 9.60982 8.03843C9.99778 7.96126 10.3999 8.00087 10.7654 8.15224C11.1308 8.30362 11.4432 8.55996 11.6629 8.88886C11.8827 9.21776 12 9.60444 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12ZM19.3333 4H0.666667C0.489856 4 0.320286 4.07024 0.195262 4.19526C0.0702379 4.32029 0 4.48986 0 4.66667V15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16H19.3333C19.5101 16 19.6797 15.9298 19.8047 15.8047C19.9298 15.6797 20 15.5101 20 15.3333V4.66667C20 4.48986 19.9298 4.32029 19.8047 4.19526C19.6797 4.07024 19.5101 4 19.3333 4ZM15.4708 14.6667H4.52917C4.30534 13.9097 3.89567 13.2207 3.33749 12.6625C2.7793 12.1043 2.09033 11.6947 1.33333 11.4708V8.52917C2.09033 8.30534 2.7793 7.89567 3.33749 7.33749C3.89567 6.7793 4.30534 6.09033 4.52917 5.33333H15.4708C15.6947 6.09033 16.1043 6.7793 16.6625 7.33749C17.2207 7.89567 17.9097 8.30534 18.6667 8.52917V11.4708C17.9097 11.6947 17.2207 12.1043 16.6625 12.6625C16.1043 13.2207 15.6947 13.9097 15.4708 14.6667ZM18.6667 7.11417C17.867 6.77033 17.2297 6.13297 16.8858 5.33333H18.6667V7.11417ZM3.11417 5.33333C2.77033 6.13297 2.13297 6.77033 1.33333 7.11417V5.33333H3.11417ZM1.33333 12.8858C2.13297 13.2297 2.77033 13.867 3.11417 14.6667H1.33333V12.8858ZM16.8858 14.6667C17.2297 13.867 17.867 13.2297 18.6667 12.8858V14.6667H16.8858Z" fill="#797979"/>
                                </svg>
                                <input v-model="dataStore.biodata.expected_salary" type="number" class="p-2 px-3 border-b focus:outline-none block w-full" placeholder="expetasi gaji (Rupiah)" required/>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-500" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1.45A3.08 3.08 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.08 3.08 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34a1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/></svg>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2">
                                        <input required v-model="dataStore.biodata.weight_body" type="number" class="p-2 border-b focus:outline-none max-w-[5em]" placeholder="BB" />
                                        kg
                                    </div>
                                    /
                                    <div class="flex items-center gap-2">
                                        <input required v-model="dataStore.biodata.height_body" type="number" class="p-2 border-b focus:outline-none max-w-[5em]" placeholder="TB" />
                                        cm
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul v-if="!show.informasi" class="flex flex-col py-5">
                            <li class="flex items-center justify-between">
                                <h3 class="font-medium">Informasi</h3>
                                <div @click="show.informasi = true" class="cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.3727 12.8795L13.6922 11.2303L13.682 11.2256C13.491 11.1439 13.2825 11.1111 13.0756 11.1302C12.8687 11.1493 12.6698 11.2197 12.4969 11.335C12.4765 11.3484 12.457 11.3631 12.4383 11.3787L10.5367 12.9998C9.33204 12.4147 8.08829 11.1803 7.50313 9.99125L9.12657 8.06078C9.14219 8.04125 9.15704 8.02172 9.1711 8.00062C9.28394 7.8282 9.35239 7.63056 9.37039 7.42529C9.38838 7.22002 9.35534 7.01348 9.27423 6.82406V6.81469L7.62032 3.12797C7.51309 2.88052 7.3287 2.67438 7.09468 2.54034C6.86067 2.4063 6.58958 2.35153 6.32188 2.38422C5.26326 2.52352 4.29155 3.04341 3.58824 3.84679C2.88492 4.65017 2.49809 5.6821 2.50001 6.74984C2.50001 12.953 7.54688 17.9998 13.75 17.9998C14.8177 18.0018 15.8497 17.6149 16.6531 16.9116C17.4564 16.2083 17.9763 15.2366 18.1156 14.178C18.1484 13.9104 18.0937 13.6393 17.9598 13.4053C17.8259 13.1713 17.62 12.9869 17.3727 12.8795ZM13.75 16.7498C11.0987 16.7469 8.55687 15.6924 6.68214 13.8177C4.8074 11.943 3.7529 9.40112 3.75001 6.74984C3.74707 5.98694 4.02192 5.24906 4.52324 4.67399C5.02456 4.09892 5.71806 3.72599 6.47423 3.62484C6.47392 3.62796 6.47392 3.6311 6.47423 3.63422L8.11485 7.30609L6.50001 9.2389C6.48362 9.25776 6.46873 9.27788 6.45548 9.29906C6.33791 9.47947 6.26894 9.68718 6.25525 9.90208C6.24157 10.117 6.28362 10.3318 6.37735 10.5256C7.08516 11.9733 8.54376 13.4209 10.007 14.128C10.2023 14.2208 10.4184 14.2614 10.634 14.2458C10.8497 14.2302 11.0576 14.1589 11.2375 14.0389C11.2576 14.0254 11.2769 14.0108 11.2953 13.9952L13.1945 12.3748L16.8664 14.0194H16.875C16.7751 14.7766 16.4027 15.4715 15.8275 15.9741C15.2524 16.4766 14.5138 16.7524 13.75 16.7498Z" fill="#797979"/>
                                </svg>
                                <span class="">{{userStore?.detail?.profile?.phone}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_441_1566)">
                                        <path d="M13.7367 10.4797L18.8625 6.02634V14.8822L13.7367 10.4797ZM7.13167 11.2338L8.93167 12.7963C9.21417 13.0363 9.5825 13.1813 9.985 13.1813H9.99917H10.01C10.4133 13.1813 10.7817 13.0355 11.0675 12.7938L11.065 12.7955L12.865 11.233L18.3367 15.9322H1.6625L7.13167 11.2338ZM1.655 4.97051H18.3467L10.3292 11.9338C10.239 12.0051 10.1274 12.0439 10.0125 12.0438H10.0008H9.99C9.87466 12.044 9.76269 12.0049 9.6725 11.933L9.67333 11.9338L1.655 4.97051ZM1.1375 6.02551L6.2625 10.4788L1.1375 14.8788V6.02551ZM19.1375 3.99134C18.9375 3.89134 18.7025 3.83301 18.4533 3.83301H1.54917C1.30763 3.83307 1.06942 3.88927 0.853333 3.99717L0.8625 3.99301C0.603811 4.1206 0.385956 4.31799 0.233545 4.56288C0.0811339 4.80777 0.000239457 5.0904 0 5.37884L0 15.5222C0.00044117 15.9327 0.16371 16.3263 0.453984 16.6165C0.744257 16.9068 1.13783 17.0701 1.54833 17.0705H18.4508C18.8613 17.0701 19.2549 16.9068 19.5452 16.6165C19.8355 16.3263 19.9987 15.9327 19.9992 15.5222V5.37884C19.9992 4.77301 19.65 4.24801 19.1417 3.99551L19.1325 3.99134H19.1375Z" fill="#797979"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_441_1566">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="">{{userStore?.detail?.profile?.email}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12"/><path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6"/><path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"/><path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"/></g></svg>
                                </div>
                                <span class="">{{userStore?.detail?.profile?.province != null ? dataNormal?.profile?.province : '-'}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"/><rect width="8" height="16" x="8" y="26" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34h1"/><rect width="24" height="38" x="16" y="4" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path fill="currentColor" d="M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z"/></g></svg>
                                </div>
                                <span class="">{{userStore?.detail?.profile?.city != null ? dataNormal?.profile?.city : '-'}}</span>
                            </li>
                            <li class="flex items-start gap-4 text-sm">
                                <div>
                                    <svg class="text-slate-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" clip-rule="evenodd"><path d="M7.5 8.495a2 2 0 0 0 2-1.999a2 2 0 0 0-4 0a2 2 0 0 0 2 1.999Z"/><path d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z"/></g></svg>
                                </div>
                                <span class="">{{userStore?.detail?.profile?.address}}</span>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z"/><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87m-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z"/></svg>
                                </div>
                                <span class="">{{userStore?.detail?.profile?.postal_code}}</span>
                            </li>
                        </ul>
                        <ul v-if="show.informasi" class="flex flex-col py-5">
                            <li class="flex items-center justify-between">
                                <h3 class="font-medium">Informasi</h3>
                                <div @click="saveData('informasi')" class="cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18m-6-8h9V6H6z"/></svg>
                                </div>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.3727 12.8795L13.6922 11.2303L13.682 11.2256C13.491 11.1439 13.2825 11.1111 13.0756 11.1302C12.8687 11.1493 12.6698 11.2197 12.4969 11.335C12.4765 11.3484 12.457 11.3631 12.4383 11.3787L10.5367 12.9998C9.33204 12.4147 8.08829 11.1803 7.50313 9.99125L9.12657 8.06078C9.14219 8.04125 9.15704 8.02172 9.1711 8.00062C9.28394 7.8282 9.35239 7.63056 9.37039 7.42529C9.38838 7.22002 9.35534 7.01348 9.27423 6.82406V6.81469L7.62032 3.12797C7.51309 2.88052 7.3287 2.67438 7.09468 2.54034C6.86067 2.4063 6.58958 2.35153 6.32188 2.38422C5.26326 2.52352 4.29155 3.04341 3.58824 3.84679C2.88492 4.65017 2.49809 5.6821 2.50001 6.74984C2.50001 12.953 7.54688 17.9998 13.75 17.9998C14.8177 18.0018 15.8497 17.6149 16.6531 16.9116C17.4564 16.2083 17.9763 15.2366 18.1156 14.178C18.1484 13.9104 18.0937 13.6393 17.9598 13.4053C17.8259 13.1713 17.62 12.9869 17.3727 12.8795ZM13.75 16.7498C11.0987 16.7469 8.55687 15.6924 6.68214 13.8177C4.8074 11.943 3.7529 9.40112 3.75001 6.74984C3.74707 5.98694 4.02192 5.24906 4.52324 4.67399C5.02456 4.09892 5.71806 3.72599 6.47423 3.62484C6.47392 3.62796 6.47392 3.6311 6.47423 3.63422L8.11485 7.30609L6.50001 9.2389C6.48362 9.25776 6.46873 9.27788 6.45548 9.29906C6.33791 9.47947 6.26894 9.68718 6.25525 9.90208C6.24157 10.117 6.28362 10.3318 6.37735 10.5256C7.08516 11.9733 8.54376 13.4209 10.007 14.128C10.2023 14.2208 10.4184 14.2614 10.634 14.2458C10.8497 14.2302 11.0576 14.1589 11.2375 14.0389C11.2576 14.0254 11.2769 14.0108 11.2953 13.9952L13.1945 12.3748L16.8664 14.0194H16.875C16.7751 14.7766 16.4027 15.4715 15.8275 15.9741C15.2524 16.4766 14.5138 16.7524 13.75 16.7498Z" fill="#797979"/>
                                </svg>
                                <input :value="dataStore.profile.phone" type="number" class="p-2 px-3 border-b focus:outline-none block w-full" placeholder="No telp/Whatsapp" disabled/>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_441_1566)">
                                        <path d="M13.7367 10.4797L18.8625 6.02634V14.8822L13.7367 10.4797ZM7.13167 11.2338L8.93167 12.7963C9.21417 13.0363 9.5825 13.1813 9.985 13.1813H9.99917H10.01C10.4133 13.1813 10.7817 13.0355 11.0675 12.7938L11.065 12.7955L12.865 11.233L18.3367 15.9322H1.6625L7.13167 11.2338ZM1.655 4.97051H18.3467L10.3292 11.9338C10.239 12.0051 10.1274 12.0439 10.0125 12.0438H10.0008H9.99C9.87466 12.044 9.76269 12.0049 9.6725 11.933L9.67333 11.9338L1.655 4.97051ZM1.1375 6.02551L6.2625 10.4788L1.1375 14.8788V6.02551ZM19.1375 3.99134C18.9375 3.89134 18.7025 3.83301 18.4533 3.83301H1.54917C1.30763 3.83307 1.06942 3.88927 0.853333 3.99717L0.8625 3.99301C0.603811 4.1206 0.385956 4.31799 0.233545 4.56288C0.0811339 4.80777 0.000239457 5.0904 0 5.37884L0 15.5222C0.00044117 15.9327 0.16371 16.3263 0.453984 16.6165C0.744257 16.9068 1.13783 17.0701 1.54833 17.0705H18.4508C18.8613 17.0701 19.2549 16.9068 19.5452 16.6165C19.8355 16.3263 19.9987 15.9327 19.9992 15.5222V5.37884C19.9992 4.77301 19.65 4.24801 19.1417 3.99551L19.1325 3.99134H19.1375Z" fill="#797979"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_441_1566">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <input :value="dataStore.profile.email" type="email" class="p-2 px-3 border-b focus:outline-none block w-full" placeholder="Email" disabled/>
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <div class="text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12"/><path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6"/><path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"/><path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"/></g></svg>
                                </div>
                                <PartialsSelect :required="true" :submitted="submit.biodata" :selectedData="dataStore?.profile?.province" @selected="handleSelectedProvince" :options="options.provinces" class="flex-1 relative z-[12]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Provinsi`" />
                            </li>
                            <li class="flex items-center gap-4 text-sm">
                                <div class="text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"/><rect width="8" height="16" x="8" y="26" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34h1"/><rect width="24" height="38" x="16" y="4" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path fill="currentColor" d="M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z"/></g></svg>
                                </div>
                                <PartialsSelect :required="true" :submitted="submit.biodata" :selectedData="dataStore?.profile?.city" @selected="(value) => {dataStore.profile.city = value.key}" :options="options.filteredCitys" class="flex-1 relative z-10" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Kota`" />
                            </li>
                            <li class="flex items-start gap-4 text-sm">
                                <div class="text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" clip-rule="evenodd"><path d="M7.5 8.495a2 2 0 0 0 2-1.999a2 2 0 0 0-4 0a2 2 0 0 0 2 1.999Z"/><path d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z"/></g></svg>
                                </div>
                                <textarea v-model="dataStore.profile.address" class="p-2 px-3 border-b focus:outline-none block w-full" placeholder="Alamat lengkap domisili" ></textarea>
                            </li>
                            <li class="flex items-start gap-4 text-sm">
                                <div class="text-slate-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z"/><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87m-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z"/></svg>
                                </div>
                                <input type="number" v-model="dataStore.profile.postal_code" class="p-2 px-3 m-0 border-b focus:outline-none block w-full" placeholder="Kode Pos" />
                            </li>
                        </ul>
                    </div>
                    <div class="mt-4 p-5 rounded-xl bg-white">
                        <h3 class="font-medium pb-3 border-b mb-3">Dokumen</h3>
                        <div class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">KTP</div>
                            <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.id_card" >{{docStore.documents.important.id_number}}</a>
                            </div>
                            <PartialsInput v-model="document.ktp.number" :modelValue="document.ktp.number" :typeInput="`number`" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`No KTP`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'ktp')" />
                            <div v-if="error.ktp" class="text-xs mt-1 text-red-500">{{ error.ktp }}</div>
                        </div>
                        <div class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">CV / Resume</div>
                            <div v-if="docStore.documents?.profile?.resume != null && docStore.documents?.profile?.resume != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents?.profile?.resume" >Resume</a>
                            </div>
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'resume')" />
                            <div v-if="error.resume" class="text-xs mt-1 text-red-500">{{ error.resume }}</div>
                        </div>

                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Cover Letter</div>
                            <div v-if="docStore.documents.important.cover_letter != null && docStore.documents.important.cover_letter != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.cover_letter" >Cover Letter</a>
                            </div>
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'cover')" />
                            <div v-if="error.cover" class="text-xs mt-1 text-red-500">{{ error.cover }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Kartu Keluarga</div>
                            <div v-if="docStore.documents.important.family_card != null && docStore.documents.important.family_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.family_card" >{{docStore.documents.important.family_number}}</a>
                            </div>
                            <PartialsInput v-model="document.kk.number" :modelValue="document.kk.number" :typeInput="`number`" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`No Kartu Keluarga`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'kk')" />
                            <div v-if="error.kk" class="text-xs mt-1 text-red-500">{{ error.kk }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">NPWP</div>
                            <div v-if="docStore.documents.important.npwp_card != null && docStore.documents.important.npwp_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.npwp_card" >{{docStore.documents.important.npwp_number}}</a>
                            </div>
                            <PartialsInput v-model="document.npwp.number" :modelValue="document.npwp.number" :typeInput="`number`" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`No NPWP`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'npwp')" />
                            <div v-if="error.npwp" class="text-xs mt-1 text-red-500">{{ error.npwp }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Ijazah</div>
                            <div v-if="docStore.documents.important.degree_card != null && docStore.documents.important.degree_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.degree_card" >Ijazah</a>
                            </div>
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'ijazah')" />
                            <div v-if="error.ijazah" class="text-xs mt-1 text-red-500">{{ error.ijazah }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Transkrip Nilai</div>
                            <div v-if="docStore.documents.important.transcript_card != null && docStore.documents.important.transcript_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.transcript_card" >Transkrip</a>
                            </div>
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'transkrip')" />
                            <div v-if="error.transkrip" class="text-xs mt-1 text-red-500">{{ error.transkrip }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">SIM A/B</div>
                            <div v-if="docStore.documents.important.driving_car_card != null && docStore.documents.important.driving_car_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.driving_car_card" >{{docStore.documents.important.driving_car_number}}</a>
                            </div>
                            <PartialsInput v-model="document.simab.number" :modelValue="document.simab.number" :typeInput="`number`" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`SIM A/B`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'simab')" />
                            <div v-if="error.simab" class="text-xs mt-1 text-red-500">{{ error.simab }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">SIM C</div>
                            <div v-if="docStore.documents.important.driving_car_card != null && docStore.documents.important.driving_car_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.driving_car_card" >{{docStore.documents.important.driving_car_number}}</a>
                            </div>
                            <PartialsInput v-model="document.simc.number" :modelValue="document.simc.number" :typeInput="`number`" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`SIM C`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'simc')" />
                            <div v-if="error.simc" class="text-xs mt-1 text-red-500">{{ error.simc }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">BPJS</div>
                            <div v-if="docStore.documents.important.bpjs_card != null && docStore.documents.important.bpjs_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.bpjs_card" >{{docStore.documents.important.bpjs_number}}</a>
                            </div>
                            <PartialsInput v-model="document.bpjs.number" :modelValue="document.bpjs.number" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`No BPJS`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'bpjs')" />
                            <div v-if="error.bpjs" class="text-xs mt-1 text-red-500">{{ error.bpjs }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Jamsostek</div>
                            <div v-if="docStore.documents.important.jamsostek_card != null && docStore.documents.important.jamsostek_card != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents.important.jamsostek_card" >{{docStore.documents.important.jamsostek_number}}</a>
                            </div>
                            <PartialsInput v-model="document.jamsostek.number" :modelValue="document.jamsostek.number" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`No Jamsostek`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'jamsostek')" />
                            <div v-if="error.jamsostek" class="text-xs mt-1 text-red-500">{{ error.jamsostek }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Vaksin 1</div>
                            <div v-if="docStore.documents?.vaccine?.vaccine_card_1 != null && docStore.documents?.vaccine?.vaccine_card_1 != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents?.vaccine?.vaccine_card_1" >Vaksin 1</a>
                            </div>
                            <PartialsInput v-model="document.vaksin1.date" :modelValue="document.vaksin1.date" :required="true" :submitted="submit.document" :typeInput="`date`" :inputClass="`border border-slate-200`" :placeholder="`Tanggal Vaksin 1`" />
                            <PartialsInput v-model="document.vaksin1.location" :modelValue="document.vaksin1.location" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`Lokasi Vaksin 1`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'vaksin1')" />
                            <div v-if="error.vaksin1" class="text-xs mt-1 text-red-500">{{ error.vaksin1 }}</div>
                        </div>
                        <div v-if="docStore.documents.important.id_card != null && docStore.documents.important.id_card != '-'" class="mb-3">
                            <div class="text-sm text-slate-500 mb-2">Vaksin 2</div>
                            <div v-if="docStore.documents?.vaccine?.vaccine_card_2 != null && docStore.documents?.vaccine?.vaccine_card_2 != '-'" class="flex gap-x-3 mb-2 items-center p-2 rounded-lg bg-slate-100 text-slate-600">
                                <div class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM13 4l5 5h-5zM7 8h3v2H7zm0 4h10v2H7zm0 4h10v2H7z"/></svg>
                                </div>
                                <a class="block text-sm" target="_blank" :href="docStore.documents?.vaccine?.vaccine_card_2" >Vaksin 1</a>
                            </div>
                            <PartialsInput v-model="document.vaksin2.date" :modelValue="document.vaksin2.date" :required="true" :submitted="submit.document" :typeInput="`date`" :inputClass="`border border-slate-200`" :placeholder="`Tanggal Vaksin 2`" />
                            <PartialsInput v-model="document.vaksin2.location" :modelValue="document.vaksin2.location" :required="true" :submitted="submit.document" :inputClass="`border border-slate-200`" :placeholder="`Lokasi Vaksin 2`" />
                            <PartialsFile @selectedFile="(value) => handleFile(value, 'vaksin2')" />
                            <div v-if="error.vaksin2" class="text-xs mt-1 text-red-500">{{ error.vaksin2 }}</div>
                        </div>
                        <div class="flex items-center justify-end sticky bottom-0 bg-white p-2">
                            <button @click="saveDocument" class="p-2 px-3 rounded-lg text-sm text-white bg-primary block w-full">Simpan Dokumen</button>
                        </div>
                    </div>
                </div>
                <div v-if="page.cv" class="col-span-12 lg:col-span-8">
                    <div class="bg-white w-full rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="flex items-center justify-between">
                            <h3 class="font-medium">Ringkasan</h3>
                            <div v-if="!show.ringkasan" @click="saveData('ringkasan')" class="cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18m-6-8h9V6H6z"/></svg>
                            </div>
                        </div>
                        <div class="text-sm pt-5 font-light">
                            <textarea @input="show.ringkasan = false" v-model="dataStore.profile.summary" class="w-full rounded-lg border border-slate-200 text-sm p-2 px-4" name="" id="" cols="20" rows="6" :placeholder="`Jelaskan siapa diri anda, tips: ketertarikan, pengalaman, pencapaian, visi-misi`">{{ userStore?.detail?.profile?.summary }}</textarea>
                        </div>
                    </div>

                    <div class="bg-white rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="cursor-pointer flex items-center justify-between border-b pb-4">
                            <h3 class="font-medium">Pengalaman Kerja</h3>
                            <div @click="show.pengalaman = !show.pengalaman" class="flex items-center gap-2 text-sm p-2 px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_428_2643)">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_2643">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Tambah</span>
                            </div>
                            
                        </div>
                        <div class="pt-5">
                            <div v-if="show.pengalaman" class="grid grid-cols-12 gap-x-5 py-3 mb-5">
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.experience" v-model="singleData.experience.last_position" :modelValue="singleData.experience.last_position" :inputClass="`border border-slate-200`" :placeholder="`Jabatan / Posisi`" :label="`Jabatan / Posisi`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.experience" v-model="singleData.experience.company_name" :modelValue="singleData.experience.company_name" :inputClass="`border border-slate-200`" :placeholder="`Nama Perusahaan`" :label="`Nama Perusahaan`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.experience" v-model="singleData.experience.company_address" :modelValue="singleData.experience.company_address" :inputClass="`border border-slate-200`" :placeholder="`Lokasi kerja`" :label="`Lokasi kerja`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <div class="text-xs mb-2 block">Tipe Kontrak</div>
                                    <PartialsSelect :required="true" :submitted="submit.experience" class="text-sm mb-3" :customClass="`text-sm border rounded-3xl`" :selectedData="singleData.experience.type_contract" @selected="(value) => {singleData.experience.type_contract = value.key}" :options="options.contracts" :label="`Tipe Kontrak`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.experience" v-model="singleData.experience.start_date" :modelValue="singleData.experience.start_date" :inputClass="`border border-slate-200`" :label="`Tgl Mulai Kerja`" :typeInput="`date`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.experience" v-model="singleData.experience.end_date" :modelValue="singleData.experience.end_date" :inputClass="`border border-slate-200`" :label="`Tgl Berakhir`" :typeInput="`date`" />
                                    <div class="mb-5"><input type="checkbox" v-model="singleData.experience.status" class="form-checkbox rounded text-emerald-500 me-4 focus:ring-emerald-600" /><span class="text-sm">Saya masih kerja disini</span></div>
                                </div>
                                <div class="col-span-12">
                                    <label for="desc_experience" class="text-sm mb-3 block text-slate-500">Deksripsi Pengalaman</label>
                                    <textarea required v-model="singleData.experience.job_description" name="desc_experience" id="desc_experience" cols="30" rows="10" class="w-full rounded-lg border border-slate-200 text-sm p-2 px-4 focus:border-emerald-600 focus:ring-emerald-600"></textarea>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center justify-end gap-3 mt-4">
                                        <PartialsButton @click="cancelData('experience')" :primary="false">Batal</PartialsButton>
                                        <PartialsButton v-if="in_edit == null" @click="saveSingleData('experience')">Tambahkan</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="deleteData('experience')" class="bg-rose-500 text-white border-rose-500 hover:bg-rose-600 hover:border-rose-600">Hapus</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="updateData('experience')">Update</PartialsButton>
                                    </div>
                                </div>
                            </div>
                            <ol v-for="experience in experienceStore.experiences" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">
                                <li>
                                    <div @click="editData('experience', experience, experience.id)" class="absolute top-0 end-0 cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </li>
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
                                            <li class="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M17.9996 4.43959H13.6276V3.37559C13.6276 3.00428 13.4801 2.64819 13.2176 2.38564C12.955 2.12309 12.5989 1.97559 12.2276 1.97559H7.77161C7.40031 1.97559 7.04421 2.12309 6.78166 2.38564C6.51911 2.64819 6.37161 3.00428 6.37161 3.37559V4.43959H1.99961C1.62831 4.43959 1.27221 4.58709 1.00966 4.84964C0.747109 5.11219 0.599609 5.46828 0.599609 5.83959V16.6236C0.599609 16.9949 0.747109 17.351 1.00966 17.6135C1.27221 17.8761 1.62831 18.0236 1.99961 18.0236H17.9996C18.3709 18.0236 18.727 17.8761 18.9896 17.6135C19.2521 17.351 19.3996 16.9949 19.3996 16.6236V5.83959C19.3996 5.46828 19.2521 5.11219 18.9896 4.84964C18.727 4.58709 18.3709 4.43959 17.9996 4.43959ZM7.17161 3.37559C7.17161 3.21646 7.23482 3.06384 7.34734 2.95132C7.45987 2.8388 7.61248 2.77559 7.77161 2.77559H12.2276C12.3867 2.77559 12.5394 2.8388 12.6519 2.95132C12.7644 3.06384 12.8276 3.21646 12.8276 3.37559V4.43959H7.17161V3.37559ZM1.39961 5.83959C1.39961 5.68046 1.46282 5.52784 1.57535 5.41532C1.68787 5.3028 1.84048 5.23959 1.99961 5.23959H17.9996C18.1587 5.23959 18.3114 5.3028 18.4239 5.41532C18.5364 5.52784 18.5996 5.68046 18.5996 5.83959V8.38759C18.5986 9.08319 18.3218 9.75 17.8299 10.2419C17.338 10.7337 16.6712 11.0105 15.9756 11.0116H11.6416V9.77559C11.6416 9.6695 11.5995 9.56776 11.5245 9.49274C11.4494 9.41773 11.3477 9.37559 11.2416 9.37559H8.75761C8.65152 9.37559 8.54978 9.41773 8.47477 9.49274C8.39975 9.56776 8.35761 9.6695 8.35761 9.77559V11.0116H4.02361C3.32801 11.0105 2.6612 10.7337 2.16933 10.2419C1.67746 9.75 1.40067 9.08319 1.39961 8.38759V5.83959ZM10.8416 10.1756V12.6476H9.15761V10.1756H10.8416ZM18.5996 16.6236C18.5996 16.7827 18.5364 16.9353 18.4239 17.0478C18.3114 17.1604 18.1587 17.2236 17.9996 17.2236H1.99961C1.84048 17.2236 1.68787 17.1604 1.57535 17.0478C1.46282 16.9353 1.39961 16.7827 1.39961 16.6236V10.5836C1.72037 10.9679 2.12164 11.2772 2.57507 11.4894C3.02849 11.7015 3.52299 11.8116 4.02361 11.8116H8.35761V13.0476C8.35761 13.1537 8.39975 13.2554 8.47477 13.3304C8.54978 13.4054 8.65152 13.4476 8.75761 13.4476H11.2416C11.3477 13.4476 11.4494 13.4054 11.5245 13.3304C11.5995 13.2554 11.6416 13.1537 11.6416 13.0476V11.8116H15.9756C16.4762 11.8116 16.9707 11.7015 17.4242 11.4894C17.8776 11.2772 18.2788 10.9679 18.5996 10.5836V16.6236Z" fill="#797979"/>
                                                </svg>
                                                <span>{{experience.type_contract}}</span>
                                            </li>
                                        </ul>
                                        <div class="text-sm font-light">
                                            {{experience.job_description}}
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <!-- Pendidikan -->
                    <div class="bg-white rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="cursor-pointer flex items-center justify-between border-b pb-4">
                            <h3 class="font-medium">Pendidikan</h3>
                            <div @click="show.pendidikan = !show.pendidikan" class="flex items-center gap-2 text-sm p-2 px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_428_2643)">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_2643">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Tambah</span>
                            </div>
                        </div>
                        <div class="pt-5">
                            <div v-if="show.pendidikan" class="grid grid-cols-12 gap-x-5 py-3 mb-5">
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.education" v-model="singleData.education.institutions" :modelValue="singleData.education.institutions" :inputClass="`border border-slate-200`" :placeholder="`Nama Kampus / Univ / Institute`" :label="`Nama Kampus / Univ / Institute`" />
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <div class="text-xs mb-3 block">Jenjang Pendidikan</div>
                                    <PartialsSelect :required="true" :submitted="submit.education" class="text-sm" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.education.educational_level" @selected="(value) => {singleData.education.educational_level = value.key}" :options="options.educational_levels" :label="`Jenjang Pendidikan`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.education" v-model="singleData.education.majoring" :modelValue="singleData.education.majoring" :inputClass="`border border-slate-200`" :placeholder="`Kejuruan / Program Studi`" :label="`Kejuruan / Program Studi`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.education" v-model="singleData.education.city_name" :modelValue="singleData.education.city_name" :inputClass="`border border-slate-200`" :placeholder="`Lokasi`" :label="`Lokasi`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.education" v-model="singleData.education.gpa" :modelValue="singleData.education.gpa" :inputClass="`border border-slate-200`" :placeholder="`Nilai Akhir (IPK/UN/UASBN)`" :label="`Nilai Akhir`" :typeInput="`number`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.education" v-model="singleData.education.start_date" :modelValue="singleData.education.start_date" :inputClass="`border border-slate-200`" :label="`Tgl Mulai`" :typeInput="`date`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.education" v-model="singleData.education.end_date" :modelValue="singleData.education.end_date" :inputClass="`border border-slate-200`" :label="`Tgl Berakhir`" :typeInput="`date`" />
                                    <div class="mb-5"><input v-model="singleData.education.status" type="checkbox" class="form-checkbox rounded text-emerald-500 focus:ring-emerald-500 me-4" /><span class="text-sm">Saya masih aktif disini</span></div>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center justify-end gap-3 mt-4">
                                        <PartialsButton @click="cancelData('education')" :primary="false">Batal</PartialsButton>
                                        <PartialsButton v-if="in_edit == null" @click="saveSingleData('education')">Tambahkan</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="deleteData('education')" class="bg-rose-500 text-white border-rose-500 hover:bg-rose-600 hover:border-rose-600">Hapus</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="updateData('education')">Update</PartialsButton>
                                    </div>
                                </div>
                            </div>

                            <ol v-for="edu in educationStore.educations" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">
                                <li>
                                    <div @click="editData('education', edu, edu.id)" class="absolute top-0 end-0 cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </li>                  
                                <li class="mb-7 ms-6">            
                                    <span class="absolute flex items-center justify-center w-10 h-10 bg-orange-100 text-primary rounded-full -start-5">
                                        {{ edu.institutions.substring(0,1) }}
                                    </span>
                                    <div class="ps-4">
                                        <h4 class="text-sm md:text-base mb-1 font-medium">{{ edu.institutions }}</h4>
                                        <div class="flex items-center gap-4 mb-3 text-xs flex-wrap md:text-sm">
                                            <span>{{ educationStore.getLevelById(edu.educational_level) }}</span> |
                                            <span>{{ formatDate(edu.start_date) }} - {{ edu.status ? 'sekarang' : formatDate(edu.end_date) }}</span> |
                                            <span>{{ edu.city_name }}</span>
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
                    </div>

                    <!-- Organisasi -->
                    <div class="bg-white rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="cursor-pointer flex items-center justify-between border-b pb-4">
                            <h3 class="font-medium">Organisasi</h3>
                            <div @click="show.organisasi = !show.organisasi" class="flex items-center gap-2 text-sm p-2 px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_428_2643)">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_2643">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Tambah</span>
                            </div>
                        </div>
                        <div class="pt-5">
                            <div v-if="show.organisasi" class="grid grid-cols-12 gap-x-5 py-3 mb-5">
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.organization" v-model="singleData.organization.organization_name" :modelValue="singleData.organization.organization_name" :inputClass="`border border-slate-200`" :placeholder="`Nama Lembaga / Organisasi`" :label="`Nama Lembaga / Organisasi`" />
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.organization" v-model="singleData.organization.organization_address" :modelValue="singleData.organization.organization_address" :inputClass="`border border-slate-200`" :placeholder="`Lokasi`" :label="`Lokasi`" />
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.organization" v-model="singleData.organization.position" :modelValue="singleData.organization.position" :inputClass="`border border-slate-200`" :placeholder="`Peran / Posisi`" :label="`Peran / Posisi`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.organization" v-model="singleData.organization.start_date" :modelValue="singleData.organization.start_date" :inputClass="`border border-slate-200`" :label="`Tgl Mulai`" :typeInput="`date`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.organization" v-model="singleData.organization.end_date" :modelValue="singleData.organization.end_date" :inputClass="`border border-slate-200`" :label="`Tgl Berakhir`" :typeInput="`date`" />
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center justify-end gap-3 mt-4">
                                        <PartialsButton @click="cancelData('organization')" :primary="false">Batal</PartialsButton>
                                        <PartialsButton v-if="in_edit == null" @click="saveSingleData('organization')">Tambahkan</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="deleteData('organization')" class="bg-rose-500 text-white border-rose-500 hover:bg-rose-600 hover:border-rose-600">Hapus</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="updateData('organization')">Update</PartialsButton>
                                    </div>
                                </div>
                            </div>

                            <ol v-for="org in organizationStore.organizations" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">
                                <li>
                                    <div @click="editData('organization', org, org.id)" class="absolute top-0 end-0 cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </li>                  
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

                    <!-- Keterampilan -->
                    <div class="bg-white rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="cursor-pointer flex items-center justify-between border-b pb-4">
                            <h3 class="font-medium">Keterampilan</h3>
                            <div @click="show.skill = !show.skill" class="flex items-center gap-2 text-sm p-2 px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.485c-.658 0-1.23.421-2.373 1.264L7.906 4.018c-.18.133-.27.199-.367.255c-.097.056-.2.1-.405.19l-1.959.856c-1.302.57-1.953.854-2.282 1.423c-.328.57-.25 1.276-.091 2.688l.238 2.125c.025.222.037.333.037.445c0 .112-.012.223-.037.445l-.238 2.125c-.158 1.412-.237 2.118.091 2.688c.33.57.98.854 2.282 1.423l1.96.856c.204.09.307.134.404.19c.096.056.187.122.367.255l1.72 1.269c1.145.843 1.717 1.264 2.374 1.264s1.23-.421 2.373-1.264l1.721-1.269c.18-.133.27-.199.367-.255c.097-.056.2-.1.405-.19l1.959-.856c1.302-.57 1.953-.854 2.282-1.423c.328-.57.25-1.276.09-2.688l-.237-2.125c-.025-.222-.038-.333-.038-.445c0-.112.013-.223.038-.445l.238-2.125c.158-1.412.237-2.118-.091-2.688c-.33-.57-.98-.854-2.282-1.423l-1.96-.856a4.128 4.128 0 0 1-.404-.19a4.132 4.132 0 0 1-.367-.255l-1.72-1.269C13.228 1.906 12.656 1.485 12 1.485M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"/></svg>
                                <span>Kelola</span>
                            </div>
                        </div>
                        <div class="pt-5">
                            <div v-if="show.skill" class="grid grid-cols-12 gap-x-5 py-3 mb-5">
                                <div class="col-span-12">
                                    <div class="z-10">
                                        <h6 class="mb-3 text-sm">Pilih Skills</h6>
                                        <PartialsMultiselect :selectedOptions="dataStore?.skills" @selected="selectSkill" :svgData="skillSvg" :options="skillStore.options" class="z-10 border text-sm border-slate-200 rounded-3xl mb-3" :placeholder="`Skills`" :label="`Skills`" />
                                        <div class="flex items-end gap-2">
                                            <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.skill.skill_name" :modelValue="singleData.skill.skill_name" class="flex-1" :inputClass="`border text-sm border-slate-200`" :placeholder="`Tambah Skill`" :label="`Jika skill anda tidak ditemukan, silahkan Tambah Skill`" />
                                            <PartialsButton @click="handleAddSkill" class="mb-3">+</PartialsButton>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center justify-end gap-3 mt-4">
                                        <PartialsButton @click="show.skill = false" :primary="false">Batal</PartialsButton>
                                        <PartialsButton @click="saveSkills">Simpan</PartialsButton>
                                    </div>
                                </div>
                            </div>

                            <ol class="relative text-gray-500">
                                <li>
                                    <div @click="editSkill" class="absolute top-0 end-0 cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </li>                  
                                <li class="mb-7 me-6">            
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span v-for="skill in skillStore.my_skills" :key="skill.id" class="block p-1 px-2 rounded-lg bg-primary text-white text-xs lowercase">{{ skill.skill_name }}</span>
                                    </div>
                                </li>
                                
                            </ol>

                        </div>
                    </div>

                    <!-- Bahasa -->
                    <div class="bg-white rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="cursor-pointer flex items-center justify-between border-b pb-4">
                            <h3 class="font-medium">Bahasa</h3>
                            <div @click="show.bahasa = !show.bahasa" class="flex items-center gap-2 text-sm p-2 px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_428_2643)">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_2643">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Tambah</span>
                            </div>
                        </div>
                        <div class="pt-5">
                            <div v-if="show.bahasa" class="grid grid-cols-12 gap-x-5 py-3 mb-5">
                                <div class="col-span-12">
                                    <PartialsInput :required="true" :submitted="submit.language" v-model="singleData.language.language" :modelValue="singleData.language.language" :inputClass="`border border-slate-200`" :placeholder="`Bahasa`" :label="`Bahasa`" />
                                </div>
                                <div class="col-span-12 lg:col-span-4">
                                    <div class="text-sm mb-2 block text-slate-500">Membaca</div>
                                    <PartialsSelect :required="true" :submitted="submit.language" class="text-sm" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.language.reading" @selected="(value) => {singleData.language.reading = value.key}" :options="options.language_levels" :label="`Lvl. Membaca`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 lg:col-span-4">
                                    <div class="text-sm mb-2 block text-slate-500">Menulis</div>
                                    <PartialsSelect :required="true" :submitted="submit.language" class="text-sm" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.language.writing" @selected="(value) => {singleData.language.writing = value.key}" :options="options.language_levels" :label="`Lvl. Menulis`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 lg:col-span-4">
                                    <div class="text-sm mb-2 block text-slate-500">Berbicara</div>
                                    <PartialsSelect :required="true" :submitted="submit.language" class="text-sm" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.language.speaking" @selected="(value) => {singleData.language.speaking = value.key}" :options="options.language_levels" :label="`Lvl. Berbicara`"></PartialsSelect>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center justify-end gap-3 mt-4">
                                        <PartialsButton @click="cancelData('language')" :primary="false">Batal</PartialsButton>
                                        <PartialsButton v-if="in_edit == null" @click="saveSingleData('language')">Tambahkan</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="deleteData('language')" class="bg-rose-500 text-white border-rose-500 hover:bg-rose-600 hover:border-rose-600">Hapus</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="updateData('language')">Update</PartialsButton>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-5">
                                <div v-for="lang in languageStore?.languages" class="col-span-6">
                                    <div class="relative">
                                        <div @click="editData('language', lang, lang.id)" class="absolute top-0 end-0 cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div class="flex flex-col gap-3">
                                            <div class="font-medium text-sm">{{ lang.language }}</div>
                                            <table class="w-full rounded-xl overflow-hidden">
                                                <tr>
                                                    <th class="text-start p-2 px-4 font-medium text-xs bg-slate-50 border-b">Membaca</th>
                                                    <td v-if="lang.reading == 0" class="p-2 px-4 text-sm">Kurang</td>
                                                    <td v-if="lang.reading == 1" class="p-2 px-4 text-sm">Baik</td>
                                                    <td v-if="lang.reading == 2" class="p-2 px-4 text-sm">Lancar</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-start p-2 px-4 font-medium text-xs bg-slate-50 border-b">Menulis</th>
                                                    <td v-if="lang.writing == 0" class="p-2 px-4 text-sm">Kurang</td>
                                                    <td v-if="lang.writing == 1" class="p-2 px-4 text-sm">Baik</td>
                                                    <td v-if="lang.writing == 2" class="p-2 px-4 text-sm">Lancar</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-start p-2 px-4 font-medium text-xs bg-slate-50 border-b">Berbicara</th>
                                                    <td v-if="lang.speaking == 0" class="p-2 px-4 text-sm">Kurang</td>
                                                    <td v-if="lang.speaking == 1" class="p-2 px-4 text-sm">Baik</td>
                                                    <td v-if="lang.speaking == 2" class="p-2 px-4 text-sm">Lancar</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Family & Emergency Contact -->
                <div v-if="page.fam" class="col-span-12 lg:col-span-8">
                    <div class="bg-white rounded-0 md:rounded-2xl p-6 mb-5">
                        <div class="cursor-pointer flex items-center justify-between border-b pb-4">
                            <h3 class="font-medium">Family & Emergency Contact</h3>
                            <div @click="show.family = !show.family" class="flex items-center gap-2 text-sm p-2 px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_428_2643)">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_428_2643">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Tambah</span>
                            </div>
                        </div>
                        <div class="pt-5">
                          
                            <div v-if="show.family" class="grid grid-cols-12 gap-x-5 py-3 mb-5">
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.fullname" :modelValue="singleData.family_contact.fullname" :inputClass="`border border-slate-200`" :placeholder="`Nama Lengkap Keluarga`" :label="`Nama Lengkap Keluarga`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.phone" :modelValue="singleData.family_contact.phone" :inputClass="`border border-slate-200`" :typeInput="`number`" :placeholder="`No HP / Whatsapp`" :label="`No HP / Whatsapp`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.job_title" :modelValue="singleData.family_contact.job_title" :inputClass="`border border-slate-200`" :placeholder="`Profesi / Jabatan`" :label="`Profesi / Jabatan`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.company_name" :modelValue="singleData.family_contact.company_name" :inputClass="`border border-slate-200`" :placeholder="`Nama Perusahaan / Lembaga / Institusi`" :label="`Nama Perusahaan / Lembaga / Institusi`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <div class="text-xs mb-3 block">Pendidikan Terakhir</div>
                                    <PartialsSelect :required="true" :submitted="submit.family" class="text-sm relative z-[16]" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.family_contact.last_education" @selected="(value) => {singleData.family_contact.last_education = value.key}" :options="options.educational_levels" :label="`Jenjang Pendidikan`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <div class="text-xs mb-3 block">Hubungan Keluarga</div>
                                    <PartialsSelect :required="true" :submitted="submit.family" class="text-sm relative z-[14]" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.family_contact.relationship" @selected="(value) => {singleData.family_contact.relationship = value.key}" :options="relationships" :label="`Hubungan Keluarga`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <div class="text-xs mb-3 block">Jenis Kelamin</div>
                                    <PartialsSelect :required="true" :submitted="submit.family" class="text-sm relative z-[15]" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.family_contact.gender" @selected="(value) => {singleData.family_contact.gender = value.key}" :options="[{key:'male',value:'Laki Laki'},{key:'female', value:'Perempuan'}]" :label="`Jenis Kelamin`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.birth_place" :modelValue="singleData.family_contact.birth_place" :inputClass="`border border-slate-200`" :label="`Tempat Lahir`" :placeholder="`Tempat Lahir`" />
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.birth_date" :modelValue="singleData.family_contact.birth_date" :inputClass="`border border-slate-200`" :label="`Tanggal Lahir`" :typeInput="`date`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <div class="text-xs mb-3 block">Provinsi Tinggal</div>
                                    <PartialsSelect :required="true" :submitted="submit.family" class="text-sm" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.family_contact.province_id" @selected="handleFamSelectedProvince" :options="options.provinces" :label="`Provinsi Tinggal`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <div class="text-xs mb-3 block">Kota Tinggal</div>
                                    <PartialsSelect :required="true" :submitted="submit.family" class="text-sm" :customClass="`mb-3 text-sm border rounded-3xl`" :selectedData="singleData.family_contact.city_id" @selected="(value) => {singleData.family_contact.city_id = value.key}" :options="options.filteredFamilyCitys" :label="`Kota Tinggal`"></PartialsSelect>
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <PartialsInput :required="true" :submitted="submit.family" v-model="singleData.family_contact.postal_code" :modelValue="singleData.family_contact.postal_code" :inputClass="`border border-slate-200`" :label="`Postal Code`" :placeholder="`Postal Code`" :typeInput="`number`" />
                                </div>
                                <div class="col-span-12 md:col-span-6">
                                    <div class="text-xs mb-3 block">Alamat Lengkap Tinggal</div>
                                    <textarea v-model="singleData.family_contact.address" class="w-full mb-3 rounded-lg border border-slate-200 text-sm p-2 px-4" name="" id="" cols="20" rows="3" :placeholder="`Alamat lengkap tinggal`"></textarea>
                                </div>
                                <div class="col-span-12">
                                    <div class="text-xs mb-3 block">Deskripsi / Keterangan</div>
                                    <textarea v-model="singleData.family_contact.description" class="w-full rounded-lg border border-slate-200 text-sm p-2 px-4" name="" id="" cols="20" rows="6" :placeholder="`Penjelasan mengenai kerabat ini...`"></textarea>
                                </div>
                                <div class="col-span-12">
                                    <div class="flex items-center justify-end gap-3 mt-4">
                                        <PartialsButton @click="cancelData('family')" :primary="false">Batal</PartialsButton>
                                        <PartialsButton v-if="in_edit == null" @click="saveFamcontact">Tambahkan</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="delFamcontact" class="bg-rose-500 text-white border-rose-500 hover:bg-rose-600 hover:border-rose-600">Hapus</PartialsButton>
                                        <PartialsButton v-if="in_edit != null" @click="updateFamcontact">Update</PartialsButton>
                                    </div>
                                </div>
                            </div>

                            <ol v-for="(fam, index) in famStore.familys" class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ms-4">
                                <li>
                                    <div @click="editFamcontact(index)" class="absolute top-0 end-0 cursor-pointer flex items-center justify-center text-slate-300 hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 5.9997L18 8.9997M13 19.9997H21M5 15.9997L4 19.9997L8 18.9997L19.586 7.4137C19.9609 7.03864 20.1716 6.53003 20.1716 5.9997C20.1716 5.46937 19.9609 4.96075 19.586 4.5857L19.414 4.4137C19.0389 4.03876 18.5303 3.82812 18 3.82812C17.4697 3.82813 16.9611 4.03876 16.586 4.4137L5 15.9997Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </li>                  
                                <li class="mb-7 ms-6">            
                                    <span class="absolute flex items-center justify-center w-10 h-10 bg-orange-100 text-primary rounded-full -start-5">
                                        {{ fam.fullname.substring(0,1) }}
                                    </span>
                                    <div class="ps-4">
                                        <h4 class="text-sm md:text-base mb-1 font-medium">{{ fam.fullname}} <span class="text-xs font-light"> - {{ fam.relationship }}</span></h4>
                                        <div class="grid grid-cols-12 gap-y-2 mb-3">
                                            <div class="col-span-12 md:col-span-6 flex items-center gap-x-4 text-sm text-slate-500">
                                                <div class="flex items-center gap-3 flex-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><circle cx="16.86" cy="9.73" r="6.46" fill="currentColor"/><path fill="currentColor" d="M21 28h7v1.4h-7z"/><path fill="currentColor" d="M15 30v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1h-7v-1.47a1 1 0 0 0-2 0V22h-2v-3.58a32.12 32.12 0 0 0-5.14-.42a26 26 0 0 0-11 2.39a3.28 3.28 0 0 0-1.88 3V30Zm17 2H17v-8h7v.42a1 1 0 0 0 2 0V24h6Z"/></svg>
                                                    {{ fam.job_title }} at {{ fam.company_name }}
                                                </div>
                                            </div>
                                            <div class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                    <path d="M16.2495 2.375H13.1245C12.9587 2.375 12.7997 2.44085 12.6825 2.55806C12.5653 2.67527 12.4995 2.83424 12.4995 3C12.4995 3.16576 12.5653 3.32473 12.6825 3.44194C12.7997 3.55915 12.9587 3.625 13.1245 3.625H14.7409L12.776 5.58984C12.1991 5.05218 11.5032 4.65861 10.7451 4.44128C9.98698 4.22396 9.18823 4.18903 8.41406 4.33936C7.63989 4.4897 6.91226 4.82102 6.2906 5.30628C5.66894 5.79154 5.17088 6.41696 4.8371 7.13148C4.50332 7.84599 4.34329 8.62932 4.37007 9.4175C4.39686 10.2057 4.6097 10.9763 4.99122 11.6665C5.37273 12.3567 5.9121 12.9469 6.56527 13.3888C7.21844 13.8308 7.96688 14.1119 8.74947 14.2094V15.5H6.87447C6.70871 15.5 6.54974 15.5658 6.43253 15.6831C6.31532 15.8003 6.24947 15.9592 6.24947 16.125C6.24947 16.2908 6.31532 16.4497 6.43253 16.5669C6.54974 16.6842 6.70871 16.75 6.87447 16.75H8.74947V18.625C8.74947 18.7908 8.81532 18.9497 8.93253 19.0669C9.04974 19.1842 9.20871 19.25 9.37447 19.25C9.54023 19.25 9.6992 19.1842 9.81641 19.0669C9.93362 18.9497 9.99947 18.7908 9.99947 18.625V16.75H11.8745C12.0402 16.75 12.1992 16.6842 12.3164 16.5669C12.4336 16.4497 12.4995 16.2908 12.4995 16.125C12.4995 15.9592 12.4336 15.8003 12.3164 15.6831C12.1992 15.5658 12.0402 15.5 11.8745 15.5H9.99947V14.2094C10.8372 14.1047 11.6348 13.7894 12.3176 13.2928C13.0004 12.7963 13.5461 12.1347 13.9038 11.37C14.2615 10.6052 14.4195 9.76228 14.363 8.9199C14.3065 8.07753 14.0374 7.26324 13.5807 6.55313L15.6245 4.50859V6.125C15.6245 6.29076 15.6903 6.44973 15.8075 6.56694C15.9247 6.68415 16.0837 6.75 16.2495 6.75C16.4152 6.75 16.5742 6.68415 16.6914 6.56694C16.8086 6.44973 16.8745 6.29076 16.8745 6.125V3C16.8745 2.83424 16.8086 2.67527 16.6914 2.55806C16.5742 2.44085 16.4152 2.375 16.2495 2.375ZM9.37447 13C8.63279 13 7.90777 12.7801 7.29108 12.368C6.6744 11.956 6.19375 11.3703 5.90993 10.6851C5.6261 9.99984 5.55183 9.24584 5.69653 8.51841C5.84122 7.79098 6.19838 7.1228 6.72282 6.59835C7.24727 6.0739 7.91546 5.71675 8.64288 5.57206C9.37031 5.42736 10.1243 5.50162 10.8095 5.78545C11.4948 6.06928 12.0804 6.54993 12.4925 7.16661C12.9045 7.7833 13.1245 8.50832 13.1245 9.25C13.1234 10.2442 12.728 11.1975 12.025 11.9005C11.3219 12.6035 10.3687 12.999 9.37447 13Z" fill="#797979"/>
                                                </svg>
                                                <span class="">{{fam.gender}}</span>
                                            </div>
                                            <div class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
                                                <span class="">{{educationStore.getLevelById(fam.last_education)}}</span>
                                            </div>
                                            <div class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                    <g clip-path="url(#clip0_927_182)">
                                                        <path d="M16.4844 9.33117H12.1875V5.58117H10.7812C11.2165 5.00008 11.4504 4.29287 11.4474 3.56684C11.4474 2.48715 10.9365 1.47266 10.1141 0.919336L9.76519 0.68457L9.41633 0.919336C8.59375 1.47273 8.08301 2.48719 8.08301 3.56684C8.08008 4.29288 8.31403 5.00008 8.74937 5.58113H7.1875V9.33113H3.51562C2.91495 9.33182 2.33908 9.57073 1.91434 9.99547C1.4896 10.4202 1.25068 10.9961 1.25 11.5968V18.6254C1.25037 18.9568 1.38219 19.2746 1.61653 19.5089C1.85087 19.7432 2.16859 19.8751 2.5 19.8754H17.5C17.8314 19.8751 18.1491 19.7432 18.3835 19.5089C18.6178 19.2746 18.7496 18.9568 18.75 18.6254V11.5968C18.7493 10.9961 18.5104 10.4203 18.0857 9.99551C17.6609 9.57077 17.085 9.33185 16.4844 9.33117ZM9.76519 2.27941C10.0382 2.61863 10.1974 3.07887 10.1974 3.56688C10.1974 4.05488 10.0382 4.51516 9.76519 4.85434C9.49219 4.51516 9.33301 4.05488 9.33301 3.56684C9.33301 3.07879 9.49219 2.61863 9.76519 2.27941ZM8.4375 6.83117H10.9375V9.33117H8.4375V6.83117ZM2.5 11.5968C2.50031 11.3275 2.60741 11.0694 2.79781 10.879C2.98821 10.6886 3.24636 10.5815 3.51562 10.5812H16.4844C16.7536 10.5815 17.0118 10.6886 17.2022 10.879C17.3926 11.0694 17.4997 11.3275 17.5 11.5968V12.8303L16.6562 13.2026C16.4912 13.2752 16.3129 13.3127 16.1326 13.3127C15.9524 13.3127 15.774 13.2752 15.609 13.2026L14.1406 12.5547L12.6719 13.2025C12.5069 13.2752 12.3285 13.3127 12.1482 13.3127C11.968 13.3127 11.7896 13.2752 11.6246 13.2025L10.1562 12.5546L8.6875 13.2025C8.52248 13.2751 8.34416 13.3126 8.16387 13.3126C7.98357 13.3126 7.80525 13.2751 7.64023 13.2025L6.17188 12.5547L4.7034 13.2025C4.53838 13.2751 4.36006 13.3126 4.17977 13.3126C3.99947 13.3126 3.82115 13.2751 3.65613 13.2025L2.5 12.6925V11.5968ZM17.5 18.6254H2.5V14.0588L3.15148 14.3462C3.47552 14.4888 3.82567 14.5624 4.17969 14.5624C4.53371 14.5624 4.88385 14.4888 5.20789 14.3462L6.17188 13.9209L7.1359 14.3462C7.45993 14.4888 7.81007 14.5624 8.16408 14.5624C8.51809 14.5624 8.86824 14.4888 9.19227 14.3462L10.1562 13.9209L11.1202 14.3462C11.4442 14.4888 11.7944 14.5624 12.1484 14.5624C12.5024 14.5624 12.8525 14.4888 13.1765 14.3462L14.1406 13.9209L15.1046 14.3462C15.4286 14.4888 15.7788 14.5624 16.1328 14.5624C16.4868 14.5624 16.8369 14.4888 17.1609 14.3462L17.5005 14.1964L17.5008 18.6254H17.5Z" fill="#797979"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_927_182">
                                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span class="">{{fam.birth_place}}, {{fam.birth_date == null ? 'YYYY - MM - DD' : formatDate(fam.birth_date)}}</span>
                                            </div>
                                            <div class="col-span-12">
                                                <div class="flex gap-x-4 items-start">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10m6-6v.172a2 2 0 0 1-.586 1.414l-3.828 3.828a2 2 0 0 1-1.414.586H15m6-6h-4a2 2 0 0 0-2 2v4M7 7h10M7 11h10M7 15h4"/></svg>
                                                    </div>
                                                    <div class="text-slate-500 text-sm">{{fam.description}}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-slate-50 rounded-xl px-5 pt-4 pb-1">
                                            <ul class="grid grid-cols-12 gap-y-3">
                                                <li class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <path d="M17.3727 12.8795L13.6922 11.2303L13.682 11.2256C13.491 11.1439 13.2825 11.1111 13.0756 11.1302C12.8687 11.1493 12.6698 11.2197 12.4969 11.335C12.4765 11.3484 12.457 11.3631 12.4383 11.3787L10.5367 12.9998C9.33204 12.4147 8.08829 11.1803 7.50313 9.99125L9.12657 8.06078C9.14219 8.04125 9.15704 8.02172 9.1711 8.00062C9.28394 7.8282 9.35239 7.63056 9.37039 7.42529C9.38838 7.22002 9.35534 7.01348 9.27423 6.82406V6.81469L7.62032 3.12797C7.51309 2.88052 7.3287 2.67438 7.09468 2.54034C6.86067 2.4063 6.58958 2.35153 6.32188 2.38422C5.26326 2.52352 4.29155 3.04341 3.58824 3.84679C2.88492 4.65017 2.49809 5.6821 2.50001 6.74984C2.50001 12.953 7.54688 17.9998 13.75 17.9998C14.8177 18.0018 15.8497 17.6149 16.6531 16.9116C17.4564 16.2083 17.9763 15.2366 18.1156 14.178C18.1484 13.9104 18.0937 13.6393 17.9598 13.4053C17.8259 13.1713 17.62 12.9869 17.3727 12.8795ZM13.75 16.7498C11.0987 16.7469 8.55687 15.6924 6.68214 13.8177C4.8074 11.943 3.7529 9.40112 3.75001 6.74984C3.74707 5.98694 4.02192 5.24906 4.52324 4.67399C5.02456 4.09892 5.71806 3.72599 6.47423 3.62484C6.47392 3.62796 6.47392 3.6311 6.47423 3.63422L8.11485 7.30609L6.50001 9.2389C6.48362 9.25776 6.46873 9.27788 6.45548 9.29906C6.33791 9.47947 6.26894 9.68718 6.25525 9.90208C6.24157 10.117 6.28362 10.3318 6.37735 10.5256C7.08516 11.9733 8.54376 13.4209 10.007 14.128C10.2023 14.2208 10.4184 14.2614 10.634 14.2458C10.8497 14.2302 11.0576 14.1589 11.2375 14.0389C11.2576 14.0254 11.2769 14.0108 11.2953 13.9952L13.1945 12.3748L16.8664 14.0194H16.875C16.7751 14.7766 16.4027 15.4715 15.8275 15.9741C15.2524 16.4766 14.5138 16.7524 13.75 16.7498Z" fill="#797979"/>
                                                    </svg>
                                                    <span class="">{{dataStore.contacts[index].phone}}</span>
                                                </li>
                                                <li class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12"/><path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6"/><path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"/><path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"/></g></svg>
                                                    </div>
                                                    <span class="">{{dataStore.contacts[index].province_name}}</span>
                                                </li>
                                                <li class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"/><rect width="8" height="16" x="8" y="26" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34h1"/><rect width="24" height="38" x="16" y="4" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path fill="currentColor" d="M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z"/></g></svg>
                                                    </div>
                                                    <span class="">{{dataStore.contacts[index].city_name}}</span>
                                                </li>
                                                <li class="col-span-12 md:col-span-6 flex items-start gap-4 text-sm">
                                                    <div>
                                                        <svg class="text-slate-600" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" clip-rule="evenodd"><path d="M7.5 8.495a2 2 0 0 0 2-1.999a2 2 0 0 0-4 0a2 2 0 0 0 2 1.999Z"/><path d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z"/></g></svg>
                                                    </div>
                                                    <span class="">{{dataStore.contacts[index].address}}</span>
                                                </li>
                                                <li class="col-span-12 md:col-span-6 flex items-center gap-4 text-sm">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z"/><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87m-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z"/></svg>
                                                    </div>
                                                    <span class="">{{dataStore.contacts[index].postal_code}}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AuthLogin :isOpen="openLogin" @close="openLogin = false" />

    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'

definePageMeta({
    title: 'My Profile',
    layout:'default',
    middleware: ["auth"]
});

const openLogin = ref(false)
const isReady = ref(false)
const isShare = ref(false)
const toast = useToast();
const in_edit = ref(null);

const userStore = useUserStore();
const cityStore = useCityStore();
const contractStore = useContractStore();
const religionStore = useReligionStore();
const skillStore = useSkillStore();
const experienceStore = useExperienceStore();
const educationStore = useEducationStore();
const famStore = useFamcontactStore();
const organizationStore = useOrganizationStore();
const languageStore = useLanguageStore();
const medsosStore = useMedsosStore();
const docStore = useDocumentStore();

const skillSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.194 8.094a1.86 1.86 0 1 0 0-3.719a1.86 1.86 0 0 0 0 3.719M.523 13.479A3.68 3.68 0 0 1 1 11.704a3.711 3.711 0 0 1 3.195-1.868c1.31.003 2.55.727 3.195 1.868a3.68 3.68 0 0 1 .477 1.774m2.02-12.095v-.82m2.799 1.827l.671-.471m-6.271.471l-.672-.471m5.506 3.139a2.055 2.055 0 0 0-2.077-2.042a2.055 2.055 0 0 0-1.99 2.127a2.067 2.067 0 0 0 1.126 1.73v1a.227.227 0 0 0 .226.22h1.361a.227.227 0 0 0 .227-.22V6.855a2.07 2.07 0 0 0 1.128-1.797Z"/></svg>`
const options = ref({
    contracts : [],
    citys : [],
    filteredCitys : [],
    filteredFamilyCitys : [],
    provinces : [],
    religions : [],
    skills : [],
    educational_levels : [],
    language_levels : [
        {key:'0',value:'Kurang'},
        {key:'1',value:'Baik'},
        {key:'2',value:'Lancar'},
    ],
})
const selected = ref({
    province_id : null,
})
const page = ref({
    cv : true,
    fam : false,
})
const show = ref({
    editImageSosmed : false,
    biodata : false,
    informasi : false,
    pendidikan : false,
    pengalaman : false,
    sertifikasi : false,
    organisasi : false,
    skill : false,
    bahasa : false,
    family : false,
    ringkasan : false,
});

const dataStore = ref({
    profile : {
        image : '',
        name : '',
        summary : '',
        email : '',
        phone : '',
        city : '',
        province : '',
        postal_code : '',
        address :  '',
        role: '',
        sosmed : {
            id : '',
            ig : '',
            fb: '',
            x: '',
            in: '',
            others: '',
        },
    },
    biodata : {
        birth_place : '',
        birth_date : null,
        gender : '',
        marritage_status : '',
        religion : '',
        expected_salary : '',
        weight_body : '',
        height_body : '',
    },
    experiences : [],
    educations : [],
    organizations : [],
    skills : [],
    familys: [],
    contacts: [],
    languages : [],
})
const documents = ref(null);
const document = ref({
    resume:{
        card:null,
    },
    ktp:{
        number:null,
        card:null,
    },
    kk:{
        number:null,
        card:null,
    },
    ijazah:{
        card:null,
    },
    transkrip:{
        card:null,
    },
    npwp:{
        number:null,
        card:null,
    },
    bpjs:{
        number:null,
        card:null,
    },
    jamsostek:{
        number:null,
        card:null,
    },
    simc:{
        number:null,
        card:null,
    },
    simab:{
        number:null,
        card:null,
    },
    vaksin1:{
        date:null,
        location:null,
        card:null,
    },
    vaksin2:{
        date:null,
        location:null,
        card:null,
    },
    cover:{
        card:null,
    },
})

const dataNormal = ref({
    biodata:{
        birth_place : '',
    },
    profile : {
        province : '',
        city : '',
    },
})
const singleData = ref({
    experience : {
        last_position : '',
        company_name : '',
        type_contract : '',
        company_address : '',
        start_date : '',
        end_date : '',
        job_description : "",
        status : false,
    },
    education : {
        institutions : '',
        majoring : '',
        gpa : '',
        educational_level : '',
        city_name : '',
        start_date : '',
        end_date : '',
        status : false,
    },
    organization : {
        organization_name : '',
        organization_address : '',
        position : '',
        start_date : '',
        end_date : '',
    },
    skill : {
        skill_name : '',
    },
    language : {
        language : '',
        writing : 0,
        reading : 0,
        speaking : 0,
    },
    family_contact :{
        fullname : '',
        gender : '',
        birth_place : '',
        birth_date : '',
        last_education : '',
        job_title : '',
        company_name : '',
        relationship : '',
        description : '',
        phone : '',
        province_id : '',
        city_id : '',
        address : '',
        postal_code : '',
    }
})

const ktpUploaded = ref(null);

const submit = ref({
    biodata : false,
    experience : false,
    education : false,
    organization :false,
    language :false,
    family :false,
})

const error = ref(
    {
        resume: null,
        ktp: null,
        kk: null,
        ijazah: null,
        transkrip: null,
        npwp: null,
        bpjs: null,
        jamsostek: null,
        simc: null,
        simab: null,
        vaksin1: null,
        vaksin2: null,
        cover: null
    }
);
const profileData = ref(null);
const url = useRequestURL();

const relationships = [
    {key: 'father', value: 'Father'},
    {key: 'mother', value: 'Mother'},
    {key: 'siblings', value: 'Siblings'},
    {key: 'husband', value: 'Husband'},
    {key: 'wife', value: 'Wife'},
    {key: 'child', value: 'Child'},
];

onMounted(async () => {
    const doc = await docStore.getDocuments();
    ktpUploaded.value = doc?.data?.important?.id_card;
    console.log(doc, ktpUploaded.value);

    options.value.citys = await cityStore.getOptionsMaster();
    options.value.provinces = await cityStore.getProvinceOptions();
    options.value.religions = await religionStore.getOptions();
    options.value.skills = await skillStore.getOptions();
    options.value.educational_levels = await educationStore.getOptions();

    // const data = JSON.parse(localStorage.getItem('data_buat_cv'));
    // if(data) dataStore.value = data;

    const fetchProfile = await userStore.getFullProfile();
    profileData.value = fetchProfile;
    dataStore.value = userStore?.detail;
    
    console.log(dataStore.value);
    
    if(dataStore.value.profile.province != ''){
        dataNormal.value.profile.province = await cityStore.getProvinceById(dataStore.value.profile.province);
    }
    if(dataStore.value.profile.city != ''){
        dataNormal.value.profile.city = await cityStore.getCityById(dataStore.value.profile.city);
    }

    const fetch = await contractStore.getOptions();
    options.value.contracts = fetch;

    const fetchExperience = await experienceStore.getExperiences();
    dataStore.value.experiences = fetchExperience?.data;

    const fetchOrganization = await organizationStore.getOrganizations();
    dataStore.value.organizations = fetchOrganization?.data;

    const fetchEducation = await educationStore.getEducations();
    dataStore.value.educations = fetchEducation?.data;

    const fetchSkill = await skillStore.getSkills();
    if(fetchSkill.message != "Data not found"){
        dataStore.value.skills = fetchSkill?.data.map(skill => skill.id);
    }else{
        dataStore.value.skills = [];
    }

    const familysFetch = await famStore.getFamilys();
    dataStore.value.familys = familysFetch.data;

    const contactsFetch = await famStore.getContacts();
    dataStore.value.contacts = contactsFetch.data;

    const fetchLanguage = await languageStore.getLanguages();
    dataStore.value.languages = fetchLanguage?.data;

    if(userStore.detail?.biodata?.birth_place == undefined) {show.value.biodata = true;}
    if(userStore.detail?.profile?.name == '') {show.value.editImageSosmed = true;}
    if(userStore.detail?.profile?.sosmed?.ig == '' || userStore.detail?.profile?.sosmed?.ig == undefined) {show.value.editImageSosmed = true;}
    if(userStore.detail?.profile?.phone == '') {show.value.informasi = true;}
    if(dataStore.value?.experiences?.length == 0 || dataStore.value?.experiences?.length == undefined) {show.value.pengalaman = true;}
    if(dataStore.value?.educations?.length == 0) {show.value.pendidikan = true;}
    if(dataStore.value?.organizations?.length == 0 || dataStore.value?.organizations?.length == undefined) {show.value.organisasi = true;}
    if(dataStore.value?.languages?.length == 0 || dataStore.value?.languages?.length == undefined) {show.value.bahasa = true;}

    const fetchDocument = await docStore.getDocuments();
    documents.value = fetchDocument.data;

    isReady.value = true;
})


// Filtering
const handleSelectedProvince = (value) => {
    options.value.filteredCitys = cityStore.getCityProvinces(value.key);
    dataStore.value.profile.province = value.key;
}

const handleFamSelectedProvince = (value) => {
    options.value.filteredFamilyCitys = cityStore.getCityProvinces(value.key);
    singleData.value.family_contact.province_id = value.key;
}
// ------
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const isRequiredDataFilled = () => {
    const dt = dataStore.value;
    const profileRequired = ['name', 'summary', 'city', 'address', 'role'];
    const biodataRequired = ['birth_place', 'birth_date', 'gender', 'marritage_status', 'religion', 'expected_salary', 'weight_body', 'height_body'];
    let nullRequireds = [];
    console.log(dt);
    profileRequired.forEach((pr) => {
        if (dt.profile[pr] == '' || dt.profile[pr] == null  || dt.profile[pr] == undefined) {
            nullRequireds.push(pr);
        }
    });

    biodataRequired.forEach((pr) => {
        if (dt.biodata[pr] == '' || dt.biodata[pr] == null || dt.biodata[pr] == undefined) {
            nullRequireds.push(pr);
        }
    });

    if (nullRequireds.length > 0) {
        return nullRequireds;
    }else{
        return false;
    }
};

const parseDateRange = (dateRangeString) => {
    const [startDateString, endDateString] = dateRangeString.split(' - ');
    const startDate = parseDateString(startDateString);
    const endDate = parseDateString(endDateString);
    return { startDate, endDate };
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(`${url.protocol}//${url.host}/u/${profileData?.value.username}`)
        .then(() => toast.success('Success copying profile link to clipboard'))
        .catch((error) => toast.error('Error copying text to clipboard : ' + error));
};

const parseDateString = (dateString) => {
    const [day, month, year] = dateString.split(' ');
    const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
    return `${year}-${months[month]}-${day}`;
}

// Skill Handle
const selectSkill = (value) => {
    console.log('Select tertrigger');
    console.log(value);
    dataStore.value.skills = value.map(item => item.key);
}

const handleAddSkill = async () => {
    const addMasterSkill = await skillStore.addMasterSkill(singleData.value.skill.skill_name);
    if(addMasterSkill.success){
        toast.success(addMasterSkill.message)
        singleData.value.skill.skill_name = '';
    }else{
        toast.error(addMasterSkill.message)
    }
}

const editSkill = () => {
    show.value.skill = true;
}

const saveSkills = async () => {
    const resetSkill = await skillStore.delAllSkill();
    
    if(resetSkill.success){
        toast.success('Reset Skills...');
        toast.success('Success.. Reset Skills');
        toast.success('Adding skills...');
        console.log(dataStore.value.skills);
        dataStore.value.skills.forEach(async (skill) => {
            const addSkill = await skillStore.saveSkill(skill);
            if(addSkill.success){
                toast.success(addSkill.message);
            }else{
                toast.error(addSkill.message);
            }
        });
    }else{
        toast.error(resetSkill.message);
    }
}
// ------

// ---- Family & Emergency Contact
const saveFamcontact = async () => {

    const sde = singleData.value?.family_contact;

    const addFamily = await famStore.addFamily(
        sde?.fullname,
        sde?.gender,
        sde?.birth_place,
        sde?.birth_date,
        sde?.last_education,
        sde?.job_title,
        sde?.company_name,
        sde?.relationship,
        sde?.description,
    );
    if(addFamily.success){
        const addContact = await famStore.addContact(
            sde.fullname,
            sde.phone,
            sde.address,
            sde.relationship,
            sde.province_id,
            sde.city_id,
            sde.postal_code,
        );
        if(addContact.success){
            toast.success(addContact.message);
        }else{
            toast.error(addContact.message);
        }
        toast.success(addFamily?.message);
        show.value.family = false;
    }else{
        toast.error(addFamily?.message);
    }
}

const editFamcontact = async (i) => {
    singleData.value.family_contact = {
        fullname : dataStore.value.familys[i].fullname,
        gender : dataStore.value.familys[i].gender,
        birth_place : dataStore.value.familys[i].birth_place,
        birth_date : dataStore.value.familys[i].birth_date,
        last_education : dataStore.value.familys[i].last_education,
        job_title : dataStore.value.familys[i].job_title,
        company_name : dataStore.value.familys[i].company_name,
        relationship : dataStore.value.familys[i].relationship,
        description : dataStore.value.familys[i].description,
        phone : dataStore.value?.contacts[i].phone,
        province_id : dataStore.value?.contacts[i].province_id,
        city_id : dataStore.value?.contacts[i].city_id,
        address : dataStore.value?.contacts[i].address,
        postal_code : dataStore.value?.contacts[i].postal_code,
    }
    in_edit.value = dataStore.value.familys[i].id;
    show.value.family = true;
}

const updateFamcontact = async () => {
    submit.value.family = true;
    const sde = singleData.value?.family_contact;
    const i = dataStore.value.familys.findIndex(fam => fam.id == in_edit.value);
    const fam_id = dataStore.value.familys[i].id;
    const con_id = dataStore.value.contacts[i].id;

    const updateFamily = await famStore.updateFamily(
        fam_id,
        sde?.fullname,
        sde?.gender,
        sde?.birth_place,
        sde?.birth_date,
        sde?.last_education,
        sde?.job_title,
        sde?.company_name,
        sde?.relationship,
        sde?.description,
    );
    if(updateFamily.success){
        const updateContact = await famStore.updateContact(
            con_id,
            sde.fullname,
            sde.phone,
            sde.address,
            sde.relationship,
            sde.province_id,
            sde.city_id,
            sde.postal_code,
        );
        if(updateContact.success){
            toast.success(updateContact.message);
        }else{
            toast.error(updateContact.message);
        }
        toast.success(updateFamily?.message);
        show.value.family = false;
    }else{
        toast.error(updateFamily?.message);
    }
}

const delFamcontact = async () => {
    const i = dataStore.value.familys.findIndex(fam => fam.id == in_edit.value);
    const fam_id = dataStore.value.familys[i].id;
    const con_id = dataStore.value.contacts[i].id;

    const delFamily = await famStore.delFamily(fam_id);
    const delContact = await famStore.delContact(con_id);
    if(delFamily.success && delContact.success){
        toast.success(delFamily?.message);
        toast.success(delContact?.message);
    }else{
        toast.error(delFamily?.message);
        toast.error(delContact?.message);
    }
}

// Action Data CRUD
const cancelData = (section) => {
    resetValue();
    in_edit.value = null;
    if(section == 'experience'){
        submit.value.experience = false;
        show.value.pengalaman = false;
    }else if(section == 'organization'){
        submit.value.organization = false;
        show.value.organisasi = false;
    }else if(section == 'language'){
        submit.value.language = false;
        show.value.bahasa = false;
    }else if(section == 'education'){
        submit.value.education = false;
        show.value.pendidikan = false;
    }else if(section == 'family'){
        submit.value.family = false;
        show.value.family = false;
    }
}
const saveData = async (section = '') => {
    submit.value.biodata = true;
    const check = isRequiredDataFilled()
    if(check){
        let message = 'Harus mengisi data : ';
        check.forEach((item) => {
            message += `${item}, `;
        });
        message = message.slice(0, -2);
        toast.error(message);
        return;
    }

    const ds = dataStore.value;
    const updateProfile = await userStore.updateProfile(
        ds?.profile?.phone,
        ds?.profile?.name,
        ds?.profile?.role,
        ds?.profile?.summary,
        ds?.biodata?.gender,
        ds?.biodata?.birth_date,
        ds?.biodata?.birth_place,
        ds?.biodata?.religion,
        ds?.biodata?.marritage_status,
        ds?.biodata?.height_body,
        ds?.biodata?.weight_body,
        ds?.profile?.province,
        ds?.profile?.city,
        ds?.profile?.address,
        ds?.profile?.postal_code,
        ds?.biodata?.expected_salary,
        ds?.profile?.image,
        ds?.profile?.sosmed?.ig,
        ds?.profile?.sosmed?.fb,
        ds?.profile?.sosmed?.x,
        ds?.profile?.sosmed?.in,
        ds?.profile?.sosmed?.others
    );
    if(updateProfile.success)submit.value.biodata = false;

    localStorage.setItem('data_buat_cv', JSON.stringify(dataStore.value));

    if(section == 'ringkasan') {
        show.value[section] = true;
    }else{
        show.value[section] = false;
    }

    toast.success('Berhasil menyimpan data');
}

const saveSingleData = async (section) => {
    const created_at = new Date().toISOString();

    if (section === 'experience') {
        submit.value.experience = true;
        const sde = singleData.value.experience;
        const addExperience = await experienceStore.addExperience(sde.last_position, sde.company_name, sde.company_address, sde.start_date, sde.end_date, sde.status, sde.type_contract, sde.job_description);
        if(addExperience.success){
            toast.success(addExperience?.message);
            submit.value.experience = false;
            show.value.pengalaman = false;
        }else{
            toast.error(addExperience?.message);
        }
    } else if (section === 'education') {
        submit.value.education = true;
        const sde = singleData.value.education;
        const addEducation = await educationStore.addEducation(
            sde.institutions,
            sde.city_name,
            sde.majoring,
            sde.educational_level,
            sde.start_date,
            sde.end_date,
            sde.status,
            sde.gpa,
            "");
        if(addEducation?.success){
            toast.success(addEducation?.message);
            submit.value.education = false;
            show.value.pendidikan = false;
        }else{
            toast.error(addEducation?.message);
        }
    } else if (section === 'organization') {
        submit.value.organization = true;
        const sde = singleData.value.organization;
        const addOrganization = await organizationStore.addOrganization(sde.position, sde.organization_name, sde.organization_address, `${formatDate(sde.start_date)} - ${formatDate(sde.end_date)}`);
        if(addOrganization.success){
            toast.success(addOrganization?.message);
            submit.value.organization = false;
            show.value.organisasi = false;
        }else{
            toast.error(addOrganization?.message);
        }  
    } else if (section === 'language') {
        submit.value.language = true;
        const sde = singleData.value.language;
        const addLanguage = await languageStore.addLanguage(sde.language, sde.reading, sde.writing, sde.speaking);
        if(addLanguage.success){
            toast.success(addLanguage?.message);
            submit.value.language = false;
            show.value.bahasa = false;
        }else{
            toast.error(addLanguage?.message);
        }
    }
    resetValue();
};

const editData = (section, data, id) => {
    in_edit.value = id;
    singleData.value[section] = data;
    if(section == 'experience'){
        show.value.pengalaman = true;
    }else if(section == 'organization'){
        const { startDate, endDate } = parseDateRange(data.duration);
        singleData.value[section].start_date = startDate;
        singleData.value[section].end_date = endDate;

        show.value.organisasi = true;
    }else if(section == 'skill'){
        show.value.skill = true;
    }else if(section == 'language'){
        show.value.bahasa = true;
    }else if(section == 'education'){
        show.value.pendidikan = true;
    }
}

const deleteData = (section) => {
    const sections = {
        experience: 'experiences',
        organization: 'organizations',
        skill: 'skills',
        language: 'languages',
        education: 'educations',
    };

    if(section == 'experience'){
        const sde = singleData.value.experience;
        const delExperience = experienceStore.delExperience(in_edit.value);
        show.value.pengalaman = false;
    }else if(section == 'organization'){
        const sde = singleData.value.organization;
        const delOrganization = organizationStore.delOrganization(in_edit.value);
        show.value.organisasi = false;
    }else if(section == 'language'){
        const sde = singleData.value.language;
        const delLanguage = languageStore.delLanguage(in_edit.value);
        show.value.bahasa = false;
    }else if(section == 'education'){
        const sde = singleData.value.education;
        const delEducation = educationStore.delEducation(in_edit.value);
        show.value.pendidikan = false;
    }

    in_edit.value = null;
    resetValue();
    toast.success('Berhasil menghapus '+ sections[section]);

};

const updateData = (section) => {
    const sections = {
        experience: 'experiences',
        organization: 'organizations',
        skill: 'skills',
        language: 'languages',
        education: 'educations',
    };
    
    if(section == 'experience'){
        submit.value.experience = true;
        const sde = singleData.value.experience;
        const updateExperience = experienceStore.updateExperience(in_edit.value, sde.last_position, sde.company_name, sde.company_address, sde.start_date, sde.end_date, sde.status, sde.type_contract, sde.job_description);
        if(updateExperience.success)submit.value.experience = false;
        show.value.pengalaman = false;
    }else if(section == 'organization'){
        submit.value.organization = true;
        const sde = singleData.value.organization;
        const updateOrganization = organizationStore.updateOrganization(in_edit.value, sde.position, sde.organization_name, sde.organization_address, `${formatDate(sde.start_date)} - ${formatDate(sde.end_date)}`);
        if(updateOrganization.success)submit.value.organization = false;
        show.value.organisasi = false;
    }else if(section == 'language'){
        submit.value.language = true;
        const sde = singleData.value.language;
        const updateLanguage = languageStore.updateLanguage(in_edit.value, sde.language, sde.reading, sde.writing, sde.speaking);
        if(updateLanguage.success)submit.value.language = false;
        show.value.bahasa = false;
    }else if(section == 'education'){
        submit.value.education = true;
        const sde = singleData.value.education;
        const updateEducation = educationStore.updateEducation(in_edit.value, sde.institutions, sde.city_name, sde.majoring, sde.start_date, sde.end_date, sde.status, sde.gpa, sde.institute_name, "");
        if(updateEducation.success)submit.value.education = false;
        show.value.pendidikan = false;
    }

    in_edit.value = null;
    resetValue();
    toast.success('Berhasil memperbarui '+ sections[section]);

};
// -----------
const resetValue = () => {
    singleData.value = 
    {
        experience : {
            position : '',
            company_name : '',
            type_contract : '',
            location : '',
            start_date : '',
            end_date : '',
            description : "",
            still : false,
        },
        education : {
            institute_name : '',
            majoring : '',
            gpa : '',
            location : '',
            start_date : '',
            end_date : '',
            description : "",
            still : false,
        },
        organization : {
            institute_name : '',
            position : '',
            start_date : '',
            end_date : '',
            description : "",
            still : false,
        },
        skill : {
            name : '',
        },
        language : {
            language_name : '',
            write : 0,
            read : 0,
            talk : 0,
        },
    }
}

// Document Function
const saveDocument = async () => {
    console.log('clicked');
    console.log(document.value);
    if(document.value.resume.card != null){
        const fetch = await docStore.createDocument('resume', '', document.value.resume.card);
        if(!fetch.success) 
        {
            error.value.resume = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.ktp.number != null && document.value.ktp.card != null){
        const fetch = await docStore.createDocument('ktp', document.value.ktp.number, document.value.ktp.card);
        if(!fetch.success)
        {
            error.value.ktp = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.kk.number != null && document.value.card != null){
        const fetch = await docStore.createDocument('kk', document.value.kk.number, document.value.card);
        if(!fetch.success)
        {
            error.value.kk = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.ijazah.card != null && document.value.transkrip.card != null){
        const fetch = await docStore.createDocument('ijazah', '', document.value.ijazah.card);
        if(!fetch.success) 
        {
            error.value.ijazah = fetch.message;
        }else{
            toast.success(fetch.message)
        } 

    }

    if(document.value.npwp.number != null && document.value.npwp.card != null){
        const fetch = await docStore.createDocument('npwp', document.value.npwp.number, document.value.npwp.card);
        if(!fetch.success) 
        {
            error.value.npwp = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.bpjs.number != null && document.value.bpjs.card != null){
        const fetch = await docStore.createDocument('bpjs', document.value.bpjs.number, document.value.bpjs.card);
        if(!fetch.success)
        {
            error.value.bpjs = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.jamsostek.number != null && document.value.jamsostek.card != null){
        const fetch = await docStore.createDocument('jamsostek', document.value.jamsostek.number, document.value.jamsostek.card);
        if(!fetch.success)
        {
            error.value.jamsostek = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.simc.number != null && document.value.simc.card != null){
        const fetch = await docStore.createDocument('simc', document.value.simc.number, document.value.simc.card);
        if(!fetch.success)
        {error.value.simc = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.simab.number != null && document.value.simab.card != null){
        const fetch = await docStore.createDocument('simab', document.value.simab.number, document.value.simab.card);
        if(!fetch.success) 
        {error.value.simab = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if((document.value.vaksin1.date != null && document.value.vaksin1.location != null && document.value.vaksin1.card != null) && (document.value.vaksin2.date != null && document.value.vaksin2.location != null && document.value.vaksin2.card != null)){
        const fetch = await docStore.createVaccine(document.value.vaksin1.date, document.value.vaksin1.location, document.value.vaksin1.card, document.value.vaksin2.date, document.value.vaksin2.location, document.value.vaksin2.card);
        if(!fetch.success){
            error.value.vaksin1 = fetch.message;
            error.value.vaksin2 = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }

    if(document.value.cover.card != null){
        const fetch = await docStore.createDocument('cover', '', document.value.cover.card);
        if(!fetch.success){
            error.value.cover = fetch.message;
        }else{
            toast.success(fetch.message)
        } 
    }
}

const handleFile = (file, type) => {
    document.value[type].card = file;
}

const downloadHandle = () => {
    const login = localStorage.getItem('login')
    if(login != 'true'){
        openLogin.value = true;
    }else{
        const dokumenUrl = '/Example CV.pdf';
        window.open(dokumenUrl, '_blank')
    }
       
}
</script>