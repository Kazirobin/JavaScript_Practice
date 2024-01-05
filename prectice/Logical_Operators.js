const hasLicense = true;//A
const goodVision = true;//B
const badVision = false;//C
const shouldDrive = false;//D
const isTired = true;//F
console.log((hasLicense + goodVision + shouldDrive) >= 2);
/*
console.log(hasLicense && goodVision);//true  && true = true
console.log(badVision && goodVision);//false  && true = false
console.log(badVision || goodVision);//false  || true = true
console.log(badVision || shouldDrive);//false  || false = false
console.log(!hasLicense);// if you want to covert a true value to false then you can use "!" 
*/