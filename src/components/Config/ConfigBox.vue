<script setup>
const props = defineProps({
        title: {
                type: String
        },
        hasButton: {
                type: Boolean
        }
})
</script>
<template>
    <div class="container-config">
          
            <div class="box-title-add">
            <button class="mdi mdi-plus addPeople" v-if="props.hasButton"></button>
            <p>{{props.title}}</p>
            </div>
           <div class="config-box">
            <slot></slot>
           </div>
        </div>
</template>