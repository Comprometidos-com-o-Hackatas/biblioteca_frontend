<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores';
import { reactive } from 'vue';

const emits = defineEmits([
    'sign',
    'auth'
])

const store = useAuthStore()

const user = reactive({
    email: '',
    password: ''
})

const props = defineProps({
    title: {
        type: String
    },
    first_box: {
        type: String
    },
    second_box: {
        type: String
    },
    third_box: {
        type: String
    },
    hasThird: {
        type: Boolean,
        default: false
    },
    directiveMessage: {
        type: String
    },
    directiveButton: {
        type: String
    },
    position: {
        type: String
    },
    amount: {
        type: String
    }
})
</script>
<template>
       
</template>