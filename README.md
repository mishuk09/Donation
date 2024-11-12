# Getting Started with Your React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is hosted on Firebase.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload as you make changes, and you may see lint errors in the console.
  
- **`npm test`**: Launches the test runner in interactive watch mode. See more details [here](https://facebook.github.io/create-react-app/docs/running-tests).
  
- **`npm run build`**: Builds the app for production to the `build` folder. This correctly bundles React in production mode, minifying the files and optimizing for the best performance. Your app is ready to be deployed!
## Running/Developing locally

1. **Stripe setup**  
   Install stripe cli - https://docs.stripe.com/stripe-cli
    ```bash
   stripe login
   stripe listen --forward-to localhost:5000/restaurant-app-25f83/us-central1/onPayment
2. **Configure .env variables**  
   - create .env file in project root
   - add REACT_APP_STRIPE_PUBLIC_KEY
   - add STRIPE_SECRET_KEY
   - add STRIPE_WEBHOOK_SECRET
   - export env variables
     - for windows 
     ```bash
     for /F "tokens=1,2 delims==" %i in (.env) do set %i=%j
     ```
     - for linux/mac
     ```bash
     source .env
     ```
3. **Start React server**  
   ```bash
    npm start
4. **Firebase setup**  
   Only required if not done before
   ```bash
   npm install -g firebase-tools
   firebase login
5. **Build firebase functions**  
   ```bash
   cd functions
   npm run build
6. **Run firebase emulators**  
    ```bash
   firebase emulators init
   ```
   Select at-least functions, firestore emulators
    ```bash
   firebase emulators:start

Now the local instance should be ready for testing/development
   
## Firebase Hosting Instructions

To host this app on Firebase, follow these steps:

1. **Install Firebase CLI**  
   Install the Firebase CLI globally if it’s not already installed:
   ```bash
   npm install -g firebase-tools
2. **Login to Firebase**  
   Log in to your Firebase account:
   ```bash
   firebase login
3. **Initialize Firebase**  
  In your project root directory, initialize Firebase for this project:
   ```bash
   firebase init
4. **Build Your React App**  
 To prepare for deployment, create a production build:
   ```bash
   npm run build
5. **Deploy to Firebase Hosting**  
 Deploy your app to firebase hosting:
   ```bash
   firebase deploy --only hosting:bolsofra8

Note: 1.hosting:bolsofra8 this is the name of our projects in firebase
