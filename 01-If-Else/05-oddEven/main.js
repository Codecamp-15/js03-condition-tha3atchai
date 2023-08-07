// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
// - ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”

let num = +prompt("input your number :");

num % 2 === 0 ? console.log("Even number") : console.log("Odd number");