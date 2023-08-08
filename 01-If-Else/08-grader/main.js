// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let score = 29;

if(score >= 80){
    console.log("A");
}else if(score >= 70) {
    console.log("B");
}else if(score >= 60) {
    console.log("C");
}else if(score >= 50) {
    console.log("D");
}else {
    console.log("F");
};