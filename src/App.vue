<script setup>
    import { ref } from 'vue'
    import Header from './components/Header.vue'
    import router from './router'
    const showHeader = ref(true)
    router.beforeEach((to, from, next ) =>{
        if(to.path === '/login'){
            showHeader.value = false
            next()
        }
        else {
            showHeader.value = true
            next()
        }
    }
)
</script>
<template>
    <RouterView />
    <Header v-if="showHeader" />
</template>



