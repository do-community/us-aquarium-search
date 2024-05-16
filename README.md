# United States Aquariums

https://github.com/do-community/us-aquarium-search/assets/6799474/cbcdbf82-ba7b-4c8b-82da-6bf89fbab115

## Description

This sample app demonstrates how to use React in a NextJS app to create a search and filter feature for a list of some aquariums in the United States. The app uses the `useState` hook to filter the list of aquariums based on the user's input in the search bar.

The sample app combines [DigitalOcean's MongoDB Managed Database](https://www.digitalocean.com/products/managed-databases-mongodb?utm_team=devrel&utm_source=github&utm_content=managed-databases-mongodb) and Compass to store the list of aquariums and is mapped over and displayed using [Material UI components](https://mui.com/material-ui/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

### Deploy to DO
If you choose to deploy this app directly to DigitalOcean, click the button below!

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/us-aquarium-search/tree/main)

### Local Installation

To install the project, follow these steps:

Clone the repository:

```bash
git clone
```

Install the dependencies:

```bash
npm install
```

Set up `env` variables. There is a `.env.example` file set up for your MonogDB Connection String if you choose to use it:

```js
MONGODB_URI=""
```

Run the development server:

```bash
npm run dev
```

## Usage

This sample app can modified to include any data set that you would like to filter and search through. The CSS can also be modified to fit your design preferences.

If you choose to use another CSS framework, you can remove the Material UI components and replace them with the components from the framework you choose.

Make sure to set up your MongoDB database and connect it to your app. You can use the [MongoDB Compass](https://www.mongodb.com/products/tools/compass) to add the data to your database.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
