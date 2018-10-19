const bcrypt = require('bcrypt');

const { Clothes, User } = require('./models');

const main = async () => {
  const top1 = await Clothes.create({
    clothesType: 'Top',
    storePurchased: 'Everlane',
    imageUrl: 'images/top1.jpg',
  });
  const top2 = await Clothes.create({
    clothesType: 'Top',
    storePurchased: 'Everlane',
    imageUrl: 'images/top2.jpg',
  });
  const top3 = await Clothes.create({
    clothesType: 'Top',
    storePurchased: 'Everlane',
    imageUrl: 'images/top3.jpg',
  });
  const top4 = await Clothes.create({
    clothesType: 'Top',
    storePurchased: 'Madewell',
    imageUrl: 'images/top4.jpg',
  });
  const top5 = await Clothes.create({
    clothesType: 'Top',
    storePurchased: 'Madewell',
    imageUrl: '/images/top5.jp2',
  });

  const bottom1 = await Clothes.create({
    clothesType: 'Bottom',
    storePurchased: 'Madewell',
    imageUrl: '/images/bottom1.jp2',
  });
  const bottom2 = await Clothes.create({
    clothesType: 'Bottom',
    storePurchased: 'Madewell',
    imageUrl: '/images/bottom2.jp2',
  });
  const bottom3 = await Clothes.create({
    clothesType: 'Bottom',
    storePurchased: 'Everlane',
    imageUrl: '/images/bottom3.jpg',
  });
  const bottom4 = await Clothes.create({
    clothesType: 'Bottom',
    storePurchased: 'Everlane',
    imageUrl: '/images/bottom4.jpg',
  });
  const bottom5 = await Clothes.create({
    clothesType: 'Bottom',
    storePurchased: 'Madewell',
    imageUrl: '/images/bottom5.jpg',
  });

  const shoes1 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Vince',
    imageUrl: '/images/shoes1.jpg',
  });
  const shoes2 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Madewell',
    imageUrl: '/images/shoes2.jpg',
  });
  const shoes3 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Sam Edelman',
    imageUrl: '/images/shoes3.jpg',
  });
  const shoes4 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Rebecca Minkoff',
    imageUrl: '/images/shoes4.jpg',
  });

  const user = await User.create({
    firstName: 'User',
    lastName: 'Admin',
    username: 'admin',
    passwordDigest: '$2a$12$COXYv/BxVAemDe5WI7nO0eDCasAHOpp7ucW6b0pFVhND8pU85IKXu',
    emailAddress: 'kathryn.leigh.morris@gmail.com'
  })

  await top1.setUser(user);
  await top2.setUser(user);
  await top3.setUser(user);
  await top4.setUser(user);
  await top5.setUser(user);

  await bottom1.setUser(user);
  await bottom2.setUser(user);
  await bottom3.setUser(user);
  await bottom4.setUser(user);
  await bottom5.setUser(user);

  await shoes1.setUser(user);
  await shoes2.setUser(user);
  await shoes3.setUser(user);
  await shoes4.setUser(user);

  process.exit();
}

main();