//const urlRegex = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/
//module.exports = urlRegex
const isValidUrl = (url) => {
    try {
        new URL(url)
        return true
    } 
    catch (error) {
        return false
    }
}
module.exports = isValidUrl
