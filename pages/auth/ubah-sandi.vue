<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady" class="flex items-center justify-center min-h-[82vh]">
        <auth-change />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'simple',
})

const isReady = ref(false);

onMounted(() => {
    isReady.value = true;  
})
</script>

