
let person = ['winner','nut','jack','jajar'];


console.log(person);

person.splice(3,1,'jajah');

console.log(person);

// xxx.splice(ตำแหน่ง , จำนวนที่จะลบ , ตัวที่จะเพิ่มเข้าไป)


person.splice(3,2,'jajah1','jajah2');

console.log(person);

person.splice(2,2);   //ลบไปทางขวา

console.log(person);