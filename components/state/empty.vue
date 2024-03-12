<template>
    <div class="flex items-center justify-center p-10">
        <div class="flex flex-col items-center gap-y-7">
            <NuxtImg src="\illustration\no_data.svg" alt="No Data in here" :class="['w-full',customClass]" />
            <h4 class="text-2xl text-slate-500 md:text-4xl medium text-center">{{ title }}</h4>
            <p class="text-sm text-slate-500 text-center">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Tidak ada data yang dapat ditampilkan',
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