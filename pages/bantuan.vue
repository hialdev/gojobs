<template>
    <div class="bg-slate-50 min-h-screen">
        <div class="container mx-auto py-10 px-5">
            <div class="grid grid-cols-12 gap-5 items-start border-b pb-9 mb-9">
                <div v-for="(accordion, index) in accordions" :key="index" class="col-span-12 md:col-span-6">
                    <div>
                        <!-- Accordion Trigger -->
                        <div
                            class="flex items-stretch cursor-pointer"
                            @click="toggleAccordion(index)"
                        >
                            <div class="bg-[#81B29A] text-white p-3 flex-1">
                                Title Accordion
                            </div>
                            <div
                                class="flex items-center justify-center w h bg-primary text-white p-4"
                                :style="{ transform: accordion.isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z"
                                    clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <!-- Content Accordion -->
                        <div v-show="accordion.isOpen" class="border-s-2 p-5 text-sm ms-3 border-primary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            consequat ante id urna fermentum, in bibendum felis efficitur.
                            Fusce vitae consectetur libero. Pellentesque habitant
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12">
                    <h2 class="text-xl font-medium">Pertanyaan</h2>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <form action="" class="py-8">
                        <PartialsInput :placeholder="`Subject`" />
                        <PartialsInput :placeholder="`Email`" :typeInput="`email`" />
                        <textarea class="mb-5 rounded-3xl p-5 block w-full focus:outline-none focus:ring-2 focus:ring-orange-200" placeholder="Pesan" id="" cols="30" rows="10"></textarea>
                        <PartialsButton class="min-w-[10em]">Kirim</PartialsButton>
                    </form>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="p-7 rounded-xl bg-slate-100">
                        <div class="text-sm mb-5">
                            Untuk bantuan mengenai akunmu, hubungi kami melalui tombol di bawah ini.
                        </div>
                        <PartialsButton class="min-w-[10em] px-6">Dapatkan Bantuan</PartialsButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            accordions: Array.from({ length: 4 }, (_, index) => ({ isOpen: index === 0 })), // Set isOpen to true for the first accordion
        };
    },
    methods: {
        toggleAccordion(index) {
            this.accordions.forEach((accordion, i) => {
                if (i !== index) {
                    accordion.isOpen = false; // Tutup semua accordion kecuali yang sedang dibuka
                }
            });
            this.accordions[index].isOpen = !this.accordions[index].isOpen;
        },
    },
};
</script>

<style scoped>
/* Add your styles if needed */
</style>
