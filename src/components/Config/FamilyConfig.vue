<script setup>
import ConfigBox from './ConfigBox.vue';
import BoxPeople from './BoxPeople.vue'

const family = [
    {name: 'Fabio', icon: 'mdi mdi-crown'},
    {name: 'Gabriel', icon: 'mdi mdi-human-cane'},
    {name: 'João', icon: 'mdi mdi-human-cane'},
    {name: 'Renato', icon: 'mdi mdi-teddy-bear'},
    {name: 'Manco', icon: 'mdi mdi-teddy-bear'}
]
</script>
<template>
    <section class="section-family">
        <h1 class="title-config">Family Miranda</h1>

       <div class="container-config-cards">
        <ConfigBox :hasButton="true" :title="'Add people'" >
            <div class="box-people">
            <BoxPeople v-for="(item, index) in family" :key="index" :name="item.name" :icon="item.icon" />
            </div>
        </ConfigBox>
        
        <ConfigBox :hasButton="false" :title="'Manage people'">
            
        </ConfigBox>

        <ConfigBox :hasButton="false" :title="'Settings'">
            
        </ConfigBox>
    </div>
    </section>
</template>