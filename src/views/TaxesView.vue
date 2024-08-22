<script setup>
  import TaxesComp from '@/components/TaxesComp.vue'
  import { prices } from '@/utils/prices'
</script>
<template>
  <div class="taxes-container">
    <h1>Fines and Taxes</h1>
    <div class="docs-container">
      <div class="docs">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi enim quae
          dolorum reiciendis nulla ad rem molestias facilis totam blanditiis dolore assumenda id
          voluptates, minus, voluptate est quasi laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusantium porro minus beatae temporibus ab ea pariatur, autem, possimus rerum sit veritatis praesentium esse! Ducimus dignissimos cumque vel tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam, expedita quos voluptatum quas, ut totam ipsam maiores voluptatem eius et nam optio fugiat neque cumque praesentium! Quae, modi! Nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique blanditiis cum nemo harum cumque expedita quia illo ex, ratione unde deleniti voluptates eveniet id? Eligendi officiis voluptas magnam nemo?
        </p>
      </div>
      <div class="fine-table">
        <div class="title-container">
          <h1>Fines Vary due days late</h1>
        </div>
        <div class="type-container">
          <p>DAYS</p>
          <p>FINES</p>
        </div>
        <div class="info-taxes-container">
        <taxes-comp
          v-for="price in prices"
          :key="price.id"
          :days="price.days"
          :fines="price.fines"
        />
        </div>
      </div>
    </div>
  </div>
</template>

