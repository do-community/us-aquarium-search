// import the Configuration class and the OpenAIApi class from the openai npm module
import { Configuration, OpenAIApi } from 'openai';
const { marineInfoPrompt } = require('../../data/prompt.json');

// create a new Configuration object that includes the api key and sues the Configuration class from the openai module
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// create a new instance of the OpenAIApi class and pass in the configuration object
const openai = new OpenAIApi(configuration);

// create an async function called generateInfo that accepts a request and response object as parameters
// use try to make a request to the OpenAI completetion api and return the response
// use catch to catch any errors and return a 500 status code with the error message
const generateInfo =  async (req, res) {
  const { marineInfo } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'user', content: `${marineInfoPrompt}${marineInfo}` },
      ],
      prompt: req.body.prompt,
      max_tokens: 200,
      temperature: 0,
      n: 1,
    });

    const response = completion.data.choices[0].message.content;

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      return res.status(401).json({
        error: "Please provide a valid API key",
      });
    }
    return res.status(500).json({
      error: "An error occurred while generating the marine information you were surfing for.",
    });
  }
}

// export the generateInfo function as a module
module.exports = generateInfo;




