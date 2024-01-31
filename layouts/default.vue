<template>
    <div>
        <div v-if="isLogin === 'true'">
            <SeekerHeader />
        </div>
        <div v-else>
            <AppHeader :isBlended="isBlended" :isFixed="isFixed" />
        </div>
        
        <slot />
    </div>
</template>

<script setup>
const isBlended = ref(false);
const isFixed = ref(false);
const isLogin = process.client ? localStorage.getItem('login') : null;
</script>