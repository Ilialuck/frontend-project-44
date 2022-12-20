import { getRandomNum } from '../randomNumber.js';
import { gamePlay } from '../index.js';

export const primeOrNotGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskOfPrimeorNotGame = () => {
    // генерация числа
    const number = getRandomNum(100);
    // проверка простое или нет
    const isPrime = (number) => {
      if (number === 1) {
        return false;
      }
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };

    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  gamePlay(gameRules, taskOfPrimeorNotGame);
};
