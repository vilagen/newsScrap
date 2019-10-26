const cheerio = require("cheerio")

module.exports = {
    npr: function(res) {
        let $ = cheerio.load(res.data);

        // Grabbing articles
        $("article").each(function() {

            let results = {}

            results.title = $(this).find(".title").text()
        })
    }
}