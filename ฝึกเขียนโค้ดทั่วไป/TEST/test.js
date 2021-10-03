
let mes = "NUTTAWAT";

console.log(mes.length);

eiei = mes.charAt(0);

console.log(eiei)

mes = mes.toLowerCase();

console.log(mes);









let text = "Hello world"
let newText = text.split("").map
(c=> c=="a" || c=="e" || c=="o"|| c=="u" ? c="*":c=c ).join("");

console.log(newText)



function re(str) {
return str.replace(/[aeiou]/g,'*')
}

console.log(re("hello world"));
