import express, { Express } from 'express';
import dotenv from 'dotenv';
import openaiRouter from './router';

// create the server with express and name it app
const app: Express = express();

// use port 8080 as default port
const PORT: string | number = process.env.PORT || 8080;

// enable body parser to accept json data
app.use(express.json());

// state which port the server is listening to and log it to the console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/openai', openaiRouter);