<template>
    <!-- top-0 fixed z-20 w-full flex justify-between items-center px-32 py-2 shadow -->
    <header class="fixed w-full bg-slate-50 z-10 shadow-sm">
        <div class="py-2 border-b-[1px] flex justify-between items-center xl:px-72 md:px-20 sm:px-10">
            <router-link to="/">
                <a>
                    <img src="../assets/viddo-logo.jpeg" class="h-20"/>
                </a>
            </router-link>
            <div class="flex items-center">
                <span class="text-lg cursor-pointer font-semibold text-black hover:text-sky-600 delay-100">
                    Vire um Criador
                </span>
                <span class="text-lg cursor-pointer font-semibold text-black hover:text-sky-600 delay-100 pr-8 pl-12">
                    Login
                </span>
                <router-link to="/login">
                    <a class="bg-sky-500 hover:bg-sky-400 delay-75 px-4 py-3 rounded-lg text-white font-bold text-sm">
                        COMECE AGORA
                    </a>
                </router-link>
            </div>
        </div>
    </header>
</template>