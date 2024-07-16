const sendMessage = require("./sendMessage");

module.exports = async (chat_id) => {
	await sendMessage({
		chat_id,
		text: "Push the button",
		reply_markup: {
			keyboard: [[ { text: 'Boom'} ]],
			resize_keyboard: true
		}
	})

	return true;
}