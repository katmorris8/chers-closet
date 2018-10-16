const { Clothes, User } = require('./models');

const main = async () => {
  const top1 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Everlane',
    imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.5,f_jpg,h_1200,q_85,w_1200/v1/i/b2c9c96f_61b2.jpg',
    userId: 1
  });
  const top2 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Everlane',
    imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.5,f_jpg,h_1200,q_85,w_1200/v1/i/0297c0f1_3eb2.jpg',
    userId: 1
  });
  const top3 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Everlane',
    imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.5,f_jpg,h_1200,q_85,w_1200/v1/i/23500576_2418.jpg',
    userId: 1
  });
  const top4 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Madewell',
    imageUrl: 'https://i.s-madewell.com/is/image/madewell/K1115_GY7104_ld?$MW%5F1007x1280$',
    userId: 1
  });
  const top5 = await Clothes.create({
    clothesType: 'Tops',
    storePurchased: 'Madewell',
    imageUrl: 'https://i.s-madewell.com/is/image/madewell/H6699_WT8315_ld?$MW%5F1007x1280$',
    userId: 1
  });

  const bottom1 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Madewell',
    imageUrl: 'https://i.s-madewell.com/is/image/madewell/J7938_DM2303_m?$MW%5F1007x1280$',
    userId: 1
  });
  const bottom2 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Madewell',
    imageUrl: 'https://i.s-madewell.com/is/image/madewell/J7914_DM2296_m?$MW%5F1007x1280$',
    userId: 1
  });
  const bottom3 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Everlane',
    imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.5,f_jpg,h_1200,q_85,w_1200/v1/i/dfa890bb_4786.jpg',
    userId: 1
  });
  const bottom4 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Everlane',
    imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.5,f_jpg,h_1200,q_85,w_1200/v1/i/ef8e80c5_4a3a.jpg',
    userId: 1
  });
  const bottom5 = await Clothes.create({
    clothesType: 'Bottoms',
    storePurchased: 'Madewell',
    imageUrl: 'https://i.s-madewell.com/is/image/madewell/J0863_PK5638_m?$MW%5F1007x1280$',
    userId: 1
  });

  const shoes1 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Vince',
    imageUrl: '',
    userId: 1
  });
  const shoes2 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Madewell',
    imageUrl: 'https://i.s-madewell.com/is/image/madewell/J8307_BK5229_ld?$MW%5F1007x1280$',
    userId: 1
  });
  const shoes3 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Sam Edelman',
    imageUrl: 'https://images.prod.meredith.com/product/261b6e9d94998d2b637ab71f803ef2a1/1532686251362/l/womens-sam-edelman-yaro-ankle-strap-sandal',
    userId: 1
  });
  const shoes4 = await Clothes.create({
    clothesType: 'Shoes',
    storePurchased: 'Rebecca Minkoff',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1754/9245/products/S18602488_MILENA__BLACK_FLORAL_PRINT_A_x1600.progressive.jpg?v=1515600446',
    userId: 1
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