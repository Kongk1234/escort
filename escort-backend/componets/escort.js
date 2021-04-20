const db = require('../mysql');

let Escort = {
    test: function(req, res){
        res.send("General kenobi");
    },
    create: function(req, res){
        db.query("INSER INTO escort(Firstname, Lastname, ProfilePicUrl, Description, Gender) VALUES (?, ?, ?, ?, ?)", 
        [req.body.Firstname, req.body.Lastname, req.body.ProfilePicUrl, req.body.Desc, req.body.Gender], function(err, result) {
            if (err) res.send({Error: err});
            res.send({message: "Escort Create"});
        });
    },
    getall: function(req, res){
        db.query("SELECT * FROM escort", function(err, result){
            if (err) res.send({Error: err});
            res.send({message: result});
        });
    },
    getone: function(req, res){
        db.query("SELECT * FROM escort WHERE EscortID = ?",
        [req.query.id], function(err, result){
            if (err) res.send({Error: err});
            res.send({message: result});
        });
    },
    delete: function(req, res){
        db.query("DELETE FROM escort WHERE EscortID = ?",
        [req.body.Id], function(err, result){
            if (err) res.send({Error: err});
            res.send({message: result})
        })
    }
}

module.exports = Escort; 