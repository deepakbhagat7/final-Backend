middlewares[instagram]------------[req, res]------
              |                                   |
              |                                   |
              |----check if user is loggedIn-------

              middlewares check the login in betwwen

[err,req,res,next]---err next also comes with req and res and this "next" is the used in middlewares 

mongoose-aggregate-paginate:- used for store history
(allows us to write aggreagation querries)

<!-- Read about bcrypt and bcryptjs -->
we are using bcrypt here (is will help you to hash your password)
jwt (json web token) used for password protection
JWT is a bearer token whosever request the key from jwt it gives to them


<!-- Access token vs refresh token -->
Acess token short lived
refresh token long lived

why access toekn?
Till you have access token you cn use the resource for example suppose you are login you can upload file till the time ypu are logged in.

Refres token
refresh token is same in database and clinet side...
suppose user logged out un expectidely..then with the help of refresh token user didn't have to login again.  refresh token can be used for login

Access Token - Short lived, not stored in db
Refresh Token - Long lived, stored in db
When access token expires, the frontend sends the refresh token to the backend to validate user (login), once again.



