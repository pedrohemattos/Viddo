<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import HeaderDashboard from '../components/HeaderDashboard.vue';
</script>

<template>
    <div class="flex">
        <Navbar />
        <div class="flex flex-col w-full">
            <HeaderDashboard />
            <RouterView />
        </div>
    </div>
</template>