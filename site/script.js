var btn1 = document.querySelector('#button1');
var btn2 = document.querySelector('#button2');
var btn3 = document.querySelector('#button3');
var contB = document.querySelector('.contB');
var contC = document.querySelector('.contC');
var contD = document.querySelector('.contD');


btn1.addEventListener('click', function(){

    if(contB.style.display === 'block') {
        contB.style.display = 'none'
        contC.style.display = 'block'
        contD.style.display = 'none'
    }else{
        contB.style.display = 'block'
        contC.style.display = 'none'
        contD.style.display = 'none'
        
    }

});

btn2.addEventListener('click', function(){

    if(contC.style.display === 'block') {
        contC.style.display = 'none'
        contD.style.display = 'none'
        contB.style.display = 'block'
    }else{
        contC.style.display = 'block'
        contB.style.display = 'none'
        contD.style.display = 'none'
    }

});

btn3.addEventListener('click', function(){

    if(contD.style.display === 'block') {
        contC.style.display = 'none'
        contB.style.display = 'block'
        contD.style.display = 'none'
    }else{
        contD.style.display = 'block'
        contC.style.display = 'none'
        contB.style.display = 'none'
        
        
    }

});







