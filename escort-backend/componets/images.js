const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../images/');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const path = multer({storage: storage}).single("demo_image")


var Images = {
    test: function(req, res){
        res.send("General kenobi");
    },
    upload: function(req, res){
        path(req, res, (err) =>{
            if (err) res.status(500).send("Fuck");
            res.send("Successful");
        });
    }
}

module.exports = Images; 