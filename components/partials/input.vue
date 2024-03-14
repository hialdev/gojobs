<template>
    <div class="mb-3">
        <label v-if="label" class="text-xs mb-3 block">{{label}}</label>
        <input :class="['block text-sm w-full bg-white rounded-3xl p-3 px-4 outline-transparent focus:outline-orange-500/20',{'border-rose-500': !modelValue && submitted && required}, inputClass]"
               ref="input"
               @input="handleInput" 
               :value="modelValue" 
               :placeholder="placeholder" 
               :type="typeInput"
               @blur="validateInput" :required="required"/>
        <span v-if="!modelValue && required && submitted" class="text-xs text-red-500">{{ label ? label : 'This field'}} is required</span>
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
        },
        submitted : {
            type: Boolean,
            default : false,
        },
        required: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('update:modelValue', event.target.value);
            this.$emit('input', event.target.value);
        },
        validateInput() {
            if (!this.modelValue && this.submitted && this.required) {
                this.$refs.input.classList.add('border-rose-500');
            } else {
                this.$refs.input.classList.remove('border-rose-500');
            }
        }
    },
}

</script>
