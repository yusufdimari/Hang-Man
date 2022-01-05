let names = ["yusuf", "muhammad", "fatima", "zainab"];
const leng = names.length;
let lives = 5;
let Word = [];
let word = [];
let ans = [];

const live = document.querySelector(".lives-count");

const session = () => {
  let temp = [];
  const q = prompt("enter a letter");
  for (let i = 0; i < word.length; i++) {
    if (word[i] == q) {
      Word.forEach((w, index) => {
        if (w == word[i]) {
          ans[index] = word[i];
          const input = document.querySelector(`.l${index + 1}`);
          input.innerHTML = ans[index];
        }
      });
      console.log(ans);
      continue;
    } else {
      temp.push(word[i]);
    }
  }
  if (word.length == temp.length) {
    lives -= 1;
  } else {
    word = temp;
  }
  console.log(word, lives);
  live.innerHTML = lives;
};

const load = () => {
  const x = Math.floor(Math.random() * leng);
  let temp = names[x];
  for (let i = 0; i < temp.length; i++) {
    Word.push(temp[i]);
    ans.push("");
  }
  live.innerHTML += lives;
  word = Word;
  console.log(Word);
  setFields();
};

const handleClick = () => {
  if (lives > 0 && word.length > 0) {
    session();
  }
};
const setFields = () => {
  const ul = document.querySelector(".word-list");
  word.forEach((word, index) => {
    let html = `<li class="letter  l${index + 1}"></li>`;
    ul.innerHTML += html;
  });
};

window.onload = load();
