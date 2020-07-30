//node prompt asks user a question

const userQuestion = require("inquirer");

userQuestion.prompt([
    {
        name: "user",
        message: "What's your name?",
    },
    {
        name: "animal",
        message: "What's your favorite animal?",
    },
])

.then(response => {
    console.log("Good morning ", response);
});

