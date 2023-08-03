const express = require("express")
const router = express.Router()
const urlShortner = require("../controllers/createUrl")
const redirect = require("../controllers/redirect")

router.route("/api/shorturl").post(urlShortner)
router.route("/api/shorturl/:short_url").get(redirect)

module.exports = router