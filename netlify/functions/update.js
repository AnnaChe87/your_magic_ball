const sendMessage = require("../../src/sendMessage");
const sendButtons = require("../../src/sendButtons");

exports.handler = async (event) => {
	const { message } = JSON.parse(event.body);

	console.log(message);
	
	switch (message.text) {
	case "/start": 
		await sendButtons(message.chat.id);
		break;
	default:
		await sendMessage({ chat_id: message.chat.id, text: "I got your message!!" });
	}
	
	return { statusCode: 200 }; 
}