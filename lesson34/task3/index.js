const baseUrl = 'https://658d94da7c48dce9473970f5.mockapi.io/api/v1/create';

const form = document.querySelector('.login-form');
const registerButton = document.querySelector('.submit-button');


form.addEventListener('input', function () {
   registerButton.disabled = !form.reportValidity();
});


form.addEventListener('submit', (e) => {
   e.preventDefault();

   const email = document.getElementById('email').value;
   const name = document.getElementsByName('name')[0].value;
   const password = document.getElementsByName('password')[0].value;


   const userData = {
      email,
      name,
      password,
   };
   sendDataToServer(userData)
})


const sendDataToServer = (userData) => {
   return fetch(baseUrl, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(data => {
         alert(JSON.stringify(data));
         form.reset()
      })

      .catch(error => {
         console.log('Error:', error);
      })
}