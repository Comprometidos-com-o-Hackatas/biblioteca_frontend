import {ref} from 'vue'

const widthScreen = window.innerWidth

export const cards = 8

export const booksList = ref([
  {mostRead: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Mais Lidos'},
  {popular: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Mais Populares'},
  {launched: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Lançamentos'},
  {romance: [], right: 0, sizeShow: (cards - ((widthScreen*0.85) / 220))*220, title: 'Recomendações Para Você'}
])

export function goDirection(index, direction, data) {
    if (direction == 'r') {
      data[index].right += 140
    } else if (direction == 'l') {
      data[index].right -= 140
    }
    console.log(data[index].right)
  }