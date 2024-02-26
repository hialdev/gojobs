<template>
    <div :class="{' bg-white text-black': !isBlended, 'absolute top-0 start-0 end-0 lg:fixed bg-transparent text-white': isBlended, 'lg:fixed lg:start-0 lg:end-0 lg:top-0 lg:w-full':isFixed }" class="z-50">
        <div id="navbar" class="grid grid-cols-12 items-center gap-3 px-5 md:px-7 py-3 container mx-auto">
            <div class="col-span-6 lg:col-span-4">
                <PartialsLogo :isBlended="isBlended" class="inline-block my-auto" />
            </div>
            <div class="col-span-6 lg:col-span-4 hidden lg:block">
                <PartialsNavbar :isBlended="isBlended"/>
            </div>
            <div class="col-span-6 lg:col-span-4 ms-auto">
                <PartialsButton @click="openLoginDialog" class="text-sm lg:text-normal whitespace-nowrap" :primary="true">Masuk</PartialsButton>
            </div>
        </div>

        <div class="fixed bottom-0 start-0 end-0 z-[99] flex justify-center lg:hidden">
            <div class="m-3 p-2 rounded-2xl bg-white inline-flex items-center gap-2">
                <NuxtLink to="/" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 12 12"><path fill="currentColor" d="M5.37 1.222a1 1 0 0 1 1.26 0l3.814 3.09A1.5 1.5 0 0 1 11 5.476V10a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V7.5A.5.5 0 0 0 7 7H5a.5.5 0 0 0-.5.5V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.477a1.5 1.5 0 0 1 .556-1.166l3.815-3.089Z"/></svg>
                    <span class="hidden sm:block camelcase pe-2 text-sm">Beranda</span>
                </NuxtLink>

                <NuxtLink to="/lowongan" activeClass="active" class="inline-flex m-0 items-center justify-center p-2 rounded-xl bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-primary cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm6-15h4V4h-4v2Z"/></svg>
                    <span class="hidden sm:block camelcase pe-2 text-sm">Lowongan</span>
                </NuxtLink>

                <NuxtLink to="/buat-cv" class="inline-flex m-0 items-center justify-center p-1.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white cursor-pointer gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ms-1 mt-1" width="27" height="27" viewBox="0 0 24 24"><g fill="currentColor"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"/><path fill-rule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"/></g></svg>
                    <span class="hidden sm:block camelcase pe-2 text-sm">Buat CV</span>
                </NuxtLink>
            </div>
        </div>

        <AuthLogin :isOpen="isOpen" @close="closeLoginDialog" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    props:{
        isBlended:{
            type:Boolean,
            default:false,
        },
        isFixed:{
            type:Boolean,
            default:false,
        },
    },
    methods:{
        openLoginDialog() {
            this.isOpen = true;
        },
        closeLoginDialog() {
            this.isOpen = false;
        },
    }
}
</script>

<style scoped>
.active{
    @apply text-primary bg-orange-100;
}
</style>