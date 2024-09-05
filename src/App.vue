<script setup>
<<<<<<< HEAD
    import { onMounted, ref } from 'vue'
    import Header from './components/Header.vue'
    import router from './router'
    import { useAuthStore } from './stores';
    const showHeader = ref(true)
    const store = useAuthStore()
    
onMounted(() =>{
    if (localStorage.getItem('access') && localStorage.getItem('refresh')) {
    store.autoLogin()
}
=======
import { onMounted } from 'vue';
import Header from './components/Header.vue'
import { useAuthStore } from './stores';
const store = useAuthStore()

onMounted(() =>{
    store.autologin()
>>>>>>> 840f90b (sistema de login completado)
})
</script>
<template>
    <RouterView />
    <Header v-if="store.logged"/>
</template>
