import React from "react";
import styles from "./MiniProfile.module.scss";
import {Link} from "react-router-dom";

type ProfileProps = {
    name: string;
    balance: number;
    avatar: string;
}

export const MiniProfile: React.FC<ProfileProps> = ({name, balance, avatar}) => {
    return (
        <Link to={"/profile"}>
            <div className={styles.profile}>
                <div className={styles.info}>
                    <span>{name}</span>
                    <span className={styles.balance}>{balance} ₽</span>
                </div>
                <div className={styles.avatar}>
                    {avatar && <img src={avatar} alt="avatar"/>}
                </div>
            </div>
        </Link>
    )
}