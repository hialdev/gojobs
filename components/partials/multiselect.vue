<template>
    <div class="relative">
        <div :class="['cursor-pointer bg-white p-3 px-5 rounded-4xl flex justify-between items-center gap-3 text-gray-800 rounded-3xl w-full text-slate-400',$parent.class]"
            @click="toggleModal"
            ref="dropdownTrigger"
        >
            <div v-if="svgData" class="w-[20px] text-slate-500">
                <div v-html="svgData"></div>
            </div>
            <div class="me-auto text-slate-500">
                <div v-if="selecteds.length > 0" class="flex items-center gap-1">
                    <div v-for="selected in selecteds.slice(0, 2)" :key="selected?.key" class="bg-orange-100 text-primary whitespace-nowrap rounded-3xl px-2 lowercase truncate w-[6em]">
                        {{ selected?.value }}
                    </div>
                    <div v-if="selecteds.length > 2" class="bg-orange-100 text-primary rounded-3xl px-2">
                        +{{ selecteds.length - 2 }}
                    </div>
                </div>
                <div v-else>
                    {{ label }}
                </div>
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
        </div>
        <div ref="modalElement" v-if="isModalOpen" :class="['modal absolute top-0 w-full mt-[3.5em]',modalClass]">
            <ul 
                class="p-3 bg-white rounded-xl max-h-[20em] overflow-auto"
            >
                <li class="mb-3"><PartialsSearch :label="'Cari '+label" :customClass="'ring-4 ring-slate-200'" @input="searchOptions" /></li>
                <div v-for="option in filteredOptions"
                    :key="option.key"
                    >
                    <li
                        @click="checkedThis(option)"
                        class="p-3 px-4 rounded-xl hover:bg-gray-100 cursor-pointer"
                        :class="{ 'bg-orange-200 hover:bg-orange-200': option?.key === selectItem?.key }"
                    >
                        <div class="cursor-pointer flex items-center justify-between gap-3">

                            <span class="lowercase whitespace-nowrap">{{ option?.value }}</span>
                            <div :class="{'text-primary':selecteds.includes(option), 'text-slate-300':!selecteds.includes(option)}" class="w-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                                    <mask id="mask0_218_260" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="44" height="44">
                                        <path d="M24 44C26.627 44.0034 29.2287 43.4876 31.6556 42.4823C34.0826 41.477 36.2869 40.002 38.142 38.142C40.002 36.2869 41.477 34.0826 42.4823 31.6556C43.4876 29.2287 44.0034 26.627 44 24C44.0034 21.3731 43.4876 18.7714 42.4823 16.3444C41.4769 13.9175 40.0019 11.7131 38.142 9.85802C36.2869 7.99804 34.0826 6.52302 31.6556 5.5177C29.2287 4.51239 26.627 3.99661 24 4.00002C21.3731 3.99667 18.7714 4.51247 16.3444 5.51778C13.9175 6.52309 11.7131 7.99809 9.85802 9.85802C7.99809 11.7131 6.52309 13.9175 5.51778 16.3444C4.51247 18.7714 3.99667 21.3731 4.00002 24C3.99661 26.627 4.51239 29.2287 5.5177 31.6556C6.52302 34.0826 7.99804 36.2869 9.85802 38.142C11.7131 40.0019 13.9175 41.4769 16.3444 42.4823C18.7714 43.4876 21.3731 44.0034 24 44Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
                                        <path d="M16 24L22 30L34 18" stroke="red" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                    </mask>
                                    <g mask="url(#mask0_218_260)">
                                        <path d="M0 0H48V48H0V0Z" fill="currentColor"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: "Pilih",
        },
        options: {
            type: Array,
            default: () => [{ key: "1", value: "Tidak ada pilihan" }],
        },
        svgData: {
            type: String,
            required: true,
        },
        modalClass: {
            type: String,
            default: '',
        },
        selectedOptions: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            isModalOpen: false,
            selectItem: null,
            selecteds: this.selectedOptions,
            searchQuery: "",
        };
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
            if (this.isModalOpen) {
                document.addEventListener("click", this.handleDocumentClick);
            } else {
                document.removeEventListener("click", this.handleDocumentClick);
            }
        },
        checkedThis(option) {
            const selectedItemIndex = this.selecteds.findIndex((selected) => selected.key === option.key);
            if (selectedItemIndex !== -1) {
                this.selecteds.splice(selectedItemIndex, 1);
            } else {
                this.selecteds.push(option);
            }
            this.$emit('selected', this.selecteds);
        },
        handleDocumentClick(event) {
            const dropdownTrigger = this.$refs.dropdownTrigger;
            const modalElement = this.$refs.modalElement;
            if (!dropdownTrigger.contains(event.target) && !modalElement.contains(event.target)) {
                this.isModalOpen = false;
                document.removeEventListener("click", this.handleDocumentClick);
            }
        },
        searchOptions(event) {
            this.searchQuery = String(event.target?.value).toLowerCase();
        },
    },
    computed: {
        filteredOptions() {
            const filtered = this.options.filter((option) =>
                option.value.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            return filtered;
        },
    },
};
</script>