import React from "react";
import {Button} from "../";
import styles from "./Categories.module.scss";

export type CategoriesType = {
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

export const Categories = () => {
    const [showMore, setShowMore] = React.useState<boolean>(false)
    const [activeCategory, setActiveCategory] = React.useState<number>(1)

    return <div className={""}>
        <div>
            {showMore ?
                <div className={styles.categories}>
                    {categories.map((category) =>
                        <Button
                            key={category.id}
                            title={category.name}
                            active={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                        />
                    )}
                    <span
                        className={styles.showButton}
                        onClick={() => setShowMore(false)}
                    >
                        Скрыть
                    </span>
                </div>
                :
                <div className={styles.categories}>
                    {categories.slice(0, 5).map((category) =>
                        <Button
                            key={category.id}
                            title={category.name}
                            active={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                        />)}
                    <span
                        className={styles.showButton}
                        onClick={() => setShowMore(true)}
                    >
                        Показать больше
                    </span>
                </div>
            }
        </div>
    </div>
}