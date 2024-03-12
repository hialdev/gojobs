<template>
    <div class="bg-slate-50 min-h-screen md:p-10">
        <h1 class="text-2xl font-medium mb-4 px-5 pt-5 md:px-0 md:pt-0">Notification</h1>
        <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 lg:col-span-6">
                    <slot name="notiflist" />
                </div>
                <div class="col-span-12 order-first lg:order-last lg:col-span-6 mb-5">
                    <div class="md:rounded-xl bg-white p-2 py-3 md:py-0 md:p-8">
                        <slot name="notifdetail" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>