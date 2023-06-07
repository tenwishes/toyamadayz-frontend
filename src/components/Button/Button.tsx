import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    title?: string;
    onClick?: () => void;
    className?: string;
    isMenu?: boolean;
}

export const Button: React.FC<ButtonProps> = ({title, onClick, className, isMenu}) => {

    const onClickHandler = () => {
        onClick && onClick();
    }

    return <button
        className={className ? styles[className] : styles.button}
        onClick={onClickHandler}
    >
        {
            isMenu && <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.4167 12.8C18.2911 12.8 19 13.5164 19 14.4C19 15.2836 18.2911 16 17.4167 16C16.9409 16 2.05913 16 1.58333 16C0.708937 16 0 15.2836 0 14.4C0 13.5164 0.708937 12.8 1.58333 12.8C2.05913 12.8 16.9409 12.8 17.4167 12.8ZM17.4167 6.4C18.2911 6.4 19 7.1164 19 8C19 8.8836 18.2911 9.6 17.4167 9.6C16.9409 9.6 2.05913 9.6 1.58333 9.6C0.708937 9.6 0 8.8836 0 8C0 7.1164 0.708937 6.4 1.58333 6.4C2.05913 6.4 16.9409 6.4 17.4167 6.4ZM17.4167 0C18.2911 0 19 0.7164 19 1.6C19 2.4836 18.2911 3.2 17.4167 3.2C16.9409 3.2 2.05913 3.2 1.58333 3.2C0.708937 3.2 0 2.4836 0 1.6C0 0.7164 0.708937 0 1.58333 0C2.05913 0 16.9409 0 17.4167 0Z"
                    fill="currentColor"/>
            </svg>
        }
        {title && title}
    </button>
}