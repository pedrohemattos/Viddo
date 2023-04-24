<script setup lang="ts">
import { ref } from 'vue';

    const showMobileMenu = ref(false);
</script>

<template>
    <!-- top-0 fixed z-20 w-full flex justify-between items-center px-32 py-2 shadow -->
    <header class="fixed w-full bg-slate-50 z-10 shadow-sm">
        <div class="py-6 border-b-[1px] flex justify-between items-center px-5 xl:px-56 2xl:px-72">
            <router-link to="/">
                <a>
                    <img src="../assets/LOGO VIDDO 2.png" class="h-10"/>
                </a>
            </router-link>
            <div class="flex items-center">
                <span class="hidden md:block text-lg cursor-pointer font-semibold text-black hover:text-sky-600 delay-100">
                    Vire um Criador
                </span>
                <span class="hidden md:block text-lg cursor-pointer font-semibold text-black hover:text-sky-600 delay-100 pr-8 pl-12">
                    Login
                </span>
                <router-link to="/login" class="hidden md:block">
                    <a class="bg-sky-500 hover:bg-sky-400 delay-75 px-4 py-3 rounded-lg text-white font-bold text-sm">
                        COMECE AGORA
                    </a>
                </router-link>

                <font-awesome-icon      
                    icon="fa-solid fa-bars" 
                    class="md:hidden cursor-pointer text-sky-500" 
                    size="xl"
                    @click="showMobileMenu = !showMobileMenu"
                />
            </div>
        </div>

        <!-- <div>
            <a class="block">Torne-se um Criador</a>
            <a class="block">login</a>
            <a class="block">Comece Agora</a>
        </div> -->

    </header>
</template>