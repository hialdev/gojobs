<template>
    <div class="mb-3">
        <label v-if="label" for="" class="text-xs mb-3 block">{{label}}</label>
        <input :class="['block text-sm w-full bg-white rounded-3xl p-3 px-4 outline-transparent focus:outline-orange-500/20', inputClass]" :placeholder="placeholder" :type="typeInput" />
    </div>
</template>

<script>
export default{
    props:{
        label:{
            type: String,
            default : '',
        },
        inputClass:{
            type: String,
            default:'',
        },
        typeInput:{
            type: String,
            default: 'text',
        },
        placeholder:{
            type: String,
            default: '',
        }
    }
}
</script>