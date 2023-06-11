import React from "react";
import styles from "./ItemCard.module.scss";
import {CategoryTag} from "../";
import {ItemModal} from "../ItemModal/ItemModal.tsx";

type ItemCardPropsType = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    categories: number[];
    discount: number;
}

export const ItemCard = ({id, name, price, image, categories, discount, description}: ItemCardPropsType) => {
    const [modalOpened, setModalOpened] = React.useState<boolean>(false);

    return (
        <div className={styles.card} onClick={() => setModalOpened(true)}>
            {discount ? <span className={styles.discount}>SALE {discount}%</span> : null}
            <img
                className={styles.image}
                src={image}
                alt={""}
            />
            <div className={styles.categories}>
                {categories.map((category) => <CategoryTag key={category} id={category}/>)}
            </div>
            <span className={styles.name}>{name}</span>
            {discount ?
                <span className={styles.price}>
                    <span className={styles.oldPrice}>{price}₽</span> {price * ((100 - discount) / 100)}₽
                </span>
                :
                <span className={styles.price}>{price} ₽</span>
            }
            {modalOpened && <ItemModal
                id={id}
                name={name}
                description={description}
                price={price}
                image={image}
                categories={categories}
                discount={discount}
                onClickCloseModal={() => setModalOpened(false)}
                modalOpened={modalOpened}
            />}
        </div>
    )
}