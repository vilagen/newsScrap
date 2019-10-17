const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require("./Routes/routes");
const path = require("path");
const PORT = process.env.PORT || 3090;
const app = express();
const db = require("./models")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// App Setup
app.use(morgan('combined')); 
app.use(bodyParser.json({ type: `*/*` }))
router(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const syncOptions = { force: false };

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`==> 🌎  API server now on http://localhost:${PORT}`);
  });
});