import {create} from 'zustand'

export type Player = {
    id: number,
    name: string
    kills: number
    deaths: number
    time: number
}

export type Server = {
    id: number,
    name: string,
    ip: string,
    port: number,
    maxPlayers: number,
    players: Player[]
}

interface ServersState {
    servers: Server[]
    selectedServerId: number
    setSelectedServerId: (id: number) => void
}

export const useServersStore = create<ServersState>()((set) => ({
    selectedServerId: 1,
    servers: [
        {
            id: 1,
            name: "TOYAMA MAIN",
            ip: "187.991.1.1",
            port: 30120,
            currentPlayers: 16,
            maxPlayers: 80,
            players: [
                {
                    id: 1,
                    name: "qq.nofear",
                    kills: 1754,
                    deaths: 1200,
                    time: 1467
                },
                {
                    id: 2,
                    name: "chsv.nofear",
                    kills: 893,
                    deaths: 368,
                    time: 550
                },
                {
                    id: 3,
                    name: "raw.ganster",
                    kills: 596,
                    deaths: 235,
                    time: 757
                },
                {
                    id: 4,
                    name: "qq.Mc.Tommy",
                    kills: 367,
                    deaths: 78,
                    time: 235
                },
                {
                    id: 4,
                    name: "qq.s0sunok",
                    kills: 235,
                    deaths: 114,
                    time: 236
                },
                {
                    id: 5,
                    name: "negr_karapuz",
                    kills: 90,
                    deaths: 153,
                    time: 275
                },
                {
                    id: 6,
                    name: "ms.pisya Lisi4ki",
                    kills: 235,
                    deaths: 213,
                    time: 353
                },
                {
                    id: 7,
                    name: "qq.Nechiporenko",
                    kills: 894,
                    deaths: 567,
                    time: 1256
                },
                {
                    id: 8,
                    name: "raw.kiki",
                    kills: 125,
                    deaths: 87,
                    time: 54
                },
                {
                    id: 9,
                    name: "raw.fear///",
                    kills: 573,
                    deaths: 460,
                    time: 501
                },
                {
                    id: 10,
                    name: "tear$",
                    kills: 1125,
                    deaths: 578,
                    time: 759
                }
            ]
        },
        {
            id: 2,
            name: "TOYAMA MOD",
            ip: "187.991.1.1",
            port: 30120,
            currentPlayers: 32,
            maxPlayers: 100,
            players: [
                {
                    id: 1,
                    name: "[S.T.A.L.K.E.R]_Kotik",
                    kills: 68,
                    deaths: 5,
                    time: 645
                },
                {
                    id: 2,
                    name: "gogels84",
                    kills: 79,
                    deaths: 64,
                    time: 241
                },
                {
                    id: 3,
                    name: "fefa",
                    kills: 721,
                    deaths: 325,
                    time: 540
                },
                {
                    id: 4,
                    name: "gasgasgas",
                    kills: 189,
                    deaths: 145,
                    time: 451
                },
                {
                    id: 5,
                    name: "ebyr-terrarist",
                    kills: 155,
                    deaths: 118,
                    time: 151
                }
            ]
        }
    ],
    setSelectedServerId: (id) => {
        return (set(state => ({selectedServerId: state.selectedServerId = id})))
    }
}))