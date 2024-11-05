const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SocialMedia = sequelize.define(
	"SocialMedia",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		media: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logo_url: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "socialmedias",
		timestamps: false,
	}
);

module.exports = SocialMedia;
