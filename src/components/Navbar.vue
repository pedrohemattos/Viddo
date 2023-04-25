<template>
    <nav class="w-1/4 h-screen bg-slate-50 border-r-2">
        <div class="p-4">
            <div class="border-b-2 p-4 pb-12">
                <router-link to="/">
                    <img src="../assets/LOGO VIDDO 2.png" class="h-10"/>
                </router-link>
            </div>
            <ul class="flex flex-col gap-2 py-6 border-b-2 text-lg">
                <router-link to="/admin/dashboard">
                    <li class="flex gap-5 py-2 px-4 rounded-md items-center hover:bg-slate-200">
                        <font-awesome-icon icon="fa-solid fa-table-columns"/>
                        <a>
                            Dashboard
                        </a>
                    </li>
                </router-link>
                <router-link to="/admin/tasks">
                    <li class="flex gap-5 py-2 px-4 rounded-md items-center hover:bg-slate-200">
                        <font-awesome-icon icon="fa-solid fa-list-check"/>
                        <a>
                            Tarefas
                        </a>
                    </li>
                </router-link>
                <router-link to="/admin/videos">
                    <li class="flex gap-5 py-2 px-4 rounded-md items-center hover:bg-slate-200">
                        <font-awesome-icon icon="fa-solid fa-video"/>
                        <a>
                            Vídeos
                        </a>
                    </li>
                </router-link>
                <router-link to="/admin/brand">
                    <li class="flex gap-5 py-2 px-4 rounded-md items-center hover:bg-slate-200">
                        <font-awesome-icon icon="fa-solid fa-suitcase"/>
                        <a>
                            Sua marca
                        </a>
                    </li>
                </router-link>
            </ul>
            <router-link to="/admin/settings">
                <div class="px-4 py-2 mt-6 rounded-md text-lg flex gap-5 items-center hover:bg-slate-200">
                    <font-awesome-icon icon="fa-solid fa-gear"/>
                    <a>
                        Configurações
                    </a>
                </div>
            </router-link>
        </div>
    </nav>
</template>