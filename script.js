const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {

    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * degree;
    let ss = date.getSeconds() * degree;
    
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});