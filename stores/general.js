import { defineStore } from "pinia";

export const useGeneralStore = defineStore('lokasi',{
    state : () => ({
        API_URL : 'https://api.gojobs.id',
    }),
})