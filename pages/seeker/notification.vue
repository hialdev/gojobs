<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady">
        <NuxtLayout name="notif">
            <template #notiflist>
                <div class="flex flex-col gap-3">
                    <div v-for="notif in notifications" :key="notif.id" @click="selectNotif(notif)" class="cursor-pointer bg-white flex py-4 px-5 w-full rounded-xl hover:ring hover:ring-3 hover:ring-orange-600/20" :class="{ 'ring-3 ring-orange-600/20': isSelected(notif) }">
                        <div class="flex-shrink-0">
                            <NuxtImg class="w-11 h-11" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                        </div>
                        <div class="pl-3 w-full">
                            <div class="text-gray-500 font-normal ">
                                <div class="text-sm text-gray-600 mb-1.5">{{notif.title}}</div>
                                <div class="text-xs mb-1.5">{{notif.about}}</div>
                            </div>
                            <div class="text-xs text-gray-400 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                                {{notif.time}}
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
                    <NuxtImg class="w-12 h-12 mb-3" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"/>
                    <h3 class="font-medium">{{selectedNotif.title}}</h3>
                    <p class="text-sm text-slate-500 mb-2">{{selectedNotif.about}}</p>
                    <div class="text-xs text-gray-400 flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
                        {{selectedNotif.time}}
                    </div>
                    <div class="bg-slate-50 text-slate-500 text-sm p-6 rounded-xl">
                        <p>{{selectedNotif.messages}}</p>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup>
let selectedNotif = ref(null);

const selectNotif = (notif) => {
    selectedNotif.value = notif;
}
const isSelected = (notif) => {
  return selectedNotif.value && selectedNotif.value.id === notif.id;
}

const isReady = ref(false);

onMounted(() => {
    isReady.value = true;
})
const notifications = [
    {
        id : 1,
        title : 'PT. Argo Berjaya Nusantara',
        about : 'Tidak lanjut dengan lamaranmu untuk posisi Design Graphic',
        time : 'beberapa detik yang lalu',
        messages : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat cupiditate veniam corrupti doloribus ipsum quaerat, minus blanditiis dolores ex, quo dolorem ad ratione possimus iste vel dolor inventore alias.
                        Accusamus corrupti quidem ipsam cumque modi dolorum, dolore, hic in doloribus veritatis nihil, culpa vel nulla nam! Odio libero sapiente laboriosam deleniti reiciendis reprehenderit quod. Veniam vel quisquam blanditiis ea.
                        Facere repellat beatae quisquam nihil.`
    },
    {
        id : 2,
        title : 'PT. Devtektif',
        about : 'Tidak lanjut dengan lamaranmu untuk posisi IT Support',
        time : '1 menit yang lalu',
        messages : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat cupiditate veniam corrupti doloribus ipsum quaerat, minus blanditiis dolores ex, quo dolorem ad ratione possimus iste vel dolor inventore alias.
                        Accusamus corrupti quidem ipsam cumque modi dolorum.`
    },
    {
        id : 3,
        title : 'PT. Devtektif Digital Solution',
        about : 'Selamat, lamaran anda sebagai CEO dilanjutkan ke tahap interview HR',
        time : '3 menit yang lalu',
        messages : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat cupiditate veniam corrupti doloribus ipsum quaerat, minus blanditiis dolores ex, quo dolorem ad ratione possimus iste vel dolor inventore alias.
                        Accusamus corrupti quidem ipsam cumque modi dolorum, dolore, hic in doloribus veritatis nihil, culpa vel nulla nam! Odio libero sapiente laboriosam deleniti reiciendis reprehenderit quod. Veniam vel quisquam blanditiis ea.
                        Facere repellat beatae quisquam nihil, fugiat doloremque accusantium consequatur voluptatum nulla placeat ullam explicabo earum illum voluptatem minus est voluptas veniam aperiam nostrum, eligendi provident ipsa distinctio laudantium. Amet, aut!
                        Hic quis saepe explicabo suscipit dolorem inventore beatae sunt eius sit reiciendis sint debitis odio nobis et cupiditate quas, facere consequuntur esse adipisci minima nemo? Sit dolores inventore assumenda alias.`
    }
]
</script>