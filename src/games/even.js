import playGame from '../index.js';
import getRandomNum from '../supportFunctions.js';

const playEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const giveEvenGameTask = () => {
    const number = getRandomNum();
    const isEven = (num) => num % 2 === 0;
    const question = `${number}`;
    const correctAnswer = (isEven(number) ? 'yes' : 'no');
    return [question, correctAnswer];
  };
  playGame(gameRules, giveEvenGameTask);
};
export default playEvenGame;
