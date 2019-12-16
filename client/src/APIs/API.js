import axios from "axios";

export default {

    // newsSearch: () => { 
    //     return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=secret") 
    // },

    newsSearch: () => { 
        return axios.get("/api/currentnews") 
    },
}