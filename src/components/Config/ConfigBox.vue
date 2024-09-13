<script setup>
import { useFamilyStore, useAuthStore } from '@/stores';
import { onMounted, ref } from 'vue';

const familyStore = useFamilyStore()
const authStore = useAuthStore()

const props = defineProps({
        title: {
                type: String
        },
        hasButton: {
                type: Boolean
        }
})

const family = ref(null)

defineEmits([
        'popFamily'
])

onMounted(()=>{
        authStore.getUserInfo()
})
</script>
<template>
    <div class="container-config">
          
           <div class="box-title-add">
            <button @click="$emit('popFamily')" class="mdi mdi-plus addPeople" v-if="props.hasButton"></button>
           
            <p>{{props.title}}</p>
            </div>
           <div class="config-box">
            <slot></slot>
           </div>
        </div>

</template>