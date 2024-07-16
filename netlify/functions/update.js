const sendMessage = require("../../src/sendMessage");
const sendButtons = require("../../src/sendButtons");
const sendPrediction = require("../../src/sendPrediction");

exports.handler = async (event) => {
	const { message } = JSON.parse(event.body);

	switch (message.text) {
	case "/start": 
		await sendButtons(message.chat.id);
		break;
	case "Милый, реши за меня":
		await sendPrediction(message.chat.id);
		break;
	default:
		await sendMessage({ chat_id: message.chat.id, text: "Ничего не понимаю)" });
	}
	
	return { statusCode: 200 }; 
}