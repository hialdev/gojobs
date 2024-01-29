import { defineStore } from "pinia";

export const useLokasiStore = defineStore('lokasi',{
    state : () => ({
        data: [
            { id: 'tg', lokasi: 'Tangerang' },
            { id: 'de', lokasi: 'Depok' },
            { id: 'js', lokasi: 'Jakarta Selatan' },
            { id: 'jb', lokasi: 'Jakarta Barat' },
            { id: 'bg', lokasi: 'Bogor' },
            { id: 'sr', lokasi: 'Serang' },
            { id: 'cb', lokasi: 'Cirebon' },
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