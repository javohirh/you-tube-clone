import axios from "axios";
const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "aaec71a609msh2cf3be2e20f3b0ep11f4bejsna3de5a567779",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const getCaptionList = axios.create({
  baseURL: options.url + "/captions",
  headers: options.headers,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
});

export const getSuggestedVideos = axios.create({
  baseURL: options.url + "/search",
  headers: options.headers,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
});

export const search = axios.create({
  baseURL: options.url + "/search",
  headers: options.headers,
  params: {
    q: "music",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
});

export const videoComments = axios.create({
  baseURL: options.url + "/commentThreads",
  headers: options.headers,
  params: {
    part: "snippet",
    videoId: "7ghhRHRP6t4",
    maxResults: "100",
  },
});

export const commentInfo = axios.create({
  baseURL: options.url + "/comments",
  headers: options.headers,
  params: {
    part: "snippet",
    id: "UgzZ696zk0n_CBhYMK14AaABAg",
  },
});

export const videoDetails = axios.create({
  baseURL: options.url + "/videos",
  headers: options.headers,
  params: {
    part: "contentDetails,snippet,statistics",
    id: "7ghhRHRP6t4",
  },
});

export const channelDetails = axios.create({
  baseURL: options.url,
  headers: options.headers,
  params: {
    part: "snippet,statistics",
    id: "UCBVjMGOIkavEAhyqpxJ73Dw",
  },
});

export const channelVideos = axios.create({
  baseURL: options.url + "/search",
  headers: options.headers,
  params: {
    channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    part: "snippet,id",
    order: "date",
    maxResults: "50",
  },
});
export const playlistVideos = axios.create({
  baseURL: options.url + "/playlistItems",
  headers: options.headers,
  params: {
    playlistId: "RDZiQo7nAkQHU",
    part: "snippet",
    maxResults: "50",
  },
});

export const playlists = axios.create({
  baseURL: options.url + "/playlists",
  headers: options.headers,
  params: {
    id: "RDZiQo7nAkQHU",
    part: "snippet",
  },
});
