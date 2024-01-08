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

<script>
export default {
    data() {
        return {
            isBlended: false,
            isFixed: false,
            isLogin : process.client ? localStorage.getItem('login') : null,
        };
    },
};
</script>