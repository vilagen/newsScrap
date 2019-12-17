module.exports = (app) => {
// Matches with "api/currentnews"
app.get('/search-location-weather', (req, res) => {
  // build api URL with user zip
    const baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
    const apiId = 'c483ecd385a74ddbabd645b0c64c548b';

    const userLocation = ( url1, url2) => {
      let newUrl = url1 + url2;
      return newUrl;
    };

    const apiUrl = userLocation(baseUrl, apiId);

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({data});
    })
    .catch(err => {
      res.redirect('/error');
    });
  });
};