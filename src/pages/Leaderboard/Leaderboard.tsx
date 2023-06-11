import {PageTitle, ServerSelect, StatsTable} from "../../components";
import {useServersStore, Server} from "../../zustand/stores/serversStore.ts";

export const Leaderboard = () => {
    const servers = useServersStore(state => state.servers)
    const selectedServerId = useServersStore(state => state.selectedServerId)
    const players = servers.find((s: Server) => s.id === selectedServerId)?.players || []

    return (
        <>
            <PageTitle title={"ТАБЛИЦЫ ЛИДЕРОВ"}/>
            <ServerSelect />
            <StatsTable stats={players.sort((a, b) => b.kills - a.kills)}/>
        </>
    )
}