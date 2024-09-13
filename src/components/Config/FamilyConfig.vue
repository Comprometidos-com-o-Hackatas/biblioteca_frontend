<script setup>
import { family, setAgeLimit } from '@/utils/config';
import ConfigBox from './ConfigBox.vue';
import BoxPeople from './BoxPeople.vue'
import BoxManage from './BoxManage.vue';
import Settings from './Settings.vue';
import { useFamilyStore } from '@/stores';
import { onMounted, computed } from 'vue';

const familyStore = useFamilyStore()
defineEmits([
    'popFamily'
])

onMounted(()=>{
    familyStore.getFamilies()
    console.log(familyStore.family.users)
})
</script>
<template>
    <section class="section-family">
        <h1 class="title-config">Family Miranda</h1>

       <div class="container-config-cards">
        <ConfigBox @popFamily="$emit('popFamily')" :hasButton="true" :title="'Add people'" >
            <div class="box-people">
            <BoxPeople v-for="(item, index) in familyStore.family.usersForReal" :key="index" :name="item.first_name == '' ? item.email : item.first_name" :icon="item.age >= 16 ? 'mdi mdi-human-cane' : 'mdi mdi-teddy-bear'" />
            </div>
        </ConfigBox>
        
        <ConfigBox :hasButton="false" :title="'Manage people'">
            <div class="box-manage">
            <BoxManage />
            </div>
        </ConfigBox>

        <ConfigBox :hasButton="false" :title="'Settings'">
            <div class="box-settings">
                <Settings @set="setAgeLimit = !setAgeLimit" :state="setAgeLimit" />
            </div>
        </ConfigBox>
    </div>
    </section>
</template>