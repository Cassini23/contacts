/**
 * Created by nina on 4/22/15.
 */
var router = require('express').Router();

//path is mapped /contacts

//navigate to contactModel

var ContactModel = require('../models/contacts_model');

router.get('/',function(req, res){
    //console.log(res.body);
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
        else res.status(200).json(results);
    });
    //res.status(200).json({message : 'IMP_101'});
});


router.put('/',function(req, res){
    //put data, search based on field and update
    console.log('In put');
    var searchEmail = req.body['email'];
    //console.log(search);
    ContactModel.find({email: searchEmail}, function(err, results){
        if(err) res.status(500).json(err);
        else res.status(200).json(results);
    });

});

router.delete('/',function(req, res){
    //pass the id and delete, collect id from front end and delete from db
    console.log('IN delete');
    res.status(200).json({message : 'IMP_101'});
});

module.exports = router; //make the router available to all to import
