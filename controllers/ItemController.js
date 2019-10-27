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
    router.post(endpoint, upload.single('image'), function (req, res) {
        let image = req.file.path
        let data = req.body
        data.image = image

        let Item = new ItemModel(data)
        Item.save(function (err, docs) {
            res.status(200).json({success: true, item: docs})
        })
    });

    //delete an item using its id
    router.delete(`${endpoint}:id`, function (req, res) {
        ItemModel.findByIdAndRemove(req.params.id, (error, docs) => {
            res.status(200).json({success: true, docs})
        })
    });
};