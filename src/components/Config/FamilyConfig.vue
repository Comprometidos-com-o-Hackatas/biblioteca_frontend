<script setup>
import { family, setAgeLimit } from '@/utils/config';
import ConfigBox from './ConfigBox.vue';
import BoxPeople from './BoxPeople.vue'
import BoxManage from './BoxManage.vue';
import Settings from './Settings.vue';
import { useFamilyStore } from '@/stores';
import { useUserBooks } from '@/stores/userbooks/userbooks';
import { onMounted, ref, computed } from 'vue';


const userBooks = useUserBooks()
const familyStore = useFamilyStore()

defineEmits([
    'popFamily'
])


onMounted(()=>{
    familyStore.getFamilies()
    userBooks.GetUserBooksToConfig()
    userBooks.GetUserBooks()
    console.log(familyStore.family.usersForReal)
})

async function selectUser(user) {
    await userBooks.GetUserBooks()
    await familyStore.getUserBooksFamily()
    familyStore.family.selectedUser = user
    console.log(familyStore.family.userBooks)
}
</script>
<template>
    <section class="section-family">
        <h1 class="title-config">{{ familyStore.family.family.length == '' ? 'Nome da Família' : familyStore.family.family[0].nome }}</h1>

       <div class="container-config-cards">
        <ConfigBox @popFamily="$emit('popFamily')" :hasButton="true" :title="'Pessoas da Família'" >
            <div class="box-people">
            
            <BoxPeople v-for="(item, index) in familyStore.family.usersForReal" :key="index" :name="item.first_name == '' ? item.email : item.first_name" :icon="item.age >= 16 ? 'mdi mdi-human-cane' : 'mdi mdi-teddy-bear'" @click="selectUser(item)" />
            
            </div>
        </ConfigBox>
        
        <ConfigBox :hasButton="false" :title="'Gerenciar Pessoa'">
            <div class="box-manage">
            <BoxManage />
            </div>
        </ConfigBox>
    </div>
    </section>
</template>