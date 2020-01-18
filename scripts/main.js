let myButton = document.querySelector('#clicker');
let myReset = document.querySelector('#reset');
let myPoints = document.querySelector('#points');
let myAdds = document.querySelectorAll('.add');
let myShop = document.querySelectorAll('a.cena');
let add = 1;
let points;

//wczytanie punktów zapisanych lokalnie
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
myReset.onclick = function() {
    points = 0;
    myPoints.textContent = 'Points: ' + points;
    localStorage.setItem('points', 0);
    add = 1;
    for (let i = 1; i < myShop.length; i++) {
        myAdds[i].classList.add('disabled');
        myShop[i].classList.remove('disabled');
    }
}

//wybór lepszego kliku
for (let i = 0; i < myAdds.length; i++) {
    myAdds[i].addEventListener("click", function() {
        add = myAdds[i].getAttribute("value");
    });
}

//sklep z lepszymi klikami
for (let i = 0; i < myShop.length; i++) {
    myShop[i].addEventListener("click", function() {
        if (points >= myShop[i].getAttribute("value")) {
            points -= myShop[i].getAttribute("value");
            myPoints.textContent = 'Points: ' + points;
            myAdds[i].classList.remove('disabled');
            myShop[i].classList.add('disabled');
        }
    });
}