import { getRandomNum } from "../randomNumber.js";
import { gamePlay } from "../index.js";


 const calcGame = () => {
    // game rules
     const gameRules = 'What is the result of the expression?';
     

    const taskOfCalcGame = () => {

        const num1 = getRandomNum(100);
        const num2 =getRandomNum(100);
        const operators = ['+', '-', '*'];
        const ourOperator = operators[getRandomNum(2)];

        const question = `${num1} ${ourOperator} ${num2}`;

        let result = 0;
        
      switch (ourOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    result = result.toString();
    
    return [question, result]; 
 };
 gamePlay(gameRules, taskOfCalcGame);
};
export default calcGame;
