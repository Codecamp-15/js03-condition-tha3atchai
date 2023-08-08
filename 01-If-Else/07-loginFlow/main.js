// - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
// - หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
// - หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
// - หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”

let username = prompt("Enter your username");
let password = prompt("Enter your username");

if(username === null || isNaN(username) && password === null || isNaN(password) ) {
    console.log("invalid username or password");
}else if(username.trim() === "" || password.trim() === ""){
    console.log("username is required");
}else if((username === "admin" && password === "1234") || (username === "john" && password === "qwerty")){
    console.log("Hello");
}else {
    console.log("invalid username or password");
};