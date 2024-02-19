<template>
    <div
        :class="[
            'flex items-center gap-3 bg-white border border-white hover:border hover:border-primary hover:ring-4 hover:ring-orange-700/20 rounded-3xl overflow-hidden p-3',
            customClass
        ]"
    >
        <div class="w-[24px] text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M16.8927 16.92L19.9727 20M19.0837 11.581C19.0837 15.768 15.7007 19.162 11.5277 19.162C7.35566 19.162 3.97266 15.768 3.97266 11.582C3.97266 7.393 7.35566 4 11.5277 4C15.7007 4 19.0837 7.394 19.0837 11.581Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <input type="text" class="outline-0 border-0 min-w-[20em] w-full" :placeholder="label" @input="handleInput" />
    </div>
</template>

<script>
export default{
    props:{
        label:{
            type:String,
            default: 'Search...'
        },
        customClass: {
            type: String,
            default: '',
        },
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        },
    },
}
</script>