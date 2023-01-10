const axios = require('axios')


module.exports = {
    getFile: (req, res) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            return response
        })
    },

    getFileBlob: (endpoint, cookie) => {
        // console.log(cookie)
        let config = {
            headers:{
                Cookie: cookie
            }
        }

        return axios.get(endpoint, config,{ responseType: 'arraybuffer' })
            .then(response => {
                let base64data = Buffer.from(response.data, 'binary').toString('base64')
                return base64data;
            }).catch(e => {
                return e.message;
            })
    }
}