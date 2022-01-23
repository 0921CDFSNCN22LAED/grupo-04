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

  return Kart;
}