const express = require("express");
const URL = require("../models/url")

const router = express.Router();

router.get('/', async (req, resp) => {
    const allUrls = await URL.find({});
    return resp.render("Home", {
        urls: allUrls,
         });
})


module.exports = router;