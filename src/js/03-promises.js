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


function createPromise(position, step) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("success!");
      } else {
        reject("error!");
      }
    }, step); //setTimeout
  }); //promise
} //function


btnStart.addEventListener("click", () => {
  console.log("delay: ", delay);
  console.log("step: ", step);
  console.log("amount: ", amount);

  setTimeout(() => {
    for(let i=1; i<=amount; i+=1) {
      createPromise(i, step)
      .then(({position, delay}) => console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({position, delay}) => console.log(`❌ Rejected promise ${position} in ${delay}ms`));
    }
  }, delay);
});


