import getRandomNum from '../supportFunctions.js';
import gamePlay from '../index.js';

const playGcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const giveGcdGameTask = () => {
    const number1 = getRandomNum();
    const number2 = getRandomNum();
    const question = `${number1} ${number2}`;
    const gcdInit = (num1, num2) => {
      if (!num2) return num1;
      return gcdInit(num2, num1 % num2);
    };
    const correctAnswer = gcdInit(number1, number2).toString();
    return [question, correctAnswer];
  };
  gamePlay(gameRules, giveGcdGameTask);
};
export default playGcdGame;
