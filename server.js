const express = require('express');
const { User, Clothes } = require('./models');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5678;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use("/", express.static("./build/"));
app.use('/images/', express.static(__dirname + '/images'));

const jwtSecret = 'shhh09431722';

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.post('/api/register', async (request, response) => {
  const { firstName, lastName, email, username, password } = request.body;
  if (!firstName || !lastName || !email || !username || !password) {
    response.status(400).json({
      error: "Registration requires all fields to be filled out."
    });
    return;
  }

  const existingUser = await User.findOne({
    where: {
      username: username
    }
  });
  if (existingUser) {
    response.status(409).json({
      message: "That username is already taken."
    });
    return;
  }
  const passwordDigest = await bcrypt.hash(password, 12);

  const user = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    passwordDigest: passwordDigest
  });

  const token = jwt.sign({ userId: user.id }, jwtSecret);
  response.json({
    token: token
  });
});

app.post('/api/login', async (request, response) => {
  const { username, password } = request.body;
  console.log('check 1', username);
  
  if (!username || !password) {
    response.status(401).json({
      error: "Login requires a username and password."
    });
    return;
  }
  console.log('check 2');
  const existingUser = await User.findOne({
    where: {
      username: username
    }
  });

  console.log(existingUser, 'existinggggg');
  

  console.log('check 3');
  if (existingUser === null) {
    response.status(400).json({
      message: "Invalid username or password."
    });
    return;
  }


  console.log('check 4');

  const isPasswordCorrect = await bcrypt.compare(password, existingUser.passwordDigest);
  if (isPasswordCorrect) {
    const token = jwt.sign({ userId: existingUser.id }, jwtSecret);

    console.log('do something a;sfksldkasdkl;afskdjfal;daj');
    

    response.json({
      token: token
    });
  } else {
    response.status(401).json({
      message: "Invalid username or password."
    })
  }
});

app.post('/api/closet', async (request, response) => {
  const newClothes = {
    clothesType: request.body.clothesType,
    storePurchased: request.body.storePurchased,
    imageUrl: request.body.imageUrl
  };
  const clothes = await Clothes.create(newClothes);
  response.json(clothes);
});

app.get('/api/closet', async (request, response) => {
  const clothes = await Clothes.findAll({});
  response.json(clothes);
});

if (process.env.NODE_ENV == "production") {
  app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}