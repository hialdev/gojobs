<template>
    <div>
        <label v-if="label" class="block mb-2 text-sm font-medium text-slate-500" for="file_input">{{label}}</label>
        <input class="block w-full text-sm text-gray-900 border border-slate-200 rounded-lg cursor-pointer bg-white focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file" :multiple="multiple">
        <p class="mt-1 text-xs text-slate-500" id="file_input_help">{{allowed}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    label : String,
    allowed : String,
    multiple : {
        type : Boolean,
        default : false,
    }
})
</script>