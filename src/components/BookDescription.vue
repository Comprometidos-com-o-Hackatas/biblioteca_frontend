<script setup>
import { onMounted, ref } from 'vue';
import AnalisysComp from './AnalisysComp.vue';
import GlobalButton from './GlobalButton.vue';
import { useSavedStore } from '@/stores/saved/saved';
import { useRatingStore } from '@/stores';
import axios from 'axios';
import { useRoute } from 'vue-router';
const route = useRoute()
const store = useRatingStore()
const savedstore = useSavedStore()
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
        },
        allow: {
            type: Boolean,
            default: false
        },
        nota: {
            type: Number
        },
        saved: {
            type: Boolean,
            default: false
        }
    })
    const saved = ref(false)
    async function savedbook(){
        if(saved.value){
            const id = route.params.id
            savedstore.DeleteBook(id)
            saved.value = !saved.value
        }
        else{
            const email = localStorage.getItem('email')
            const {data} = await axios.get('http://127.0.0.1:8000/api/usuarios/')
            const finduser = data.results.find(user => user.email === email)
            const id = route.params.id
            const savedbooks = {
                usuario: finduser.id,
                livro: id
            }
            savedstore.CreateSavedBook(savedbooks)
            saved.value = !saved.value
        }
    }
    defineEmits([
        'ownBook'
    ])
onMounted(() =>{
    savedstore.GetSavedBooks()

    setTimeout(() =>{
        const savedbook = savedstore.savedbooks
        const id = route.params.id

        const book = savedbook.find(book => book.livro.id === Number(id))
        if(book){
            saved.value = true
        }
        console.log(book)
    }, 1000)

})
</script>
<template>
<div class="description-details-container">
    <div class="description-details-header">
        <h1 style="font-size: 30px;">{{ title }}</h1>
        <i :class="`mdi ${(saved) ? 'mdi-bookmark' : 'mdi-bookmark-outline'} save-btn`" @click="savedbook"></i>
    </div>
    <p>disponivel: {{ is_avalaible ? 'sim' : 'não' }}</p>
    <p id="synopsis">synopsis: {{ synopsis }}</p>
    <p>localização:  1  </p>
    <p>{{nota}}</p>
    <GlobalButton title="pegar" buttonclass="button-container" idbutton="detail-button" @click="$emit('ownBook', route.params.id)"/>
    <h1 style="font-size: 20px;">resenhas:</h1>
    <AnalisysComp v-for="rate in store.ratings" :key="rate.id" :description="rate.coment" :rate="rate.nota" /> 
    <GlobalButton :class="'rating-button-resp'" title="Avaliar" @click="$emit('rate') "></GlobalButton>
</div>
</template>
