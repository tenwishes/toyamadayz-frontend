import styles from "./MenuButton.module.scss";

type MenuButtonProps = {
    opened?: boolean;
    setOpened?: (opened: boolean) => void;
}

export const MenuButton = ({opened, setOpened}: MenuButtonProps) => {
    return <button className={styles.menuButton} onClick={() => setOpened && setOpened(!opened)}>
        <div className={`${styles.icon} ${opened ? styles.active : ""}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
}