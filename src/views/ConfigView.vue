<script setup>
import ButtonsNavigation from '@/components/Config/ButtonsNavigation.vue';
import FamilyConfig from '@/components/Config/FamilyConfig.vue';

import { useFamilyStore, useAuthStore } from '@/stores';
import { computed, onMounted, reactive, ref } from 'vue';

const familyActive = ref(false)

const familyStore = useFamilyStore()
const authStore = useAuthStore()

const person = ref(null)

const familyInfo = reactive({
   nome: '',
   Usuario: [authStore.user.id],
})

onMounted(()=>{
   familyStore.getFamilies() 
   console.log(familyStore.family.family)
})

function addFamily(usr) {
   if (familyStore.family.family.length <= 0) {
      familyInfo.Usuario.push(usr.id)
      console.log(familyInfo)
      familyStore.postFamilies(familyInfo)
   } else {
      familyStore.family.family[0].Usuario.push(usr.id)
      console.log(familyStore.family.family[0])
      familyStore.putFamilies(familyStore.family.family[0])
   }
}
</script>
<template>
<main class="main-config">

<div class="overlay-full" v-if="familyActive"></div>
   
<section class="family-pop" v-if="familyActive">
   <span class="mdi mdi-close" style="font-size: 20px;" @click="familyActive = !familyActive"></span>
<div class="family-name-box" v-if="familyStore.family.family.length <= 0">
<h2>Nome da Família</h2>
<input type="text" placeholder="nome da familia" v-model="familyInfo.nome">
</div>

<div class="family-name-box">

<h2>Usuário a Adicionar</h2>

<select v-model="person">
<option v-for="user, index in authStore.users" :key="index" :value="user">{{user.first_name == '' ? user.email : user.first_name}}</option>
</select>

</div>

<div class="family-button-box">
   <span class="mdi mdi-plus createfamily"></span>
   <button @click="addFamily(person)">Adicionar</button>
</div>
</section>

   <ButtonsNavigation />

   <FamilyConfig @popFamily="familyActive = !familyActive" />
</main>
</template>