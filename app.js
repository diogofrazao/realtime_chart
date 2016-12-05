var mongo = require("mongodb");
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');


app.listen(3000);
var mongodbUri = ""

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

mongo.MongoClient.connect (mongodbUri, function (err, db) {
  db.collection('charts', function(err, collection) {
    io.on('connection', function (socket) {
      date = parseInt(socket.handshake.query['date']);
      var cursor = collection.find({text: { $lt: date }}, {tailable:true, awaitdata:true, numberOfRetries:-1});
      var cursorStream = cursor.stream();
      cursorStream.on('data', function(doc) {
        console.log(doc);
        if (doc.type != undefined && doc.type == 'message') {
          socket.emit("message", doc);
        }
      });
      socket.on('disconnect', function () {
        cursorStream.close();
        console.log("BYE");
      });
    });
  });
});
