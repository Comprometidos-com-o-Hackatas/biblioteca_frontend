<script setup>
import { ref } from 'vue';
import StarsComp from './StarsComp.vue';
import GlobalButton from './GlobalButton.vue';
const rate = ref(1)
function changevalue(i){
    rate.value = i + 1
}
const coment = ref('')
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
            <GlobalButton title="avaliar" buttonclass="rate-button"/>
        </div>
</div>
</template>