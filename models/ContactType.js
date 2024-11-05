const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContactType = sequelize.define(
	"ContactType",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		contactType: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "directory_contacttype",
		timestamps: false,
	}
);

module.exports = ContactType;
