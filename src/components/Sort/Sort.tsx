import React from 'react'
import styles from './Sort.module.scss'

const filters = [
    {id: 1, name: "По новизне"},
    {id: 2, name: "По популярности"},
    {id: 3, name: "Цена: по возрастанию"},
    {id: 3, name: "Цена: по убыванию"},
]


export const Sort = () => {
    const [opened, setOpened] = React.useState<boolean>(false)
    const [currentFilter, setCurrentFilter] = React.useState<string>('По популярности')

    return (
        <div className={styles.dropDown} onClick={() => {
            setOpened(!opened)
        }}>
            <span className={styles.current}>{currentFilter}</span>
            {opened ? <ul className={styles.options}>
                {
                    filters.map(filter => {
                        return <li
                            onClick={() => {
                                setCurrentFilter(filter.name)
                            }}
                            key={filter.id}
                            className={`${styles.option} ${currentFilter === filter.name ? styles.active : null}`}>
                            {filter.name}
                        </li>
                    })
                }
            </ul> : null}
        </div>
    )
}