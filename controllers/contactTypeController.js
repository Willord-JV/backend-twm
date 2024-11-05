const { ContactType } = require("../models");

exports.getContactTypes = async (req, res) => {
	try {
		const contactTypes = await ContactType.findAll();
		res.json(contactTypes);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
