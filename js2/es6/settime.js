let c =parseFloat(process.argv[2]);
let d =parseFloat(process.argv[3]);
console.log(c);
console.log(d);
function fnSum(a,b){
   let sum = a+b
   console.log(sum);
}
setTimeout(() => fnSum(c,d),1000)