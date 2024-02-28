<template>
    <div>
      <div v-if="isLogin === 'true'">
          <SeekerHeader />
      </div>
      <div v-else>
          <AppHeader />
      </div>
      <div class="bg-[#fafafa] min-h-screen py-[1em]">
          <div class="container mx-auto px-5">
              <div class="lg:sticky lg:top-0 lg:bg-[#fafafa] pt-1 pb-1 mb-2 z-10">
                  <Filtering />
              </div>
  
              <slot />
          </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import JobsListjob from '@/components/jobs/listjob.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import Filtering from '@/components/Filtering.vue'
  
  export default {
      components:{
        JobsListjob,
        Filtering,
        AppHeader
      },
      data(){
          return{
              isLogin : process.client ? localStorage.getItem('login') : null,
          }
      },
      computed:{
          
      },
      methods: {
          
      },
  }
  </script>
  
  <style scoped>
  .listjob::-webkit-scrollbar {
      width: 0px;
  }
     
  .listjob::-webkit-scrollbar-track {
      @apply bg-transparent;
  }
     
  .listjob::-webkit-scrollbar-thumb {
      @apply bg-transparent;
  }
  </style>