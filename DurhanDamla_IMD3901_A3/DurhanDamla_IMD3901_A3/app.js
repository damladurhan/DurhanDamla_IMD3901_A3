const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); //set root path of server ...
console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});

app.get( '/3D_user1', function( req, res ){ 
    res.sendFile( __dirname + '/public/3D_user1.html' );
});

app.get( '/3D_user2', function( req, res ){ 
    res.sendFile( __dirname + '/public/3D_user2.html' );
});

//socket.io / websocket stuff
io.on('connection', (socket) => {
    console.log(socket.id + 'is connected');

    socket.on('disconnect', () =>{
        console.log(socket.id + 'is disconnected');
    });

    //custom events

    // start button
    socket.on('startBtn', (data) => {
        io.sockets.emit('gameplay', {id:socket.id});
    });

    //RED EVENT
    socket.on('red', (data) =>{
         console.log('red events recieved');
         io.sockets.emit('color_change', {r:255, g:0, b:0});
    });

    socket.on('red_2', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_2', {r:255, g:0, b:0});
   });

   socket.on('red_3', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_3', {r:255, g:0, b:0});
    });

    socket.on('red_4', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_4', {r:255, g:0, b:0});
   });

   socket.on('red_5', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_5', {r:255, g:0, b:0});
    });
    socket.on('red_6', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_6', {r:255, g:0, b:0});
   });
   socket.on('red_7', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_7', {r:255, g:0, b:0});
    });
    socket.on('red_8', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_8', {r:255, g:0, b:0});
   });
   socket.on('red_9', (data) =>{
        console.log('red events recieved');
        io.sockets.emit('color_change_9', {r:255, g:0, b:0});
    });


   //BLUE EVENT
    socket.on('blue', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change', {r:0, g:0, b:255});
    });

    socket.on('blue_2', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_2', {r:0, g:0, b:255});
    });

    socket.on('blue_3', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_3', {r:0, g:0, b:255});
    });

    socket.on('blue_4', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_4', {r:0, g:0, b:255});
    });

    socket.on('blue_5', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_5', {r:0, g:0, b:255});
    });

    socket.on('blue_6', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_6', {r:0, g:0, b:255});
    });

    socket.on('blue_7', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_7', {r:0, g:0, b:255});
    });

    socket.on('blue_8', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_8', {r:0, g:0, b:255});
    });

    socket.on('blue_9', (data) =>{
        console.log('blue event recieved');
        io.sockets.emit('color_change_9', {r:0, g:0, b:255});
    });


    //delete functions
    socket.on('delete', (data) =>{
        console.log('delete event recieved');
        io.sockets.emit('visibility', {visible:false})
    });

    socket.on('delete1', (data) =>{
        console.log('delete1 event recieved');
        io.sockets.emit('visibility1', {visible1:false})
    });

    socket.emit('message', 'Welcome to the chat!');

    //listen for chat message
    socket.on('chatMessage', msg => {
        console.log('msg recieved');
        io.sockets.emit('message', msg);
    }); 

});