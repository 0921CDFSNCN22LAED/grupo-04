module.exports = (sequelize, dataTypes) => {
  const Kart = sequelize.define('Karts', 
  {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    items: {
      type: dataTypes.INTEGER,
    },
    total: {
      type: dataTypes.DECIMAL,
    },
    products_id: {
      type: dataTypes.INTEGER,
    },
    usuario_id: {
      type: dataTypes.INTEGER,
    },
  },
  {
    tableName: 'Karts',
    timestamps: false
  }
  );

  // Associations
  Kart.associate = function(models){
    Kart.belongsTo(models.Users, {
      as: 'kart',
      foreignKey: 'id'
    });

    Kart.belongsToMany(models.Cards, {
      as: 'products',
      through: 'product_kart',
      foreignKey: 'card_id',
      otherKey: 'kart_id',
      timestamps: false    // va false ?? 
    });
  }

  return Kart;
}