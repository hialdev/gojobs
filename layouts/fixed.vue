<template>
    <div>
        <AppHeader :isBlended="isBlended" :isFixed="isFixed" :isLogged="isLogged" />
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBlended: true,
            isFixed: true,
            isLogged: process.client ? localStorage.getItem('access_token') : false,
        };
    },
    mounted() {
        window.document.onscroll = () => {
            if(this.isFixed){
                let navBar = document.getElementById('navbar');
                if(window.scrollY > navBar?.offsetTop + 200){
                    this.isBlended = false;
                    } else {
                    this.isBlended = true;
                }
            }
        }
    },
};
</script>