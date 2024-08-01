import { Configuration, OpenAIApi } from 'openai';
import { marineInfoPrompt } from '../../data/prompt.json';
import { Request, Response } from 'express';

const configuration = new Configuration({
  organization: 'org-xdfMQdKET90O8OVse9OQGxew',
  apiKey: process.env.OPENAI_API_KEY as string,
});

const openai = new OpenAIApi(configuration);

const generateInfo = async (req: Request, res: Response) => {
  const { marineInfo } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'user', content: `${marineInfoPrompt}${marineInfo}` },
      ],
      max_tokens: 200,
      temperature: 0,
      n: 1,
    });

    const response = completion?.data?.choices?.[0]?.message?.content;

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if ((error as any).response.status === 401) {
      return res.status(401).json({
        error: "Please provide a valid API key",
      });
    }
    return res.status(500).json({
      error: "An error occurred while generating the marine information you were surfing for.",
    });
  }
}

export default generateInfo;