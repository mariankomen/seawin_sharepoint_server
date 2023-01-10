const fileService = require('../services/file.service');

module.exports = {
    getFile: (req, res) => {
        try{

            fileService.getFile(req,res).then(data => {
                console.log(data.data)
                res.status(200).json(data.data);
            })

        }catch(e){
            res.json(e.message);
        }
    },

    getFileBlob: (req, res) => {
        try{
            let responseWrapper = []
            req.body.forEach(item => {
                let {imageUrl, cookie} = item
                fileService.getFileBlob(imageUrl, cookie).then(resp => {
                    responseWrapper.push(resp)


                    res.status(200).json(responseWrapper);
                })
            })
        }catch(e){
            res.json(e.message);
        }

    }
}