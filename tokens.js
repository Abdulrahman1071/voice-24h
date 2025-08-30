// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1411434353363390625",
        serverId: "1273788500109557831",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
