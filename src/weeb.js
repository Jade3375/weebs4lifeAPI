weebs = require('./weebpoints');
fetch = require('node-fetch');

class weeb {

    /**
     * @param {String} img endpoint to search
     * @returns {String} url of image
     */

    async sfw(img) {
        return fetch(`${weebs.base}${img}`)
        .then(res => res.json())
        .then(json =>  {
            if(json.url == undefined) throw Error(`[WEEBS4LIFE]: ${img} is not an endpint`)
            return json.url
        }) 
    }
}

module.exports = weeb