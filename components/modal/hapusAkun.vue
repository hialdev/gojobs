<template>
    <div class="flex items-center justify-center h-screen w-full fixed top-0 end-0 bottom-0 start-0 px-5 z-[99] bg-black/20">
        <div class="bg-white p-6 rounded-3xl text-center max-w-[25em]">
            <div class="text-base md:text-xl text-primary mb-3">{{title}}</div>
            <p class="text-sm text-slate-500 mb-4">{{message}}</p>
            <div class="flex items-center justify-center gap-4">
                <PartialsButton @click="hapusCancel" :primary="false">Cancel</PartialsButton>
                <PartialsButton @click="hapusConfirm">Hapus</PartialsButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            default: '',
        },
    },

    methods:{
        hapusCancel(){
            this.$emit('cancel')
        },
        hapusConfirm(){
            this.$emit('hapus')
        },
    }
}
</script>
