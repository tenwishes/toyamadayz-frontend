import {Header, Footer} from "../components/";
import {Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";

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