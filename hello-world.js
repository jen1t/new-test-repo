const readline = require('readline');

//console.log("Hello, World!");
//console.log("Welcome to JavaScript programming.");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currentYear = new Date().getFullYear();

function askBirthYear() {
  rl.question('Enter your birth year (e.g., 1990): ', (answer) => {
    const year = Number(answer.trim());
    if (!Number.isInteger(year) || year < 1900 || year > currentYear) {
      console.error(`Invalid birth year. Please enter a number between 1900 and ${currentYear}.`);
      rl.close();
      process.exit(1);
    }
    const age = currentYear - year;
    console.log(`You are ${age} years old.`);
    rl.close();
  });
}

askBirthYear();
