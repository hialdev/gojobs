<template>
    <div class="flex items-center justify-center fixed top-0 bottom-0 end-0 start-0">
        <div class="animate-flicker">
            <PartialsLogo />
        </div>
    </div>
</template>
<style scoped>
@keyframes fadeIn { 
  from { opacity: 0; } 
}

.animate-flicker {
    animation: fadeIn 1s infinite alternate;
}
</style>