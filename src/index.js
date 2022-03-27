/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
import { Router } from 'itty-router';
import NowPlaying from './routes/spotify/nowplaying.js';
import RecentTracks from './routes/spotify/recenttracks.js';
import TopTracks from './routes/spotify/toptracks.js';

const router = Router();

const handleRequest = (request) => router.handle(request);

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

router
    .get('/spotify/nowplaying', NowPlaying)
    .get('/spotify/recent', RecentTracks)
    .get('/spotify/top', TopTracks)
    .get('*', () => new Response('Not Found', { status: 404 }));
