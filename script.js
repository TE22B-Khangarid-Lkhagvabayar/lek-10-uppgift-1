// variabeln för den andra och första talen
const tal1 = document.querySelector("#tal1");
const tal2 = document.querySelector("#tal2");
const svar = document.querySelector("#svar");

// funktionen för addition
function plus()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 +tal2; // matte lösningen
    svar.value = summa; // svar
}

// funktionen för subtraktion
function minus()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 - tal2;
    svar.value = summa;
}

// funktionen för multiplikation
function multi()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 * tal2;
    svar.value = summa;
}

// fumktionen för division
function divi()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 / tal2;
    svar.value = summa;
}