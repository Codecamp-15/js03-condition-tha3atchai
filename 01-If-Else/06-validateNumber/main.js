// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let num1 = prompt("input number 1: ");
let num2 = prompt("input number 2: ");


if ((num1 === null || num1.trim() === "" || isNaN(num1)) || (num2 === null || num2.trim() === "" || isNaN(num2))){
    alert("Invalid Number");
} else {
    console.log(+num1 + +num2);
    alert(+num1 + +num2);
};
