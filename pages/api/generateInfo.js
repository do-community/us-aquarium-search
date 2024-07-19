// import the Configuration class and the OpenAIApi class from the openai npm module
const { Configuration, OpenAIApi } = require('openai');

// create a new configuration object that includes the api key and uses the Configuration class from the openai module
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// create a new instance of the OpenAIApi class and pass in the configuration object
const openai = new OpenAIApi(configuration);

// create an async function called generateInfo that accespts a request and response object as parameters
const generateInfo = async (req, res) => {
  // try to run the following code block
  try {
    // destructure the prompt from the request body
    const { prompt } = req.body;

    // create a new completion object using the openai instance and pass in the prompt
    const completion = await openai.createCompletion(prompt);

    // send a response with the completion data
    res.status(200).json({ data: completion.data });
  } catch (error) {
    // if there is an error, catch it and send a response with the error message
    res.status(500).json({ error: error.message });
  }
};

// export the generateInfo function as a module
module.exports = generateInfo;
