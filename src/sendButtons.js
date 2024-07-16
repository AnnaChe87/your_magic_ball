const sendMessage = require("./sendMessage");

module.exports = async (chat_id) => {
	await sendMessage({
		chat_id,
		text: "Привет, милая, я готов всё решить за тебя!",
		reply_markup: {
			keyboard: [[ { text: 'Милый, реши за меня'} ]],
			resize_keyboard: true
		}
	})

	return true;
}