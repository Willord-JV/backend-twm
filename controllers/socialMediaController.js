const { SocialMedia } = require("../models");

exports.getSocialMedias = async (req, res) => {
	try {
		const socialMedias = await SocialMedia.findAll();
		res.json(socialMedias);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
