import { getRandomNum } from "../randomNumber.js";
import { gamePlay } from "../index.js";


 export const calcGame = () => {
    // game rules
     const gameRules = 'What is the result of the expression?';
     

    const taskOfCalcGame = () => {

        const num1 = getRandomNum(10);
        const num2 =getRandomNum(10);
        const operators = ['+', '-', '*'];
        const ourOperator = operators[getRandomNum(3)];

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
 gamePlay(gameRules, taskOfCalcGame);
};

