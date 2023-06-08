import React from "react";
import {Link, NavLink} from "react-router-dom";
import {MiniProfile} from "./MiniProfile/MiniProfile.tsx";
import {Button, MenuButton} from "../";
import styles from "./Header.module.scss";

export type LinkType = {
    title: string;
    href: string;
}

const links: LinkType[] = [
    {title: "главная", href: "/"},
    {title: "новости", href: "/news"},
    {title: "магазин", href: "/shop"},
    {title: "таблица лидеров", href: "/leaderboard"},
    {title: "killfeed", href: "/killfeed"}
]

export function Header() {
    const [opened, setOpened] = React.useState<boolean>(false);

    return (
        <header className={styles.header}>
            <MenuButton opened={opened} setOpened={setOpened}/>
            <Link to={"/"}>
                <h1 className={styles.logo}>富山市</h1>
            </Link>
            <nav className={`${styles.navigation} ${opened ? styles.active : ""}`}>
                {
                    links.map((link, index) =>
                        <NavLink
                            to={link.href}
                            key={index}
                            className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                            onClick={() => setOpened(false)}
                        >
                            {link.title.toUpperCase()}
                        </NavLink>
                    )
                }
            </nav>
            <div className={styles.profile}>
                {0 ? <MiniProfile name={"alaska"} balance={1000} avatar={""}/> : <Button title={"ВОЙТИ ЧЕРЕЗ STEAM"}/>}
            </div>
        </header>
    )
}