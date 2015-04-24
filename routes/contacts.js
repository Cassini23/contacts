/**
 * Created by nina on 4/22/15.
 */
var router = require('express').Router();

//path is mapped /contacts

//navigate to contactModel

var ContactModel = require('../models/contacts_model');

router.get('/:email',function(req, res){
    //console.log(res.body);
    ContactModel.findOne({email: req.params.email}, function(err, results){
        if(err) res.status(500).json(err);
        else res.status(200).json(results);
    }); //find all
});

/* For get All*/
router.get('/',function(req, res){
    console.log(req.params);
    ContactModel.find({}, function(err, results){
        if(err) res.status(500).json(err);
        else res.status(200).json(results);
    }); //find all
});

router.post('/',function(req, res){
    //print data to console
    console.log(req.body);
    new ContactModel(req.body).save(function(err, results){
        if(err) res.status(500).json(err);
        else {
            res.status(200).json(results);
            console.log(results)
        };

    });
});

/*
router.put('/',function(req, res){
    //put data, search based on field and update
    console.log('In put');
    var searchID = req.body['id'];
    //console.log(search);
    ContactModel.find({_id: searchID}, function(err, results){
        if(err) res.status(500).json(err);
        else res.status(200).json(results);
    });

});
*/

router.route('/:id').put( function( req, res){
    ContactModel.findOne({ _id: req.params.id }, function(err, results) {
        if(err) res.status(500).json(err);

        for (prop in req.body) {
            results[prop] = req.body[prop];
        }

        // save the movie
        results.save(function(err) {
            if(err) res.status(500).json(err);
            else res.status(200).json(results);
        });
    });
});

router.delete('/:id',function(req, res){
    //pass the id and delete, collect id from front end and delete from db

    console.log('In router delete');
    console.log(req.params.id);
    ContactModel.remove({ _id : req.params.id},function(err,results){
        if(err) res.status(500).json(err);
        else res.status(200).json(results);
    });
});
/*
router.route('/:id').delete(function(req, res) {
    ContactModel.remove({
        _id: req.params.id
    }, function(err, results) {
        if (err) {
            return res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
});
*/
module.exports = router; //make the router available to all to import
