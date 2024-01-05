/*
const scoreDolphins = (96 +108 +89) / 3
const scoreKoalas = (93 +91 +110) / 3
console.log(scoreDolphins , scoreKoalas);
if(scoreDolphins > scoreKoalas){console.log("dolphin win the trophy" );}
else if(scoreDolphins < scoreKoalas){console.log("Koalas win the trophy" );}
else if(scoreDolphins === scoreKoalas){console.log("draw" );}
*/
/*
*/
const scoreDolphins = (19 +95 +13) / 3 //103.33
const scoreKoalas = (109 +95 +132) / 3 //109
console.log(scoreDolphins , scoreKoalas);
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){console.log("dolphin win the trophy" );}
else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){console.log("Koalas win the trophy" );}
else if(scoreDolphins === scoreKoalas && scoreDolphins <= 100 && scoreKoalas <= 100){console.log("draw" );}
else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){console.log("continue game");}
else{console.log("continue game");}
