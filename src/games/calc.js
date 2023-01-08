import getRandomNum from '../helpers.js';
import playGame from '../index.js';

const doCalc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown state!');
  }
};
const playCalcGame = () => {
  const gameRules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  const giveCalcGameTask = () => {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const operator = operators[getRandomNum(0, operators.length - 1)];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = doCalc(num1, operator, num2).toString();
    return [question, correctAnswer];
  };
  playGame(gameRules, giveCalcGameTask);
};
export default playCalcGame;
