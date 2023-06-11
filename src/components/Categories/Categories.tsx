import React from "react";
import styles from "./Categories.module.scss";
import {RadioButton} from "../";
import {useCategoriesStore} from "../../zustand/stores/categoriesStore.ts";

export const Categories = () => {
    const categories = useCategoriesStore(state => state.categories)
    const [showMore, setShowMore] = React.useState<boolean>(false)
    const [activeCategory, setActiveCategory] = React.useState<number>(1)

    return <div className={""}>
        <div>
            {showMore ?
                <div className={styles.categories}>
                    {categories.map((category) =>
                        <RadioButton
                            key={category.id}
                            text={category.name}
                            active={category.id === activeCategory}
                            onClickSetActive={() => setActiveCategory(category.id)}
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
                        <RadioButton
                            key={category.id}
                            text={category.name}
                            active={category.id === activeCategory}
                            onClickSetActive={() => setActiveCategory(category.id)}
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