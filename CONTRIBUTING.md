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
- ##### ⚠️ Please ensure that you create a pull request (PR) once you have been approved by us in commets section of issue page. In the case of frontend design-related matters, it is necessary to present screenshots for review and obtain approval from us. It is important to note that any PR created without prior approval on the issue page may be discarded.

## Note

To run your forked project, you need to pass in your **firebase config** data in `firebase.tsx` file under the firebse folder.

![Screenshot from 2023-05-31 02-42-20](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/417dbf83-b823-4f01-bf1f-45eaa622f1e1)

Else it results in the following error:

![Screenshot from 2023-05-29 18-45-06](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/d94e0911-4844-4854-9170-1fa37856b595)

To fix this follow the below steps:

1. Head on to https://console.firebase.google.com/

2. Sign in with your gmail account.

3. Click on `create a project`.

![Screenshot from 2023-05-31 02-59-47](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/4873067a-91cd-4b2c-9759-4c0fb14cbec8)

4. Give a name to your project and proceed.

5. After your project is set up, click on the web button on your dashboard(third one).

![Screenshot from 2023-05-31 03-03-44](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/44439867-cc60-40d7-874d-835dc80f973f)

6. It prompts you to register your app, do so and proceed forward.

> **Note:** Don't check in for the firebse hosting checkbox!.

7. Copy the firebase keys and paste into the .env file as shown in point 8.

![IMG_20230531_031134](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/c0190b10-8f46-4326-bdc9-4846e050be08)

8. Make a `.env` file in root folder and paste the values in from of the given keys. make sure to keep the keys name as given below.
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

9. Set up firebase authentication
    1. <img width="967" alt="Screenshot 2023-07-31 at 9 57 15 PM" src="https://github.com/Chaitanya-Shahare/GyanaGuru/assets/108579856/030d2526-09c5-49ad-80cc-ab7f6174c836">
    2. <img width="1676" alt="Screenshot 2023-07-31 at 9 57 26 PM" src="https://github.com/Chaitanya-Shahare/GyanaGuru/assets/108579856/b4a4c3e9-843c-4d41-bd31-b5e0f4381981">
    3. <img width="1673" alt="Screenshot 2023-07-31 at 9 57 36 PM" src="https://github.com/Chaitanya-Shahare/GyanaGuru/assets/108579856/96857255-9637-4cc4-bf4d-ef23008c3576">
    4. <img width="1676" alt="Screenshot 2023-07-31 at 9 58 00 PM" src="https://github.com/Chaitanya-Shahare/GyanaGuru/assets/108579856/6bfea575-3a2a-439a-931a-d04369c39f73">
    5. <img width="1676" alt="Screenshot 2023-07-31 at 9 58 31 PM" src="https://github.com/Chaitanya-Shahare/GyanaGuru/assets/108579856/5ee188f1-2da0-4da6-874d-2c2bb9828033">









 
  
11. Run the development server.

```
npm run dev
```

Congratulations! You've made your PR with the desired changes. Once the PR is reviewed, it will be merged into the original codebase for everyone to see and use.

⚠️ **_Please do not push your api keys and firebase files in pull request, and if the pull request does not adhere to our contribution guidelines, it may be closed or discarded.
If you find any problem after that regarding firebase please ask in discord channel or in [discussion tab](https://github.com/PiyushKalyanpy/GyanaGuru/discussions/54)_**

Thank you so much for contributing. Hope to see you again soon........

We appreciate your understanding and cooperation in following our guidelines. Thank you for your contribution! 🙌
