<template>
    <ModalLazyLoad v-if="!isReady" />

    <div v-if="isReady" class="bg-slate-50 py-5 lg:p-5 min-h-screen flex flex-col items-center justify-start">
        <div class="flex items-center text-sm md:ps-0 gap-x-4 w-full justify-center overflow-auto">
            <div @click="openBox('biodata')" class="p-2 px-4 border-b cursor-pointer whitespace-nowrap" :class="[{'border-slate-300' : show.biodata},{'border-orange-600 text-orange-500' : show?.biodata == true}]">Biodata</div>
            <div @click="openBox('informasi')" class="p-2 px-4 border-b cursor-pointer whitespace-nowrap" :class="[{'border-slate-300' : show.informasi},{'border-orange-600 text-orange-500' : show?.informasi == true}]">Tentang Anda</div>
        </div>
        
        <!-- Biodata -->
        <div v-if="show.biodata">
            <div class="bg-white p-5 rounded-xl grid grid-cols-12 items-start gap-y-9 gap-x-8">
                <div class="col-span-12 md:col-span-6 text-center flex flex-col gap-2">
                    <PartialsImage :activeImage="dataStore.profile.image" @changeimage="(value) => {dataStore.profile.image = value}" />
                    <span class="text-xs text-slate-500">Klik gambar untuk upload</span>
                    <PartialsInput :required="true" :submitted="submit" v-model="dataStore.profile.name" :modelValue="dataStore.profile.name" :inputClass="`text-center border-b rounded-none focus:rounded-3xl focus:border-transparent mb-0 w-full block`" :placeholder="`Nama Lengkap`" />
                    <PartialsInput :required="true" :submitted="submit" v-model="dataStore.profile.role" :modelValue="dataStore.profile.role" :inputClass="`text-center border-b focus:border-none focus:rounded-3xl rounded-none block mt-[-1em]`" :placeholder="`Jabatan / Posisi saat ini`" />
                    <div class="flex w-full flex-col gap-3 my-3">
                        <div class="flex items-center gap-4">
                            <div class="flex items-center justify-center p-2 rounded-xl text-red-600 bg-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/></svg>
                            </div>
                            <input v-model="dataStore.profile.sosmed.ig" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username instagram" />
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center justify-center p-2 rounded-xl text-gray-600 bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                            </div>
                            <input v-model="dataStore.profile.sosmed.x" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username twitter" />
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center justify-center p-2 rounded-xl text-sky-600 bg-sky-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M11.6673 11.2503H13.7507L14.584 7.91699H11.6673V6.25033C11.6673 5.39199 11.6673 4.58366 13.334 4.58366H14.584V1.78366C14.3123 1.74783 13.2865 1.66699 12.2032 1.66699C9.94065 1.66699 8.33398 3.04783 8.33398 5.58366V7.91699H5.83398V11.2503H8.33398V18.3337H11.6673V11.2503Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <input v-model="dataStore.profile.sosmed.fb" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username facebook" />
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center justify-center p-2 rounded-xl text-green-600 bg-green-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <input v-model="dataStore.profile.sosmed.in" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="username linkedin" />
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center justify-center p-2 rounded-xl text-slate-600 bg-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"/></svg>
                            </div>
                            <input v-model="dataStore.profile.sosmed.others" type="text" class="p-2 text-sm px-3 border-b focus:outline-none block w-full" placeholder="Link / Tautan pribadi lainnya (https://)" />
                        </div>
                    </div>
                </div>
                <ul class="col-span-12 md:col-span-6 flex flex-col py-5 border-b">
                    <li class="flex items-center justify-between">
                        <h3 class="font-medium">Biodata</h3>
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <g clip-path="url(#clip0_927_182)">
                                <path d="M16.4844 9.33117H12.1875V5.58117H10.7812C11.2165 5.00008 11.4504 4.29287 11.4474 3.56684C11.4474 2.48715 10.9365 1.47266 10.1141 0.919336L9.76519 0.68457L9.41633 0.919336C8.59375 1.47273 8.08301 2.48719 8.08301 3.56684C8.08008 4.29288 8.31403 5.00008 8.74937 5.58113H7.1875V9.33113H3.51562C2.91495 9.33182 2.33908 9.57073 1.91434 9.99547C1.4896 10.4202 1.25068 10.9961 1.25 11.5968V18.6254C1.25037 18.9568 1.38219 19.2746 1.61653 19.5089C1.85087 19.7432 2.16859 19.8751 2.5 19.8754H17.5C17.8314 19.8751 18.1491 19.7432 18.3835 19.5089C18.6178 19.2746 18.7496 18.9568 18.75 18.6254V11.5968C18.7493 10.9961 18.5104 10.4203 18.0857 9.99551C17.6609 9.57077 17.085 9.33185 16.4844 9.33117ZM9.76519 2.27941C10.0382 2.61863 10.1974 3.07887 10.1974 3.56688C10.1974 4.05488 10.0382 4.51516 9.76519 4.85434C9.49219 4.51516 9.33301 4.05488 9.33301 3.56684C9.33301 3.07879 9.49219 2.61863 9.76519 2.27941ZM8.4375 6.83117H10.9375V9.33117H8.4375V6.83117ZM2.5 11.5968C2.50031 11.3275 2.60741 11.0694 2.79781 10.879C2.98821 10.6886 3.24636 10.5815 3.51562 10.5812H16.4844C16.7536 10.5815 17.0118 10.6886 17.2022 10.879C17.3926 11.0694 17.4997 11.3275 17.5 11.5968V12.8303L16.6562 13.2026C16.4912 13.2752 16.3129 13.3127 16.1326 13.3127C15.9524 13.3127 15.774 13.2752 15.609 13.2026L14.1406 12.5547L12.6719 13.2025C12.5069 13.2752 12.3285 13.3127 12.1482 13.3127C11.968 13.3127 11.7896 13.2752 11.6246 13.2025L10.1562 12.5546L8.6875 13.2025C8.52248 13.2751 8.34416 13.3126 8.16387 13.3126C7.98357 13.3126 7.80525 13.2751 7.64023 13.2025L6.17188 12.5547L4.7034 13.2025C4.53838 13.2751 4.36006 13.3126 4.17977 13.3126C3.99947 13.3126 3.82115 13.2751 3.65613 13.2025L2.5 12.6925V11.5968ZM17.5 18.6254H2.5V14.0588L3.15148 14.3462C3.47552 14.4888 3.82567 14.5624 4.17969 14.5624C4.53371 14.5624 4.88385 14.4888 5.20789 14.3462L6.17188 13.9209L7.1359 14.3462C7.45993 14.4888 7.81007 14.5624 8.16408 14.5624C8.51809 14.5624 8.86824 14.4888 9.19227 14.3462L10.1562 13.9209L11.1202 14.3462C11.4442 14.4888 11.7944 14.5624 12.1484 14.5624C12.5024 14.5624 12.8525 14.4888 13.1765 14.3462L14.1406 13.9209L15.1046 14.3462C15.4286 14.4888 15.7788 14.5624 16.1328 14.5624C16.4868 14.5624 16.8369 14.4888 17.1609 14.3462L17.5005 14.1964L17.5008 18.6254H17.5Z" fill="#797979"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_927_182">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="w-full">
                            <PartialsSelect :required="true" :submitted="submit" @selected="(value) => {dataStore.biodata.birth_place = value.value}" :customClass="`p-2 px-3 border-b focus:outline-none block w-full rounded-none`" :label="`Tempat Lahir`" :options="options.citys" />
                            <input type="date" class="p-2 px-3 border-b focus:outline-none block w-full" v-model="dataStore.biodata.birth_date" placeholder="Tgl Lahir" required/>
                        </div>
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M16.2495 2.375H13.1245C12.9587 2.375 12.7997 2.44085 12.6825 2.55806C12.5653 2.67527 12.4995 2.83424 12.4995 3C12.4995 3.16576 12.5653 3.32473 12.6825 3.44194C12.7997 3.55915 12.9587 3.625 13.1245 3.625H14.7409L12.776 5.58984C12.1991 5.05218 11.5032 4.65861 10.7451 4.44128C9.98698 4.22396 9.18823 4.18903 8.41406 4.33936C7.63989 4.4897 6.91226 4.82102 6.2906 5.30628C5.66894 5.79154 5.17088 6.41696 4.8371 7.13148C4.50332 7.84599 4.34329 8.62932 4.37007 9.4175C4.39686 10.2057 4.6097 10.9763 4.99122 11.6665C5.37273 12.3567 5.9121 12.9469 6.56527 13.3888C7.21844 13.8308 7.96688 14.1119 8.74947 14.2094V15.5H6.87447C6.70871 15.5 6.54974 15.5658 6.43253 15.6831C6.31532 15.8003 6.24947 15.9592 6.24947 16.125C6.24947 16.2908 6.31532 16.4497 6.43253 16.5669C6.54974 16.6842 6.70871 16.75 6.87447 16.75H8.74947V18.625C8.74947 18.7908 8.81532 18.9497 8.93253 19.0669C9.04974 19.1842 9.20871 19.25 9.37447 19.25C9.54023 19.25 9.6992 19.1842 9.81641 19.0669C9.93362 18.9497 9.99947 18.7908 9.99947 18.625V16.75H11.8745C12.0402 16.75 12.1992 16.6842 12.3164 16.5669C12.4336 16.4497 12.4995 16.2908 12.4995 16.125C12.4995 15.9592 12.4336 15.8003 12.3164 15.6831C12.1992 15.5658 12.0402 15.5 11.8745 15.5H9.99947V14.2094C10.8372 14.1047 11.6348 13.7894 12.3176 13.2928C13.0004 12.7963 13.5461 12.1347 13.9038 11.37C14.2615 10.6052 14.4195 9.76228 14.363 8.9199C14.3065 8.07753 14.0374 7.26324 13.5807 6.55313L15.6245 4.50859V6.125C15.6245 6.29076 15.6903 6.44973 15.8075 6.56694C15.9247 6.68415 16.0837 6.75 16.2495 6.75C16.4152 6.75 16.5742 6.68415 16.6914 6.56694C16.8086 6.44973 16.8745 6.29076 16.8745 6.125V3C16.8745 2.83424 16.8086 2.67527 16.6914 2.55806C16.5742 2.44085 16.4152 2.375 16.2495 2.375ZM9.37447 13C8.63279 13 7.90777 12.7801 7.29108 12.368C6.6744 11.956 6.19375 11.3703 5.90993 10.6851C5.6261 9.99984 5.55183 9.24584 5.69653 8.51841C5.84122 7.79098 6.19838 7.1228 6.72282 6.59835C7.24727 6.0739 7.91546 5.71675 8.64288 5.57206C9.37031 5.42736 10.1243 5.50162 10.8095 5.78545C11.4948 6.06928 12.0804 6.54993 12.4925 7.16661C12.9045 7.7833 13.1245 8.50832 13.1245 9.25C13.1234 10.2442 12.728 11.1975 12.025 11.9005C11.3219 12.6035 10.3687 12.999 9.37447 13Z" fill="#797979"/>
                        </svg>
                        <PartialsSelect :required="true" :submitted="submit" :selectedData="dataStore?.biodata?.gender" @selected="(value) => { dataStore.biodata.gender = value.key }" :options="[{key: 'male', value: 'Laki Laki'},{key: 'female', value: 'Perempuan'}]" class="flex-1 relative z-[14]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Gender`" />
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M6.4 3.5C3.97 3.5 2 5.47 2 7.9C2 12.3 7.2 16.3 10 17.2304C12.8 16.3 18 12.3 18 7.9C18 5.47 16.03 3.5 13.6 3.5C12.112 3.5 10.796 4.2388 10 5.3696C9.59427 4.79168 9.05526 4.32004 8.42861 3.9946C7.80196 3.66915 7.10612 3.4995 6.4 3.5Z" stroke="#797979" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <PartialsSelect :required="true" :submitted="submit" :selectedData="dataStore?.biodata?.marritage_status" @selected="(value) => { dataStore.biodata.marritage_status = value.key }" :options="[{key: 'single', value: 'Single'}, {key: 'married', value: 'Menikah'}]" class="flex-1 relative z-[13]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Status Pernikahan`" />
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_927_194)">
                                <mask id="mask0_927_194" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_927_194)">
                                <path d="M4.87109 12.0229L6.3373 10.8357L7.39445 2.54863C7.48637 1.90348 8.03879 1.42418 8.69043 1.42418C9.41336 1.42418 9.99945 2.01027 9.99945 2.7332V11.5376C9.99945 11.8709 9.86703 12.1905 9.63141 12.4262L7.55461 14.5029" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.19738 11.3381L8.03199 15.2336L4.72488 18.5762L0.585938 14.1228L4.19738 11.3381Z" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.1284 12.0229L13.6621 10.8357L12.605 2.54863C12.5131 1.90348 11.9607 1.42418 11.309 1.42418C10.5861 1.42418 10 2.01027 10 2.7332V11.5376C10 11.8709 10.1324 12.1905 10.368 12.4262L12.4448 14.5029" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.8034 11.3381L11.9688 15.2336L15.2759 18.5762L19.4148 14.1228L15.8034 11.3381Z" stroke="#797979" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_927_194">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <PartialsSelect :required="true" :submitted="submit" :selectedData="capitalize(dataStore.biodata.religion)" @selected="(value) => { dataStore.biodata.religion = value.key; }" :options="options.religions" class="flex-1 relative z-[12]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Agama`" />
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 6.66667C9.34073 6.66667 8.69626 6.86216 8.1481 7.22844C7.59994 7.59471 7.17269 8.1153 6.9204 8.72439C6.66811 9.33348 6.6021 10.0037 6.73072 10.6503C6.85933 11.2969 7.1768 11.8908 7.64298 12.357C8.10915 12.8232 8.7031 13.1407 9.3497 13.2693C9.9963 13.3979 10.6665 13.3319 11.2756 13.0796C11.8847 12.8273 12.4053 12.4001 12.7716 11.8519C13.1378 11.3037 13.3333 10.6593 13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667ZM10 12C9.60444 12 9.21776 11.8827 8.88886 11.6629C8.55996 11.4432 8.30362 11.1308 8.15224 10.7654C8.00087 10.3999 7.96126 9.99778 8.03843 9.60982C8.1156 9.22186 8.30608 8.86549 8.58579 8.58579C8.86549 8.30608 9.22186 8.1156 9.60982 8.03843C9.99778 7.96126 10.3999 8.00087 10.7654 8.15224C11.1308 8.30362 11.4432 8.55996 11.6629 8.88886C11.8827 9.21776 12 9.60444 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12ZM19.3333 4H0.666667C0.489856 4 0.320286 4.07024 0.195262 4.19526C0.0702379 4.32029 0 4.48986 0 4.66667V15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16H19.3333C19.5101 16 19.6797 15.9298 19.8047 15.8047C19.9298 15.6797 20 15.5101 20 15.3333V4.66667C20 4.48986 19.9298 4.32029 19.8047 4.19526C19.6797 4.07024 19.5101 4 19.3333 4ZM15.4708 14.6667H4.52917C4.30534 13.9097 3.89567 13.2207 3.33749 12.6625C2.7793 12.1043 2.09033 11.6947 1.33333 11.4708V8.52917C2.09033 8.30534 2.7793 7.89567 3.33749 7.33749C3.89567 6.7793 4.30534 6.09033 4.52917 5.33333H15.4708C15.6947 6.09033 16.1043 6.7793 16.6625 7.33749C17.2207 7.89567 17.9097 8.30534 18.6667 8.52917V11.4708C17.9097 11.6947 17.2207 12.1043 16.6625 12.6625C16.1043 13.2207 15.6947 13.9097 15.4708 14.6667ZM18.6667 7.11417C17.867 6.77033 17.2297 6.13297 16.8858 5.33333H18.6667V7.11417ZM3.11417 5.33333C2.77033 6.13297 2.13297 6.77033 1.33333 7.11417V5.33333H3.11417ZM1.33333 12.8858C2.13297 13.2297 2.77033 13.867 3.11417 14.6667H1.33333V12.8858ZM16.8858 14.6667C17.2297 13.867 17.867 13.2297 18.6667 12.8858V14.6667H16.8858Z" fill="#797979"/>
                        </svg>
                        <input v-model="dataStore.biodata.expected_salary" type="number" class="p-2 px-3 border-b focus:outline-none block w-full" placeholder="expetasi gaji (Rupiah)" />
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-500" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1.45A3.08 3.08 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.08 3.08 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34a1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/></svg>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-2">
                                <input v-model="dataStore.biodata.weight_body" type="number" class="p-2 border-b focus:outline-none max-w-[5em]" placeholder="BB" />
                                kg
                            </div>
                            /
                            <div class="flex items-center gap-2">
                                <input v-model="dataStore.biodata.height_body" type="number" class="p-2 border-b focus:outline-none max-w-[5em]" placeholder="TB" />
                                cm
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="sticky z-[14] bottom-2 flex items-center justify-center gap-x-5 my-5">
                <button @click="openBox('informasi')" class="text-sm hover:bg-orange-600 flex items-center gap-3 rounded-lg text-orange-100 bg-orange-500 p-2 px-4">Selanjutnya <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg></button>
            </div>
        </div>

        <!-- Summary & Alamat -->
        <div v-if="show.informasi">
            <div class="bg-white p-5 rounded-xl grid grid-cols-12 items-start gap-y-9 gap-x-8">
                <div class="col-span-12 md:col-span-6 pt-5 font-light">
                    <h3 class="font-medium mb-3">Ringkasan</h3>
                    <textarea v-model="dataStore.profile.summary" class="text-sm w-full rounded-lg border border-slate-200 text-sm p-2 px-4" name="" id="" cols="20" rows="6" :placeholder="`Jelaskan siapa diri anda, tips: ketertarikan, pengalaman, pencapaian, visi-misi`">{{ dataStore?.profile?.summary }}</textarea>
                </div>
                <ul class="col-span-12 md:col-span-6 flex flex-col py-5">
                    <li class="flex items-center justify-between">
                        <h3 class="font-medium">Alamat Tinggal</h3>
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <div class="text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12"/><path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6"/><path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"/><path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"/></g></svg>
                        </div>
                        <PartialsSelect :required="true" :submitted="submit" @selected="handleSelectedProvince" :options="options.provinces" class="flex-1 relative z-[12]" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Provinsi`" />
                    </li>
                    <li class="flex items-center gap-4 text-sm">
                        <div class="text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"/><rect width="8" height="16" x="8" y="26" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34h1"/><rect width="24" height="38" x="16" y="4" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"/><path fill="currentColor" d="M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z"/></g></svg>
                        </div>
                        <PartialsSelect :required="true" :submitted="submit" @selected="(value) => {dataStore.profile.city = value.key}" :options="options.filteredCitys" class="flex-1 relative z-10" :customClass="`rounded-none p-2 px-3 border-b focus:outline-none block w-full`" :label="`Kota`" />
                    </li>
                    <li class="flex items-start gap-4 text-sm">
                        <div class="text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" clip-rule="evenodd"><path d="M7.5 8.495a2 2 0 0 0 2-1.999a2 2 0 0 0-4 0a2 2 0 0 0 2 1.999Z"/><path d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z"/></g></svg>
                        </div>
                        <textarea v-model="dataStore.profile.address" class="p-2 px-3 border-b focus:outline-none block w-full" placeholder="Alamat lengkap domisili" ></textarea>
                    </li>
                    <li class="flex items-start gap-4 text-sm">
                        <div class="text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M15.5 14.69h-1.25V7.78a.62.62 0 0 0-.25-.47L8.4 2.7a.65.65 0 0 0-.81 0L2 7.31a.62.62 0 0 0-.22.47v6.91H.5V7.78a1.87 1.87 0 0 1 .68-1.44l5.62-4.6a1.88 1.88 0 0 1 2.39 0l5.63 4.6a1.87 1.87 0 0 1 .68 1.44z"/><path fill="currentColor" d="M11.05 12.11H9.8A1.72 1.72 0 0 0 8 10.49a1.72 1.72 0 0 0-1.8 1.62H5a3 3 0 0 1 3-2.87a3 3 0 0 1 3.05 2.87m-6.1 0H6.2v2.58H4.95zm4.85 0h1.25v2.58H9.8z"/></svg>
                        </div>
                        <input type="number" v-model="dataStore.profile.postal_code" class="p-2 px-3 m-0 border-b focus:outline-none block w-full" placeholder="Kode Pos" />
                    </li>
                </ul>
            </div>
            <p class="text-xs text-slate-600 text-center w-full max-w-[40em] mx-auto mt-4">Pastikan data telah diisi dengan benar, lalu klik buat profile dibawah ini. Anda akan diarahkan ke halaman My Profile untuk mengisi profile lebih lanjut (Pendidikan, Pengalaman, Organisasi, Keterampilan, Bahasa dan Family Emergency Contact).</p>
            <div class="sticky z-[14] bottom-2 flex items-center justify-center gap-x-2 px-2 md:px-5 my-5">
                <button @click="openBox('biodata')" class="hover:outline-2 hover:outline-slate-600 flex items-center gap-3 rounded-lg text-sm bg-slate-200 text-slate-600 p-2 px-4 text-sm whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg> Sebelumnya</button>
                <button @click="createProfile" class="hover:bg-orange-600 flex items-center gap-3 rounded-lg text-orange-100 text-sm bg-orange-500 p-2 px-4 text-sm whitespace-nowrap">Buat Profile <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 12h8v-2H8zm0-4h8V6H8zm11.95 12.475L15.9 15.2q-.425-.575-1.05-.887T13.5 14H4V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .125-.012.238t-.038.237M6 22q-.825 0-1.412-.587T4 20v-4h9.5q.25 0 .463.113t.362.312l4.2 5.5q-.125.05-.262.063T18 22z"/></svg></button>
            </div>
        </div>

        
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Buat Profile',
    middleware: ['profile']
});

import { useToast } from 'vue-toastification';
const isReady = ref(false);
const show = ref({
    biodata : true,
    informasi : false,
});

const dataStore = ref({
    profile : {
        image : '',
        name : '',
        summary : '',
        email : '',
        phone : '',
        city : '',
        province : '',
        postal_code : '',
        address :  '',
        role: '',
        sosmed : {
            ig : '',
            fb: '',
            x: '',
            in: '',
            others: '',
        },
    },
    biodata : {
        birth_place : '',
        birth_date : null,
        gender : '',
        marritage_status : '',
        religion : '',
        expected_salary : '',
        weight_body : '',
        height_body : '',
    },
});

const toast = useToast();

const cityStore = useCityStore();
const userStore = useUserStore();
const religionStore = useReligionStore();

const submit = ref(false);
const options = ref({
    citys : [],
    filteredCitys : [],
    provinces : [],
    religions : [],
})
const selected = ref({
    province_id : null,
})

onMounted(async () => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    dataStore.value.profile.name = profile?.name;
    dataStore.value.profile.phone = profile?.mobile;
    dataStore.value.profile.email = profile?.email;
    options.value.citys = await cityStore.getOptionsMaster();
    options.value.provinces = await cityStore.getProvinceOptions();
    options.value.religions = await religionStore.getOptions();
    isReady.value = true;
})

const handleSelectedProvince = (value) => {
    options.value.filteredCitys = cityStore.getCityProvinces(value.key);
    dataStore.value.profile.province = value.key;
}

const openBox = (section) => {
    show.value.biodata = false;
    show.value.informasi = false;
    show.value[section] = true;
    console.log(show.value);
}

const createProfile = async () => {
    submit.value = true;
    const ds = dataStore.value;
    console.log(ds);
    const addUser = await userStore.addProfile(
        ds?.profile?.phone,
        ds?.profile?.name,
        ds?.profile?.role,
        ds?.profile?.summary,
        ds?.biodata?.gender,
        ds?.biodata?.birth_date,
        ds?.biodata?.birth_place,
        ds?.biodata?.religion,
        ds?.biodata?.marritage_status,
        ds?.biodata?.height_body,
        ds?.biodata?.weight_body,
        ds?.profile?.province,
        ds?.profile?.city,
        ds?.profile?.address,
        ds?.profile?.postal_code,
        ds?.biodata?.expected_salary,
        ds?.profile?.image,
        ds?.profile?.sosmed?.ig,
        ds?.profile?.sosmed?.fb,
        ds?.profile?.sosmed?.x,
        ds?.profile?.sosmed?.in,
        ds?.profile?.sosmed?.others
    );
    if(addUser.success) {
        toast.success(addUser?.message);
        navigateTo('/seeker/profile');
    }else{
        toast.error(addUser?.message);
    }
    submit.value = false;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
</script>

<style scoped>
*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

*::-webkit-scrollbar-track {
  @apply bg-slate-100;
}

*::-webkit-scrollbar-thumb {
  @apply bg-slate-100 rounded-2xl;
}
</style>