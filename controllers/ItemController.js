const ItemModel = require('../models/Item');
const _ = require('lodash');
var multer = require('multer')
let endpoint = '/items/';
const upload = multer({
    dest: './uploads'
});

module.exports = function (router) {
    // Get all items
    router.get(endpoint, function (req, res) {
        ItemModel.find().exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({message: 'Error finding Items', error: err}))
    });

    // add new item
    router.post(endpoint, upload.array('images', 12), function (req, res) {
        let image = req.files.path
        console.log(image)

        let data = req.body
        data.image = image

        let Item = new ItemModel(data)
        Item.save(function (err, docs) {
            res.status(200).json(docs)
        })
    });

    //delete an item using its id
};