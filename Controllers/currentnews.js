const axios = require("axios");

// module.exports = {
//   npr: function(res) {
//     let results = {};
//     axios.get("https://www.nytimes.com") 
//       .then( res => {
//       let $ = cheerio.load(res.data);

//       // Grabbing articles
//       $("article").each(function(i, element) {
//           results.title = $(this).find(".title").text();
//           nprArray.push(results);
//       })
//       .catch((err) => {
//           if (err) throw `Error creating articles. \n ${err}`
//       })
//     })
//     res.send(nprArray)
//   }
// }

module.exports = {
  current: () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=secret`);
  }
};