import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';

// Function verifies if cookies already exist and appends the array, or creates a new array
const writeCookie = (cookieName, value) => {
  if (read_cookie(cookieName).length > 0) {
    console.log(`Cookies: ${cookieName} found`);

    const cookieData = read_cookie(cookieName)
    cookieData.push(value)

    // Creates date object for cookies to expire in 3 months
    const date = new Date();
    const expireDate = date.setMonth(date.getMonth() + 3);

    bake_cookie(cookieName, cookieData, expireDate); // Adds quote id to cookies
  } else {
    console.log("Creating Cookies");
    bake_cookie(cookieName, [value]); // Adds new array to cookies
  };
};

// Retreives cookies
const getCookies = (cookieName) => read_cookie(cookieName);

// Deletes cookies, for testing
const deleteCookies = (cookieName) => {
  delete_cookie(cookieName)
  console.log("Delted cookie")
};

export default {deleteCookies, getCookies, writeCookie};
