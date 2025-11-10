const express = require("express");
const router = express.Router();
const axios = require("axios");

const clientID = "Ov23liwRWHWpRGasK05";
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = "http:localhost:8080/my-books";

router.get("/github", (req, res) => {
  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=user`;
  res.redirect(githubAuthURL);
});

router.get("/github/callback", async (req, res) => {
  const code = req.query.code;

  try {
    const token = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: clientID,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectURI,
      },
      { headers: { Accept: "application/json" } }
    );

    const accessToken = token.data.access_token;

    const user = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });

    const githubUser = user.data;
    req.session.user = githubUser;
    res.redirect("/my-books");
  } catch (err) {
    console.error("OAuth error:", err);
    res.status(500).send("Authentication failed.");
  }
});

module.exports = router;
