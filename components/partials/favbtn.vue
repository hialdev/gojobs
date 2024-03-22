<template>
    <div v-if="isReady" @click.prevent="beFavorite" class="w-[24px] h-[24px] cursor-pointer text-orange-300 hover:text-orange-400">
        <svg v-if="props?.job?.is_favorite != 1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07" opacity=".16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a5 5 0 0 1 7.07-7.071a5 5 0 0 1 7.072 7.071"/></g></svg>
        <svg v-if="props?.job?.is_favorite == 1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.222 5.364A6.002 6.002 0 0 1 12 4.758a6.002 6.002 0 0 1 7.778 9.091l-5.657 5.657a3 3 0 0 1-4.242 0L4.222 13.85a6 6 0 0 1 0-8.485" clip-rule="evenodd"/></svg>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';
const toast = useToast()
const props = defineProps({
    job :{
        type : Object,
    },
})

const isfav = ref(false);
const isReady = ref(false);

const jobStore = useJobStore();
const beFavorite = async () => {
    if(localStorage.getItem('access_token')){
        if(props?.job?.is_favorite != 1){
            try {
                const fav = await jobStore.makeFavorite(props?.job?.id);
                if(fav?.success){
                    toast.success(`Success!! ${fav?.message}`);
                    isfav.value = true;
                }
            } catch (error) {
                toast.error(`${error}`);
            }
        }else{
            const fav = await jobStore.unFavorite(props?.job?.id);
            if(!fav.success){
                toast.error(`${fav?.code} - ${fav?.message}`);
            }else{
                toast.success(`Success!! ${fav?.message}`);
                isfav.value = false;
            }
        }
    }else{
        toast.warning('Ooopss... Silahkan masuk / daftar terlebih dahulu');
    }
}

onMounted(() => {
    isReady.value = true;  
})
</script>