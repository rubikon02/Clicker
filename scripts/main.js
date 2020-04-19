let myButton = document.querySelector('#clicker');
let myReset = document.querySelector('#reset');
let myPoints = document.querySelector('#points');
let myAdds = document.querySelectorAll('.add');
let myShop = document.querySelectorAll('a.cena');
let add = 1;
let points;
let shop = new Array(myShop.length);


//wczytanie punktów zapisanych lokalnie
if(localStorage['points'] != null) {
    points = parseInt(localStorage.getItem('points'));
    myPoints.textContent = points;
} else {
    points = 0;
}

//wczytanie sklepu zapisanego lokalnie
if(localStorage['shop'] != null) {
    shop = JSON.parse(localStorage.getItem('shop'));
    for (let i = 0; i < shop.length; i++) {
            if (shop[i] == 1) {
                myAdds[i].classList.remove('disabled');
                myShop[i].classList.add('disabled');
            }
        }
} else {
    shop.fill(0);
    localStorage.setItem('shop', JSON.stringify(shop))
}

// wczytanie mnożnika kliknięcia zapisanego lokalnie
if(localStorage['selectedClick'] != null) {
    setClickValue(localStorage.getItem('selectedClick'));
} else {
    setClickValue(0)
}

//główny przycisk
myButton.onclick = function() {
    points += parseInt(add);
    myPoints.textContent = points;
    localStorage.setItem('points', parseInt(points));
}

//reset
myReset.onclick = function() {
    points = 0;
    myPoints.textContent = points;
    localStorage.setItem('points', 0);
    localStorage.removeItem('shop')
    add = 1;
    for (let i = 1; i < myShop.length; i++) {
        myAdds[i].classList.add('disabled');
        myShop[i].classList.remove('disabled');
        setClickValue(0);
    }
}

// wybór mnożnika kliknięcia w localstorage
function setClickValue(i) {
    myAdds.forEach(function(entry) {
        entry.classList.remove('deep-orange', 'lighten-1');
    });
    myAdds[i].classList.add('deep-orange', 'lighten-1');
    add = myAdds[i].getAttribute("value");
    localStorage.setItem('selectedClick', i);
}

//wybór mnożnika kliknięcia
for (let i = 0; i < myAdds.length; i++) {
    myAdds[i].addEventListener("click", function() {
        setClickValue(i);
    });
}

//sklep z lepszymi klikami
for (let i = 0; i < myShop.length; i++) {
    myShop[i].addEventListener("click", function() {
        if (points >= myShop[i].getAttribute("value")) {
            points -= myShop[i].getAttribute("value");
            myPoints.textContent = points;
            myAdds[i].classList.remove('disabled');
            myShop[i].classList.add('disabled');

            // zapisanie stanu sklepu w localstorage
            shop = JSON.parse(localStorage.getItem('shop'));
            shop[i] = 1;
            localStorage.setItem('shop', JSON.stringify(shop));
        }
    });
}