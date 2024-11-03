const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const directoryCategoryRoutes = require("./routes/directoryCategoryRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => {
	console.log("Database synchronized.");
});

app.use("/categories", directoryCategoryRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
