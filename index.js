const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const directoryCategoryRoutes = require("./routes/directoryCategoryRoutes");
const socialMediaRoutes = require("./routes/socialMediaRoutes");
const contactTypeRoutes = require("./routes/contactTypeRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => {
	console.log("Database synchronized.");
});

app.use("/categories", directoryCategoryRoutes);
app.use("/socialmedias", socialMediaRoutes);
app.use("/contacttypes", contactTypeRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
