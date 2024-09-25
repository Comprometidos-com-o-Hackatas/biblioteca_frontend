<template>
  <div :class='is_rating ? "" : "box-rate"'>
    <div :class="is_rating ? 'box-user-rate-in' : 'box-rate-in'" v-if="is_popup">
        <i v-for="star, index in starsrating" @click="rate(index)" :key="index" :class="star.icon" :style="{fontSize: is_rating ? '15px': '30px', color: is_rating && is_popup ? star.color : ''}  "></i>
    </div>
    <div :class="is_rating ? 'box-user-rate-in' : 'box-rate-in'" v-else>
        <i v-for="star, index in starsrating" :key="index" :class="star.icon" :style="!is_rating ? 'color: ' + (Math.round(getRate) > (index) ? 'yellow' : 'black') : 'color: ' + (Math.round(userrate) > (index) ? 'yellow' : 'black')" </i>
    </div>
  </div>
</template>
<script setup>
import { useBookStore, useRatingStore } from '@/stores';
import { starsrating } from '@/utils/stars';
import { ref, computed, onMounted } from 'vue';
const bookStore = useBookStore()
const getRate = ref(1)

onMounted(async () => {
  bookStore.getBooks()
  getRate.value = bookStore.state.selectedBook.nota
})



const emit = defineEmits(['rating'])
function rate(i){
  if(props.is_rating){
    for(let itens = 0; itens < starsrating.value.length; itens++){
            if(itens <= i){
                starsrating.value[itens].color = 'yellow'
            }
            else{
                starsrating.value[itens].color = 'black'
            }
        }
    emit('rating', i)
  }
}
const props = defineProps({
  is_rating: Boolean,
  is_popup: Boolean,
  userrate: String,
})



</script>