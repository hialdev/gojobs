import { defineStore } from "pinia";

export const useProfesiStore = defineStore('profesi',{
    state : () => ({
        data: [
            { id: 'sls', profesi: 'Penjualan' },
            { id: 'it', profesi: 'Teknologi Informasi' },
            { id: 'ab', profesi: 'Administrasi Bisnis' },
            { id: 'com', profesi: 'Teknologi Komunikasi' },
            { id: 'mar', profesi: 'Pemasaran' },
            { id: 'wrh', profesi: 'Warehouse' },
            { id: 'rpr', profesi: 'Instalasi & Perbaikan' },
            { id: 'srv', profesi: 'Pelayanan' }
        ],
    }),
    getters : {
        options() {
            return this.data.map((profesi) => ({
                key: profesi.id,
                value: profesi.profesi,
            }));
        },
    },
    actions : {
        // updateFilter(column, value) {
        //     this.filters[column] = value;
        // },
    },
    
})