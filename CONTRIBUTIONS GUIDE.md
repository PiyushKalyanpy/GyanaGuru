# Contribution Guidelines

Do you think there is something better that this project can offer and you can add it. We cordially invite you to contribute to this project and make it better. 
<br>
To start contributing, follow the guidelines given below: 

**1.**  Fork [this](https://github.com/PiyushKalyanpy/GyanaGuru) repository.

**2.**  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/GyanaGuru.git
```

**3.** Navigate to the project directory in your local system.

```
cd GyanaGuru
```

**4.1** Add a reference (remote) to the original repository.

```
git remote add upstream 
https://github.com/PiyushKalyanpy/GyanaGuru.git 

```
**4.2** Add a reference (remote) to your forked repository
```
git remote add origin
https://github.com/<your_user_name>/GyanaGuru.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your main branch to keep it updated with the original repository.

```
git pull upstream main
```

**7.** Always create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes.

```
git add . 
```

**10.** Commit your changes.

```
git commit -m "suitable message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `Compare And Pull Requests`.

**13.** Add appropriate title and description to your pull request explaining what your changes do (with suitable explanation and screenshots).

**14.** Click on `Create Pull Request`.


**15** Congrats !! You made your PR with desired changes. Now once the PR is reviewed, your PR will be merged to the original code base for everyone to see and use.

<br>

## Note

To run your forked project, you need to pass in your **firebase config** data in `firebase.tsx` file under the firebse folder.

![Screenshot from 2023-05-31 02-42-20](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/417dbf83-b823-4f01-bf1f-45eaa622f1e1)

<br>

Else it results in the following error:

![Screenshot from 2023-05-29 18-45-06](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/d94e0911-4844-4854-9170-1fa37856b595)

<br>

To fix this follow the below steps:

<br>

1. Head on to https://console.firebase.google.com/


2. Sign in with your gmail account.

3. Click on `create a project`.

![Screenshot from 2023-05-31 02-59-47](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/4873067a-91cd-4b2c-9759-4c0fb14cbec8)


4. Give a name to your project and proceed.

5. After your project is set up, click on the web button on your dashboard(third one).

![Screenshot from 2023-05-31 03-03-44](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/44439867-cc60-40d7-874d-835dc80f973f)

6. It prompts you to register your app, do so and proceed forward.

> **Note:** Don't check in for the  firebse hosting checkbox!.

7. Copy the code under the firebase config object and paste that in the firebase file in your forked project.

![IMG_20230531_031134](https://github.com/PiyushKalyanpy/GyanaGuru/assets/119070798/c0190b10-8f46-4326-bdc9-4846e050be08)

8. Run the development server.

```
npm run dev
```

That's it, now you can run your forked project and embark on your development journey with GyanGuru 🥳



Thank you so much for contributing. Hope to see you again soon........
