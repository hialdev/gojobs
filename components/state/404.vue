<template>
    <div class="flex items-center justify-center p-10">
        <div class="flex flex-col items-center gap-y-7">
            <NuxtImg src="/illustration/404.svg" alt="404 Not Found" :class="['w-full',customClass]" />
            <h4 class="text-2xl text-slate-500 md:text-4xl medium">{{ title }}</h4>
            <p class="text-sm text-slate-500">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Ooopss... Tidak dapat ditemukan',
    },
    desc: {
        type: String,
        default: ''
    },
    customClass: {
        type: String,
        default: '',
    }
})
</script>