<template>
    <div class="items-center justify-center gap-8 hidden lg:flex">
        <NuxtLink :class="{'text-white':isBlended, 'text-black':!isBlended}" class="menu whitespace-nowrap" activeClass="active" to="/seeker/dashboard">Dashboard</NuxtLink>
        <NuxtLink :class="{'text-white':isBlended, 'text-black':!isBlended}" class="menu whitespace-nowrap" activeClass="active" to="/lowongan">Lowongan Kerja</NuxtLink>
        </div>
</template>
  
<script>
export default {
    props: {
        isBlended: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.menu{
    position: relative;
}
.menu.active::after{
    content: '';
    position:absolute;
    bottom:0;
    left: 0;
    border-radius: 20px;
    margin-bottom: -0.5em;
    height: 4px;
    background-color: #FF6600;
    width: 30%;   
}
</style>