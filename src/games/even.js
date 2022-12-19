import readlineSync from 'readline-sync';
import { getRandomNum } from '../randomNumber.js';

//greeting

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);


// game

export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNum(99);  
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
    const check1 = (randomNumber % 2 === 0 && userAnswer === 'yes');
    const check2 = (randomNumber % 2 !== 0 && userAnswer === 'no');
   if (check1 === true || check2 === true) {
    console.log('Correct!');
   } else {
    const oppositeAnswer = (userAnswer === 'yes' ? 'no' : 'yes');
    const errorAnswer = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'. \nLet's try again, ${userName}!`);
    return errorAnswer;
   }
  };
  console.log(`Congratulations, ${userName}!`);
};