import axios from 'axios';

const YoutubeApiKey = "";
const YoutubeApi = "https://www.googleapis.com/youtube/v3/playlistItems";
const YoutubePlaylist = "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF";

export default async function youtube(pageToken) {
    let resp = axios.get(YoutubeApi, {
        params: {
            key: YoutubeApiKey,
            part: 'snippet',
            playlistId: YoutubePlaylist,
            pageToken: pageToken
        }
    });
    return resp;
}; 
