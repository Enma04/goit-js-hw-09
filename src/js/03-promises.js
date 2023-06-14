import Notiflix from 'notiflix';

/*
Notiflix simple messages:
-------------------------------

Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');
*/

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnStart = document.querySelector("button");
let promiseArray = [];



function fillArray() {
  let increment = step;
  for(let i=1; i<=amount; i+=1) {
    promiseArray.push(createPromise(i, increment));
    increment += step;
  }
}

function createPromise(position, step) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, step); //setTimeout
  }); //promise
} //function


btnStart.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Luego de 3 segundos");
    fillArray();
  }, delay);

  Promise.all(promiseArray)
  .then((text) => console.log(text))
  .catch((text) => console.log(text));

});




