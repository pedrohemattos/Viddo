<script setup lang="ts">
import Header from '../components/Header.vue';
import FooterHome from '../components/FooterHome.vue';
import WhatsappIcon from '../components/WhatsappIcon.vue';
</script>

<template>
    <Header></Header>

    <section class="h-screen z-1 bg-[#f2f7f7] flex">
        <div class="flex w-2/3 gap-4 items-center justify-between mx-auto">
            <div class="flex flex-col items-start gap-8 w-46rem">
                <h1 
                    class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600"
                >
                    Transforme sua marca em um 
                    sucesso com vídeos curtos
                </h1>
                <p class="text-xl font-semibold">Anúncios, Reels, Tiktok, Youtube, landing pages …</p>
                <a
                    class="bg-sky-500 hover:bg-sky-400 delay-75 cursor-pointer text-white text-lg font-bold rounded-md px-8 py-3"
                >
                    Comece Agora!
                </a>
                <p class="text-xl font-semibold">Descubra o Viddo e conecte-se com uma rede de criadores incríveis!</p>
            </div>
            <div class="">
                <video playsinline="true" autoplay="true" muted="true" loop="true" preload="auto" class="h-37rem">
                    <source src="https://billo.app/wp-content/uploads/2023/02/billo-homepage-hero-video-new.mp4">
                </video>
            </div>
        </div>
    </section>

    <section class="mx-auto mt-20">
        <div class="flex flex-col items-center gap-16">
            <h1 class="text-center text-5xl font-semibold w-1/2">Nunca foi tão <span class="font-bold text-blue-900">fácil</span> se comunicar efetivamente com seus clientes.</h1>
            <h1 class="text-center text-5xl font-semibold w-1/2 -mt-8">Compre vídeos autênticos que <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">conectam, humanizam sua marca e vendem!</span></h1>
            <div class="flex justify-center gap-8 w-1/2">
                <div class="flex flex-col items-start w-1/3 p-8 py-16 rounded-md bg-blue-50">
                    <font-awesome-icon icon="fa-solid fa-file-video" size="3x"/>
                    <h2 class="text-xl font-semibold mt-6 mb-3">1. Crie uma tarefa</h2>
                    <p>Defina o tipo de vídeo que você quer para os nossos <span class="text-sky-500 font-semibold">Criadores de Conteúdo</span>. Qual finalidade, duração, formato, etc.</p>
                </div>
                <div class="flex flex-col items-start  w-1/3 p-8 py-16 rounded-md bg-blue-50">
                    <font-awesome-icon icon="fa-solid fa-paper-plane" size="3x"/>
                    <h2 class="text-xl font-semibold mt-6 mb-3">2. Envie o produto</h2>
                    <p>Depois de aprovar os criadores que você gostaria de trabalhar, envie o produto para que eles comecem a criar!</p>
                </div>
                <div class="flex flex-col items-start  w-1/3 p-8 py-16 rounded-md bg-blue-50">
                    <font-awesome-icon icon="fa-solid fa-file-arrow-down" size="3x"/>
                    <h2 class="text-xl font-semibold mt-6 mb-3">3. Aproveite o conteúdo</h2>
                    <p>Aprove o conteúdo ou peça edições, baixe o vídeo e comece a escala do seu negócio!</p>
                </div>
            </div>
            <a
                class="bg-sky-500 hover:bg-sky-400 delay-100 cursor-pointer text-white text-lg font-bold rounded-md px-8 py-3"
            >
                Estou pronto para solicitar meu primeiro vídeo!
            </a>
        </div>
    </section>

    <section class="mx-auto mt-48">
        <div class="flex flex-col items-center gap-24">
            <h1 class="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">Veja O Que Os Dados Revelam Sobre <br>A Revolução Dos Vídeos Nas Redes Sociais:</h1>
            <div class="font-bold flex flex-col w-1/2 gap-12">
                <div class="flex items-center gap-8">
                    <img src="../assets/1200px-HubSpot_Logo.svg.png" class="w-44"/>
                    <h1 class="text-lg">72% dos clientes preferem aprender sobre<br> um produto ou serviço assistindo a um vídeo</h1>
                </div>
                <div class="self-end flex items-center gap-8">
                    <img src="../assets/g2.webp" class="w-20"/>
                    <h1 class="text-lg">Vídeos nas redes sociais geram 1200% mais<br> compartilhamentos do que textos e imagens combinados</h1>
                </div>
                <div class="flex items-center gap-8">
                    <img src="../assets/Forbes_logo_black.png" class="w-40"/>
                    <h1 class="text-lg">90% dos consumidores afirmam que vídeos<br> de produtos ajudam em suas decisões de compra</h1>
                </div>
                <div class="flex items-center gap-8 self-end">
                    <img src="../assets/viddo-logo.jpeg" class="w-36"/>
                    <h1 class="text-lg">Incluir um vídeo em uma landing page<br> pode aumentar a conversão em até 80%</h1>
                </div>
            </div>
            <h1 class="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">
                Humanize sua marca, se atualize nas tendências de mercado<br> e venda mais com os criadores do Viddo. 
            </h1>
            <a
                class="bg-sky-500 hover:bg-sky-400 delay-100 cursor-pointer text-white text-lg font-bold rounded-md px-8 py-3 -mt-10"
            >
                Solicitar Meu Vídeo Agora!
            </a>
        </div>

        <WhatsappIcon />
        <FooterHome />
    </section>
</template>