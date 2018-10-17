const { Clothes, User } = require('./models');

const main = async () => {
  const top1 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Everlane',
    imageUrl: '/images/top1',
  });
  const top2 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Everlane',
    imageUrl: '/images/top2',
  });
  const top3 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Everlane',
    imageUrl: '/images/top3',
  });
  const top4 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Madewell',
    imageUrl: '/images/top4',
  });
  const top5 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Madewell',
    imageUrl: '/images/top5',
  });

  const bottom1 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Madewell',
    imageUrl: '/images/bottom1',
  });
  const bottom2 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Madewell',
    imageUrl: '/images/bottom2',
  });
  const bottom3 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Everlane',
    imageUrl: '/images/bottom3',
  });
  const bottom4 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Everlane',
    imageUrl: '/images/bottom4',
  });
  const bottom5 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Madewell',
    imageUrl: '/images/bottom5',
  });

  const shoes1 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Vince',
    imageUrl: '/images/shoes1',
  });
  const shoes2 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Madewell',
    imageUrl: '/images/shoes2',
  });
  const shoes3 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Sam Edelman',
    imageUrl: '/images/shoes3',
  });
  const shoes4 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Rebecca Minkoff',
    imageUrl: '/images/shoes4',
  });

  const user = await User.create({
    firstName: 'User',
    lastName: 'Admin',
    username: 'admin',
    password: 'letmein',
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