import { create } from 'zustand'

type Category = {
    id: number,
    name: string
}

interface CategoriesState {
    categories: Category[]
    loading: boolean
    error: string | null
    addNewCategory: (category: {id: number, name: string}) => void
}

export const useCategoriesStore = create<CategoriesState>()((set) => ({
    categories: [
        {id: 1, name: "все"},
        {id: 2, name: "сеты"},
        {id: 3, name: "автомобили"},
        {id: 4, name: "одежда"},
        {id: 5, name: "броня"},
        {id: 6, name: "обувь"},
        {id: 8, name: "шапки"},
        {id: 9, name: "шелема"},
        {id: 11, name: "перчатки"},
        {id: 16, name: "футболки"},
        {id: 12, name: "маски"},
        {id: 10, name: "приорететный вход"},
        {id: 13, name: "кастом"},
        {id: 14, name: "наборы"},
        {id: 15, name: "прочее"},
    ],
    loading: false,
    error: null,
    addNewCategory: (category) => {
        return (set(state => ({categories: state.categories = [...state.categories, category]}))
        )
    }
}))