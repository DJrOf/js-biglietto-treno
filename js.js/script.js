const km = prompt('Quanti KM devi percorrere? (In caso di numeri decimali, usa il punto invece che la virgola)');
console.log('km: ', km)

const age = prompt('Quanti anni hai?');
console.log('age: ', age)

if (isNaN(km) || isNaN(age)){
    alert('Valori invalidi')
    if (!alert('Ricarica la pagina')) {
        window.location.reload();
     }
    }

let fullPrice = (km * 0.21);
console.log('fullPrice: ', fullPrice)

let fPrice = fullPrice.toFixed(2);
console.log(fPrice)

const minorAgePromo = (fullPrice - (fullPrice * 0.20));
console.log('minorAgePromo: ', minorAgePromo)

let minAp = minorAgePromo.toFixed(2); 
console.log('minAp: ', minAp)

const majorAgePromo = (fullPrice - (fullPrice * 0.40)) 
console.log('majorAgePromo: ', majorAgePromo)

let majAp = majorAgePromo.toFixed(2);
console.log('majAp: ', majAp)

priceElement = document.getElementById('price');

if(age < 18){

priceElement.innerText = minAp + '€';
}

if(age > 65) {
    priceElement.innerText = majAp + '€';
}

else {
    priceElement.innerText = fPrice + '€';
}

console.log('price', minAp || majAp || fPrice)