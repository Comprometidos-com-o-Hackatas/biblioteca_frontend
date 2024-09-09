<template>

  <div :class="is_list != 'list' ? 'detail-container' : 'book-list-container'" :id="is_list != 'list' ? 'detail-container-esp' : null">
    
    <div :class="is_list != 'list' ? 'book-details' : 'book-list'">
      
      <div :class="is_list != 'list' ? 'book-details-in' : 'book-list-in'">
        
        <div :class="is_list != 'list' ? 'box-img' : 'box-list-img'">
          <img :src="url"/>
          
        </div>
        
        
        
      </div>
      <div :class="is_list != 'list' ? 'detail-overlay' : !is_avaible ? 'unavaible' : 'overlay'"></div>
    </div>
  
    <StarsComp :is_rating="false"  v-show="is_list === 'details'"/>
    <global-button :class="'rating-button'" title="Avaliar" @click="$emit('rate') " v-show="is_list === 'details'"/>
    <div :class="is_list != 'list' ? 'box-list-container' : 'box-list-list-container'">
          
          <div :class="is_list != 'list' ? 'list-container' : 'list-list-container'">
            
              <li class="genere-list" v-for="item, index in genere" :key="index">{{ item.descricao }}</li> 
              <li class="category-list">{{ categories.descricao }}</li>
          </div>
        </div>

       
</div>

</template>
<script setup>
import { onMounted } from 'vue';
import { useBookStore } from '@/stores/index';
import StarsComp from './StarsComp.vue';
import GlobalButton from './GlobalButton.vue';

const bookStore = useBookStore()

const props = defineProps({
  url:{
    type: URL,
  },
  genere:{
    type: Array,
    required: true
  },
  categories:{
    type: Object,
    required: true
  }, 
  is_list:{
    type: String,
    required: true
  },
  is_avaible: {
    type: Boolean,
    required: true
  }
})

</script>