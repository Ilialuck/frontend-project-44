import getRandomNum from '../helpers.js';
import gameEngine from '../index.js';

const playPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const givePrimeGameTask = () => {
    const number = getRandomNum();
    const isPrime = (num) => {
      if (number < 2) {
        return false;
      }
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  gameEngine(gameRules, givePrimeGameTask);
};
export default playPrimeGame;
