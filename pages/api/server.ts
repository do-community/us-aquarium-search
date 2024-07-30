import express, { Express } from 'express';
import cors from 'cors';
import router from './router';

// create the server with express and name it app
const app: Express = express();

// use port 8080 as default port
const PORT: string | number = process.env.PORT || 8080;

// Enable CORS
app.use(cors());

// enable body parser to accept json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// state which port the server is listening to and log it to the console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// add router to the server and name it openai
app.use('/openai', router);

// export the express api
module.exports = app;