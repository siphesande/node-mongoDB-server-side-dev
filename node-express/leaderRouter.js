// var express = require('express');
// var morgan = require('morgan');
// var bodyParser = require('body-parser');//Node.js body parsing middleware.

// var leadershipRouter = express.Router();

// leadershipRouter.use(bodyParser.json());

// leadershipRouter.route('/')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

// .get(function(req,res,next){
//         res.end('Will send all the leaders to you!');
// })

// .post(function(req, res, next){
//     res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);    
// })

// .delete(function(req, res, next){
//         res.end('Deleting all leaders');
// });

// leadershipRouter.route('/:leaderId')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })

// .get(function(req,res,next){
//         res.end('Will send leaders of the leader: ' + req.params.leaderId +' to you!');
        
// })

// .put(function(req, res, next){
//         res.write('Updating the leader: ' + req.params.leaderId + '\n');
//     res.end('Will update the leader: ' + req.body.name + 
//             ' with details: ' + req.body.description);
// })

// .delete(function(req, res, next){
//         res.end('Deleting leader: ' + req.params.leaderId);
// });


// module.exports = leadershipRouter
module.exports = function(express,callback) {
  try {
    if (0) {
        throw new Error("Error");
    }
    else
         callback(null, { 
             getleaderRouter : function () {
            var bodyParser = require('body-parser');
            
            var leaderRouter = express.Router();
             
            leaderRouter.use(bodyParser.json());

            leaderRouter.route('/')
            .all(function(req,res,next) {
                  res.writeHead(200, { 'Content-Type': 'text/plain' });
                  next();
            })

            .get(function(req,res,next){
                    res.end('Will send all the leaders to you!');
            })

            .post(function(req, res, next){
                res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);    
            })

            .delete(function(req, res, next){
                    res.end('Deleting all leaders');
            });

            leaderRouter.route('/:leaderId')
            .all(function(req,res,next) {
                  res.writeHead(200, { 'Content-Type': 'text/plain' });
                  next();
            })

            .get(function(req,res,next){
                    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
            })

            .put(function(req, res, next){
                    res.write('Updating the leader: ' + req.params.leaderId + '\n');
                res.end('Will update the leader: ' + req.body.name + 
                        ' with details: ' + req.body.description);
            })

            .delete(function(req, res, next){
                    res.end('Deleting leader: ' + req.params.leaderId);
            });             
            
            return leaderRouter; 
}
    });
  }
  catch (error) {
        callback(error,null);
  }
}


