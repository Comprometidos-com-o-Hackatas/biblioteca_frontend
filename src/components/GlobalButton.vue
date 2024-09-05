<template>
    <div :class="buttonclass">
       <button :id="idbutton"> {{ title }}  </button>
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
    })
</script>