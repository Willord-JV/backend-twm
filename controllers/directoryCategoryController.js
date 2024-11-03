const { DirectoryCategory, DirectorySubcategory } = require("../models");

exports.getCategories = async (req, res) => {
	try {
		const categories = await DirectoryCategory.findAll({
			include: DirectorySubcategory,
		});
		res.json(categories);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
