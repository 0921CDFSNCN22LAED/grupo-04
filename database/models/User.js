module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('Users', 
  {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
    },
    user_name: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    avatar: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    role: {
      type: dataTypes.STRING,
    }
  },
  {
    tableName: 'Users',
    timestamps: false
  }
  );

  return User;
}