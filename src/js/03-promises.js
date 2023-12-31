import Notiflix from 'notiflix';

/*
Notiflix simple messages:
-------------------------------

Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');
*/

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const btnStart = document.querySelector("button");



function createPromise(position, pasos){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${pasos} ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${pasos} ms`);
      }
    }, pasos); //setTimeout
  }); //promise
} //function


btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  let delay = parseInt(delayInput.value);
  let step = parseInt(stepInput.value);
  let amount = parseInt(amountInput.value);
  let prom = null;

  let increment = step + delay;

  for(let i=1; i<=amount; i+=1) {
    let prom = (createPromise(i, increment));
    prom
      .then(resolved => Notiflix.Notify.success(resolved))
      .catch(error => Notiflix.Notify.failure(error));
    increment += step;
  }
});

