<script setup>
import { ref } from 'vue';
import StarsComp from './StarsComp.vue';
import GlobalButton from './GlobalButton.vue';
import { useRatingStore } from '@/stores';
import axios from 'axios';
import { useRoute } from 'vue-router';
import api from '@/plugins/api'
const rate = ref(1)
const coment = ref('')
const route = useRoute()
const store = useRatingStore()
function changevalue(i){
    rate.value = i + 1
}
async function Avaliate(){
    const email = localStorage.getItem('email')
    const {data} = await api.get('/usuarios/')
    const finduser = data.find(user => user.email === email)
    const id = route.params.id
    const rating = {
        coment: coment.value,
        nota: rate.value,
        usuario: finduser.id,
        livro: id
    }
    store.CreateRating(rating)
    setTimeout(()=>{
            window.location.reload()
        }, 1000)
}   
</script>
<template>
<div class="card-rate-container">
        <div class="card">
        <div class="back-box" @click="$emit('rate')">
            <i class="mdi mdi-arrow-collapse-left"></i>
            <p>voltar</p>
        </div>
        <div class="rate-box">
           <StarsComp :is_rating="true" :is_popup="true" @rating="changevalue"/>
           <p>{{ rate }}</p>
        </div>
        <textarea placeholder="Deixe o seu comentário..." v-model="coment" maxlength="500" minlength="50"/>
        <p id="hint">{{ coment.length }} / 500</p>
            <GlobalButton title="avaliar" buttonclass="rate-button" @click="Avaliate"/>
        </div>
</div>
</template>