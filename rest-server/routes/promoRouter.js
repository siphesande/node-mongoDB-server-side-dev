// var express = require('express');
// var bodyParser = require('body-parser');//Node.js body parsing middleware.

// var promotionRouter = express.Router();

// promotionRouter.use(bodyParser.json());


// promotionRouter.route('/')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

// .get(function(req,res,next){
//         res.end('Will send all the promotions to you!');
// })

// .post(function(req, res, next){
//     res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);    
// })

// .delete(function(req, res, next){
//         res.end('Deleting all promotions');
// });

// promotionRouter.route('/:promotionId')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

// .get(function(req,res,next){
//         res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
// })

// .put(function(req, res, next){
//         res.write('Updating the promotion: ' + req.params.promotionId + '\n');
//     res.end('Will update the promotion: ' + req.body.name + 
//             ' with details: ' + req.body.description);
// })

// .delete(function(req, res, next){
//         res.end('Deleting promotion: ' + req.params.promotionId);
// });

// module.exports = promotionRouter


module.exports = function(express,callback) {
  try {
    if (0) {
        throw new Error("Error");
    }
    else
         callback(null, { 
             getpromoRouter : function () {
            var bodyParser = require('body-parser');
            
            var promoRouter = express.Router();
             
            promoRouter.use(bodyParser.json());

            promoRouter.route('/')
            .all(function(req,res,next) {
                  res.writeHead(200, { 'Content-Type': 'text/plain' });
                  next();
            })

            .get(function(req,res,next){
                    res.end('Will send all the promos to you!');
            })

            .post(function(req, res, next){
                res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);    
            })

            .delete(function(req, res, next){
                    res.end('Deleting all promos');
            });

            promoRouter.route('/:promoId')
            .all(function(req,res,next) {
                  res.writeHead(200, { 'Content-Type': 'text/plain' });
                  next();
            })

            .get(function(req,res,next){
                    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
            })

            .put(function(req, res, next){
                    res.write('Updating the promo: ' + req.params.promohId + '\n');
                res.end('Will update the promo: ' + req.body.name + 
                        ' with details: ' + req.body.description);
            })

            .delete(function(req, res, next){
                    res.end('Deleting promo: ' + req.params.promoId);
            });             
            
            return promoRouter; 
}
    });
  }
  catch (error) {
        callback(error,null);
  }
}

