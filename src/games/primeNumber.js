import getRandomNum from '../helpers.js';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const givePrimeGameTask = () => {
    const number = getRandomNum();
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  playGame(gameRules, givePrimeGameTask);
};
export default playPrimeGame;
