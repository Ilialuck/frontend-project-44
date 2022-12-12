import { getRandomNum } from "../randomNumber.js";
import { gamePlay } from "../index.js";

export const gcdGame = () => {
    const gameRules = 'Find the greatest common divisor of given numbers.';

    const taskOfGCDGame = () => {
        const num1 = getRandomNum(100);
        const num2 = getRandomNum(100);
        const question = `${num1} ${num2}`;

        // GCD function

        const gcdInit = (num1, num2) => {
            let gcd;
          while (num1 != num2) {

            if (num1 > num2) {
                num1 = num1 - num2;
            } else {
                num2 = num2 - num1;
            }
        }
         gcd = num1;
         return gcd;
        };
        const correctAnswer = gcdInit(num1, num2).toString();
        return [question, correctAnswer]; 
    }
    gamePlay(gameRules, taskOfGCDGame);
};
