# Contribution Guidelines 🌟

## Introduction
We appreciate your interest in improving this project! If you have something better to offer, we invite you to contribute and make it even better.

## Getting Started
To start contributing, follow the guidelines given below:

### 1. Fork the Repository
![image](https://github.com/PiyushKalyanpy/GyanaGuru/assets/79275157/fc349786-a757-43ea-8c04-00b1e4af5f1a)

### 2. Clone the forked Repository
```
git clone https://github.com/<your_user_name>/GyanaGuru.git
```

### 3. Set Up Remotes
- Add a reference (remote) to the original repository:
```
git remote add upstream https://github.com/PiyushKalyanpy/GyanaGuru.git
```
- Add a reference (remote) to your forked repository:
```
git remote add origin https://github.com/<your_user_name>/GyanaGuru.git
```

### 4. Check Remotes
```
git remote -v
```

### 5. Keep Your Local Copy Updated
```
git pull upstream main
```

### 6. Create a New Branch
```
git checkout -b <your_branch_name>
```

## Making Changes
Perform your desired changes to the code base.

### 7. Track Changes
```
git add .
```

### 8. Commit Changes
```
git commit -m "Suitable message"
```

### 9. Push Changes
```
git push -u origin <your_branch_name>
```

## Creating a Pull Request
To create a pull request:

### 10. Compare and Create
- Click on "Compare And Pull Requests" 🔄
- Make sure your pull request adheres to our contribution guidelines. Pull requests that do not meet the guidelines may be closed or discarded ❌
- Avoid including unnecessary files like `package.json` or `package.lock.json` to maintain a focused and relevant pull request 📦
- Add an appropriate title and description to your pull request, explaining your changes with suitable explanations and screenshots 📝🖼️
- Click on "Create Pull Request" to submit your contribution for review ✅

We appreciate your understanding and cooperation in following our guidelines. Thank you for your contribution! 🙌
Congratulations! You've made your PR with the desired changes. Once the PR is reviewed, it will be merged into the original codebase for everyone to see and use.

### Firebase (auth api key error) - Solution 
To resolve the Firebase error "Invalid API Key Auth", you have to create your own Firebase environment endpoints.

Please follow these steps:

### 1. Set Up Firebase Environment
- Create a Firebase project on the Firebase console (https://console.firebase.google.com/).
- Set up the necessary Firebase services (e.g., Firebase Authentication, Firebase Firestore, etc.) for your project.

### 2. Retrieve Firebase Configuration
- In the Firebase console, navigate to your project settings.
- Go to the "General" tab, and scroll down to the "Your apps" section.
- Select the appropriate web app and click on the "Config" button to view the Firebase configuration object.
- Copy the api keys and paste into the project.
- Update the values in the configuration file with your own Firebase project's configuration information retrieved in the previous step.

```javascript
// firebase-config.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
```
⚠️ Please do not push your api keys and firebase files in pull request, and if the pull request does not adhere to our contribution guidelines, it may be closed or discarded.
If you find any problem after that regarding firebase please ask in discord channel or in [discussion tab](https://github.com/PiyushKalyanpy/GyanaGuru/discussions/54)

Congratulations! You have successfully connected your own Firebase environment endpoints to the project. Your changes will be reviewed, and once approved, they will be merged into the original codebase.


## Thank You!
Thank you so much for contributing. We appreciate your valuable input, and we hope to see you again soon. 😊
