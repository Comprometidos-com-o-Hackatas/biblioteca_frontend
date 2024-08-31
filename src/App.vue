<script setup>
    import { ref, onMounted } from 'vue'
    import Header from './components/Header.vue'
    import router from './router'
    import '@passageidentity/passage-elements/passage-auth'
    import { PassageUser } from '@passageidentity/passage-elements/passage-user';
    import { useAuthStore } from './stores'

    const authStore = useAuthStore()
    const showHeader = ref(true)
    const isLogged = ref(false)
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

    const getUserInfo = async () => {
        try {
            const authToken = localStorage.getItem('psg_auth_token')
            const passageUser = new PassageUser(authToken)
            const user = await passageUser.userInfo(authToken)
            if (user) {
            await authStore.setToken(authToken)
            console.log(authToken)
            isLogged.value = true
            } else {
            authStore.unsetToken()
            isLogged.value = false
        }
        } catch(error) {
            authStore.unsetToken()
        }
      
    }

onMounted(()=>{
    getUserInfo()
})
</script>
<template>
    <RouterView />
    <Header v-if="showHeader" />
</template>



