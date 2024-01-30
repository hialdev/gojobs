
<template>
    <div class="bg-white">
        <div class="container mx-auto flex items-center justify-between px-5 py-2">
            <PartialsLogo :path="`/seeker/dashboard`" />
            <div class="flex-1 flex justify-center">
                <SeekerNavbar />
            </div>
            <div class="flex items-center gap-3">
                <div class="relative">
                    <!-- Notifications -->
                    <button @click="() => {notifShow = !notifShow; menuShow = false}" type="button" data-dropdown-toggle="notification-dropdown" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-orange-50 focus:ring-4 focus:ring-orange-50">
                        <!-- Bell icon -->
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20"><path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/></svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div v-if="notifShow == true" class="absolute top-[2em] end-[-6em] md:end-0 min-w-[20em] max-w-[30em] w-full overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg">
                        <div class="block py-2 px-4 text-base font-medium bg-white py-4">
                            Notifikasi
                        </div>
                        <div>
                            <NuxtLink to="" class="flex py-3 px-4 border-b hover:bg-gray-100">
                                <div class="flex-shrink-0">
                                    <NuxtImg class="w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                                </div>
                                <div class="pl-3 w-full">
                                    <div class="text-gray-500 font-normal ">
                                        <div class="text-sm text-gray-600 mb-1.5">PT. Argo Berjaya Nusantara</div>
                                        <div class="text-xs mb-1.5">Tidak lanjut dengan lamaranmu untuk posisi Design Graphic</div>
                                    </div>
                                    <div class="text-xs text-gray-400 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                        beberapa detik yang lalu
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink to="" class="flex py-3 px-4 border-b hover:bg-gray-100">
                                <div class="flex-shrink-0">
                                    <NuxtImg class="w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                                </div>
                                <div class="pl-3 w-full">
                                    <div class="text-gray-500 font-normal ">
                                        <div class="text-sm text-gray-600 mb-1.5">PT. Argo Berjaya Nusantara</div>
                                        <div class="text-xs mb-1.5">Tidak lanjut dengan lamaranmu untuk posisi Design Graphic</div>
                                    </div>
                                    <div class="text-xs text-gray-400 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                        beberapa detik yang lalu
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink to="" class="flex py-3 px-4 border-b hover:bg-gray-100">
                                <div class="flex-shrink-0">
                                    <NuxtImg class="w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                                </div>
                                <div class="pl-3 w-full">
                                    <div class="text-gray-500 font-normal ">
                                        <div class="text-sm text-gray-600 mb-1.5">PT. Argo Berjaya Nusantara</div>
                                        <div class="text-xs mb-1.5">Tidak lanjut dengan lamaranmu untuk posisi Design Graphic</div>
                                    </div>
                                    <div class="text-xs text-gray-400 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                        beberapa detik yang lalu
                                    </div>
                                </div>
                            </NuxtLink>
                            <NuxtLink to="" class="flex py-3 px-4 border-b hover:bg-gray-100">
                                <div class="flex-shrink-0">
                                    <NuxtImg class="w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                                </div>
                                <div class="pl-3 w-full">
                                    <div class="text-gray-500 font-normal ">
                                        <div class="text-sm text-gray-600 mb-1.5">PT. Argo Berjaya Nusantara</div>
                                        <div class="text-xs mb-1.5">Tidak lanjut dengan lamaranmu untuk posisi Design Graphic</div>
                                    </div>
                                    <div class="text-xs text-gray-400 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                        beberapa detik yang lalu
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                        <NuxtLink to="/seeker/notification" class="block py-2 text-sm font-medium text-center text-gray-600 bg-white-50 hover:bg-[#fa6900] hover:text-white">
                            <div class="inline-flex items-center">
                                <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                                View all
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <div class="relative">
                    <button @click="() => {menuShow = !menuShow; notifShow = false}" type="button" class="bg-slate-50 p-1 flex items-center gap-3 text-slate-400 rounded-3xl pe-4" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span class="sr-only">Open user menu</span>
                        <NuxtImg class="w-8 h-8 rounded-full" :src="`https://ui-avatars.com/api/?name=${profile?.name}`" alt="user photo" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"/></svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div v-if="menuShow" class="absolute top-[2em] end-0 min-w-[20em] max-w-[30em] w-full z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow text-gray-500">
                        <div class="py-3 px-4">
                            <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{profile?.name}}</span>
                            <span class="block text-sm text-gr uncate">{{profile?.email}}</span>
                        </div>
                        <ul class="m-0 py- ay-500">
                            <li>
                                <NuxtLink activeClass="bg-orange-50" to="/seeker/profile" class="block py-2 px-4 text-sm hover:bg-gray-100">My profile</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink activeClass="bg-orange-50" to="/seeker/settings" class="block py-2 px-4 text-sm hover:bg-gray-100">Account settings</NuxtLink>
                            </li>
                        </ul>
                        <ul class="m-0 ay-500 lg:hidden">
                            <li>
                                <NuxtLink to="/seeker/dashboard" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2m6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2"/></svg>
                                    Dashboard
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/lowongan" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"/></svg>
                                    Lowongan
                                </NuxtLink>
                            </li>
                            
                        </ul>
                        <ul class="m-0 py- ay-500">
                            <li>
                                <div class="font-medium py-2 px-4 text-sm text-gray-900 gap-2">
                                    Lamaran Saya
                                </div>
                            </li>
                            <li>
                                <NuxtLink to="/seeker/lamaran/applied" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/><path d="M36 16h-8v8h8v-8Z"/><path stroke-linecap="round" d="M12 32h24M12 16h6m-6 8h6"/></g></svg>
                                    Dilamar
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/seeker/lamaran/process" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 2048 2048"><path fill="currentColor" d="M256 896h640V768H256v128zM0 256v987q28-35 59-66t69-56V384h1792v1280h-903q-3 33-10 65t-18 63h1059V256H0zm1792 1152q0-52-14-101t-40-93t-63-80t-83-61q34-35 53-81t19-96q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 50 19 96t53 81q-46 25-83 61t-63 79t-40 93t-14 102h128q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100h128zm-384-640q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10zM10 1488l124 51q-6 30-6 61t6 61l-124 51l49 119l124-52q35 51 86 86l-52 124l119 49l51-124q30 6 61 6t61-6l51 124l119-49l-52-124q51-35 86-86l124 52l49-119l-124-51q6-30 6-61t-6-61l124-51l-49-119l-124 52q-35-51-86-86l52-124l-119-49l-51 124q-30-6-61-6t-61 6l-51-124l-119 49l52 124q-51 35-86 86l-124-52l-49 119zm438 304q-40 0-75-15t-61-41t-41-61t-15-75q0-40 15-75t41-61t61-41t75-15q40 0 75 15t61 41t41 61t15 75q0 40-15 75t-41 61t-61 41t-75 15z"/></svg>
                                    Diproses
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/seeker/lamaran/saved" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/></svg>
                                    Tersimpan
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/seeker/lamaran/seen" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                    Terakhir dilihat
                                </NuxtLink>
                            </li>
                        </ul>
                        <ul class="m-0 py- ay-500">
                            <li>
                                <NuxtLink to="/bantuan" activeClass="bg-orange-50" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-.53 0-1.04.21-1.41.59C2.21 2.96 2 3.47 2 4v12c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h4l4 4l4-4h4c.53 0 1.04-.21 1.41-.59S22 16.53 22 16V4c0-.53-.21-1.04-.59-1.41C21.04 2.21 20.53 2 20 2m-9.95 4.04c.54-.36 1.25-.54 2.14-.54c.94 0 1.69.21 2.23.62c.54.42.81.98.81 1.68c0 .44-.15.83-.44 1.2c-.29.36-.67.64-1.13.85c-.26.15-.43.3-.52.47c-.09.18-.14.4-.14.68h-2c0-.5.1-.84.29-1.08c.21-.24.55-.52 1.07-.84c.26-.14.47-.32.64-.54c.14-.21.22-.46.22-.74c0-.3-.09-.52-.27-.69c-.18-.18-.45-.26-.76-.26c-.27 0-.49.07-.69.21c-.16.14-.26.35-.26.63H9.27c-.05-.69.23-1.29.78-1.65M11 14v-2h2v2Z"/></svg>
                                    Bantuan
                                </NuxtLink>
                            </li>
                            <li>
                                <div @click="logoutModalOn" class="cursor-pointer block py-2 px-4 text-sm text-red-600 hover:bg-red-50">Keluar</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="logoutModal" class="z-[99] flex items-center justify-center h-screen w-full fixed top-0 end-0 start-0 bottom-0 bg-black/20">
            <div class="p-8 bg-white rounded-xl">
                <h3 class="text-xl font-medium mb-2">Apakah kamu yakin ingin keluar ?</h3>
                <p class="text-sm text-slate-500 mb-5">Setelah keluar kamu akan diarahkan kehalaman beranda</p>
                <div class="flex items-center justify-end gap-4">
                    <button @click="logoutHandle" class="p-2 px-4 rounded-lg bg-red-600 text-white">Keluar</button>
                    <button @click="cancelLogout" class="p-2 px-4 rounded-lg bg-slate-100 text-slate-600">Batal</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useUserStore} from '@/stores/user'
const notifShow = ref(false);
const menuShow = ref(false);
const logoutModal = ref(false);
const profile = ref(null);
const store = useUserStore();
const logoutModalOn = () => {
    logoutModal.value = true;
}
const cancelLogout = () => {
    logoutModal.value = false;
}
const logoutHandle = async () => {
    const logout = await store.logout();
    console.log(logout);
    if(logout.success){
        localStorage.setItem('login','false');
        setTimeout(() => {
            navigateTo('/');
        }, 500);
    }
}

onMounted(() => {
    profile.value = JSON.parse(localStorage.getItem('profile'));
})
</script>