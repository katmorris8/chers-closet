const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'chers_closet',
  dialect: 'postgres'
});

const User = sequelize.define('user', {
  firstName: Sequelize.TEXT,
  lastName: Sequelize.TEXT,
  username: {
    type: Sequelize.TEXT,
    unique: true
  },
  password: Sequelize.TEXT,
  emailAddress: Sequelize.TEXT
}
);

const Clothes = sequelize.define('clothes', {
clothesType: Sequelize.TEXT,
storePurchased: Sequelize.TEXT,
imageUrl: Sequelize.TEXT,
userId: Sequelize.INTEGER
})

User.hasMany(Clothes, {onDelete: 'cascade'});
Clothes.belongsTo(User);

module.exports = {
  User: User,
  Clothes: Clothes,
  sequelize: sequelize
};
