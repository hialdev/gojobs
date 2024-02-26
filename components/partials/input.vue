<template>
    <div class="mb-3">
        <label v-if="label" class="text-xs mb-3 block">{{label}}</label>
        <input :class="['block text-sm w-full bg-white rounded-3xl p-3 px-4 outline-transparent focus:outline-orange-500/20', inputClass]" @input="handleInput" :value="modelValue" :placeholder="placeholder" :type="typeInput"/>
    </div>
</template>

<script>
export default {
    props : {
        label: {
            type: String,
            default : null,
        },
        inputClass : {
            type: String,
        },
        typeInput : {
            type: String,
            default : 'text',
        },
        placeholder: {
            type: String,
            default : '',
        },
        modelValue : {
            type: [String, Number],
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('update:modelValue', event.target.value);
            this.$emit('input', event.target.value);
        },
    },
}

</script>