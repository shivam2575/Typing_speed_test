//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;

let startTime, endTime;
let timeInterval;

const startBtnEle = document.getElementById("start-btn");
const inputEle = document.getElementById("input");
const paraEle = document.getElementById("sentence");
const timerConatinerEle = document.getElementById("timer");
const resultEle = document.getElementById("result");
const retryBtnEle = document.getElementById("retry-btn");
const speedEle = document.getElementById("speed");
const accuEle = document.getElementById("accuracy");

function startTask() {
  inputEle.disabled = false;
  inputEle.focus();
  paraEle.innerText = sentences;
  startBtnEle.disabled = true;
  startTime = new Date();
  timeInterval = setInterval(updateTimer, 1000);
  setTimeout(endTask, 30000);
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const remainingTime = 30 - elapsedTime;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerConatinerEle.innerText = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function endTask() {
  clearInterval(timeInterval);
  endTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const typedSentence = inputEle.value;
  const typedWords = typedSentence.split(" ");
  const correctWords = sentences.split(" ");
  let correctWordCount = 0,
    correctCharCount = 0,
    speed = 0,
    accuracy = 0;
  typedWords.forEach((word) => {
    if (correctWords.includes(word)) {
      correctWordCount++;
      correctWords.splice(correctWords.indexOf(word), 1);
    }
  });
  speed = Math.floor((correctWordCount / 30) * 60);

  typedChars = [...typedSentence];
  correctchars = [...sentences];
  for (let i = 0; i < typedChars.length; i++) {
    if (typedChars[i] === correctchars[i]) {
      correctCharCount++;
    }
  }
  accuracy = Math.floor((correctCharCount / correctchars.length) * 100);
  speedEle.innerText = speed;
  accuEle.innerText = accuracy;
  resultEle.style.display = "block";
  retryBtnEle.focus();
}

function task3() {
  resultEle.style.display = "none";
  startBtnEle.disabled = false;
  inputEle.value = "";
}

//eventListners
startBtnEle.addEventListener("click", startTask);
retryBtnEle.addEventListener("click", task3);
