import axios from "axios";

export default {

    newsSearch: () => { 
        return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c483ecd385a74ddbabd645b0c64c548b") 
    },

    // newsSearch: () => { 
    //     return fetch("/api/currentnews");
    // },
}