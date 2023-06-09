import {PageTitle, ServerSelect, StatsTable} from "../../components";

const players = [
    {
        player: "chsv.alaska",
        kills: 2367,
        deaths: 1222,
        playTime: 12
    },
    {
        player: "chsv.john",
        kills: 2325,
        deaths: 1755,
        playTime: 123
    },
    {
        player: "chsv.laurence",
        kills: 156,
        deaths: 215,
        playTime: 1634
    },
    {
        player: "chsv.alexellasdhgdhfdgjfgfjdsfeg",
        kills: 765,
        deaths: 123,
        playTime: 2376
    },
    {
        player: "chsv.flaskaaaaaaaaaaaa - 20",
        kills: 1515,
        deaths: 5114,
        playTime: 115
    },
    {
        player: "outlaw.qq",
        kills: 475,
        deaths: 322,
        playTime: 70
    }
]

export const Leaderboard = () => {
    return (
        <>
            <PageTitle title={"ТАБЛИЦЫ ЛИДЕРОВ"}/>
            <ServerSelect/>
            <StatsTable stats={players}/>
        </>
    )
}