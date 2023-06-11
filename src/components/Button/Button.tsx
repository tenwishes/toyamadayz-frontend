import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    text: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
    const onClickHandler = () => {
        onClick && onClick();
    }

    return <button
        className={styles.button}
        onClick={onClickHandler}
    >
        {text.toUpperCase()}
    </button>
}