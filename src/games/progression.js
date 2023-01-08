import getRandomNum from '../helpers.js';
import gameEngine from '../index.js';

const createProgression = () => {
  const startNum = getRandomNum(1, 15);
  const stepNum = getRandomNum(1, 15);
  const progressionLength = getRandomNum(5, 10);

  const progressionNumbers = [startNum];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionNumbers.push(progressionNumbers[i] + stepNum);
  }
  return progressionNumbers;
};

const playProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?';

  const giveProgressionGameTask = () => {
    const resultingProgression = createProgression();
    const hiddenIndex = getRandomNum(0, 5);
    let correctAnswer = resultingProgression[hiddenIndex];
    resultingProgression[hiddenIndex] = '..';
    const question = resultingProgression.join(' ');
    correctAnswer = correctAnswer.toString();
    return [question, correctAnswer];
  };
  gameEngine(gameRules, giveProgressionGameTask);
};
export default playProgressionGame;