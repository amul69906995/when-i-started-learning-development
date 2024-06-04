//make connection in broswer or client/fontend side
const socket=io("http://localhost:3000/")
const message=document.querySelector('#message')
const output=document.querySelector('#output')
const handle=document.querySelector('#handle')
const send=document.querySelector('#send')
const feedback=document.querySelector('#feedback')

send.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})
message.addEventListener('keypress',()=>{
    socket.emit('typingmessage',{
        handle:handle.value
    }) 
})

socket.on('chat',(data)=>{
    feedback.innerHTML=''
    output.innerHTML += `<p><strong>${data.handle} </strong> : ${data.message}</p>`
})
socket.on('typingmessage',(data)=>{
    feedback.innerHTML ='<p><strong>'+data.handle+'<?strong>: is typing message ...'
})



