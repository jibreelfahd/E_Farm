const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');
const error = document.querySelector('.error');
const input = document.querySelector('form');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async (e) => {
   e.preventDefault();
   try {
   const email = input.email.value;
   const password = input.password.value;

   emailError.textContent = ''
   passwordError.textContent = ''

   const res = await fetch('https://e-gona-mu0h.onrender.com/e-gona/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
   });

   const { error, user, token } = await res.json();

   if(error){
      emailError.textContent = "Incorrect Password";
      passwordError.textContent = error.password
   }

   if(user) {
      document.cookie = `userToken=${token}; expires= 2h; path=/`;
      window.location.href = 'index.html'
   }
   
   } catch (err) {
      error.textContent = 'Sorry, we are unable to get this resource. Try Again Later!!'
      console.log(err);
   }
});