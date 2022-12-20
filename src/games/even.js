import gamePlay from '../index.js';
import getRandomNum from '../randomNumber.js';

const evenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskOfEvenGame = () => {
    const number = getRandomNum(100);
    const evenOrNot = (num) => num % 2 === 0;
    const question = `${number}`;
    const correctAnswer = (evenOrNot(number) ? 'yes' : 'no');
    return [question, correctAnswer];
  };
  gamePlay(gameRules, taskOfEvenGame);
};
export default evenGame;
