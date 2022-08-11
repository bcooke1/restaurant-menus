const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create a Restaurant model

const Restaurant = db.define('restaurant',{
    name: {
        type: DataTypes.STRING
    },
    location: {
        type:DataTypes.STRING
    },
    cuisine: {
        type:DataTypes.STRING
    }
}
)

async function main(){
    await Restaurant.sync()

    await Restaurant.create({
        name: 'Mcdonalds',
        location: 'London',
        cuisine: 'American'
    })
}

//

module.exports = {Restaurant};