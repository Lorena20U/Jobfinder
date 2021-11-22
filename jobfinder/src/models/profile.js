const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')
const bcrypt = require('bcryptjs')

// Create class
class Profile extends Model {
}

Profile.init({
  // Model attributes are defined here
  resumen: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('resumen is mandatory');
        }
      }
    }
  },
  educacion: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('Educacion is mandatory');
        }
      }
    }
  },
  experiencia1: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('experiencia1 is mandatory');
        }
      }
    }
  },
  experiencia2: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('experiencia2 is mandatory');
        }
      }
    }
  },
  experiencia3: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('experiencia3 is mandatory');
        }
      }
    }
  },
  habilidades1: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('habilidades1 is mandatory');
        }
      }
    }
  },
  habilidades2: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('habilidades2 is mandatory');
        }
      }
    }
  },habilidades3: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('habilidades3 is mandatory');
        }
      }
    }
  },
  otroh1: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('otroh1 is mandatory');
        }
      }
    }
  },
  otroh2: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('otroh2 is mandatory');
        }
      }
    }
  },
  otroh3: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('otroh3 is mandatory');
        }
      }
    }
  },
  referencia1: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('referencia1 is mandatory');
        }
      }
    }
  },
  referencia2: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('referencia2 is mandatory');
        }
      }
    }
  },
  referencia3: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('referencia3 is mandatory');
        }
      }
    }
  },


}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Profile' // We need to choose the model name
});

//Export model for using in other files
module.exports = Profile