import React from "react";
import styles from './Dropdown.module.scss'
import useOnClickOutside from "../../utils/useOnClickOutside.ts";

type DropdownItem = {
    id: number
    name: string
    onClick?: () => void
    onClickId?: (id: number) => void
}

type DropdownProps = {
    items: DropdownItem[]
}

export const Dropdown = ({items}: DropdownProps) => {
    const [opened, setOpened] = React.useState<boolean>(false)
    const [activeItem, setActiveItem] = React.useState<number>(0)
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(dropdownRef, () => setOpened(false));

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div
                className={`${styles.button} ${opened ? styles.active : null}`}
                onClick={() => setOpened(!opened)}
            >
                {items[activeItem].name}
                <span className={`${styles.icon} ${opened ? styles.active : null}`}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 6.5L13 1" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </span>
            </div>
            {opened ? <div className={styles.content}>
                {items.map((item, index) =>
                    <div
                        key={item.id}
                        className={`${styles.item} ${activeItem === index ? styles.active : null}`}
                        onClick={() => {
                            setActiveItem(index)
                            setOpened(false)
                            item.onClick && item.onClick()
                            item.onClickId && item.onClickId(item.id)
                        }}
                    >
                        {item.name}
                    </div>
                )}
            </div> : null}
        </div>
    )
}