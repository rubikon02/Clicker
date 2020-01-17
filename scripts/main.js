let myButton = document.querySelector('#clicker');
let myPoints = document.querySelector('#points');
let myAdds = document.querySelectorAll('.add');
let add = 1;
let points;

//czy punkty są zapisane lokalnie
if(!localStorage.getItem('points')) {
    points = 0;
} else {
    points = parseInt(localStorage.getItem('points'));
    myPoints.textContent = 'Points: ' + points;
}

//główny przycisk
myButton.onclick = function() {
    points += parseInt(add);
    myPoints.textContent = 'Points: ' + points;
    localStorage.setItem('points', points);
}

//reset
document.querySelector('#reset').onclick = function() {
    points = 0;
    myPoints.textContent = 'Points: ' + points;
    localStorage.setItem('points', 0);
}

//coś z neta z akapitu niżej
for (let i = 0; i < myAdds.length; i++) {
    myAdds[i].addEventListener("click", function() {
        add = myAdds[i].getAttribute("value");
        for (let j = 0; j < myAdds.length; j++) {
            myAdds[j].className = 'add waves-effect waves-light btn'
        }
        myAdds[i].className = 'add waves-effect waves-light btn disabled'
    });
}

// var elements = document.getElementsByTagName('a');
// for (var i = 0, len = elements.length; i < len; i++) {
//   elements[i].addEventListener("click", function() {
//     setCookie("workshop", this.getAttribute("name"), "", "");
//   });    
// }
// -------------------------------------------------------------------------------------------------
// var elements = document.getElementsByTagName('a');
//    for(var i = 0, len = elements.length; i < len; i++) {
//         elements[i].onclick = setCookie("workshop", elements[i].getAttribute("name"), "", "");
//    }
// -------------------------------------------------------------------------------------------------


//na piechotę stare

// var myAdd1 = document.querySelector('#add1');
// var myAdd2 = document.querySelector('#add2');
// var myAdd3 = document.querySelector('#add3');
// var myAdd4 = document.querySelector('#add4');
// var myAdd5 = document.querySelector('#add5');

// myAdd1.onclick = function() {
//     add = myAdd1.getAttribute('value');
// }

// myAdd2.onclick = function() {
//     add = myAdd2.getAttribute('value');
// }

// myAdd3.onclick = function() {
//     add = myAdd3.getAttribute('value');
// }

// myAdd4.onclick = function() {
//     add = myAdd4.getAttribute('value');
// }

// myAdd5.onclick = function() {
//     add = myAdd5.getAttribute('value');
// }
//<3