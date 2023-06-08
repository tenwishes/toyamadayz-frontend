import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
    active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({title, onClick, className, active}) => {
    const onClickHandler = () => {
        onClick && onClick();
    }

    return <button
        className={`${className ? styles[className] : styles.button} ${active ? styles.active : null}`}
        onClick={onClickHandler}
    >
        {title.toUpperCase()}
    </button>
}