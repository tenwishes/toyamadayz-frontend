import styles from "./RadioButton.module.scss"

type RadionButtonProps = {
    text: string;
    onClickSetActive: () => void;
    active: boolean;
}

export const RadioButton: React.FC<RadionButtonProps> = ({text, onClickSetActive, active}) => {
    const onClickHandler = () => {
        onClickSetActive && onClickSetActive();
    }

    return <button
        className={`${styles.button} ${active ? styles.active : null}`}
        onClick={onClickHandler}
    >
        {text.toUpperCase()}
    </button>

}