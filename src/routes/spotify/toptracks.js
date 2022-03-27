import { getTopTracks } from '../../utils/spotify.js';

export const TopTracks = async () => {
    // Fetch the most recent songs
    const req = await getTopTracks();
    // Parse the response to JSON
    const { items } = await req.json();

    // Build the response
    const tracks = items.slice(0, 10).map((track) => ({
        artist: track?.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track?.external_urls?.spotify,
        title: track?.name,
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
    // eslint-disable-next-line no-undef
    return new Response(JSON.stringify(tracks), {
        headers,
    });
};

export default TopTracks;
