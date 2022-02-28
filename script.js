const sendBtn = document.querySelector('#sebdBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
send.Btn.addEventListener('click',sendMsg)
function sendMsg (){    
let content = messageIn.value;
//console.log(content);
if(content === '')
alert('Please Enter Valid Value.Curent Value Is Empty')
else{
    messageOut.innerHTML = content;
    messageIn.value ='';
    }
}
