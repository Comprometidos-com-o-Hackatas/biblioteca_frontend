<template>
  <div :class="is_list != 'list' ? 'detail-container' : 'book-list-container'" :id="is_list != 'list' ? 'detail-container-esp' : null">
    <div :class="is_list != 'list' ? 'book-details' : 'book-list'">
      <div :class="is_list != 'list' ? 'book-details-in' : 'book-list-in'">
        <div :class="is_list != 'list' ? 'box-img' : 'box-list-img'">
          <img :src="url"/>
        </div>
        <div :class="is_list != 'list' ? 'box-list-container' : 'box-list-list-container'">
          <div :class="is_list != 'list' ? 'list-container' : 'list-list-container'">
              <li :id="is_list != 'list' ? 'genere' : 'genere-list'">{{ genere.description }}</li> 
              <li v-for="category in categories" :key="category.id"  :class="getcategory(category)">{{ category.description }}</li>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
    <StarsComp :is_rating="false"  v-show="is_list === 'details'"/>
    <global-button :class="'rating-button'" title="Avaliar" @click="$emit('rate') " v-show="is_list === 'details'"/>
</div>
</template>
<script setup>
import StarsComp from './StarsComp.vue';
import GlobalButton from './GlobalButton.vue';

const props = defineProps({
  url:{
    type: URL,
    required: true
  },
  genere:{
    type: Object,
    required: true
  },
  categories:{
    type: Array,
    required: true
  }, 
  is_list:{
    type: String,
    required: true
  },
})

const getcategory = (category) => {
  if (category.description === 'Aventura' && props.is_list !== 'list') {
    return 'category-adventure';
  } else if (category.description === 'Romance' && props.is_list !== 'list') {
    return 'category-romance';
  } else if (category.description === 'Romance' && props.is_list === 'list') {
    return 'category-list-romance';
  } else {
    return 'category-list-adventure';
  }
}
</script>