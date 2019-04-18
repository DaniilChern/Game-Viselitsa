// игра "Виселица" с функциями. Упражнение из книги Java Script для детей. 

const pickWord = function () {
   const words = ['программа', 'макака', 'прекрасный', 'оладушек'];
   return words[Math.floor(Math.random() * words.length)];
};
const word = pickWord();
console.log(word);
const setupAnswerArray = function (word) {
   const answerArray = [];
   for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_";
   };
   return answerArray;
};
const answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
// console.log(remainingLetters);
// console.log(answerArray);

while (remainingLetters > 0) {
   const showPlayerProgress = function (answerArray) {
      alert(answerArray.join(" "));
      const getGuess = function () {
         let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
         if (guess === null) {
            showPlayerProgress(answerArray);
         } else if (guess.length !== 1) {
            alert('Пожалуйста, введите одиночную букву.');
         } else {
            const updateGameState = function (guess, word, answerArray) {
               let a = 0;
               for (let j = 0; j < word.length; j++) {
                  if (word[j] === guess) {
                     a = a + 1;
                     answerArray[j] = guess;
                  }
               };
               return a;
            };
            const correctGuesses = updateGameState(guess, word, answerArray);
            remainingLetters = remainingLetters - correctGuesses;
         }
      };
      getGuess();
   };
   showPlayerProgress(answerArray);
};
const showAnswerAndCongratulatePlayer = function (answerArray) {
   alert(answerArray.join(" "));
   alert("Отлично! Было загадано слово " + " ' " + word + " ' ");
};
showAnswerAndCongratulatePlayer(answerArray);