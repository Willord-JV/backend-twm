const sequelize = require("../config/database");
const DirectoryCategory = require("./DirectoryCategory");
const DirectorySubcategory = require("./DirectorySubcategory");
const SocialMedia = require("./SocialMedia");
const ContactType = require("./ContactType");

DirectoryCategory.hasMany(DirectorySubcategory, {
	foreignKey: "fk_categoryId",
});
DirectorySubcategory.belongsTo(DirectoryCategory, {
	foreignKey: "fk_categoryId",
});

module.exports = {
	sequelize,
	DirectoryCategory,
	DirectorySubcategory,
	SocialMedia,
	ContactType,
};
