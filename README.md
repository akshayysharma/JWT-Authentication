# JWT-Authentication

Simple JWT(jsonwebtoken) Authentication using Node and Express

## Description

JsonWebToken : These token are used to protect routes in the API. We can add authenticaton to fetch the token, save that token(local storage, cookies etc) and then we can make request(GET/POST/PUT) with that token to access protected routes.

We are using mock user here hence we are not implementing passport.js

### Usage

- Clone this repository using "git clone https://github.com/akshayysharma/JWT-Authentication.git"
- Navigate into the folder and do : "npm install"
- Run using "node server"

### Create Initial Secret Key

Here I have used dummy secret key, but to improve the security you can also create your own. We can use the crypto library, which is present inside Node.

- Open the terminal and run node
- run "require('crypto').randomBytes(64).toString('hex')" . It means crypto is generating 64 digits random and convert them into string into hexadecimal.
