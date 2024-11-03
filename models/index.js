const sequelize = require("../config/database");
const DirectoryCategory = require("./DirectoryCategory");
const DirectorySubcategory = require("./DirectorySubcategory");

DirectoryCategory.hasMany(DirectorySubcategory, {
	foreignKey: "fk_categoryId",
});
DirectorySubcategory.belongsTo(DirectoryCategory, {
	foreignKey: "fk_categoryId",
});

module.exports = { sequelize, DirectoryCategory, DirectorySubcategory };
