<script setup>
import { ref } from 'vue';
import AnalisysComp from './AnalisysComp.vue';
import GlobalButton from './GlobalButton.vue';
import { userratings } from '@/utils/ratings';
    defineProps({
        title: {
            type: String,
            required: true
        },
        synopsis: {
            type:String,
            required: true,
            maxlength: '350'
        },
        is_avalaible: {
            type: Boolean,
            required: true
        },
        location: {
            type: Object,
        }
    })

    const saved = ref(false)
</script>
<template>
<div class="description-details-container">
    <div class="description-details-header">
        <h1 style="font-size: 30px;">{{ title }}</h1>
        <i :class="`mdi ${(saved) ? 'mdi-bookmark' : 'mdi-bookmark-outline'} save-btn`" @click="saved = !saved"></i>
    </div>
    <p>disponivel: {{ is_avalaible ? 'sim' : 'não' }}</p>
    <p id="synopsis">synopsis: {{ synopsis }}</p>
    <p>localização:  1  </p>
    <GlobalButton title="pegar" buttonclass="button-container" idbutton="detail-button"/>
    <h1 style="font-size: 20px;">resenhas:</h1>
    <AnalisysComp v-for="rating in userratings" :key="rating.id" :description="rating.coment" :photo="rating.user.photo.file" :rate="rating.rating"/> 
    <GlobalButton :class="'rating-button-resp'" title="Avaliar" @click="$emit('rate') "></GlobalButton>
</div>
</template>
