# 🔧 Spotify Workers

[Cloudflare Workers](https://workers.cloudflare.com)-based API for fetching Spotify account Data, such as the current song, 10 most recent songs and top 10 songs.

## Deploying to Workers

### Pre-requisties

- Install and configure [Wrangler/Workers CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update/)
- Install [Node.JS](https://nodejs.org/en/) and NPM
- Create an app on [Spotify Developers](https://developer.spotify.com/)
  - Get your Refresh Token by following the [Spotify Auth Guide](spotifyauth.md)

### Setup & Installation
1. Copy the [`wranger.toml.example`](wrangler.toml.example) file to `wrangler.toml`
2. Enter your Cloudflare Account ID into the `account_id` field in your `wrangler.toml` file
3. Add the secrets `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` by running
   ```
   $ wrangler secret put SECRET_NAME
   ```
4. Publish the worker to Cloudflare
   ```
   $ wrangler publish
   ```