<script setup>
import BookedBooks from '@/components/BookedBooks.vue'
import BookedPopUp from '@/components/BookedPopUp.vue'
import { useAuthStore } from '@/stores';
import { useUserBooks } from '@/stores/userbooks/userbooks';
import api from '@/plugins/api'
import axios from 'axios';
import { onMounted, ref, watch, computed } from 'vue'
const taxesitem = ref([])
const popup = ref(false)
const store = useUserBooks()
const authStore = useAuthStore()
const userid = ref(null)
function OpenPopUP(id) {
  taxesitem.value = [store.userbooks.find((item) => item.id === id)]
  popup.value = !popup.value
}
const diasfaltantes = ref(null)
const taxas = ref(0.0)

watch(diasfaltantes, (dias) =>{
    if(dias < 0){
        taxas.value++
    }
})


function calculardias(final){
  const dataInicial = new Date()
  const dataFinal = new Date(final)
  const diferencaEmMilissegundos = dataFinal - dataInicial;
  const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);
  diasfaltantes.value = diferencaEmDias;
  return Math.round(diferencaEmDias)
}

const userBooksByUser = computed(()=> store.userbooks.filter(s => s.usuario.id == authStore.user.id) )

onMounted(async() =>{
  store.GetUserBooks()
  const email = localStorage.getItem('email')
  const { data } = await api.get("/usuarios/")
  const finduser = data.results.find(user => user.email === email)
  userid.value = finduser.id
  console.log(userBooksByUser.value)
})



function devolverLivro(id){
  store.UpdateUserBooks(id, userid.value)
}
</script>
<template>
  <div class="taxed-container">
    <div class="box-container">
      <div
        v-for="taxes in userBooksByUser"
        :key="taxes.id"
        :class="taxes.id % 2 === 0 ? 'box-pair' : 'box-odd'"
      >
        <BookedBooks
          :action="taxes.livro.disponivel ? 'lido' : 'pendente'"
          :book="taxes.livro.titulo"
          :started="taxes.data_pego"
          :finished="taxes.data_devolucao"
          @click="OpenPopUP(taxes.id)"
        />
      </div>
    </div>
    <div v-show="popup" class="popup-container">
      <BookedPopUp
        v-for="booked in taxesitem"
        :key="booked.id"
        :id="booked.id"
        :title="booked.livro.titulo"
        :status="booked.livro.disponivel ? 'lido' : 'pendente'"
        :days="calculardias(booked.data_devolucao)"
        :fine="taxas"
        :booked_in="booked.data_pego"
        :expire_in="booked.data_devolucao"
        @back="popup = !popup"
        @devolver="devolverLivro"
      />
    </div>
  </div>
</template>