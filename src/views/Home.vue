<script setup lang="ts">
import HeaderHome from '../components/HeaderHome.vue';
import FooterHome from '../components/FooterHome.vue';
import WhatsappIcon from '../components/WhatsappIcon.vue';

import { ref } from 'vue';

const navbar = ref(false);

</script>

<template>
    <HeaderHome />

    <section class="sm:h-screen z-1 flex bg-[#f2f7f7]">
        <div class="flex mx-auto flex-col sm:flex-row gap-20 sm:gap-0 items-center justify-between sm:basis-4/5 md:basis-2/3 px-5 sm:px-0 py-32 pb-24 md:py-48">
            <div class="flex flex-col items-center sm:items-start gap-8 sm:basis-1 md:basis-3/5">
                <h1 class="w-full md:w-4/5 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">
                    Transforme sua marca em um sucesso com vídeos curtos
                </h1>
                <p class="text-xl text-center w-4/5 sm:w-full sm:text-left font-semibold">
                    Anúncios, Reels, Tiktok, Youtube, landing pages …
                </p>
                <a class="bg-sky-500 hover:bg-sky-400 delay-75 cursor-pointer text-white text-lg font-bold rounded-md px-36 sm:px-8 py-3">
                    Comece Agora!
                </a>
                <p class="text-xl text-center w-4/5 sm:w-full sm:text-left font-semibold">
                    Descubra o Viddo e conecte-se com uma rede de criadores incríveis!
                </p>
            </div>
            <div class="basis-2/5 flex justify-end">
                <video playsinline="true" autoplay="true" muted="true" loop="true" preload="auto" class="h-32rem sm:h-37rem">
                    <source src="https://billo.app/wp-content/uploads/2023/02/billo-homepage-hero-video-new.mp4">
                </video>
            </div>
        </div>
    </section>

    <section class="mx-auto mt-12 sm:mt-20">
        <div class="flex flex-col items-center gap-12 sm:gap-16">
            <h1 class="text-center text-2xl sm:text-4xl lg:text-5xl font-semibold w-4/5 sm:w-1/2">Nunca foi tão <span class="font-bold text-blue-900">fácil</span> se comunicar efetivamente com seus clientes.</h1>
            <h1 class="text-center text-2xl sm:text-4xl lg:text-5xl font-semibold w-4/5 sm:w-1/2 -mt-8">Compre vídeos autênticos que <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">conectam, humanizam sua marca e vendem!</span></h1>
            <div class="flex flex-col md:flex-row justify-center gap-8 w-2/3 md:w-4/5 lg:w-4/5 xl:w-2/3 2xl:w-2/3">
                <div class="flex flex-col items-start md:w-1/3 p-8 py-12 sm:py-16 rounded-md bg-blue-50">
                    <font-awesome-icon icon="fa-solid fa-file-video" size="3x"/>
                    <h2 class="text-xl font-semibold mt-6 mb-3">1. Crie uma tarefa</h2>
                    <p>Defina o tipo de vídeo que você quer para os nossos <span class="text-sky-500 font-semibold">Criadores de Conteúdo</span>. Qual finalidade, duração, formato, etc.</p>
                </div>
                <div class="flex flex-col items-start md:w-1/3 p-8 py-12 sm:py-16 rounded-md bg-blue-50">
                    <font-awesome-icon icon="fa-solid fa-paper-plane" size="3x"/>
                    <h2 class="text-xl font-semibold mt-6 mb-3">2. Envie o produto</h2>
                    <p>Depois de aprovar os criadores que você gostaria de trabalhar, envie o produto para que eles comecem a criar!</p>
                </div>
                <div class="flex flex-col items-start md:w-1/3 p-8 py-12 sm:py-16 rounded-md bg-blue-50">
                    <font-awesome-icon icon="fa-solid fa-file-arrow-down" size="3x"/>
                    <h2 class="text-xl font-semibold mt-6 mb-3">3. Aproveite o conteúdo</h2>
                    <p>Aprove o conteúdo ou peça edições, baixe o vídeo e comece a escala do seu negócio!</p>
                </div>
            </div>
            <a
                class="bg-sky-500 hover:bg-sky-400 delay-100 cursor-pointer text-white text-lg font-bold rounded-md  px-4 sm:px-8 py-3"
            >
                Estou pronto para solicitar meu primeiro vídeo!
            </a>
        </div>
    </section>

    <section class="mx-auto m-16 tsm:mt-48 px-10 sm:px-0">
        <div class="flex flex-col items-center gap-16 sm:gap-24 sm:px-8">
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">Veja O Que Os Dados Revelam Sobre <br>A Revolução Dos Vídeos Nas Redes Sociais:</h1>

            <div class="font-bold flex flex-col sm:w-1/2 gap-12">
                <div class="flex items-center gap-8">
                    <img src="../assets/1200px-HubSpot_Logo.svg.png" class="w-1/3 sm:w-44"/>
                    <h1 class="text-lg w-2/3">72% dos clientes preferem aprender sobre<br> um produto ou serviço assistindo a um vídeo</h1>
                </div>
                <div class="self-end flex flex-row-reverse items-center gap-8">
                    <img src="../assets/g2.webp" class="w-20"/>
                    <h1 class="text-lg w-2/3">Vídeos nas redes sociais geram 1200% mais<br> compartilhamentos do que textos e imagens combinados</h1>
                </div>
                <div class="flex items-center gap-8">
                    <img src="../assets/Forbes_logo_black.png" class="w-32 sm:w-40"/>
                    <h1 class="text-lg w-2/3">90% dos consumidores afirmam que vídeos<br> de produtos ajudam em suas decisões de compra</h1>
                </div>
                <div class="self-end flex flex-row-reverse items-center gap-8">
                    <img src="../assets/LOGO VIDDO 2.png" class="w-28 sm:w-36"/>
                    <h1 class="text-lg w-2/3">Incluir um vídeo em uma landing page<br> pode aumentar a conversão em até 80%</h1>
                </div>
            </div>
            <h1 class="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">
                Humanize sua marca, se atualize nas tendências de mercado<br> e venda mais com os criadores do Viddo. 
            </h1>
            <a
                class="bg-sky-500 hover:bg-sky-400 delay-100 cursor-pointer text-white text-lg font-bold rounded-md px-24 sm:px-8 py-3 -mt-10"
            >
                Solicitar Meu Vídeo Agora!
            </a>
        </div>

        <WhatsappIcon />
        <FooterHome />
    </section>
</template>