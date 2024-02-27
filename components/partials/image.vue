<template>
    <div class="text-center relative">
        <!-- Preview image -->
        <img :src="`${imageUrl}`" height="100" width="100" class="block rounded-full border p-1 mx-auto w-[100px] h-[100px] object-cover" />
    
        <!-- Input file -->
        <input
            type="file"
            accept="image/*"
            @change="handleImageChange"
            class="text-sm text-stone-500 cursor-pointer absolute top-0 start-0 end-0 bottom-0 opacity-0
            file:mr-5 file:p-3 file:px-5 file:rounded-3xl file:border-[0px] file:bg-orange-50
            file:bg-stone-50 file:text-stone-700
            hover:file:cursor-pointer hover:file:bg-orange-50 hover:file:text-orange-700"
        />
    </div>
</template>

<script>
export default {
    props:{
        activeImage : {
            type: String,
            default : '/image/placeholder-person.jpeg',
        }
    },
    data() {
        return {
            imageUrl: this.activeImage ?? '/image/placeholder-person.jpeg', // Default placeholder image
        };
    },
    methods: {
        handleImageChange(event) {
            const fileInput = event.target;
    
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
        
                reader.onload = () => {
                    this.imageUrl = reader.result; // Set the preview image
                    this.$emit('changeimage', reader.result);
                };
        
                reader.readAsDataURL(fileInput.files[0]);
            }
        },
    },
};
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
  