// общая логика игр
import readlineSync from 'readline-sync';

const gamePlay = (gameRules, task) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  // вывод задания
  console.log(gameRules);

  // цикл игры

  for (let i = 0; i < 3; i += 1) {
    const questionAndAnswer = task();

    console.log(`Question: ${questionAndAnswer[0]}`);

    // ответ игрока
    const userAnswer = readlineSync.question('Your answer: ');

    //
    const correctAnswer = questionAndAnswer[1];

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
export default gamePlay;
