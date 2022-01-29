module.exports = (sequelize, dataTypes) => {
  const ProductKart = sequelize.define('ProductKarts', 
  {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    kart_id: {
      type: dataTypes.INTEGER,
    },
    card_id: {
      type: dataTypes.INTEGER,
    },
  },
  {
    tableName: 'ProductKarts',
    timestamps: false
  }
  );

  // tabla intermedia con asociaciones tambien??
  // ProductKart.associate = function(models){
  //   ProductKart.hasMany(models.Karts, {
  //     as: 'karts',
  //     foreignKey: 'products_id'
  //   });

  //   ProductKart.hasMany(models.Cards, {
  //     as: 'cards',
  //     foreignKey: 'id'
  //   });
  // }

  return ProductKart;
}