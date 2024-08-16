<script setup>
import {ref, computed} from 'vue'
import AuthBase from '@/components/AuthBase.vue'
import Sign from '@/components/Sign.vue'

const changeToSign = ref(true)
const widthscreen = ref(window.innerWidth)

const show = computed(()=> {
    return widthscreen.value
})
</script>
<template>
    <main class="main-login">
        <section class="section-login" :class="{active: !changeToSign}">
       <AuthBase :title="'Login'" :first_box="'Username or Email'" :second_box="'Password'" :directiveMessage="'Do not have an account?'" :directiveButton="'Sign Up'"  @sign="changeToSign = !changeToSign" v-show="changeToSign == true" :position="'left'" :amount="show > 700 ? '60px' : '0px'" />
       <Sign @sign="changeToSign = !changeToSign" :position="'right'" :amount="'60px'" v-show="changeToSign == false" />
    </section>
    </main>
</template>
<style scoped>

* {
    cursor: default;
}
</style>