import {Categories, ItemCard, PageTitle, Sort} from "../../components";
import styles from "./Shop.module.scss";

type ItemsType = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    categories: number[];
    discount: number;
}

const items: ItemsType[] = [
    {
        id: 1,
        name: "Спортивный костюм КАPPA",
        description: "",
        price: 3200,
        image: '/img/kappa.png',
        categories: [2, 4],
        discount: 10
    },
    {
        id: 2,
        name: "Футболка Пивозавр",
        description: "",
        price: 3500,
        image: '/img/pivozavr.png',
        categories: [16, 4],
        discount: 0
    },
    {
        id: 3,
        name: "Mercedes-Benz V 250",
        description: "Новая модель сразу привлекает взгляды выразительным и уникальным дизайном кузова и может использоваться как для деловых, так и для семейных поездок. Функциональный и универсальный, а езда доставит несравненное удовольствие.",
        price: 9500,
        image: '/img/V250.png',
        categories: [3],
        discount: 5
    },
    {
        id: 4,
        name: "Спортивный костюм КАPPA",
        description: "",
        price: 3200,
        image: '/img/kappa.png',
        categories: [2, 4],
        discount: 10
    },
    {
        id: 5,
        name: "Футболка Пивозавр",
        description: "",
        price: 3500,
        image: '/img/pivozavr.png',
        categories: [16, 4],
        discount: 0
    },
    {
        id: 6,
        name: "Mercedes-Benz V 250",
        description: "",
        price: 9500,
        image: '/img/V250.png',
        categories: [3],
        discount: 5

    },
    {
        id: 7,
        name: "Спортивный костюм КАPPA",
        description: "",
        price: 3200,
        image: '/img/kappa.png',
        categories: [2, 4],
        discount: 10
    }
]

export const Shop = () => {
    return (
        <div>
            <PageTitle title={"магазин"}/>
            <Categories />
            <Sort />
            <div className={styles.itemsContainer}>
                {items.map((item) => <ItemCard key={item.id} {...item}/>)}
            </div>
        </div>
    )
}