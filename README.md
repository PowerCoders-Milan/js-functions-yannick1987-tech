# javascript-functions

Re-Factor your code with functions, to have a reusable code

- arrow functions
```javascript
const myFunction = (optionalParams) => {
  let newValue = 10;
  console.log("I'm executed when someone calls the function");
  optionalParams = newValue;
  return optionalParams
}
```


## How to import the assignment
To start the exercises
1. go in your **code** folder `cd ~/code`
2. go inside your github username folder with `cd your_github_username`
3. `git clone paste_here_ssh_link_to_your_assignment`
4. go inside the repo you've just cloned `cd js-functions-your-github-username` (`if` you press `cd` + `tab` it will be easier)
5. go inside the exercise folder `cd 01-can_you_vote`
6. open VS_CODE `code .`

## how to test the code
1. print values and messages to understand what the code is doing
  ```javascript
  cosole.log()
  ```
2. run the programm
```zsh
node path_to_file_name.js
```

## how to save your changes
Every time you complete an exercise remember to
```zsh
git add .
git commit -m "exercise # done"
git push origin master
```

Good Hacking :rocket:
