# jwt-and-passport-auth
auth whith passpot and jwt node.js express 
database - mongoose (mongodb://127.0.0.1:27017/passport-jwt)

using postman and send request 

POST localhost:6000/signup 
body
x-www-form-urlencoded 

email - example@example.com
passwor - **********

answer - Sungup successful and User data



POST localhost:6000/login
body
x-www-form-urlencoded

email - example@example.com
passwor - **********

answer token and id, name user


GET localhost:6000/user/profile
Params

secret_tocken - .......................

answer unautorized or You made it to the secure route + user data + secret_tocken
