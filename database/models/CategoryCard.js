module.exports = (sequelize, dataTypes) => {
  const CategoryCard = sequelize.define('CategoryCards', 
  {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
    },
  },
  {
    tableName: 'CategoryCards',
    timestamps: false
  }
  );

  return CategoryCard;
}