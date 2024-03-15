<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady">
        <NuxtLayout name="notif">
            <template #notiflist>
                <div class="flex flex-col gap-3">
                    <div v-for="notif in notifStore.notifications" :key="notif.id" @click="selectNotif(notif)" class="cursor-pointer bg-white flex py-4 px-5 w-full rounded-xl hover:ring hover:ring-3 hover:ring-orange-600/20" :class="[{ 'border border-orange-500 ring-2 ring-orange-600/20': selectedNotif?.id == notif?.id }, {'bg-orange-100/50' : notif?.is_read == 0}]">
                        <!-- <div class="flex-shrink-0">
                            <NuxtImg class="w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                        </div> -->
                        <div class="pl-3 w-full">
                            <div class="text-gray-500 font-normal ">
                                <div class="text-sm text-gray-600 mb-1.5">{{notif?.type_name}}</div>
                                <div class="text-xs mb-1.5">{{notif?.subject}}</div>
                            </div>
                            <div class="text-xs text-gray-400 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                {{daysAgo(notif?.created_time)}}
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #notifdetail>
                <div v-if="selectedNotif == null" class="flex items-center justify-center border-2 border-dashed min-h-[20em] rounded-xl">
                    <p class="text-slate-500">Pilih notifikasi untuk melihat detail notifikasi</p>
                </div>
                <div v-else>
                    <!-- <NuxtImg class="w-12 h-12 mb-3" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/> -->
                    <h3 class="font-medium">{{selectedNotif.type_name}}</h3>
                    <p class="text-sm text-slate-500 mb-2">{{selectedNotif.subject}}</p>
                    <div class="text-xs text-gray-400 flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                        {{daysAgo(selectedNotif.created_time)}}
                    </div>
                    <div v-if="selectedNotif?.body" class="bg-slate-50 text-slate-500 text-sm rounded-xl overflow-hidden">
                        <div v-html="selectedNotif?.body" ></div>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Notifikasi | Gojobs.id',
    middleware: ["auth"]
})

import { useToast } from 'vue-toastification';

let selectedNotif = ref(null);
const route = useRoute();
const read = route?.query?.read;
const notifStore = useNotificationStore();
const toast = useToast();
const selectNotif = async (notif) => {
    await readNotif(notif?.id);
}
const isSelected = (notif) => {
  return selectedNotif.value && selectedNotif.value?.id == notif?.id;
}

const isReady = ref(false);

onMounted(async () => {
    console.log(read);
    if(read){
        await readNotif(read);
    }
    console.log(selectedNotif);
    isReady.value = true;
})

const readNotif = async (read) => {
    const open = await notifStore.readNotification(read);
    if(open?.success){
        toast.success('Membuka notifikasi : '+open?.data[0]?.id)
        selectedNotif.value = open?.data[0];
    }
}
</script>