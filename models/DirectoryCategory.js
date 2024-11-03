const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DirectoryCategory = sequelize.define(
	"DirectoryCategory",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "directory_categories",
		timestamps: false,
	}
);

module.exports = DirectoryCategory;
