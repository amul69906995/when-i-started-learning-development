const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const socket = require('socket.io')
//serve static file
app.use('/static/amulkumar', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// ejs engine 
app.set('view engine', 'ejs')//set the template engine
app.set('views', path.join(__dirname, 'views'))//set the views directory

//listening or starting the server
const server = app.listen(port, () => {
    console.log(`starting the server successfully on port ${port}`)
})
const io = socket(server)
io.on("connection", (socket) => {
    console.log("connection established", socket.id);
    socket.on('chat', (data) => {
        console.log(data.message);
        io.sockets.emit('chat', data);
    })
    socket.on('typingmessage',(data)=>{
        socket.broadcast.emit('typingmessage',data)
    })

});
