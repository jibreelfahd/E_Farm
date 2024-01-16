function getCookie() {
   const cookieString = document.cookie.split('; ')[1]; // Get the second part after splitting
   if (cookieString) {
     const token = cookieString.split('=')[1];
     return token;
   }
   return null; // Return null if no valid cookie is found
}
const token = getCookie()

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
const userName = parseJwt(token)

const username = document.querySelector('.username');

username.textContent = `Hello ${userName.userName}`;