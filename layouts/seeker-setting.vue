<template>
    <div>
        <NuxtLayout name="seeker">
            <div class="lg:hidden fixed p-3 bottom-0 start-0 end-0 flex flex-col items-center justify-center">
                <div class="inline-flex items-center gap-x-1 p-1 mb-0 bg-white rounded-xl">
                    <div class="text-orange-500 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.485c-.658 0-1.23.421-2.373 1.264L7.906 4.018c-.18.133-.27.199-.367.255c-.097.056-.2.1-.405.19l-1.959.856c-1.302.57-1.953.854-2.282 1.423c-.328.57-.25 1.276-.091 2.688l.238 2.125c.025.222.037.333.037.445c0 .112-.012.223-.037.445l-.238 2.125c-.158 1.412-.237 2.118.091 2.688c.33.57.98.854 2.282 1.423l1.96.856c.204.09.307.134.404.19c.096.056.187.122.367.255l1.72 1.269c1.145.843 1.717 1.264 2.374 1.264s1.23-.421 2.373-1.264l1.721-1.269c.18-.133.27-.199.367-.255c.097-.056.2-.1.405-.19l1.959-.856c1.302-.57 1.953-.854 2.282-1.423c.328-.57.25-1.276.09-2.688l-.237-2.125c-.025-.222-.038-.333-.038-.445c0-.112.013-.223.038-.445l.238-2.125c.158-1.412.237-2.118-.091-2.688c-.33-.57-.98-.854-2.282-1.423l-1.96-.856a4.128 4.128 0 0 1-.404-.19a4.132 4.132 0 0 1-.367-.255l-1.72-1.269C13.228 1.906 12.656 1.485 12 1.485M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"/></svg>
                    </div>
                    <NuxtLink to="/seeker/settings/account" activeClass="activeTab" class="cursor-pointer flex items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30c3.198 0 6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
                        <span class="hidden md:block">Detail Akun</span>
                    </NuxtLink>
                    <NuxtLink to="/seeker/settings/notifikasi" activeClass="activeTab" class="cursor-pointer flex items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"/></svg>
                        <span class="hidden md:block">Notifikasi</span>
                    </NuxtLink>
                    <NuxtLink to="/seeker/settings/hapus-akun" activeClass="bg-red-50/50" class="cursor-pointer flex items-center p-3 px-5 gap-5 hover:bg-red-50/50 text-red-500 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/><path stroke-linecap="round" d="m33 31l8 8m-8 0l8-8m-14-3h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21"/></g></svg>
                        <span class="hidden md:block">Hapus Akun</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="py-10">
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 md:gap-6">
                        <div class="hidden lg:block col-span-3">
                            <h5 class="text-xl font-medium">Pengaturan</h5>
                            <div class="flex flex-col items-start gap-2 p-4 mb-0 bg-white rounded-xl">
                                <NuxtLink to="/seeker/settings/account" activeClass="activeTab" class="cursor-pointer flex w-full items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30c3.198 0 6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
                                    <span class="hidden md:block">Detail Akun</span>
                                </NuxtLink>
                                <NuxtLink to="/seeker/settings/notifikasi" activeClass="activeTab" class="cursor-pointer flex w-full items-center p-3 px-5 gap-5 text-slate-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"/></svg>
                                    <span class="hidden md:block">Notifikasi</span>
                                </NuxtLink>
                                <NuxtLink to="/seeker/settings/hapus-akun" activeClass="bg-red-50/50" class="cursor-pointer flex w-full items-center p-3 px-5 gap-5 hover:bg-red-50/50 text-red-500 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/><path stroke-linecap="round" d="m33 31l8 8m-8 0l8-8m-14-3h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21"/></g></svg>
                                    <span class="hidden md:block">Hapus Akun</span>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-9">
                            <NuxtPage />
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
        
    </div>
</template>

<script setup>

onMounted(() => {
    
});

</script>

<style scoped>
.activeTab{
    @apply bg-primary text-white;
}
</style>