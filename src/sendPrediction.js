const sendMessage = require("./sendMessage");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPrediction() {
	const predictions = [
		"бесспорно \u{1F3AF}",
		"предрешено \u{1F4AF}",
		"никаких сомнений \u{1FA75}",
		"определенно да \u{1F4A1}",
		"можешь быть уверена в этом \u{2705}",
		"мне кажется, да \u{1F60E}",
		"вероятнее всего \u{1F913}",
		"хорошие перспективы \u{1F4A5}",
		"знаки говорят - да \u{1F47D}",
		"да \u{1F57A}",
		"пока не ясно, попробуй снова \u{1F937}",
		"спроси позже \u{1F937}",
		"тебе лучше не знать \u{1F481}",
		"сейчас нельзя предсказать \u{1F92C}",
		"сконцентрируйся и спроси опять \u{1F47D}",
		"ночь темна и полна ужасов \u{1F47B}",
		"даже не думай \u{26D4}",
		"мой ответ - нет \u{1F4A9}",
		"по моим данным - нет \u{26D4}",
		"перспективы не очень хорошие \u{1F4A9}",
		"весьма сомнительно \u{1F317}",
	];

	const index = getRandomInt(predictions.length);
	return predictions[index];
}

module.exports = async (chat_id) => {
	const text = getPrediction().toUpperCase();
	await sendMessage({
		chat_id,
		text, 
	})
}