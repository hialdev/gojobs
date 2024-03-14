<template>
    <div>
        <label v-if="showLabel" for="" class="text-xs mb-3 block">{{label}}</label>
        <div class="relative z-[10]">
            <div :class="['cursor-pointer bg-white p-3 px-5 rounded-4xl flex justify-between items-center gap-3 text-gray-800 rounded-3xl', $parent.class, customClass]"
                @click="toggleModal"
                ref="dropdownTrigger"
            >
                <span class="whitespace-nowrap">{{selectItem ? selectItem?.value : label}}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
            </div>
            <span v-if="!selectItem && required && submitted" class="text-xs text-red-500">{{ label ? label : 'This field'}} is required</span>
            <div ref="modalElement" v-if="isModalOpen" :class="['modal absolute top-0 w-full mt-[4.3em] z-10',modalClass]">
                <ul 
                    class="p-3 bg-white rounded-xl max-h-[20em] overflow-auto"
                >
                    <li class="mb-3"><PartialsSearch :label="'Cari '+label" :customClass="'ring-4 ring-slate-200'" @input="searchOptions" /></li>
                    <div v-for="option in filteredOptions"
                        :key="option.key"
                        >
                        <li
                            @click="selectedItem(option)"
                            class="p-3 px-4 rounded-xl hover:bg-gray-100 cursor-pointer"
                            :class="{ 'bg-orange-200 hover:bg-orange-200': option?.key === selectItem?.key }"
                        >
                            {{ option?.value }}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type: String,
            default: "Pilih",
        },
        customClass:{
            type: String,
            default: "",
        },
        options:{
            type: Array,
            default: () => [
                { key: "1", value: "Tidak ada pilihan" },
            ],
        },
        modalClass:{
            type: Array,
            default: [],
        },
        showLabel:{
            type: Boolean,
            default: false,
        },
        selectedData:{
            type: [String, Number],
            default: null,
        },
        required:{
            type: Boolean,
            default: false,
        },
        submitted:{
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            isModalOpen: false,
            selectItem: null,
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
        selectedItem(item){
            this.selectItem = item;
            this.isModalOpen = !this.isModalOpen;
            this.$emit('selected', this.selectItem);
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
    watch: {
        selectedData: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.selectItem = this.options.find(option => option.key == newVal || option.value == newVal);
                }
            }
        }
    }
};
</script>