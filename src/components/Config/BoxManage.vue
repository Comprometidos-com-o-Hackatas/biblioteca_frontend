<script setup>
import {ref,computed, onMounted, onUpdated, watch} from 'vue'
import {manage_book_data, manage_category_data, setAgeLimit} from '@/utils/config'
import SearchBar from '../SearchBar.vue';
import { useBookStore } from '@/stores';
import { booksList, updateBookList } from '@/utils/home';
import ContainerBookOut from '../Home/ContainerBookOut.vue';
import BookDetail from '../BookDetail.vue';
import { useFamilyStore } from '@/stores';
import { useUserBooks } from '@/stores/userbooks/userbooks';


const familyStore = useFamilyStore()
const bookStore = useBookStore()
const userBooks = useUserBooks()
const booksfiltered = ref([])

function filterbooks(search) {
  booksfiltered.value = familyStore.family.userBooks.filter((book) => book.titulo.startsWith(search))
}

const books = computed(() => {
  if (booksfiltered.value.length > 0) {
    return booksfiltered.value
  }
  return familyStore.family.userBooks
})

const booksRead = computed(()=> {
  const reading = familyStore.family.userReading
  return reading
})
const diasfaltantes = ref('')
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

onMounted(async()=>{
  await bookStore.getBooks()
  await familyStore.getFamilies()
 
})
const newFamily = ref(familyStore.family.family[0])
async function deleteUser(user) {
  // console.log(familyStore.family.family[0].Usuario.splice(0, 1))
  const findIndex = newFamily.value.Usuario.findIndex(s => s.id ==  0)
  // newFamily.value.Usuario.splice(findIndex, 1)
  console.log(findIndex)
}

</script>
<template>
        <div class="container-manage">
        <div class="manage-reading-box">
          <div class="title-reading">
          <p>Lendo: </p>
          </div>
          <div v-if="familyStore.family.userReading.length > 0" class="container-data-reading">
          <div class="box-reading-img">
            <ContainerBookOut v-for="item, index in booksRead" :key="index" :data="item" />
          </div>
          <div class="box-reading-data">
            <p>Datas:</p>
            <div class="box-data-informed">
              <div class="box-info-data">
                <p>Pego em</p>
                <p>{{booksRead[0].data_pego}}</p>
              </div>

              <div class="box-info-data">
                <p>Dias Restantes: </p>
                <p>{{ calculardias(booksRead[0].data_devolucao) }}</p>
              </div>

              <div class="box-info-data">
                <p>Status: </p>
                <p>{{calculardias(booksRead[0].data_devolucao) < 0 ? 'FORA DO PRAZO' : 'DENTRO DO PRAZO'}}</p>
              </div>
            </div>
          </div>
          </div>

        </div>
          <div class="box-books-block">
              <div class="box-title-search">
                  <p>Livros lidos: </p>
                  <SearchBar @filter="filterbooks" :width="'width: 70%;'" style="font-size: 15px;" :height="'height: 65px;'" />
              </div>
              <div class="box-books-books">
                <ContainerBookOut v-for="item, index in books" :key="index" :data="item" />
              </div>
          </div>
      </div>
</template>