import styles from "./CategoryTag.module.scss";

type CategoryTagPropsType = {
    id: number;
}

type CategoriesType = {
    id: number;
    name: string;
}

const categories: CategoriesType[] = [
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
]

export const CategoryTag = ({id}: CategoryTagPropsType) => {
    const findCategory = categories.find((category) => category.id === id)
    return <div className={styles.categoryTag}>
        <span>{findCategory && findCategory.name.toUpperCase()}</span>
    </div>
}