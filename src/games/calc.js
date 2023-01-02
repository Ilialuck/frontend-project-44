import getRandomNum from '../supportFunctions.js';
import playGame from '../index.js';

const playCalcGame = () => {
  const gameRules = 'What is the result of the expression?';

  const giveCalcGameTask = () => {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const operators = ['+', '-', '*'];
    const ourOperator = operators[getRandomNum(0, 2)];

    const question = `${num1} ${ourOperator} ${num2}`;

    let correctAnswer = 0;

    switch (ourOperator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        correctAnswer = null;
    }
    correctAnswer = correctAnswer.toString();

    return [question, correctAnswer];
  };
  playGame(gameRules, giveCalcGameTask);
};
export default playCalcGame;
