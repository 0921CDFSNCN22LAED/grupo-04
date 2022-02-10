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
    usuario_id: {
      type: dataTypes.INTEGER,
    },
  },
  {
    tableName: 'karts',
    timestamps: false
  }
  );

  // Associations
  Kart.associate = function(models){
    Kart.belongsTo(models.Users, {
      as: 'kart',
      foreignKey: 'usuario_id'
    });

  Kart.belongsToMany(models.Cards, {
      as: 'products',
      through: 'product_kart',
      foreignKey: 'kart_id',
      otherKey: 'card_id',
      timestamps: false    
    });
  }

  return Kart;
}