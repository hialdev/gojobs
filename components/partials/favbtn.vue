<template>
    <div class="w-[24px] h-[24px] cursor-pointer text-orange-300 hover:text-orange-400">
        <svg v-if="!job?.favorite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07" opacity=".16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071"/></g></svg>
        <svg v-if="job?.favorite" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.222 5.364A6.002 6.002 0 0 1 12 4.758a6.002 6.002 0 0 1 7.778 9.091l-5.657 5.657a3 3 0 0 1-4.242 0L4.222 13.85a6 6 0 0 1 0-8.485" clip-rule="evenodd"/></svg>
    </div>
</template>

<script setup>
const props = defineProps({
    job : {
        type: Object,
        default: {
            favorite : false,
        }
    },
})
</script>