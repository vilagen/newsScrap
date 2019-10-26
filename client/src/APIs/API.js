import axios from "axios";
import cheerio from "cheerio";

export default {

    searchNPR: () => {
        return axios.get("http://npr.org")
    }
}