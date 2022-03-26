# ❓ How to get your Spotify Credentials

## Prerequisites
For this, you will need the following:
- An App created within the [Spotify Developer Portal](https://developer.spotify.com/)
- Your `Client ID` and `Client Secret` from the Spotify Developer Portal

## Instructions

1. Replace the `CLIENT_ID_HERE` text in the link below with your apps `Client ID`

```
https://accounts.spotify.com/authorize?client_id=CLIENT_ID_HERE&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
```

2. Open the link in your browser - You will be redirected to a URL, make sure to copy this (Link example below)
```
http://localhost:3000/?code=AQBeA9SD7QbA9hUfv_TfmatYxT51CY87msMnOZmMbhf7ZaxfbvG7oKEsATOJBxDyFap0Aq6uftY0v4Hq1QSy3MgQBfAHhmrifty-62rfDRlFnd0AzXRBOMpoOSA6SNw_uTPp7AixAE5zosgiIIf7efhzf1QOJfLh1HUYi248z8jk1x2jjKG2YLvMyJuP0rjB5tP5UHjoFGBvKbULpchkF6yiJHnS
```

3. Copy the text after the `?code=` portion of the URI
4. Head over to [Base64 Decode](https://www.base64decode.org/) and paste the code portion copied above into the top text box
5. Take note of the encrypted Base64 value
6. Open up your terminal and run the below command, replacing `BASE64_HERE` with the Base64 value from step 5, and the `CODE_HERE` replaced with the code value from step 3
```
curl -L https://accounts.spotify.com \
-H "Authorization: Basic BASE64_HERE" \
-d grant_type=authorization_code \
-d code=CODE_HERE \
-d redirect_uri=http%3A%2F%2Flocalhost:3000
```
7. You will have some JSON returned, make sure you copy the `refresh_token` value - This should then be set as a secret as is set out in the [README](README.md)