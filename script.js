const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
 container.classList.add('right-panel-active')
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
 });


 
       //  B R E A K 



 const form = document.getElementById('form-in');

 const paswordIn = document.getElementById('password-in');
 const emailIn = document.getElementById('email-in');

 const errorEl = document.getElementById('error-in');

 //get object from local store
 let objFrom = JSON.parse(localStorage.getItem('myStore'));

 form.addEventListener('submit', (e) => {
      e.preventDefault();
      if(objFrom[0].Password === paswordIn.value && objFrom[0].Email === emailIn.value){
        location.href = 'https://guramisvanidze.github.io/newWebPage/';
      }

      else{
        errorEl.innerText = "Password or Email is incorect";
      }
  
 });
    


//         B R E A K 


 const formUp = document.getElementById('form-up');

 const nameUp = document.getElementById('name-up');
 const emailUp = document.getElementById('email-up');
 const paswordUp = document.getElementById('password-up');
 const submitUp = document.getElementById('submit-up');

 const errorElUp = document.getElementById('error-up');


 formUp.addEventListener('submit', (x) => {

  x.preventDefault(); 
  
  let messages = [];

  if(paswordUp.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if(paswordUp.value.length >= 16) {
    messages.push('Password must be less than 16 characters');
  }

  if(paswordUp.value === 'password') {
    messages.push('Password can not be "password"');
  }
   
  if(messages.length > 0) {
    x.preventDefault();
    errorElUp.innerText = messages;
  }

  else{
      x.preventDefault();
      let colectArr = [];
      let message = {
            Name: nameUp.value,
            Email: emailUp.value,
            Password: paswordUp.value
          }
          colectArr.push(message);

        localStorage.setItem('myStore', JSON.stringify(colectArr));
        location.href = 'https://guramisvanidze.github.io/newWebPage/';
  }
 
});


//         B R E A K 
