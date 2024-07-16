const sendMessage = require("./sendMessage");

module.exports = async (chat_id) => {
	await sendMessage({
		chat_id,
		text: "Шар поможет тебе принять простое решение, просто доверься!",
		reply_markup: {
			keyboard: [[ { text: 'Шар реши за меня'} ]],
			resize_keyboard: true
		}
	})

	return true;
}