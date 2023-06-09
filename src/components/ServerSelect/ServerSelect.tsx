import {Button} from "../";
import styles from './ServerSelect.module.scss'
const servers = ['TOYAMA MAIN #1', 'TOYAMA DEATHMATCH']

export const ServerSelect = () => {
    return (
        <>
            <div className={styles.select}>
                {servers.map((server, index) => <Button title={server} key={index}/>)}
            </div>
        </>
    )
}