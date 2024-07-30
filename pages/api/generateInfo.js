// import the Configuration class and the OpenAIApi class from the openai npm module
import { Configuration, OpenAIApi } from 'openai';

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
  try {
    const response = await openai.completions.create({
      engine: 'davinci',
      prompt: req.body.prompt,
      max_tokens: 64,
      temperatur: 0.9,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ['\n'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// export the generateInfo function as a module
export default generateInfo;




