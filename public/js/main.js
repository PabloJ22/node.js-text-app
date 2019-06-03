const numberInput = document.getElementById('number'),
      textInput = document.getElementById('msg'),
      buton = document.getElementById('button'),
      response = document.querySelector('.response');

      
      send = () => {
        const number = numberInput.value.replace(/\D/g, '');
        const text = textInput.value;
        
        fetch('/', {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body:JSON.stringify({number:number, text: text})
        })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err)
  });
  }

  button.addEventListener('click', send, false);

const socket = io();
socket.on('smsStatus', (data) => {
  response.innerHTML = '<h5>Text message sent to ' + data.number + '</h5>';
})