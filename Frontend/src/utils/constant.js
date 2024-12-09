export const TMDB_API = import.meta.env.VITE_TMDB_API_URL;
export const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TMDB_API_KEY,
    },
};
