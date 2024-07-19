// import the Configuration class and the OpenAIApi class from the openai npm module
import { Configuration, OpenAIApi } from 'openai';

// create a new configuration object that includes the api key and uses the Configuration class from the openai module
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// create a new instance of the OpenAIApi class and pass in the configuration object
const openai = new OpenAIApi(configuration);

// create a new async function called generateInfo that accepts a request and response object as parameters
export default async function generateInfo(req, res) {
  // try to run the following code block
  try {
    // destructure the prompt and max_tokens from the request body
    const { prompt, max_tokens } = req.body;

    // create a new response object by calling the completion.create method from the openai instance
    const response = await openai.completion.create({
      engine: 'davinci',
      prompt,
      max_tokens,
    });

    // send a response back to the client with the data from the completion
    res.status(200).json(response.data);
  } catch (error) {
    // if an error occurs, send a response back to the client with the error message
    res.status(500).json({ error: error.message });
  }
}
