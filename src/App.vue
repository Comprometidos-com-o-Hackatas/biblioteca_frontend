<script setup>
    import { onMounted, ref } from 'vue'
    import Header from './components/Header.vue'
    import router from './router'
    import { useAuthStore } from './stores';
    const showHeader = ref(true)
    const store = useAuthStore()
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
onMounted(() =>{
    showHeader.value = !store.header
})
</script>
<template>
    <RouterView />
    <Header v-if="showHeader" />
</template>



