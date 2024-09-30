<template>
    <div :class="userhasbook ? 'disabled' : buttonclass ">
       <button :disabled="userhasbook" :id="idbutton" > {{ title }}  </button>
    </div>
</template>
<script setup>
    defineProps({
        title:{
            type: String,
            required: true,
        },
        buttonclass:{
            type:String,
            required: false
        },
        idbutton:{
            type: String,
            required: false
        },
        userhasbook: {
            type: Boolean,
            required: true
        }
    })
</script>