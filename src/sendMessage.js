const axios = require("axios").default;

module.exports = async (body) => {
	await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, body);

	return true;
}
