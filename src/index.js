// общая логика игр
import readlineSync from 'readline-sync';

const playGame = (gameRules, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const questionAndAnswer = task();

    console.log(`Question: ${questionAndAnswer[0]}`);

    const userAnswer = readlineSync.question('Your answer: ');

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
export default playGame;
