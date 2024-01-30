<template>
    <div class="flex items-center justify-center h-screen w-full fixed top-0 end-0 bottom-0 start-0 px-5 z-[99] bg-black/20">
        <div class="bg-white max-w-[30em] p-6 rounded-3xl text-center">
            <client-only>
                <Vue3Lottie
                    animationLink="https://lottie.host/ccd755ef-a418-4018-98be-9e18d31262f1/XdzsagGwfC.json"
                    :height="100"
                    :width="100"
                />
            </client-only>
            <div class="md:text-2xl text-dark">{{title}}</div>
            <p class="text-sm md:text-base text-slate-500">{{message}}</p>
            <div class="pt-6 text-xs">anda akan segera dialihkan...</div>
        </div>
    </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'

const props = defineProps({
    title : String,
    message : String,
})
</script>
