const clientId = SPOTIFY_CLIENT_ID;
const clientSecret = SPOTIFY_CLIENT_SECRET;
const refreshToken = SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const nowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing';
const topTracksEndpoint = 'https://api.spotify.com/v1/me/top/tracks';
const recentTracksEndpoint = 'https://api.spotify.com/v1/me/player/recently-played';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        })
    });

    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(nowPlayingEndpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    return fetch(topTracksEndpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
};

export const getRecentTracks = async () => {
    const { access_token } = await getAccessToken();

    return fetch(recentTracksEndpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
};