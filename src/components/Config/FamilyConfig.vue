<script setup>
import { family } from '@/utils/config';
import ConfigBox from './ConfigBox.vue';
import BoxPeople from './BoxPeople.vue'
import BoxManage from './BoxManage.vue';
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
            <div class="box-manage">
            <BoxManage />
            </div>
        </ConfigBox>

        <ConfigBox :hasButton="false" :title="'Settings'">
            
        </ConfigBox>
    </div>
    </section>
</template>