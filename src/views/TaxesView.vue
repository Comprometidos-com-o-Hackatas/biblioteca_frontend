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
          O sistema de taxas da biblioteca é simples e transparente. Cada livro emprestado possui uma data de devolução estipulada. Caso o usuário não devolva o livro até essa data, uma multa diária é aplicada. A cada dia de atraso, R$ 1,00 é adicionado à multa. Por exemplo, se um livro for devolvido com três dias de atraso, a multa total será de R$ 3,00. O valor é cumulativo e aumenta diariamente até que o livro seja devolvido. Esse sistema incentiva a devolução pontual dos livros, garantindo que outros usuários possam usufruir do acervo da biblioteca em tempo hábil.  
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

