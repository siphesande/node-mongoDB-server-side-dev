// grab the things we need
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Verify = require('./verify');
var Promotions = require('../models/promotions');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
//will update all the routes in the REST API to ensure that ordinary users are restricted only to perform GET operations.
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Promotions.find({}, function (error, promo) {
        if (error) throw error;
        res.json(promo);
    });
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
    Promotions.create(req.body, function (error, promo) {
        if (error) throw error;
        console.log('Promo created!');
        var id = promo._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the promo with id: ' + id);
    });
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
    Promotions.remove({}, function (error, resp) {
        if (error) throw error;
        res.json(resp);
    });
});

promoRouter.route('/:promoId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Promotions.findById(req.params.promoId, function (error, promo) {
        if (error) throw error;
        res.json(promo);
    });
})

.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
    Promotions.findByIdAndUpdate(req.params.promoId, {
        $set: req.body
    }, {
        new: true
    }, function (error, promo) {
        if (error) throw error;
        res.json(promo);
    });
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
    Promotions.findByIdAndRemove(req.params.promoId, function (error, resp) {        
        if (error) throw error;
        res.json(resp);
    });
});

module.exports = promoRouter;