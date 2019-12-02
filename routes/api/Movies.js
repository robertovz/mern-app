const express = require("express")
const multer  = require('multer')
const router = express.Router()
const Item = require("../../models/Movie")
const path = require("path")

router.get("/", (req, res) => {
    Item.findAll()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
        res.send("Error: " + err)
    })
})

router.get("/:id", (req, res) => {

    Item.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(item => {
        if (item) {
            res.json(item)
        } else {
            res.send('Item does not exist')
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/src/public/images/')
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

router.post("/", upload.single('file'), (req, res) => {
    const today = new Date();

    const itemData = {
        name : req.body.name,
        description : req.body.description,
        category : req.body.category,
        image : req.file.filename,
        created : today
    }

    if(!req.body.name) {
        res.status(400)
        res.json({
            error: "Error"
        })
    } else {
        Item.create(itemData)
        .then(() => {
            res.send("Item Added!")
        })
        .catch(err => {
            res.send("Error: "+ err)
        })
    }
})

router.put("/:id", upload.single('file'), (req, res) => {

    if(!req.body.name) {
        res.status(400)
        res.json({
            error: "Error"
        })
    } else {
        Item.update(
            { 
                name: req.body.name,
                description: req.body.description,
                category : req.body.category,
                image : req.file.filename,
            },
            { where: { id: req.params.id } }
        )
        .then(() => {
            res.send("Item Updated!")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

router.delete("/:id", (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.send("Item Deleted!")
    })
    .catch(err => {
        res.send("Error: " + err)
    })
})


module.exports = router