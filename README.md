# United States Aquariums

**Note:** Following these steps may result in charges for the use of DigitalOcean services.

https://github.com/do-community/us-aquarium-search/assets/6799474/cbcdbf82-ba7b-4c8b-82da-6bf89fbab115

## Requirements

You need a DigitalOcean account. If you do not already have one, first [sign up](https://cloud.digitalocean.com/registrations/new).

## Description

This sample app demonstrates how to use React in a NextJS app to create a search and filter feature for a list of some aquariums in the United States. The app uses the `useState` hook to filter the list of aquariums based on the user's input in the search bar.

The sample app combines [DigitalOcean's MongoDB Managed Database](https://www.digitalocean.com/products/managed-databases-mongodb?utm_team=devrel&utm_source=github&utm_content=managed-databases-mongodb) and Compass to store the list of aquariums and is mapped over and displayed using [Material UI components](https://mui.com/material-ui/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

### Deploy the App

Click the following button to deploy the app to App Platform. If you are not currently logged in with your DigitalOcean account, this button prompts you to to log in.

Once in the console you can choose other services such as Database, Droplets, Auto-Scaling, and more!

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/us-aquarium-search/tree/main)

Note that, for the purposes of this tutorial, this button deploys the app directly from DigitalOcean's GitHub repository, which disables automatic redeployment since you cannot change our template. If you want automatic redeployment or you want to change the sample app's code to your own, we instead recommend you fork [our repository](https://github.com/do-community/us-aquarium-search/tree/main).

To fork our repository, click the **Fork** button in the top-right of [its page on GitHub](https://github.com/do-community/us-aquarium-search/tree/main), then follow the on-screen instructions. To learn more about forking repos, see the [GitHub documentation](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo).

After forking the repo, you can view the same README in your own GitHub org; for example, in `https://github.com/<your-org>/us-aquarium-search`. To deploy the new repo, visit the [control panel](https://cloud.digitalocean.com/apps) and click the **Create App** button. This takes you to the app creation page. Under **Service Provider**, select **GitHub**. Then, under **Repository**, select your newly-forked repo. Ensure that your branch is set to **main** and **Autodeploy** is checked on. Finally, click **Next**.

After clicking the **Deploy to DigitalOcean** button or completing the instructions above to fork the repo, follow these steps:

1. Configure the app, such as by specifying HTTP routes, declaring environment variables, auto-scaling setup, or adding a database. For the purposes of this tutorial, this step is optional.
1. Provide a name for your app and select the region to deploy your app to, then click **Next**. By default, App Platform selects the region closest to you. Unless your app needs to interface with external services, your chosen region does not affect the app's performance, since to all App Platform apps are routed through a global CDN.
1. On the following screen, leave all the fields as they are and click **Next**.
1. Confirm your plan settings and how many containers you want to launch and click **Launch Basic/Pro App**.

After, you should see a "Building..." progress indicator. You can click **View Logs** to see more details of the build. It can take a few minutes for the build to finish, but you can follow the progress in the **Deployments** tab.

Once the build completes successfully, click the **Live App** link in the header and you should see your running application in a new tab, displaying the home page.

### Local Installation (fork)

To install the project, follow these steps:

1. Fork the repository

2. Install the dependencies:

```bash
npm install
```

3. If you are planning on using MongoDB (setup code already in app), set up `env` variables if. There is a `.env.example` file set up for your MonogDB Connection String if you choose to use it:

```js
MONGODB_URI = '';
```

Run the development server:

```bash
npm run dev
```

## Usage

This sample app can modified to include any data set that you would like to filter and search through. The CSS can also be modified to fit your design preferences.

If you choose to use another CSS framework, you can remove the Material UI components and replace them with the components from the framework you choose.

Make sure to set up your MongoDB database and connect it to your app. You can use the [MongoDB Compass](https://www.mongodb.com/products/tools/compass) to add the data to your database.

If you choose to use another database, you can modify the code to connect to your database.

The demo url is using auto-scaling.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
