const cheerio = require("cheerio")

module.exports = {
    npr: function(res) {
        let nprArray = [];
            axios.get("https://www.nytimes.com") 
                .then( res => {
                let $ = cheerio.load(res.data);

                // Grabbing articles
                $("article").each(function(i, element) {

                    let results = {};

                    results.title = $(this).find(".title").text();

                    nprArray.push(results);
                })
                .catch((err) => {
                    if (err) throw `Error creating articles. \n ${err}`
                })
            })
        res.send(nprArray)
    }
}