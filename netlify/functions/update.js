const axios = require("axios").default;

exports.handler = async (event) => {
	console.log('Received an update from Telegram!', event.body);
	await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
  // TODO: Add form data
});
	return { statusCode: 200 }; 
}