import getRandomNum from '../helpers.js';
import playGame from '../index.js';

const createProgression = (start, step, length) => {
  const progressionNumbers = [start];
  for (let i = 0; i < length; i += 1) {
    progressionNumbers.push(progressionNumbers[i] + step);
  }
  return progressionNumbers;
};

const playProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?';
  const giveProgressionGameTask = () => {
    const startNum = getRandomNum(1, 15);
    const stepNum = getRandomNum(1, 15);
    const progressionLength = getRandomNum(5, 10);
    const resultingProgression = createProgression(startNum, stepNum, progressionLength);
    const hiddenIndex = getRandomNum(0, 5);
    let correctAnswer = resultingProgression[hiddenIndex];
    resultingProgression[hiddenIndex] = '..';
    const question = resultingProgression.join(' ');
    correctAnswer = correctAnswer.toString();
    return [question, correctAnswer];
  };
  playGame(gameRules, giveProgressionGameTask);
};
export default playProgressionGame;
