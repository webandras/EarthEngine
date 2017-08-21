/* Ez a szkriptfájl a blogbejegyzésemben található
 * programrészleteket tartalmazza. Kódrészletenként
 * másoljátok a böngésző konzoljába és nyomjatok entert vagy a Google Earth Engine
 * kódszerkesztőjébe és futtassátok le a kódot.
 * A blogbejegyzésem címe: Rövid elméleti bevezető a JavaScript nyelvbe
 * Link: még nincs feltöltve a cikk
 * Hozzá is szólhattok a Disquis rendszeren keresztül.
 * 
 * Szerző: Gulácsi András
 * Dátum: 2017-08-05
 * GitHub: https://github.com/SalsaBoy990/EarthEngine
 * E-mail: guland@protonmail.com
 */

var valtozo = 10;
valtozo = "Helló";
var f = function (s) {
  console.log(s + ", világ!");
};
 
f(valtozo); //=> Helló, világ!
var nev = prompt("Add meg a keresztneved!");
console.log("Szia " + nev + "!");


console.log("\n");


var nev = "Juliska";
console.log(nev.toUpperCase()); //=> JULISKA
console.log(nev); //=> Juliska
nev = nev.toUpperCase();
console.log(nev); //=> JULISKA


console.log("\n");


console.log(101 === 101); //=> true
console.log(false === false); //=> true
console.log("róka" === "róka"); //=> true


console.log("\n");


var a = 3.14;
var b = a; // Az a változó értékét egy új változóba másoljuk.
a = 4; // Új értéket adunk az eredeti változónak.
alert(b) // 3.14-et ír ki, b nem változott meg.


console.log("\n");


var a = [1, 2, 3]; // Egy 3 elemű tömb létrehozása.
var b = a; // A 'b' tömb ugyanarra a tömbre hivatkozik.
a[0] = 99; // Módosítsuk az eredeti tömböt!
alert(b); // A 'b' elemei is változnak: [99, 2, 3].
console.log(a === b); //=> true: 'a' és 'b' ugyanarra a tömbre hivatkozik.


console.log("\n");


var a = [1, 2, 3];
var b = [];
for(var i = 0; i < a.length; i++) {
    b[i] = a[i];
}
console.log(a === b); //=> false: különböző tömbök sosem egyenlők.


console.log("\n");


var s = "Alma";
var o = { nev: "Alma" };

var foo = function (arg) {
    if(arg instanceof Object) { // Objektum-e az arg.
        arg.nev = "Körte";
    } else {
        arg = "Körte";
    }
};
foo(s);
foo(o);
console.log(s); //=> "Alma"
console.log(o); //=> "{ nev: "Körte" }"


console.log("\n");


var szam = 101, szoveg = " kiskutya";
/* A + operátor az n számot sztringgé konvertálja
 * és összefűzi s-sel.
 */
var eredmeny = szam + szoveg;
console.log(eredmeny); //=> 101 kiskutya

/* A '-' operátor a sztringet számmá konvertálja/castolja
 * (ha tudja, különben undefined lesz) és kivonja belőle a 10-et.
 */
var x = "62" - 10; //=> 52

// De explicite mi is végezhetünk típuskonverziót.
var y = "1500";
y = Number(y); // Számmá castoljuk a sztringet.
console.log(x + y); //=> 1552


console.log("\n");


console.log(60 == "60"); //=> true, a "60"-ból szám lesz
console.log(60 === "60"); //=> false, az egyik szám, a másik sztring
console.log(1 == true); //=> true
console.log(1 === true); //=> false, az egyik szám, a másik logikai
console.log(NaN == NaN); //=> false
console.log(NaN === NaN); //=> false

/* Ezzel a függvénnyel meghatározható, hogy
 * NaN-e a vizsgált érték. */
console.log(isNaN(NaN)); //=> true


console.log("\n");


console.log(0.1 + 0.2); //=> 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //=> false