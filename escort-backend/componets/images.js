const multer = require('multer');
const path = multer({dest: '../images/'})

var Images = {
    test: function(req, res){
        res.send("General kenobi");
    },
    upload: path.single('image'), function(req, res, next) {
        req.file['image'];
        res.send('sucess');
    }
}

module.exports = Images; 