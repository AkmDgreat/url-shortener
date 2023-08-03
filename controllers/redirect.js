const urlModel = require("../models/urlModel")

const redirect = async (req, res) => {
    console.log(req.params)
    const url = await urlModel.findOne({ shortUrl: req.params.short_url })
    if (!url) {
        return res.status(404).json({
            msg: `No url exists with id ${req.params.short_url}`
        })
    }
    //res.status(200).redirect(url.originalUrl)
    res.status(200).json({
        url
    })
}

module.exports = redirect

/**WHAT NEEDS TO BE DONE? GOAL?
 * the user has passed the short_url number, right?
 * now, this number is related to a certain webpage, right?
 * u need ta redirect to this certain webpage
 */