# Project Notes - Frontend React
For the front end I decided to use React due to the preferred requirements of the project. There are a few things that I would change if I were to redo this due to things that I learned along the way.

## Libraries used
For my project I used a few libraries I found on NPM, here is a list of some of the ones I used and why.

- `react-router-dom` - I decided to use this because I think single page applications are pretty cool, it wasn't necessary for the requirements, but I added a second page to display the top rated quotes just so that I could utilize this.

- `react-bootstrap` - I used the reat-bootstrap library, since I find this the easiest to add styling in React.

- `Axios` - I chose to use this over the included `fetch`, since it is something that I am familiar with, and it parses JSON automatically.

- `sfcookies` - This was a simple library that I found so that I could utilize cookies to restrict the user from voting multiple times.

- `React-Rating` - I found this library to provide the option to rate the quotes, it was pretty handy and easy to use.

## Components
### Pages
##### Home
Location `frontend/src/components/pages/Home.js`

This is the home page which contains a button and displays a random quote from the database, each click is a unique API call.

##### Quotes
Location: `frontend/src/components/pages/Quotes.js`

This page displays a random quote based on the size that is selected via the three provided buttons. You can rate each quote as the come, and multiple votes are prevented.

##### TopQuotes
Location: `frontend/src/components/pages/TopQuotes.js`


This page wasn't really necessary as far as the requirements were concerned, but I had a bit of fun doing this, and I wanted to be able to create a single page application.

On this page you can find the top 10 rated quotes and their ratings.

### Supporting Components
I created a few components to support the ones above, if I were to do this again I would definitely break down a few things that I ran into issues with towards the end of the project, such as creating a specific component for API calls, as I had to rewrite a bit and didn't have much time to restructure my code.

##### Navbar
Location: `frontend/src/components/Navbar.js`

This component explains it self, it simply holds the routes to the two pages, as well as an icon, I used the `react-bootstrap` library for building this out.

##### Cookies
Location: `frontend/src/components/actions/Cookies.js`

This isn't so much a react component, as it is a collection of functions for managing the cookies that were used to handle restrictions of rating the quotes.

I decided to go with cookies, as in most cases IP addresses are usually dynamically assigned, and if it was stored in the session a user could just refresh the page. This method was somewhat in the middle and it made it a bit easier for working through the project as I could just clear the cookies when I needed to rework through some things.

##### FetchButton
Location: `frontend/src/components/actions/FetchButton.js`

This component generates a loading button that can be used to retrieve the quotes by size from the backend, once again I would have modified this a bit and removed the API calls from the component and had them work independently to be reused elsewhere.

##### Rating
Location: `frontend/src/components/actions/Rating.js`

This component is used for rating the quotes, once the rating is submitted it passes this on to the backend, and also is responsible for verifying that the quote id is not found in the cookies.


## Conclusion

As I learned quite a few things while working on this, I would have made a few changes and rethought out the problem. There were quite a few times where I had to backtrack since I was isolating things to a specific use, instead of making them reusable. I would have also worked on a bit of the styling and created a more responsive page, since the formatting is kind of off if the page is re sized it has some issues and isn't quite readable.
