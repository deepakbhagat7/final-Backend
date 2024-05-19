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