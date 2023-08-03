const { StatusCodes } = require("http-status-codes")
const validUrl = require("valid-url")
//const urlModel = require("../models/urlModel")
const urlRegex = require("../urlRegex")

const createUrl = async (req, res) => {
    
    try {
        //console.log(validUrl.isUri(req.body.original_url))
        if (!urlRegex(req.body.original_url)) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'invalid url' })
        }
    
        const num = Math.floor(Math.random() * 10000)
        
        const url = await urlModel.create({
            url: req.body.original_url, // name of properties inside this must be same as the name in urlModel
            shortUrl: num
        })
        res.status(StatusCodes.OK).json({ url })
    } 
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error })
    }
}

module.exports = createUrl