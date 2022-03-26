import { getNowPlaying } from "../../utils/spotify.js";

const NowPlaying = async () => {
    // Fetch the current playing song
    const req = await getNowPlaying();
    // Parse the response to JSON
    const res = await req.json();

    // Build the response
    const track = {
        artist: res.item.artists.map((_artist) => _artist.name).join(', '),
        songUrl: res.item.external_urls.spotify,
        title: res.item.name,
        album_artwork: res.item.album.images[0].url,
        playing: res.is_playing
    }

    // Define the response headers
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=120, stale-while-revalidate=43200',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '86400',
    };

    // Return the response
    return new Response(JSON.stringify(track), {
        headers,
    });
};

export default NowPlaying;