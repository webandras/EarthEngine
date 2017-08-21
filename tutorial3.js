/* 3. példa: Objektum literál, tulajdonságok és metódusok. */
var square = function (x) {
    return x * x;
};
console.log("A megadott szám négyzete: " + square(200));

var point = {
  x: 0,
  y: 0,
  print_1: function () {
     console.log("x: " + point.x + ", y: " + point.y);
  } 
};

point.print_2 = function () {
  console.log("x: " + point.x + ", y: " + point.y);
};
point.x = 5, point.y = 15;
point.print_1(); //=> x: 5, y: 15



console.log("\n");



/* 4. példa: Függvény szintaxis, konstruktor és osztály. */
/* Ezzel felüldefináltuk a square()
 * előző függvénydefinícióját.
 * */
function square (x) {
    return x * x; 
}
console.log("A megadott szám négyzete: " + square(200));

/* Ez egy pont osztály konstruktora. */
function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.print = function () {
        console.log("x: " + point.x + "y: " + point.y);
    };
}
/* A prototípus objektumhoz hozzáadunk egy függvényt.
 * A pont osztályuk a prototípustól öröki ezt a függvényt.
 */
Point.prototype.add = function() {
    return this.x + this.y;
};

/* Az osztály példányosítása: egy változóban
 * eltároljuk az objektumot.
 */
var coordinate = new Point(10, 20);



console.log("\n");



/* 5. példa: A tömbök bemutatása. */
var ures_tomb = [];
var tomb = [1, 2, 3, 4, 5];
console.log(tomb[0]);

// Elemek hozzáadása a tömb végére.
tomb.push(-200, 1552, 9999);
tomb.pop(); // Az utolsó elem törlése.

/* A tömb elemeinek kiíratása. */
for (var i = 0; i < tomb.length; i++) {
    console.log("A tömb " + (i+1) + ". eleme: " + tomb[i]);
}
console.log("\n");

/* Ezzel a 4. index utáni elemeket törlöm. */
tomb.length = 4;

/* Ugyanaz, mint az előző, csak for in ciklussal. */
var temp;
for (var p in tomb) {
  temp = Number(p)+1; // Számmá kellett konvertálni.
  console.log("A tömb " + temp + ". eleme: " + tomb[p]);
}



console.log("\n");



/* 6. példa: Tömbszerű objektumok. */
var a = {}; // Üres objektum.
var i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
/* A tömböknek van hossz tulajdonsága.
 * Itt is létrehozzuk egy tulajdonságot. */
a.length = i;

var osszeg = 0;
for (var j = 0; j < a.length; j++) {
  osszeg += a[j];
}
console.log(osszeg);

/* Az objektum tulajdonságok elérése történhet a
 * .tulajdonsag és a ["tulajdonsag"] szintaxissal is.
 */
for (var prop in a) {
    console.log(prop + " = " + a[prop]);
}
// Figyeljétek meg, hogy a length tulajdonságot is kiírja!

 /* a 4. példában szereplő objektum. */
coordinate["x"] = 100;
coordinate.y = 25;
console.log(coordinate.add()); //=> 125



console.log("\n");



/* 7. példa: Kóstoló a funkcionális programozásba.
 * a map() függvény meghívja a zárójelben található
 * függvényt a tömb összes elemére */

var tomb = [1, 2, 3, 5, 8, 13];
var ketszeresTomb = tomb.map(function (x) { return x * x; });
ketszeresTomb.kiiratas = function () {
    "use strict";
    for (var i = 0; i < this.length; i++) {
        console.log("\"" + i +"\"" + ": " + this[i]);
    }
};
ketszeresTomb.kiiratas();



console.log("\n");



/* 8. példa: Alapstatisztikák (összeg, átlag, min, max)
 * számítása egy csak számokat tartalmazó egydimenziós tömbön,
 * funkcionális programozást alkalmazva.
 */
var arr = [1, 2, 3, 4, 5];
// Ez a függvény csak egyszer használható.
var base_stats = function (array_1D) {
    "use strict";
    // ! array_1D instanceof Array
    if (!Array.isArray(array_1D) ) {
        throw "Rossz bemenet. A megadott argumentum nem tömb!";
    }
    var sum = function (x, y) { return x + y; };
    var min = function (x, y) { return (x < y) ? (x): (y) };
    var max = function (x, y) { return (x > y) ? (x): (y) };

    var obj = array_1D.length
        ? {
            sum: array_1D.reduce(sum),
            mean: array_1D.reduce(sum) / array_1D.length,
            min: array_1D.reduce(min),
            max: array_1D.reduce(max)
        }
        : undefined;
    return obj;
}(arr); // A függvényt rögtön meg is hívom.

var classOf = function (o) {
    if (o === null) { return "Null"; }
    if (o === undefined) { return "Undefined"; }
    return Object.prototype.toString.call(o).slice(8, -1);
};

/* Az eredményeket kiíró általános függvény */
var print_obj = function (o) {
    // o instanceof Object
    if (classOf(o) === "Object" || classOf(o) === "Array") {
        for (var p in o) {
            console.log("\"" + p + "\"" + ": " + o[p]);
        }
    } else {
        console.err("A megadott argumentum nem objektum/tömb!");
    }
};
print_obj(base_stats);
// És mi történik, ha a tömbre hívom meg?
print_obj(arr);
// Mit bizonyít ez? Erre már tudni kell a választ.
