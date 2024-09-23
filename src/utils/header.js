import {ref} from 'vue'

export const dataHeader = ref([
    {id: 0, icon: 'mdi-home', link: '/home/', isActive: false},
    {id: 1, icon: 'mdi-magnify', link: '/search/', isActive: false},
    {id: 2, icon: 'mdi-bookmark-outline', link: '/saved-books/', isActive: false},
    {id: 3, icon: 'mdi-book-alert', link: '/booked/', isActive: false},
    {id: 4, icon: 'mdi-cog', link: '/config/', isActive: false},
])