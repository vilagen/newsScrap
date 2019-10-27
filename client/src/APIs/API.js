import axios from "axios";

export default {

    searchNPR: () => {
        return axios.get("/scrape")
    }
}