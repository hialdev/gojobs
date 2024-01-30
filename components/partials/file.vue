<template>
    <div>
        <label v-if="label" class="block mb-2 text-sm font-medium text-slate-500" for="file_input">{{label}}</label>
        <div class="relative">
            <input type="file" class="
                text-sm w-full
                file:bg-orange-200 file:text-primary file:border-0
                file:py-1 file:px-3 file:rounded-full
                text-gray-600 p-2 border border-slate-200 rounded-3xl
            " :multiple="multiple">
        </div>
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