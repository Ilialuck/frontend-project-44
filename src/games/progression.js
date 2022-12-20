import getRandomNum from '../randomNumber.js';
import gamePlay from '../index.js';

const progressionGame = () => {
  const gameRules = 'What number is missing in the progression?';

  const taskOfProgressionGame = () => {
    // создание прогрессии
    const creatingProgression = () => {
      const startNum = getRandomNum(15);
      const stepNum = getRandomNum(15);
      const progressionLength = 10;

      const progressionNumbers = [startNum];
      for (let i = 0; i < progressionLength; i += 1) {
        progressionNumbers.push(progressionNumbers[i] + stepNum);
      }
      return progressionNumbers;
    };

    // работа с прогрессией
    const progrArray = creatingProgression();
    const hiddenIndex = getRandomNum(9); // определяем какой элемент прогрессии будет скрыт
    let correctAnswer = progrArray[hiddenIndex]; // записываем скрытый элемент в правильный ответ
    progrArray[hiddenIndex] = '..';
    const question = progrArray.join(' ');
    correctAnswer = correctAnswer.toString();
    return [question, correctAnswer];
  };
  gamePlay(gameRules, taskOfProgressionGame);
};
export default progressionGame;
