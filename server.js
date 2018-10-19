const express = require('express');
const { User, Clothes } = require('./models');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5678;

const app = express();

app.use(bodyParser.json());
const path = require('path');
app.use("/", express.static("./build/"));
app.use('/images/', express.static(__dirname + '/images'));

const jwtSecret = 'shhh09431722';

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
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
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}