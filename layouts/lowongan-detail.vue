<template>
    <div>
          <NuxtLayout name="lowongan">
              <ModalLazyLoad v-if="!isReady" />
              <div v-if="isReady" class="grid grid-cols-12 gap-4">
                  <!-- List Jobs -->
                  <div class="col-span-12 order-last lg:order-first lg:col-span-6 max-h-[84vh] listjob lg:overflow-auto p-1 grid grid-cols-12 gap-4 pe-3">
                      <JobsCard :jobs="store?.jobs" />
                      <div class="col-span-12">
                          <div class="flex items-center justify-center">
                              <button v-if="store?.jobs?.length > 0" @click="showMore" class="flex items-center gap-3 p-2 px-4 text-sm rounded-lg border-2 border-slate-100 hover:border-slate-300 bg-slate-100">
                                  <svg v-if="showLoad" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"/><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"/><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"/><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"/></circle></svg>
                                  Tampilkan lebih banyak
                              </button>
                          </div>
                      </div>
                  </div>
                  <!-- End List Jobs -->
  
                  <!-- Jobs Detail -->
                  <div class="col-span-12 lg:col-span-6">
                    <slot />
                  </div>
                  <!-- End Jobs Detail -->
              </div>
          </NuxtLayout>
    </div>
  </template>
  
  <script setup>
  const store = useJobStore();
  const showLoad = ref(false);
  const isReady = ref(false);
  onMounted(async () => {
      store.getJobs();
      isReady.value = true;
  })
  
  const showMore = () => {
      showLoad.value = true;
      setTimeout(() => {
          store.moreJobs();
          showLoad.value = false;
      },2000);
  }
  
  </script>
  
  <style scoped>
  .listjob::-webkit-scrollbar {
      width: 10px;
  }
     
  .listjob::-webkit-scrollbar-track {
      @apply bg-slate-200 rounded-3xl;
  }
     
  .listjob::-webkit-scrollbar-thumb {
      @apply bg-slate-300;
  }
  </style>