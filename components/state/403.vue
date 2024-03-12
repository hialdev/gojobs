<template>
    <div class="flex items-center justify-center p-10">
        <div class="flex flex-col items-center gap-y-7">
            <NuxtImg src="/illustration/403.svg" alt="403 Error Permission" :class="['w-full',customClass]" />
            <h4 class="text-2xl text-slate-500 md:text-4xl medium">{{ title }}</h4>
            <p class="text-sm text-slate-500">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Ooopss... Anda tidak berhak mengakses halaman ini',
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