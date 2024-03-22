<template>
    <div>
        <div class="bg-white p-6 rounded-xl">
            <div class="py-3 border-b">
                <h3 class="font-medium">Notifikasi</h3>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-12 py-6 border-b">
                    <h4 class="font-medium text-sm mb-4">Email</h4>
                    <div class="flex items-center gap-2 justify-between mb-3">
                        <div>
                            <div class="text-sm mb-1">Pemberitahuan Pekerjaan</div>
                            <div class="text-xs text-slate-500">Dapatkan rekomendasi yang disesuaikan dan lihat siapa yang membuka lowongan di dekat Anda</div>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="dataStore.mail.job" @change="changeNotifJob" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <div>
                            <div class="text-sm mb-1">Lamaran</div>
                            <div class="text-xs text-slate-500">Dapatkan pemberitahuan tentang status lamaran yang Anda buat</div>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" @change="changeNotifRecruit" v-model="dataStore.mail.recuirtment" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                <!-- <div class="col-span-12 py-6">
                    <h4 class="font-medium text-sm mb-4">Whatsapp</h4>
                    <div class="flex items-center gap-2 justify-between mb-3">
                        <div>
                            <div class="text-sm mb-1">Pemberitahuan Pekerjaan</div>
                            <div class="text-xs text-slate-500">Pantau terus wawancara Anda yang akan datang dengan pemberitahuan ini</div>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div> -->
            </div>
        </div>
        <div @click="changeNotifAll" class="inline-block cursor-pointer hover:underline p-6 text-primary font-light">
            Berhenti berlangganan semua notifikasi
        </div>
        <div class="bg-white p-6 rounded-xl">
            <div class="py-3 border-b">
                <h3 class="font-medium">Profil Publik</h3>
            </div>
            <div class="grid grid-cols-12">
                <div class="col-span-12 py-6 border-b">
                    <h4 class="font-medium text-sm mb-4">Atur visibilitas profil Anda</h4>
                    <div class="flex items-center gap-2 justify-between mb-3">
                        <div>
                            <div class="text-sm mb-1">Profil Dapat Dilihat Semua Orang</div>
                            <div class="text-xs text-slate-500">Ini mengontrol apakah URL di bawah ini dipublikasikan atau tidak. Demi perlindungan Anda, alamat email, alamat fisik lengkap, dan nomor telepon Anda tidak pernah dibagikan kepada publik. Informasi ini hanya tersedia bagi perusahaan tempat Anda melamar pekerjaan.</div>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" @change="changeVisibility" v-model="dataStore.visibility" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 py-6">
                        <div>
                            <div class="text-sm mb-1">URL publik Anda</div>
                            <div class="text-xs text-slate-500">Salin URL unik Anda untuk aplikasi</div>
                        </div>
                        <div>
                            <div class="flex w-full items-center justify-between gap-6 p-4 rounded-lg border">
                                <div class="font-medium text-xs flex-1">https://{{domain}}/u/{{ username }}</div>
                                <button class="text-primary text-sm" @click="copyToClipboard">Copy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
definePageMeta({
    layout:'seeker-setting',
})
const toast = useToast();
const username = ref('noeralif63');
const domain = ref('gojobs.id');

const dataStore = ref({
    mail : {
        job : false,
        recuirtment : false,
        job : false,
    },
    others: false,
    visibility : false,
})
const user = useUserStore();

onMounted(async () => {
    const profile = await user.getProfile();
    username.value = profile?.username;
    dataStore.value.mail.job = profile?.is_notification_mail == 'yes' ? true : false;
    dataStore.value.mail.recuirtment = profile?.is_notification_mail_recruitment == 'yes' ? true : false;
    dataStore.value.others = profile?.is_notification_other == 'yes' ? true : false;
    dataStore.value.visibility = profile?.is_visible == 'yes' ? true : false;
})

const copyToClipboard = () => {
  navigator.clipboard.writeText(`http://${domain.value}/u/${username.value}`)
    .then(() => toast.success('Success copying profile link to clipboard'))
    .catch((error) => toast.error('Error copying text to clipboard : ' + error));
};

const changeNotifJob = async() => {
    const status = dataStore.value.mail.job ? 'yes' : 'false';
    const change = await user.changeNotifJob(status);
    if(change.success){
        toast.success(change.message);
    }else{
        toast.error(change.message);
    }
}

const changeNotifAll = async() => {
    const change = await user.changeNotifAll('no');
    if(change.success){
        toast.success(change.message);
        dataStore.value.mail.job = false;
        dataStore.value.mail.recuirtment = false;
    }else{
        toast.error(change.message);
    }
}

const changeNotifRecruit = async() => {
    const status = dataStore.value.mail.recuirtment ? 'yes' : 'no';
    const change = await user.changeNotifRecruit(status);
    if(change.success){
        toast.success(change.message);
    }else{
        toast.error(change.message);
    }
}

const changeNotifOther = async() => {
    const status = dataStore.value.others ? 'yes' : 'no';
    const change = await user.changeNotifOther(status);
    if(change.success){
        toast.success(change.message);
    }else{
        toast.error(change.message);
    }
}

const changeVisibility = async() => {
    const status = dataStore.value.visibility ? 'yes' : 'no';
    const change = await user.changeVisibility(status);
    if(change.success){
        toast.success(change.message);
    }else{
        toast.error(change.message);
    }
}
</script>