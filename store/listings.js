const listings = [
  
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;
/////////countries/////
const getAlabama = () => listings.filter(listing => listing.categoryId === 1);
const getAlaska = () => listings.filter(listing => listing.categoryId === 2);
const getArizona = () => listings.filter(listing => listing.categoryId === 3);
const getCalifornia = () => listings.filter(listing => listing.categoryId === 4);
const getColorado = () => listings.filter(listing => listing.categoryId === 5);
const getConnecticut = () => listings.filter(listing => listing.categoryId === 6);

const getDelaware = () => listings.filter(listing => listing.categoryId === 7);
const getFlorida = () => listings.filter(listing => listing.categoryId === 8);
const getGeorgia = () => listings.filter(listing => listing.categoryId === 9);
const getHawaii = () => listings.filter(listing => listing.categoryId === 10);
const getIdaho = () => listings.filter(listing => listing.categoryId === 11);
const getIllinois = () => listings.filter(listing => listing.categoryId === 12);

const getIndiana = () => listings.filter(listing => listing.categoryId === 13);
const getLowa = () => listings.filter(listing => listing.categoryId === 14);
const getkansas = () => listings.filter(listing => listing.categoryId === 15);
const getKentucky = () => listings.filter(listing => listing.categoryId === 16);
const getLouisiana = () => listings.filter(listing => listing.categoryId === 17);
const getMaine = () => listings.filter(listing => listing.categoryId === 18);

const getMaryland = () => listings.filter(listing => listing.categoryId === 19);
const getMassachusetts = () => listings.filter(listing => listing.categoryId === 20);
const getMichigan = () => listings.filter(listing => listing.categoryId === 21);
const getMinnesota = () => listings.filter(listing => listing.categoryId === 22);
const getMississippi = () => listings.filter(listing => listing.categoryId === 23);
const getMissouri = () => listings.filter(listing => listing.categoryId === 24);

const getMontana = () => listings.filter(listing => listing.categoryId === 25);
const getNebraska = () => listings.filter(listing => listing.categoryId === 26);
const getNevada = () => listings.filter(listing => listing.categoryId === 27);
const getNewhampshire = () => listings.filter(listing => listing.categoryId === 28);
const getNewjersey = () => listings.filter(listing => listing.categoryId === 29);
const getNewmexico = () => listings.filter(listing => listing.categoryId === 30);

const getNewyork = () => listings.filter(listing => listing.categoryId === 31);
const getNorthcarolina = () => listings.filter(listing => listing.categoryId === 32);
const getNorthdakota = () => listings.filter(listing => listing.categoryId === 33);
const getOhio = () => listings.filter(listing => listing.categoryId === 34);
const getOklahoma = () => listings.filter(listing => listing.categoryId === 35);
const getOregon = () => listings.filter(listing => listing.categoryId === 36);

const getPennsylvania = () => listings.filter(listing => listing.categoryId === 37);
const getRhodeisland = () => listings.filter(listing => listing.categoryId === 38);
const getSouthcarolina = () => listings.filter(listing => listing.categoryId === 39);
const getSouthdakota = () => listings.filter(listing => listing.categoryId === 40);
const getTennessee = () => listings.filter(listing => listing.categoryId === 41);
const getTexas = () => listings.filter(listing => listing.categoryId === 42);

const getUtah = () => listings.filter(listing => listing.categoryId === 43);
const getVermont = () => listings.filter(listing => listing.categoryId === 44);
const getVirginia = () => listings.filter(listing => listing.categoryId === 45);
const getWashington = () => listings.filter(listing => listing.categoryId === 46);
const getWestvirginia = () => listings.filter(listing => listing.categoryId === 47);
const getWisconsin = () => listings.filter(listing => listing.categoryId === 48);
const getWyoming = () => listings.filter(listing => listing.categoryId === 49);


///////////////////////////////

const deleteListing = (categoryId) => listings.find((listing) => listing.categoryId === categoryId);

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
  deleteListing,

 getAlabama,
getAlaska,
getArizona,
getCalifornia,
getColorado,
getConnecticut,
getDelaware,
getFlorida,
getGeorgia,
 getHawaii,
 getIdaho,
 getIllinois,

 getIndiana,
 getLowa,
 getkansas,
 getKentucky ,
 getLouisiana,
 getMaine,

 getMaryland,
 getMassachusetts,
 getMichigan,
 getMinnesota,
 getMississippi,
 getMissouri,

 getMontana,
getNebraska,
getNevada,
 getNewhampshire,
 getNewjersey,
 getNewmexico,
 getNewyork,
 getNorthcarolina,
 getNorthdakota,
 getOhio,
 getOklahoma,
 getOregon,

 getPennsylvania,
 getRhodeisland,
 getSouthcarolina,
 getSouthdakota ,
 getTennessee,
 getTexas,

 getUtah,
 getVermont,
 getVirginia,
 getWashington,
 getWestvirginia,
 getWisconsin,
 getWyoming,

};
