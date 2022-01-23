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

  return ProductKart;
}