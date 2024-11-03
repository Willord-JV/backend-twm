const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize("twm_app", "root", "", {
	host: "localhost",
	port: 3307,
	dialect: "mysql",
});

// Test the connection
sequelize
	.authenticate()
	.then(() => console.log("Connected to the MySQL database."))
	.catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
