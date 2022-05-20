const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)

const hTagai1 = document.createElement('h2')
hTagai1.innerHTML = '';
document.body.appendChild(hTagai1)
const hTagai2 = document.createElement('h2')
hTagai2.innerHTML = '';
document.body.appendChild(hTagai2)
const btTagai = document.createElement('button')
btTagai.innerHTML = '';
document.body.appendChild(btTagai)

//  a.  Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį
// įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)

//b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. 
// Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. 


const h2 = document.querySelectorAll('h2') 
btTagai.classList.add('btn');
btTagai.addEventListener('click', () => {
    hTagai1.innerHTML= rand(1, 6);
    hTagai2.innerHTML= rand(1, 6);
    if (hTagai1.innerHTML == hTagai2.innerHTML) {
        hTagai1.style.color = 'red'
        hTagai2.style.color = 'red'
    }else {
        hTagai1.style.color = 'black'
        hTagai2.style.color = 'black'
    }
})




/*2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. 
Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite 
į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai) */

const h3Tag = document.createElement('h3');
h3Tag.innerHTML = [];
document.body.appendChild(h3Tag);

const bt2Tagai = document.createElement('button')
bt2Tagai.innerHTML = '';
document.body.appendChild(bt2Tagai);
bt2Tagai.classList.add('btn');
//a.
const h3 = document.querySelector('h3');
bt2Tagai.addEventListener('click', () => { 
     h3.innerHTML += rand(1, 10);
     console.log(h3);
    
     for (let i = 0; i < h3.length; i++) {
        let suma = 0;
        suma = h3.innerHTML[i] + h3.innerHTML[i] 
        document.querySelector('h3').innerText=suma;
        console.log(suma);
     }
     
      
     
})






/*
3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą africa. (4 taškai)
b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
 */

const gyv = document.querySelector('ul')
function addE () {
    // create a new div element
    const newLi = document.createElement("li");
}




/*4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
Pasirinkite patys sau patogiausius metodus tai atlikti. */

const h5 = document.querySelector('h5');
const pirInput = document.getElementById('#pirmas');
const antrInput = document.getElementById('#antras');

document.getElementById('sum').addEventListener('click', (a, b) => {
    pirInput.innerHTML = a;
    antrInput.innerHTML = b;
    rez = a + b;
    h5.innerHTML = rez;
    console.log(h5);
    
})




/*5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai) */

const strin = document.createElement('li');

const aust = [...australia]
console.log(aust);