const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)





module.exports = { Restaurant, Menu }
