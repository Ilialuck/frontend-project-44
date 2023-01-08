import gameEngine from '../index.js';
import getRandomNum from '../helpers.js';

const isEven = (num) => num % 2 === 0;
const playEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const giveEvenGameTask = () => {
    const number = getRandomNum();
    const question = `${number}`;
    const correctAnswer = (isEven(number) ? 'yes' : 'no');
    return [question, correctAnswer];
  };
  gameEngine(gameRules, giveEvenGameTask);
};
export default playEvenGame;
