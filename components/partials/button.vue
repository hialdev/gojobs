<template>
    <button :type="is_submit ? 'submit' : 'button'" v-if="path === ''" :class="[buttonClass, $parent.buttonClass]">
        <slot />
    </button>
    <NuxtLink v-else :to="path" :class="[buttonClass, $parent.buttonClass]">
        <slot />
    </NuxtLink>
</template>
  
<script>
    export default {
        props: {
            primary: {
                type: Boolean,
                default: true,
            },
            path:{
                type: String,
                default: '',
            },
            is_submit:{
                type: Boolean,
                default: false,
            }
        },
        computed: {
            buttonClass() {
                return {
                    'cursor-pointer p-2 px-4 rounded-3xl inline-block' : true,
                    'bg-primary text-white border-2 border-primary hover:bg-orange-600 hover:border-orange-600': this.primary,
                    'bg-slate-100 border-slate-100 border-2 hover:bg-slate-100 text-slate-800 hover:border-slate-300': !this.primary,
                };
            },
        },
    };
</script>
  
  