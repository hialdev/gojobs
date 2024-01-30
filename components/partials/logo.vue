<template>
    <div>
        <NuxtLink :to="path">
            <NuxtImg
                :src="imgBlended"
                alt="Logo Gojobs"
                :class="['h-[35px] cursor-pointer', customClass]"
            />
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        isBlended: {
            type: Boolean,
            default: false,
        },
        customClass: {
            type: String,
            default: ''
        },
        path:{
            type: String,
            default: '/'
        }
    },
    computed: {
        imgBlended() {
            return this.isBlended
            ? "/image/logo-gojobs-colour.png"
            : "/image/logo-gojobs-colour.png";
        },
    },
};
</script>
  