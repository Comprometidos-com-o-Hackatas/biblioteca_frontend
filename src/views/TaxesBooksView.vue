<script setup>
import BookedBooks from '@/components/BookedBooks.vue'
import BookedPopUp from '@/components/BookedPopUp.vue'
import { usertaxes } from '@/utils/taxes'
import { ref } from 'vue'
const taxesitem = ref([])
const popup = ref(false)

function OpenPopUP(id) {
  taxesitem.value = [usertaxes.value.find((item) => item.id === id)]
  popup.value = !popup.value
}

</script>
<template>
  <div class="taxed-container">
    <div class="box-container">
      <div
        v-for="taxes in usertaxes"
        :key="taxes.id"
        :class="taxes.id % 2 === 0 ? 'box-pair' : 'box-odd'"
      >
        <BookedBooks
          :action="taxes.action"
          :book="taxes.book"
          :started="taxes.started"
          :finished="taxes.finished"
          @click="OpenPopUP(taxes.id)"
        />
      </div>
    </div>
    <div v-show="popup" class="popup-container">
      <BookedPopUp
        v-for="booked in taxesitem"
        :key="booked.id"
        :id="booked.id"
        :title="booked.book"
        :status="booked.action"
        :days="booked.days"
        :fine="booked.fine"
        :booked_in="booked.started"
        :expire_in="booked.finished"
        @back="popup = !popup"
      />
    </div>
  </div>
</template>
