<template>
    <div>
        <div v-if="isLogin">
            <SeekerHeader />
        </div>
        <div v-else>
            <AppHeader />
        </div>
        <div class="bg-[#fafafa] min-h-screen py-[1em]">
            <div class="container mx-auto px-5">
                <div class="lg:sticky lg:top-0 lg:bg-[#fafafa] pt-1 pb-1 mb-2 z-10">
                    <Filtering />
                </div>

                <slot />
            </div>

        </div>
    </div>
</template>

<script setup>
const isLogin = ref(false);

onMounted(() => {
    const access = localStorage.getItem('access_token');
    if(access){
        isLogin.value = true;
    }else{
        isLogin.value = false;
    }
})
</script>

<style scoped>
.listjob::-webkit-scrollbar {
    width: 0px;
}
   
.listjob::-webkit-scrollbar-track {
    @apply bg-transparent;
}
   
.listjob::-webkit-scrollbar-thumb {
    @apply bg-transparent;
}
</style>
