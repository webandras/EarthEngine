/* This is a Google Earth Engine tutorial for beginners
 * Author: András Gulácsi
 * Date: 2017-08-05
 * E-mail: gulandras90@gmail.com
 * GitHub: https://github.com/SalsaBoy990/EarthEngine
 */
var kliensSztring = "2017-04-01";
print(typeof kliensSztring); //=> sztring
// Az ee.Date() konstruktorát meghívjuk.
var szerverSztring = ee.Date(kliensSztring);
print(
    "Ez egy EE objektum?",
    (szerverSztring instanceof ee.ComputedObject)
); //=> igaz


// Normalizált Differenciált Vegetációindex számítása.
var addNDVIBand = function (image) {
    "use strict";
    return function (image) {
        return image.addBands(
            image.normalizedDifference(["B5", "B4"])
                .rename("NDVI")
        );
    };
};

/* Landsat 8 kollekció szűrése, NDVI számítása az
 * összes képre a map() metódussal. */
var point = ee.Geometry.Point(19.064, 47.547);
var landsat = "LANDSAT/LC8_L1T_TOA_FMASK";

var filteredCollection = ee.ImageCollection(landsat)
    .filterBounds(point)
    .filterDate("2016-08-01", "2016-08-31")
    .map(addNDVIBand(landsat))
    // Növekvő sorrend a %-os felhőborítás alapján.
    .sort("CLOUD_COVER", true);

// Az első kép leválogatása (a legkevesebb felhő).
var first = filteredCollection.first();
var landsatImage = ee.Image(first);

// A kép tulajdonságainak kiírása a konzolra.
print(landsatImage);

var studyArea = ee.Geometry.Rectangle(
    19.1223,
    46.7513,
    19.2341,
    46.8884
);

// Megjelenítési paraméterek beállítása.
var vizParams = {
    bands: ["B5", "B4", "B3"],
    min: 0,
    max: 0.5,
    gamma: 1.3
};

// A 11. piramisszinthez tartozó felbontás 76 méter!
Map.setCenter(19.17826, 46.81987, 11);

// Megjelenítés a térképnézeten.
Map.addLayer(studyArea);
Map.addLayer(
    landsatImage.clip(studyArea),
    vizParams,
    "Landsat 8 hamis színes kompozit"
);

// Az első sáv kiválasztása; vetület, lépték kiírása.
var myImage = landsatImage.select(0);
print(
    "Vetület, crs, és crs_transform:",
    myImage.projection()
);
print(
    "Felbontás méterben:",
    myImage.projection().nominalScale()
);

/* Mindig adjuk meg az eredeti felbontást!
 * A kép eredeti vetületébe (WGS 84 / UTM) menti. */
Export.image.toDrive({
    image: landsatImage.select("NDVI"),
    description: "NDVI_image",
    scale: 30,
    region: studyArea
});