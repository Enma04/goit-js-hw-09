// Descrito en la documentación
import flatpickr from "flatpickr";
// Importación adicional de estilos
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

/*
Notiflix simple messages:
-------------------------------

Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');
*/


//--------------------------------------------------
//------------------- VARIABLES
const inputFecha = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button[data-start]");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if( new Date(selectedDates).getTime() > new Date().getTime() ) {
      Notiflix.Notify.success('Ok!');
    }
    else {
      Notiflix.Notify.failure('La fecha debe ser superior a la actual!');
    }
    console.log("onClose():", selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);



//--------------------------------------------------
//------------------- FUNCIONES
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
  if(value <= 9) {
    return `0${value}`;
  }
  return `${value}`;
}

//--------------------------------------------------
//------------------- IMPLEMENTACION

//Verificamos si la fecha ingresada es mayor que la fecha actual,
//cada 400 ms, para habilitar o no el boton
setInterval(() => {
  if( new Date(inputFecha.value).getTime() > new Date().getTime() ) {
    btnStart.disabled = false;
  }
  else {
    btnStart.disabled = true;
  }
}, 400);

//Cuando se presiona el botón, se crea un intervalo de tiempo
//para actualizar la cuenta regresiva
btnStart.addEventListener("click", () => {
  //Convierto la fecha en milisegundos
  setInterval(() => {
    let data = convertMs(new Date(inputFecha.value).getTime() - new Date().getTime());
    
    document.querySelector("span[data-days]").textContent = addLeadingZero(data.days);
    document.querySelector("span[data-hours]").textContent = addLeadingZero(data.hours);
    document.querySelector("span[data-minutes]").textContent = addLeadingZero(data.minutes);
    document.querySelector("span[data-seconds]").textContent = addLeadingZero(data.seconds);
  }, 1000);
});
