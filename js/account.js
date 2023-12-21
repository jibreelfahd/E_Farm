function getCookie() {
   const cookieString = document.cookie.split('; ')[1]; // Get the second part after splitting
   if (cookieString) {
     const token = cookieString.split('=')[1];
     return token;
   }
   return null; // Return null if no valid cookie is found
}
const token = getCookie()
console.log(token)