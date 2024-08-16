<script setup>
import AuthBase from '@/components/AuthBase.vue'
const emits = defineEmits([
    'sign'
])
</script>
<template>

    <AuthBase :title="'Sign Up'" :first_box="'Username or Email'" :second_box="'Password'" :hasThird="true" :third_box="'Age'" :directiveMessage="'Already have an account?'" :directiveButton="'Login'" :directivePosition="'right'" :position="'204px'" @sign="emits('sign')"/>

</template>