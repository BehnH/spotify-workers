import { getRecentTracks } from "../../utils/spotify.js";

const RecentTracks = async () => {
    // Fetch the most recent songs
    const req = await getRecentTracks();
    // Parse the response to JSON
    const { items } = await req.json();

    // Build the response
    const tracks = items.slice(0, 10).map(track => ({
        artist: track.track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.track.external_urls.spotify,
        title: track.track.name
    }));

    // Define the response headers
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=120, stale-while-revalidate=43200',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '86400',
    };

    // Return the response
    return new Response(JSON.stringify(tracks), {
        headers,
    });
};

export default RecentTracks;