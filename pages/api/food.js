import { Configuration, OpenAIApi } from "openai";

// OpenAI configuration file;
// OpenAI docs: 
// https://beta.openai.com/docs/introduction

const configuration = new Configuration({
  apiKey: process.env.SECRET,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { userPreferance } = req.body;
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: setPrompt(userPreferance),
    temperature: 0.6,
    max_tokens: 1000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

// Prompt for the bot to get better results; 
function setPrompt(userPreferance) {
  return `Suggest a user something to snack on considering their ${userPreferance} with these preferences. Provide a detailed step by step recipe or the place where they can get it. Refer to the user as Dear Guest # and a random 6 digit number. Talk in a very polite and old-fashioned manner. Wish them a good day and say something nice.`;
}
