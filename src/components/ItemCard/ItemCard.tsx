import styles from "./ItemCard.module.scss";
import {CategoryTag} from "../";

type ItemCardPropsType = {
    id: number;
    name: string;
    price: number;
    image: string;
    categories: number[];
    discount: number;
}


export const ItemCard = ({name, price, image, categories, discount}: ItemCardPropsType) => {
    return (
        <div className={styles.card}>
            {discount ? <span className={styles.discount}>SALE {discount}%</span> : null}
            <img
                className={styles.image}
                src={image ? image : "https://via.placeholder.com/150"}
                alt={"item image"}
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
        </div>
    )
}