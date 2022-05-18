import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.SECRET,
});
const openai = new OpenAIApi(configuration);
console.log(process.env.SECRET);

export default async function handler(req, res) {
	const { productName} = req.body;
	
	const completion = await openai.createCompletion('text-davinci-002', {
		prompt: setPrompt(productName),
		temperature: 0.6,
		max_tokens: 1000,
	});
	res.status(200).json({ result: completion.data.choices[0].text });
}

function setPrompt(userPrompt) {
	return `Suggest a user something to snack on considering their ${userPrompt} with these preferences `;
}