import getRandomNum from '../helpers.js';
import gameEngine from '../index.js';

const findGCD = (num1, num2) => {
  if (!num2) return num1;
  return findGCD(num2, num1 % num2);
};
const playGcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const giveGcdGameTask = () => {
    const number1 = getRandomNum();
    const number2 = getRandomNum();
    const question = `${number1} ${number2}`;
    const correctAnswer = findGCD(number1, number2).toString();
    return [question, correctAnswer];
  };
  gameEngine(gameRules, giveGcdGameTask);
};
export default playGcdGame;
