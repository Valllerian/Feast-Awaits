import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_SECRET,
});
const openai = new OpenAIApi(configuration);


export default async function handler(req, res) {
	const { productName, desc, target } = req.body;
	const completion = await openai.createCompletion('text-davinci-002', {
		prompt: setPrompt(productName, desc, target),
		temperature: 0.6,
		max_tokens: 1000,
	});
	res.status(200).json({ result: completion.data.choices[0].text });
}

function setPrompt(userPrompt, desc, target) {
	return `Suggest a user something to snack on considering their ${userPrompt} with these preferences ${
		target.length === 0 ? '' : 'to aim at ' + target
	} \nDescription: ${desc}`;
}