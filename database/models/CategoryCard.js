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

  // Associations
  CategoryCard.associate = function(models){
    CategoryCard.belongsTo(models.Cards, {
      as: 'categories',
      foreignKey: 'id'
    });
  }

  return CategoryCard;
}