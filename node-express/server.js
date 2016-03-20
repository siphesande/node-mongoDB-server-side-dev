// var express = require('express');

// var morgan = require('morgan');
// var dishRouter = require('./dishRouter');
// var promoRouter = require('./promoRouter');
// var leaderRouter = require('./leaderRouter');

// var hostname = 'localhost';

// var port = 3000;

// var app = express();

// app.use(morgan('dev'));

// app.use('/dishes',dishRouter);
// app.use('/promotions',promoRouter);
// app.use('/leadership',leaderRouter);

// app.use(express.static(__dirname + '/public'));

// //The app starts a server and listens on port 3000 for connections.
// app.listen(port, hostname, function(){

//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));



var dR = require('./dishRouter');
var dishRouter;

dR(express,function(err,dishRouterObj) {
        if (err) {
	    console.log(err);
	}
	else {
	    dishRouter=dishRouterObj.getdishRouter();
	}
    });

var pR = require('./promoRouter');
var promoRouter;

pR(express,function(err,promoRouterObj) {
        if (err) {
	    console.log(err);
	}
	else {
	    promoRouter=promoRouterObj.getpromoRouter();
	}
    });


var lR = require('./leaderRouter');
var leaderRouter;

lR(express,function(err,leaderRouterObj) {
        if (err) {
	    console.log(err);
	}
	else {
	    leaderRouter=leaderRouterObj.getleaderRouter();
	}
    });



app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});