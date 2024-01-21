const arr = [
    "robin",
    "mirpur",
    true,
    true,
    1995,
    88017
]
console.log(arr.length);
for (let i = 0; i < arr.length ; i++){

    if (typeof arr[i] !== 'string') continue

        console.log(arr[i]);
    
}