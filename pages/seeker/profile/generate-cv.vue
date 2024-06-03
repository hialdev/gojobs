<template>
    <ModalLazyLoad v-if="!isReady" />
    <div v-if="isReady" class="pb-12">
        <button @click="downloadPDF" class="bottom-0 fixed start-0 end-0 p-3 bg-primary text-white uppercase">download PDF</button>
        <div id="html2pdf" style="font-family:'Poppins', sans-serif; color:#4d4d4d; background-color: #f5f5f5; display: flex; align-items: start;">
            <!-- Sidebar -->
            <div style="background-color: #f5f5f5; padding: 35px; width: 30%; height: 100%;">
                <div>
                    <img :src="`${cvData.about.photo_base.startsWith('data:image') ? cvData.about.photo_base : cvData.about.photo}`" width="170" height="170" alt="Image Name Surname" style="display: block;margin: 10px auto; border-radius: 999px; object-fit: cover; border: 5px solid #fff;">
                </div>
                <ul style="padding:0px; list-style: none;">
                    <li><h3>Biodata</h3></li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8"/><path d="M9 14a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"/></g></svg>
                        </div>    
                        {{cvData?.biodata?.birth_place}}, {{formatDate(cvData?.biodata.birth_date)}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12-8l-5 5m1-5h4v4m-8 9v6m-3-3h6"/></svg>
                        </div>    
                        {{cvData?.biodata.gender}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M14.125 19.972c-.222.164-.463.3-.728.37c-.746.2-1.561-.098-2.273-.298c-4.773-1.343-7.97-3.446-8.887-6.584c-.732-2.506-.028-5.016 1.52-6.576c1.434-1.445 3.56-2.031 5.741-1.092c1.42-1.904 3.555-2.46 5.519-1.925c2.12.577 3.984 2.399 4.603 4.935c.122.497.182 1.004.183 1.519c.255.13.497.292.72.48c1.157.979 1.775 2.642 1.43 4.371c-.44 2.206-2.485 3.755-5.41 4.861c-.501.19-1.049.425-1.596.329c-.304-.054-.576-.21-.822-.39m-9.968-7.073c-.535-1.833.003-3.581 1.02-4.606c.976-.984 2.423-1.35 4.023-.414c.559.327 1.28.133 1.6-.428c.918-1.611 2.354-2.018 3.691-1.654c1.394.38 2.734 1.624 3.186 3.479c.055.223.092.451.11.685a3.687 3.687 0 0 0-1.06.301c-1.074-1.047-2.496-1.253-3.75-.791c-1.422.523-2.572 1.875-2.84 3.618c-.273 1.785.57 3.525 2.139 5.198c-.198-.05-.403-.11-.61-.168c-4.631-1.303-6.9-3.135-7.509-5.22m7.958.493c.16-1.05.839-1.781 1.553-2.045c.66-.242 1.393-.115 1.95.69a1.104 1.104 0 0 0 1.545.273c.8-.567 1.532-.435 2.068.018c.582.492.968 1.412.76 2.453c-.225 1.13-1.368 2.328-4.155 3.381c-.177.067-.353.139-.535.192c-.153-.113-.294-.24-.438-.363c-2.258-1.943-2.923-3.46-2.748-4.6Z"/></g></svg>
                        </div>    
                        {{cvData?.biodata.marritage}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.099 3a2.1 2.1 0 0 1 2.02 1.526l.038.161l1.451 7.255a2 2 0 0 0 1.318 1.502l.158.046l1.696.424a1.5 1.5 0 0 1 1.128 1.611l-.021.139l-.694 3.469A2 2 0 0 1 17.83 20.7l-.146-.036l-3.057-.874A4.993 4.993 0 0 1 12 17.983a4.993 4.993 0 0 1-2.38 1.73l-.246.077l-3.057.874a2 2 0 0 1-2.475-1.384l-.035-.147l-.694-3.47a1.5 1.5 0 0 1 .973-1.709l.134-.04l1.696-.424a2 2 0 0 0 1.437-1.388l.039-.16l1.45-7.255A2.099 2.099 0 0 1 12 3.31c.32-.196.696-.31 1.099-.31m4.707 12.482l-.655 2.95l1.081.309l.6-3.002zm-11.612 0l-1.026.257l.6 3.002l1.081-.31zM13.099 5a.1.1 0 0 0-.099.099v9.884a3 3 0 0 0 2.003 2.83l.221.068l.734-3.301a3.999 3.999 0 0 1-1.311-2.245l-1.45-7.255a.1.1 0 0 0-.098-.08m-2.198 0a.1.1 0 0 0-.097.08l-1.451 7.255a3.998 3.998 0 0 1-1.31 2.245l.733 3.301l.048-.014A3 3 0 0 0 11 14.983V5.099A.1.1 0 0 0 10.9 5Z"/></g></svg>
                        </div>    
                        {{cvData?.biodata.religion}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M12 19.054c3.325-4 7.325-6 12-6s8.675 2 12 6"/><path fill="currentColor" d="M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m19 21l5.008 7"/></g></svg>
                        </div>    
                        {{cvData?.biodata.weight_body}} kg
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M384 22.545L307.271 99.27l25.458 25.458L366 91.457v329.086l-33.271-33.272l-25.458 25.458L384 489.455l76.729-76.726l-25.458-25.458L402 420.543V91.457l33.271 33.272L460.73 99.27zm-242.443.258c-23.366 3.035-44.553 30.444-44.553 65.935c0 19.558 6.771 36.856 16.695 48.815l11.84 14.263l-18.217 3.424c-12.9 2.425-22.358 9.24-30.443 20.336c-8.085 11.097-14.266 26.558-18.598 44.375c-7.843 32.28-9.568 71.693-9.842 106.436h42.868l11.771 157.836c29.894 6.748 61.811 6.51 90.602.025l10.414-157.861h40.816c-.027-35.168-.477-75.125-7.584-107.65c-3.918-17.933-9.858-33.371-18.04-44.342c-8.185-10.97-18.08-17.745-32.563-19.989l-18.592-2.88l11.736-14.704c9.495-11.897 15.932-28.997 15.932-48.082c0-37.838-23.655-65.844-49.399-65.844z"/></svg>
                        </div>    
                        {{cvData.biodata?.height_body}} cm
                    </li>
                </ul>
                <ul style="padding:0px; list-style: none;">
                    <li><h3>Information</h3></li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.106 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2.001 2.001 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024z"/></svg>
                        </div>    
                        {{cvData?.information.telp}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></g></svg>
                        </div>    
                        {{cvData?.information.mail}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12"/><path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6"/><path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12"/><path stroke-linecap="round" d="M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h4m-4 3h4"/></g></svg>
                        </div>    
                        {{cvData?.information.prov}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15 23h-2v-2h2zm4-2h-2v2h2zm-4-4h-2v2h2zm-8 4H5v2h2zm0-4H5v2h2zm12 0h-2v2h2zm-4-4h-2v2h2zm4 0h-2v2h2zm2-4a2 2 0 0 1 2 2v12h-2V11H11v12H9v-8H3v8H1v-8a2 2 0 0 1 2-2h6v-2a2 2 0 0 1 2-2V7a2 2 0 0 1 2-2h2V1h2v4h2a2 2 0 0 1 2 2zm-2 0V7h-6v2z"/></svg>
                        </div>    
                        {{cvData?.information.city}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3c0 .6.4 1 1 1h18c.6 0 1-.4 1-1c0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"/></g></svg>
                        </div>    
                        {{cvData?.information.address}}
                    </li>
                    <li style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m7 7v-5h4v5zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586z"/></svg>
                        </div>    
                        {{cvData?.information.postal}}
                    </li>
                </ul>
                <ul style="padding:0px; list-style: none;">
                    <li><h3>Social Media</h3></li>
                    <li v-if="cvData.sosmed.ig != '' || cvData.sosmed.ig != null" style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.318.077c1.218.056 2.06.235 2.838.537a5.36 5.36 0 0 1 1.956 1.274a5.36 5.36 0 0 1 1.274 1.956c.302.779.481 1.62.537 2.838C23.992 8.192 24 8.724 24 12s-.008 3.808-.077 5.318c-.056 1.218-.235 2.06-.537 2.839a5.36 5.36 0 0 1-1.274 1.955a5.359 5.359 0 0 1-1.956 1.274c-.779.302-1.62.481-2.838.537c-1.51.069-2.041.077-5.318.077c-3.277 0-3.809-.008-5.318-.077c-1.218-.056-2.06-.235-2.839-.537a5.359 5.359 0 0 1-1.955-1.274a5.36 5.36 0 0 1-1.274-1.956c-.302-.779-.481-1.62-.537-2.838C.008 15.81 0 15.278 0 12c0-3.277.008-3.81.077-5.318c.056-1.218.235-2.06.537-2.838a5.36 5.36 0 0 1 1.274-1.956A5.36 5.36 0 0 1 3.843.614C4.623.312 5.464.133 6.682.077C8.19.008 8.722 0 12 0c3.277 0 3.81.008 5.318.077M12 2.667c-3.24 0-3.736.007-5.197.074c-.927.042-1.483.16-1.994.359a2.73 2.73 0 0 0-1.036.673A2.707 2.707 0 0 0 3.1 4.809c-.198.51-.317 1.067-.359 1.994C2.674 8.264 2.667 8.76 2.667 12s.007 3.736.074 5.197c.042.927.16 1.483.359 1.993c.17.436.35.713.673 1.037c.324.324.601.504 1.036.673c.51.198 1.067.317 1.994.359c1.462.067 1.958.074 5.197.074c3.24 0 3.735-.007 5.197-.074c.927-.042 1.483-.16 1.994-.359a2.73 2.73 0 0 0 1.036-.673c.324-.324.504-.601.673-1.036c.198-.51.317-1.067.359-1.994c.067-1.462.074-1.958.074-5.197s-.007-3.735-.074-5.197c-.042-.927-.16-1.483-.359-1.993a2.709 2.709 0 0 0-.673-1.037A2.708 2.708 0 0 0 19.19 3.1c-.51-.198-1.067-.317-1.994-.359c-1.461-.067-1.957-.074-5.197-.074m0 15.555a6.222 6.222 0 1 1 0-12.444a6.222 6.222 0 0 1 0 12.444m0-2.666a3.556 3.556 0 1 0 0-7.112a3.556 3.556 0 0 0 0 7.112m6.222-8.445a1.333 1.333 0 1 1 0-2.667a1.333 1.333 0 0 1 0 2.667"/></svg>
                        </div>    
                        <a :href="`https://instagram.com/${cvData?.sosmed.ig}`" style="text-decoration: none; color: #4d4d4d; display: block; color: #212121" target="_blank">{{cvData?.sosmed.ig}}</a>
                    </li>
                    <li v-if="cvData.sosmed.x != '' || cvData.sosmed.x != null" style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
                        </div>    
                        <a :href="`https://twitter.com/${cvData?.sosmed.x}`" style="text-decoration: none; color: #4d4d4d; display: block; color: #212121" target="_blank">{{cvData?.sosmed.x}}</a>
                    </li>
                    <li v-if="cvData.sosmed.fb != '' || cvData.sosmed.fb != null" style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000"><path fill="currentColor" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"/></svg>
                        </div>    
                        <a :href="`https://facebook.com/${cvData?.sosmed.fb}`" style="text-decoration: none; color: #4d4d4d; display: block; color: #212121" target="_blank">{{cvData?.sosmed.fb}}</a>
                    </li>
                    <li v-if="cvData.sosmed.in != '' || cvData.sosmed.in != null" style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.93" height="20" viewBox="0 0 1046.16 1000"><path fill="currentColor" d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z"/></svg>
                        </div>    
                        <a :href="`https://linkedin.com/in/${cvData?.sosmed.in}`" style="text-decoration: none; color: #4d4d4d; display: block; color: #212121" target="_blank">{{cvData?.sosmed.in}}</a>
                    </li>
                    <li v-if="cvData.sosmed.others != '' || cvData.sosmed.others != null" style="font-family:'Poppins', sans-serif; color:#4d4d4d; margin-bottom: 0.4em; display: flex; align-items: center; gap: 0.7em;font-size:13px">
                        <div style="margin-top:10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"/></svg>
                        </div>    
                        <a :href="`${cvData?.sosmed.others}`" style="text-decoration: none; color: #4d4d4d; display: block; color: #212121" target="_blank">{{cvData?.sosmed.others}}</a>
                    </li>
                </ul>
            </div>
            <!-- Content -->
            <div style="background-color: #fff;width: 70%;">
                <div style="padding: 35px; border-bottom: 4px solid #f5f5f5;">
                    <h1 style="margin: 0px;font-size:24px">{{cvData?.about.name}}</h1>
                    <div style="font-size: 16px; color: #adadad;">{{cvData?.about.role}}</div>
                    <p style="font-size:14px">{{cvData?.about.summary}}</p>
                </div>
                <div style="padding: 35px; border-bottom: 4px solid #f5f5f5;">
                    <h3 style="margin: 0px; margin-bottom: 0.7em; color: #65bb7f">Pengalaman Kerja</h3>
                    <div v-if="cvData.experiences.length > 0" v-for="experience in cvData.experiences" style="margin-bottom: 1em;">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0px;">{{ experience.last_position }}</h4>
                                <div style="font-size:16px; color: #adadad">{{experience.company_name}}</div>
                            </div>
                            <div style="font-size: 12px; color: #adadad;">{{ formatDate(experience.start_date)}} - {{experience.status ? 'sekarang' : formatDate(experience.end_date)}}</div>
                        </div>
                        <div style="padding: 0px ; margin-top:10px; padding-left: 1em; border-left: 2px solid #f0f0f0; font-size: 13px;">
                            {{experience.job_description}}
                        </div>
                    </div>
                </div>

                <div style="padding: 35px; border-bottom: 4px solid #f5f5f5;">
                    <h3 style="margin: 0px; margin-bottom: 0.7em; color: #65bb7f">Pendidikan</h3>
                    <div v-if="cvData.educations.length > 0" v-for="edu in cvData.educations" style="margin-bottom: 1em;">
                        <div style="display: flex; margin-bottom: 0.7em; align-items: center; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0px;">{{edu.institutions}}</h4>
                                <div style="display: flex; align-items: center; gap: 1em; font-size:15px; color:#adadad"><span>{{ edu.educational_level_name }}</span> | <span>{{edu.city_name}}</span></div>
                            </div>
                            <div style="font-size: 12px; color: #adadad;">{{ formatDate(edu.start_date) }} - {{ edu.status ? 'sekarang' : formatDate(edu.end_date) }}</div>
                        </div>
                        <div style="display: flex; grid-template-columns: 3; font-size:14px; gap: 1em;">
                            <div style="width: 100px;">Jurusan</div>
                            <div>:</div>
                            <div>{{edu.majoring}}</div>
                        </div>
                        <div style="display: flex; grid-template-columns: 3;  font-size:14px; gap: 1em;">
                            <div style="width: 100px;">Nilai Akhir</div>
                            <div>:</div>
                            <div>{{edu.gpa}}</div>
                        </div>
                    </div>
                </div>

                <div style="padding: 35px; border-bottom: 4px solid #f5f5f5;">
                    <h3 style="margin: 0px; margin-bottom: 0.7em; color: #65bb7f">Organisasi</h3>
                    <div v-if="cvData.organizations.length > 0" v-for="org in cvData.organizations" style="margin-bottom: 1em;">
                        <div style="display: flex; margin-bottom: 0.7em; align-items: center; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0px;">{{org.organization_name}}</h4>
                                <div style="display: flex; align-items: center; gap: 1em; font-size:15px; color:#adadad">{{org.position}} </div>
                                <p style="font-size: 12px;">{{org.organization_address}}</p>
                            </div>
                            <div style="font-size: 12px; color: #adadad;">{{org.duration}}</div>
                        </div>
                    </div>
                </div>

                <div style="padding: 35px; border-bottom: 4px solid #f5f5f5;">
                    <h3 style="margin: 0px; margin-bottom: 0.7em; color: #65bb7f">Bahasa</h3>
                    <div v-if="cvData.languages.length > 0" v-for="lang in cvData.languages" style="margin-bottom: 1em;">
                        <h4 style="margin: 0px; margin-bottom: 0.7em;">{{lang.language}}</h4>
                        <div style="display: flex; align-items: center; gap: 1.5em;">
                            <div style="font-size:15px; color:#212121; display: flex; align-items: center; gap: 1em;">
                                <div style="margin-top:10px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39m563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5m223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5M396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5m416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5"/></svg>
                                </div>
                                <div>
                                    <span v-if="lang.reading == 0">Kurang</span>
                                    <span v-else-if="lang.reading == 1">Baik</span>
                                    <span v-else-if="lang.reading == 2">Lancar</span>
                                </div>
                            </div>
                            <div style="font-size:15px; color:#212121; display: flex; align-items: center; gap: 1em;">
                                <div style="margin-top:10px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M19.431 1.648a1.122 1.122 0 0 0-1.53.416l-.001.002l-3.972 6.88l-.48-.209a5.418 5.418 0 0 0-6.752 2.05l-.007.011l-.007.012l-.002-.001l-5.2 8.68l-.005.007v.008h-.002a3.506 3.506 0 0 0 1.279 4.78a3.442 3.442 0 0 0 2.05.464l-.058.102l-.001.001a2.796 2.796 0 0 0-.366 1.162l-.38 3.443v.008c-.063.813.848 1.326 1.511.87l.01-.006l2.752-2.082c.286-.202.535-.46.725-.754v.01a3.5 3.5 0 0 0 6.322 2.07c.127.12.262.234.405.34c1.04.768 2.399 1.09 3.783 1.09h9.24a2.24 2.24 0 0 0 2.226-1.99h.024V27.06h.002V18.2a2.815 2.815 0 0 0-1.704-2.585l-10.75-4.666l3.685-6.387l.002-.003a1.122 1.122 0 0 0-.416-1.53l-.003-.001l-2.375-1.378zm-6.508 9.038l-2.656 4.6a2.851 2.851 0 0 0-1.246 1.169l-3.208 5.551a1.521 1.521 0 0 1-1.308.757a1.448 1.448 0 0 1-.742-.2l-.004-.002A1.5 1.5 0 0 1 3.2 20.5l5.18-8.646a3.417 3.417 0 0 1 4.261-1.289h.004zm2.173 6.238l2.443-4.234L28.5 17.45l-.003-.004a.814.814 0 0 1 .5.753v.794h-.002v8.02h-5.81c-.255 0-.504-.02-.748-.056l-.643-.141a4.571 4.571 0 0 1-2.421-1.693c-.8-1.094-2.27-1.37-3.414-.735l-.001.001c-.69.385-1.506.84-2.148 1.2l-1.113.62l-.011.007a2.005 2.005 0 0 1-2.735-.734a2.006 2.006 0 0 1 .736-2.735l4.225-2.44a1 1 0 0 0 .663-.857a4.292 4.292 0 0 0-.479-2.526m-9.567 8.58l2.585 1.506a1.81 1.81 0 0 1-.427.424l-.007.005l-1.515 1.146l-1.001-.583l.208-1.884v-.011c.02-.214.073-.418.157-.603M19.392 7.477l-2.6-1.492l.976-1.692l2.595 1.5z"/></svg>
                                </div>
                                <div>
                                    <span v-if="lang.writing == 0">Kurang</span>
                                    <span v-else-if="lang.writing == 1">Baik</span>
                                    <span v-else-if="lang.writing == 2">Lancar</span>
                                </div>
                            </div>
                            <div style="font-size:15px; color:#212121; display: flex; align-items: center; gap: 1em;">
                                <div style="margin-top:5px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.934 8.965A8.002 8.002 0 0 0 1 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 0 0 2-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727zM3 10a6 6 0 0 1 11.95-.779l.057.442l1.543 2.425l-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.966 5.966 0 0 1 3 10m18.154 8.102l-1.665-1.11A8.959 8.959 0 0 0 21 12a8.958 8.958 0 0 0-1.51-4.993l1.664-1.11A10.948 10.948 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102"/></svg>
                                </div>
                                <div>
                                    <span v-if="lang.speaking == 0">Kurang</span>
                                    <span v-else-if="lang.speaking == '1'">Baik</span>
                                    <span v-else-if="lang.speaking == 2">Lancar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="padding: 35px; border-bottom: 4px solid #f5f5f5;">
                    <h3 style="margin: 0px; margin-bottom: 0.7em; color: #65bb7f">Keterampilan</h3>
                    <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 0.4em;">
                        <span v-if="skill.my_skills.length > 0" v-for="skillData in skill.my_skills" :key="skillData.id" style="padding: 0px 5px; padding-bottom:3px; font-size: 12px;">{{skillData.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import html2pdf from 'html2pdf.js'

definePageMeta({
    title: 'Download CV',
    layout: 'blank'
})

const user = useUserStore();
const skill = useSkillStore();
const language = useLanguageStore();
const education = useEducationStore();
const experience = useExperienceStore();
const cvData = ref({
    biodata: {
        birth_date : '',
        birth_place : '',
        gender : '',
        marritage : '',
        religion : '',
        weight_body : '',
        height_body : '',
    },
    information: {
        telp : '',
        mail : '',
        prov : '',
        city : '',
        address : '',
        postal : '',
    },
    sosmed : {
        ig : '',
        x : '',
        fb : '',
        in : '',
        others : '',
    },
    about: {
        name: '',
        role : '',
        summary : '',
        photo : '',
    },
    experiences: [],
    educations: [],
    organizations: [],
    languages: [],
    skills: [],
})

const isReady = ref(false)

onMounted(async () => {
    const genCV = await user.generateCV();
    console.log('CV Detail : ',genCV);

    const profileDetail = await user.getFullProfile();
    console.log('Profile Detail : ',profileDetail);

    const skills = await skill.getSkills();
    console.log('Skill Detail : ',skills);

    const experiences = await experience.getExperiences();
    console.log('Experience Detail : ',experiences);

    const educations = await education.getEducations();
    console.log('Education Detail : ',educations);

    const languages = await language.getLanguages();
    console.log('Language Detail : ',languages);

    cvData.value.biodata = {
        birth_date : profileDetail.profile.birth_date,
        birth_place : profileDetail.profile.birth_place,
        gender : profileDetail.profile.gender,
        marritage : profileDetail.profile.marital_status,
        religion : profileDetail.profile.religion,
        weight_body : profileDetail.profile.weight_body,
        height_body : profileDetail.profile.height_body,
    }

    cvData.value.information = {
        telp : profileDetail.profile.phone,
        mail : profileDetail.email,
        prov : profileDetail.profile.province,
        city : profileDetail.profile.city,
        address : profileDetail.profile.address,
        postal : profileDetail.profile.postalcode,
    }

    cvData.value.about = {
        name: profileDetail.name,
        role : profileDetail.profile.work_type,
        summary : profileDetail.profile_detail.summary,
        photo : profileDetail.profile.photo,
        photo_base : genCV.data.profile.photo_base,
    }

    cvData.value.sosmed = {
        ig : profileDetail.mediasocial.instagram,
        fb : profileDetail.mediasocial.facebook,
        in : profileDetail.mediasocial.linkedin,
        x : profileDetail.mediasocial.twitter,
        others : profileDetail.mediasocial.others,
    }

    cvData.value.educations = educations.data
    cvData.value.experiences = experiences.data
    cvData.value.organizations = profileDetail.organization
    cvData.value.languages = languages.data
    cvData.value.skills = skills.data

    console.log('CV Data', cvData.value)

    isReady.value = true;
})

const downloadPDF = () => {
    html2pdf()
        .from(document.getElementById('html2pdf'))
        .set({
            pagebreak: { mode: ['avoid-all'] },
            margin: [0, 0],
            html2canvas:{useCORS:true},
            filename: 'mycv_gojobs.pdf',
        })
        .save();
}
</script>