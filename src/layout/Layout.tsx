import {Header} from "../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";
import {Footer} from "../components/Footer/Footer.tsx";

export const Layout = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}