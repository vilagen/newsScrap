
const axios = require("axios");

module.exports = {
  current: function(req, res){
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c483ecd385a74ddbabd645b0c64c548b`)
    // .then(data => res.json(data))
    .then(data => { 
      console.log(data)
      res.json(data.data.articles)
    })
    .catch(err => res.status(422).json(err));
  }
};