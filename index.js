const btnRed = document.getElementById('red');
const btnYellow = document.getElementById('yellow');
const btnGreen = document.getElementById('green');
const btnAll = document.getElementById('all');


btnRed.addEventListener("click" , () =>  {
    document.getElementById('1').style.backgroundColor ='red';
    document.getElementById('2').style.backgroundColor = 'antiquewhite';
    document.getElementById('3').style.backgroundColor = 'antiquewhite';
})

btnYellow.addEventListener('click' , () => {
    document.getElementById('2').style.backgroundColor = 'yellow';
    document.getElementById('1').style.backgroundColor = 'antiquewhite';
    document.getElementById('3').style.backgroundColor = 'antiquewhite';
})

btnGreen.addEventListener('click' , () => {
    document.getElementById('3').style.backgroundColor = 'lightgreen';
    document.getElementById('2').style.backgroundColor = 'antiquewhite';
    document.getElementById('1').style.backgroundColor = 'antiquewhite';
})

btnAll.addEventListener('click' , () => {
    document.getElementById('3').style.backgroundColor = 'antiquewhite';
    document.getElementById('2').style.backgroundColor = 'antiquewhite';
    document.getElementById('1').style.backgroundColor = 'antiquewhite';
})










