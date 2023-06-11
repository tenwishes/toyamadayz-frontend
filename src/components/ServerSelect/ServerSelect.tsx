import {RadioButton} from "../";
import styles from './ServerSelect.module.scss'
import {useServersStore} from "../../zustand/stores/serversStore.ts";

export const ServerSelect = () => {
    const servers = useServersStore(state => state.servers)
    const selectedServerId = useServersStore(state => state.selectedServerId)
    const setServer = useServersStore(state => state.setSelectedServerId)

    return (
        <>
            <div className={styles.select}>
                {servers.map((server, index) =>
                    <RadioButton
                        key={index}
                        text={server.name}
                        active={server.id === selectedServerId}
                        onClickSetActive={() => setServer(server.id)}
                    />
                )}
            </div>
        </>
    )
}