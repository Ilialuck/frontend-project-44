import getRandomNum from '../randomNumber.js';
import gamePlay from '../index.js';

const gcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const taskOfGCDGame = () => {
    const number1 = getRandomNum(100);
    const number2 = getRandomNum(100);
    const question = `${number1} ${number2}`;

    // GCD function
    const gcdInit = (num1, num2) => {
      if (!num2) return num1;
      return gcdInit(num2, num1 % num2);
    };
    const correctAnswer = gcdInit(number1, number2).toString();
    return [question, correctAnswer];
  };
  gamePlay(gameRules, taskOfGCDGame);
};
export default gcdGame;
