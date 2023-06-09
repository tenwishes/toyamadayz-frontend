import styles from "./StatsTable.module.scss";

type StatType = {
    player: string,
    kills: number,
    deaths: number,
    playTime: number
}

type TableProps = {
    stats: StatType[]
}


export const StatsTable = ({stats}: TableProps) => {
    const round = (number: number) => {
        return Math.round((number + Number.EPSILON) * 100) / 100
    }

    return (
        <div className={styles.table}>
            <div className={styles.head}>
                <div className={styles.rank}>
                    <span>РАНГ</span>
                </div>
                <div className={styles.player}>
                    <span>ИГРОК</span>
                </div>
                <div className={styles.kills}>
                    <span>УБИЙСТВА</span>
                </div>
                <div className={styles.deaths}>
                    <span>СМЕРТИ</span>
                </div>
                <div className={styles.adaptiveKd}>
                    <span>K/D</span>
                </div>
                <div className={styles.kd}>
                    <span>K/D</span>
                </div>
                <div className={styles.time}>
                    <span>ВРЕМЯ</span>
                </div>
            </div>
            <div className={styles.body}>
                {
                    stats.map((player, index) => {
                        return (
                            <div className={styles.row} key={index}>
                                <div className={styles.rank}>
                                    <span>{index + 1}</span>
                                </div>
                                <div className={styles.player}>
                                    <span>{player.player.length > 20 ? `${player.player.slice(0, 19)}..` : player.player}</span>
                                </div>
                                <div className={styles.kills}>
                                    <span>{player.kills}</span>
                                </div>
                                <div className={styles.deaths}>
                                    <span>{player.deaths}</span>
                                </div>
                                <div className={styles.adaptiveKd}>
                                    <span>{player.kills + "/" + player.deaths}</span>
                                </div>
                                <div className={styles.kd}>
                                    <span>{round(player.kills / player.deaths)}</span>
                                </div>
                                <div className={styles.time}>
                                    <span>{player.playTime}ч</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}