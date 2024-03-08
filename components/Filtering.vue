<template>
    <div v-if="!isReady" class="bg-gray-100 p-5 rounded-3xl"></div>
    <div v-if="isReady" class="flex flex-row flex-wrap lg:items-center gap-3">
        <PartialsSearch v-model="filtering?.title" class="basis-full md:basis-1/3" :label="`Posisi / Jabatan`" />
        <PartialsMultiselect :selectedOptions="filtering?.location" @selected="handleLocation" class="basis-full z-[14] sm:flex-1" :label="`Lokasi`" :svgData="svgLocation" :options="cityOptions" />
        <PartialsMultiselect :selectedOptions="filtering?.contract" @selected="handleContract" class="flex-1 z-[12]" :label="`Kontrak`" :svgData="svgJenisKontrak" :options="contractOptions" />
        <button @click="resetFilter" class="flex items-center justify-center p-2 text-slate-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18a9 9 0 0 0 9-9m0-9v6h-6"/></svg>
        </button>
        <PartialsButton @click="setFilter">Cari</PartialsButton>
    </div>
</template>

<script setup>

const svgJenisKontrak = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"> <path d="M21.5997 5.32789H16.3533V4.05109C16.3533 3.60553 16.1763 3.17822 15.8613 2.86315C15.5462 2.54809 15.1189 2.37109 14.6733 2.37109H9.32613C8.88056 2.37109 8.45325 2.54809 8.13819 2.86315C7.82313 3.17822 7.64613 3.60553 7.64613 4.05109V5.32789H2.39973C1.95416 5.32789 1.52685 5.50489 1.21179 5.81995C0.896726 6.13502 0.719727 6.56233 0.719727 7.00789V19.9487C0.719727 20.3943 0.896726 20.8216 1.21179 21.1366C1.52685 21.4517 1.95416 21.6287 2.39973 21.6287H21.5997C22.0453 21.6287 22.4726 21.4517 22.7877 21.1366C23.1027 20.8216 23.2797 20.3943 23.2797 19.9487V7.00789C23.2797 6.56233 23.1027 6.13502 22.7877 5.81995C22.4726 5.50489 22.0453 5.32789 21.5997 5.32789ZM8.60613 4.05109C8.60613 3.86014 8.68198 3.677 8.81701 3.54198C8.95203 3.40695 9.13517 3.33109 9.32613 3.33109H14.6733C14.8643 3.33109 15.0474 3.40695 15.1824 3.54198C15.3175 3.677 15.3933 3.86014 15.3933 4.05109V5.32789H8.60613V4.05109ZM1.67973 7.00789C1.67973 6.81694 1.75558 6.6338 1.89061 6.49878C2.02564 6.36375 2.20877 6.28789 2.39973 6.28789H21.5997C21.7907 6.28789 21.9738 6.36375 22.1088 6.49878C22.2439 6.6338 22.3197 6.81694 22.3197 7.00789V10.0655C22.3185 10.9002 21.9863 11.7004 21.3961 12.2906C20.8058 12.8809 20.0056 13.213 19.1709 13.2143H13.9701V11.7311C13.9701 11.6038 13.9196 11.4817 13.8295 11.3917C13.7395 11.3017 13.6174 11.2511 13.4901 11.2511H10.5093C10.382 11.2511 10.2599 11.3017 10.1699 11.3917C10.0799 11.4817 10.0293 11.6038 10.0293 11.7311V13.2143H4.82853C3.9938 13.213 3.19363 12.8809 2.60339 12.2906C2.01315 11.7004 1.681 10.9002 1.67973 10.0655V7.00789ZM13.0101 12.2111V15.1775H10.9893V12.2111H13.0101ZM22.3197 19.9487C22.3197 20.1397 22.2439 20.3228 22.1088 20.4578C21.9738 20.5928 21.7907 20.6687 21.5997 20.6687H2.39973C2.20877 20.6687 2.02564 20.5928 1.89061 20.4578C1.75558 20.3228 1.67973 20.1397 1.67973 19.9487V12.7007C2.06464 13.1619 2.54617 13.533 3.09028 13.7876C3.63438 14.0422 4.22778 14.1743 4.82853 14.1743H10.0293V15.6575C10.0293 15.7848 10.0799 15.9069 10.1699 15.9969C10.2599 16.0869 10.382 16.1375 10.5093 16.1375H13.4901C13.6174 16.1375 13.7395 16.0869 13.8295 15.9969C13.9196 15.9069 13.9701 15.7848 13.9701 15.6575V14.1743H19.1709C19.7717 14.1743 20.3651 14.0422 20.9092 13.7876C21.4533 13.533 21.9348 13.1619 22.3197 12.7007V19.9487Z" fill="currentColor"/> </svg>`;
const svgLocation = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9Z" fill="currentColor"/>
                            <path d="M18.75 8.875C18.75 12.6725 16.25 17 11.875 22C7.5 17 5 12.6725 5 8.875C5 7.05164 5.72433 5.30295 7.01364 4.01364C8.30295 2.72433 10.0516 2 11.875 2C13.6984 2 15.447 2.72433 16.7364 4.01364C18.0257 5.30295 18.75 7.05164 18.75 8.875Z" stroke="currentColor" stroke-linejoin="round"/>
                        </svg>`;
const contract = useContractStore();
const city = useCityStore();
const job = useJobStore();
const contractOptions = ref([]);
const cityOptions = ref([]);
const is_reset = ref(false);
const filter = ref({
    title : '',
    location : [],
    contract : [],
})
const filtering = ref({
    title : '',
    location: [],
    contract: [],
});
const isReady = ref(false);

onMounted(async () => {
    filtering.value = JSON.parse(localStorage.getItem('filtering'));
    filter.value.title = filtering?.title;
    filter.value.location = filtering?.location;
    filter.value.contract = filtering?.contract;
    const contractData = await contract.getOptions();
    if (Array.isArray(contractData)) {
        contractOptions.value = contractData.reverse();
    }

    const cityData = await city.getOptions();
    if (Array.isArray(cityData)) {
        cityOptions.value = cityData.reverse();
    }
    isReady.value = true;
});


const handleLocation = (value) => {
    filter.value.location = value.map(item => item.key);
}

const handleContract = (value) => {
    filter.value.contract = value.map(item => item.value);
}

const setFilter = () => {
    job.updateFilter('search', filter.value.title);
    job.updateFilter('location', filter.value.location);
    job.updateFilter('contract', filter.value.contract);
    localStorage.setItem('filtering', JSON.stringify(filter.value));
}

const resetFilter = () => {
    filtering.value.location = [];
    filtering.value.contract = [];
    is_reset.value = true;
    localStorage.removeItem('filtering');
    job.updateFilter('search', '');
    job.updateFilter('location', []);
    job.updateFilter('contract', []);
    
}
</script>