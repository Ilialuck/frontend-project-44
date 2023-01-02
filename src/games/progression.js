import getRandomNum from '../supportFunctions.js';
import gamePlay from '../index.js';

const creatingProgression = () => {
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
    const progrArray = creatingProgression();
    const hiddenIndex = getRandomNum(0, 5);
    let correctAnswer = progrArray[hiddenIndex];
    progrArray[hiddenIndex] = '..';
    const question = progrArray.join(' ');
    correctAnswer = correctAnswer.toString();
    return [question, correctAnswer];
  };
  gamePlay(gameRules, giveProgressionGameTask);
};
export default playProgressionGame;
