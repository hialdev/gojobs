import html2pdf from 'html2pdf.js'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('html2pdf',html2pdf)
})
