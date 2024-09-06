<script setup>
    import { onMounted} from 'vue'
    import Header from './components/Header.vue'
    import { useAuthStore } from './stores';
    const store = useAuthStore()
    
onMounted(() =>{
    if (localStorage.getItem('access') && localStorage.getItem('refresh')) {
        store.autologin()
    }

    store.getUserInfo()
})
</script>
<template>
    <RouterView />
    <Header v-if="store.logged"/>
</template>
