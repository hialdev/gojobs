<template>
    <div>
        <JobsDetail />
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Lowongan / Job - Detail ',
    layout: 'lowongan-detail',
});

const store = useJobStore();

onMounted(async () => {
   await addToLastseens(store.selectedJob);
})

const addToLastseens = (job) => {
    let items = JSON.parse(localStorage.getItem('lastseens')) || [];

    if (!items.find(item => item?.id === job?.id)) {
        items.push(job);
        localStorage.setItem('lastseens', JSON.stringify(items));
    }
}
</script>