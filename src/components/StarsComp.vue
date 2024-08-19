<template>
  <div :class='is_rating ? null : "box-rate"'>
    <div :class="is_rating ? 'box-user-rate-in' : 'box-rate-in'">
        <i v-for="star, index in starsrating" @click="rate(index)" :key="index" :class="star.icon" :style="{fontSize: is_rating ? '15px': '30px', color: is_rating && is_popup ? star.color : null}  "></i>
    </div>
  </div>
</template>
<script setup>
import { starsrating } from '@/utils/stars';
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
  is_popup: Boolean
})
</script>