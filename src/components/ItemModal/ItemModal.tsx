import React from "react";
import styles from "./ItemModal.module.scss";
import {Dropdown, Button, CategoryTag} from "../";
import useOnClickOutside from "../../utils/useOnClickOutside.ts";

type ItemModalDataType = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categories: number[];
    discount: number;
    onClickCloseModal: () => void;
    modalOpened: boolean;
}

export const ItemModal = ({id, name, price, image, categories, discount, description, onClickCloseModal}: ItemModalDataType) => {
    const modalRef = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(modalRef, onClickCloseModal)

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.window} ref={modalRef}>
                    <span className={styles.close} onClick={() => {console.log("closed")}}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.812023 0L0 0.812023L4.18798 5L0 9.18798L0.812023 10L5 5.81202L9.18798 10L10 9.18798L5.81202 5L10 0.812023L9.18798 0L5 4.18798L0.812023 0Z" fill="currentColor"/>
                        </svg>
                    </span>
                    {discount ? <span className={styles.discount}>SALE {discount}%</span> : null}
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src={image ? image : "https://via.placeholder.com/150"}
                            alt={"item image"}
                        />
                    </div>
                    <div className={styles.info}>
                        <span className={styles.name}>{name}</span>
                        <div className={styles.categories}>
                            {categories.map((category) => <CategoryTag key={category} id={category}/>)}
                        </div>
                        {discount ?
                            <span className={styles.price}>
                            <span className={styles.oldPrice}>{price}₽
                        </span> {price * ((100 - discount) / 100)}₽</span>
                            :
                            <span className={styles.price}>{price} ₽</span>
                        }
                        <div className={styles.description}>
                            {description ? description : `Описание отсутствует. Товар номер ${id}`}
                        </div>
                        <div className={styles.menu}>
                            <Dropdown items={[{id: 1, name: "TOYAMA MAIN"}, {id: 2, name: "TOYAMA DEATHMATCH"}]}/>
                            <Dropdown items={[{id: 1, name: "Месяц"}, {id: 2, name: "Навсегда"}]}/>
                        </div>
                        <div className={styles.button}>
                            <Button text={`купить ${price}₽`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}