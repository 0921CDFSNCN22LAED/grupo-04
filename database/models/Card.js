module.exports = (sequelize, dataTypes) => {
  const Card = sequelize.define('Cards', 
  {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.TEXT,
    },
    rating: {
      type: dataTypes.INTEGER,
    },
    image: {
      type: dataTypes.STRING,
    },
    create_data: {
      type: dataTypes.DATE,
    },
    price: {
      type: dataTypes.DECIMAL,
    }
  },
  {
    tableName: 'Cards',
  }
  );

  return Card;
}