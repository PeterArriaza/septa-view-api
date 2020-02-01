const express = require("express");
const app = express();
const cors = require("cors");
const Route = require("./models/route");
// const { CLIENT_ORIGIN } = require("./config");
const PORT = process.env.PORT || 8080;

app.use(
  cors()
  //   {
  //   origin: CLIENT_ORIGIN
  // })
);
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// cardUrl,
// this.state.start,
// this.state.end,
// this.state.nickname

// add new item to user pantry
app.post("/add-route", function(req, res) {
  //take the parameters from the fetch api call
  const nickname = req.body.nickname;
  const start = req.body.start;
  const end = req.body.end;
  const url = req.body.url;

  Route.create(
    {
      nickname,
      start,
      end,
      url
    },
    (err, route) => {
      if (err) {
        return res.status(500).json({
          message: "Internal Error Creating Pantry"
        });
      }
      if (route) {
        return res.status(200).json(route);
      }
    }
  );
});

app.get("/*", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = { app };
