import axios from "axios";

export default {

    searchNPR: () => { 
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q&fq=section_name:('U.S.')ANDpub_date:('2019-10-27')&api-key=IQschr0iaVf4WILqtGPjlskBlwzXG2ho") 
    },
}