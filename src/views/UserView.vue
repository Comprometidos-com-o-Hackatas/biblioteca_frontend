<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores';
import { onMounted } from 'vue';

const authStore = useAuthStore()

onMounted(() => {
    authStore.getUserInfo
    console.log(authStore.userInfo)
})
</script>

<template>
    <div class="w-screen h-screen flex p-8 gap-10 bg-[#EBDACC]">
        <div class="flex flex-col w-60/1 p-5 gap-4">
            <div class="flex flex-row w-full h-30/1 gap-4">
                <div class="w-25/1 h-full">
                    <img class="w-full h-full rounded-2xl" src="../assets/media/crash.webp" alt="">
                </div>
                <div class="w-75/1 h-full flex flex-col gap-4">
                    <div class="flex flex-col">
                        <div>
                            <h2 class="text-3xl text-black">
                                {{ authStore.userInfo.username }}
                            </h2>
                        </div>
                        <div>
                            <h2 class="text-2xl text-black">
                                {{ authStore.email }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-70/1 rounded-2xl border-primmary-1 border bg-[#E3C9B4]">
                <div class="flex w-full h-10/1 justify-center items-center text-white">
                    <h1 class="text-3xl ">Resenhas</h1>
                </div>
                <div class="w-full h-90/1 overflow-y-scroll scroll-smooth ">
                    <div v-for="index in 10" :key="index"
                        class="flex flex-row w-full h-28 border-primmary-1 border-y gap-4">
                        <div class="w-20/1 h-full">
                            <img class=" w-full h-full" src="../assets/media/crash.webp" alt="">
                        </div>
                        <div class="flex flex-col w-80/1 h-full">
                            <div class="flex flex-col h-50/1">
                                <div class="flex gap-4">
                                    <h3 class="text-black">{{ authStore.userInfo.username }}</h3>
                                    <h4 class="text-black">{{ authStore.userInfo.email }}</h4>
                                </div>
                                <h5 class="text-black">livro: HarryPotter e a pedra</h5>
                            </div>
                            <div class=" h-70/1 text-black overflow-hidden">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum consequatur voluptate
                                placeat dolore maxime voluptates in ut laborum? Tenetur neque, doloribus voluptate cum
                                accusamus illum impedit possimus perspiciatis corporis a!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-50/1 h-full rounded-2xl bg-primmary-1">
            <div class="w-full h-5/1 bg-primmary-1 flex justify-center items-center text-4xl rounded-2xl">
                <h1 class="text-white mt-5">Livros já Lidos</h1>
            </div>
            <div class="w-full h-95/1">
                <!--Livros Lidos Aqui-->
            </div>
        </div>
    </div>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
    background-color: #ccc;
    /* Set thumb color */
    border-radius: 5px;
    /* Optional: Round thumb corners */
}

::-webkit-scrollbar-track {
    background-color: transparent;
    /* Make track transparent */
}
</style>
