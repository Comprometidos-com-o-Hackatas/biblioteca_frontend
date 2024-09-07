<script setup>
    import { onMounted, onUpdated} from 'vue'
    import Header from './components/Header.vue'
    import { useAuthStore, useBookStore, useRatingStore } from './stores';
    const storeauth = useAuthStore()
    const bookstore = useBookStore()
    const ratingstore = useRatingStore()
    
onMounted(() =>{
    if (localStorage.getItem('access') && localStorage.getItem('refresh')) {
        storeauth.autologin()
    }
    storeauth.getUserInfo()
})
</script>
<template>
    <RouterView />
    <Header v-if="storeauth.logged"/>
</template>
