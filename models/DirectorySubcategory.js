const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DirectorySubcategory = sequelize.define(
	"DirectorySubcategory",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		subcategory: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		fk_categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "directory_subcategories",
		timestamps: false,
	}
);

module.exports = DirectorySubcategory;
