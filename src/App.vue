<script setup>
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
})
</script>
<template>
    <RouterView />
    <Header v-if="showHeader" />
</template>



