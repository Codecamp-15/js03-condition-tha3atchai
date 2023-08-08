//DRY Principle : Don't Repeat Yourself;

let x = +prompt("Enter number 1");
let y = +prompt("Enter number 2");
let z = +prompt("Enter number 3");

let max;
let mid;
let min;

if(x >= y && x >= z){
    // 1A : y มากกว่า z
    max = x;
    if(y > z) {
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    };

}else if (y >= x && y >= z){
    max = y;
    if(x > z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    };
    
}else if (z >= x && z >= y) {
    max = z;
    if(x > y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    };
};

console.log(`${max}, ${mid}, ${min}`);