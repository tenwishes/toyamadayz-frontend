import styles from "./CategoryTag.module.scss";
import {useCategoriesStore} from "../../zustand/stores/categoriesStore.ts";

type CategoryTagProps = {
    id: number;
}

export const CategoryTag = ({id}: CategoryTagProps) => {
    const categories = useCategoriesStore(state => state.categories)
    const findCategory = categories.find((category) => category.id === id)
    return findCategory && <div className={styles.categoryTag}>
        <span>{ findCategory.name.toUpperCase()}</span>
    </div>
}