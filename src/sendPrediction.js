const sendMessage = require("./sendMessage");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPrediction() {
	const predictions = [
		"бесспорно",
		"предрешено",
		"никаких сомнений",
		"определенно да",
		"можешь быть уверена в этом",
		"мне кажется, да",
		"вероятнее всего",
		"хорошие перспективы",
		"знаки говорят - да",
		"да",
		"пока не ясно, попробуй снова",
		"спроси позже",
		"тебе лучше не знать",
		"сейчас нельзя предсказать",
		"сконцентрируйся и спроси опять",
		"ночь темна и полна ужасов",
		"даже не думай",
		"мой ответ - нет",
		"по моим данным - нет",
		"перспективы не очень хорошие",
		"весьма сомнительно",
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