//ทุกข้อมูลต้องผ่านเงื่อนไข ถึง true

let scores = [82,75,48,64,36];

let AllPass = scores.every(score=>score>50);

console.log(AllPass)