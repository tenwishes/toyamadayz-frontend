import styles from './Sort.module.scss'
import {Dropdown} from "../";

const filters = [
    {id: 1, name: "По популярности"},
    {id: 2, name: "По новизне"},
    {id: 3, name: "Цена: по возрастанию"},
    {id: 4, name: "Цена: по убыванию"},
]


export const Sort = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Dropdown items={filters} />
            </div>
        </div>
    )
}