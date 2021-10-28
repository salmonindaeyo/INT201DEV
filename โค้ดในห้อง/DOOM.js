const test = document.querySelector("#Section2 .group8");

test.textContent = "group 8 hello" ;

let attr = document.createAttribute("style");

attr.value = "color:red";

test.setAttributeNode(attr);


//console.log(test.nextElementSibling);

const test2 = document.querySelector("#Section2");

let current = test2.firstElementChild;
current = current.firstElementChild;
current = current.nextElementSibling;
current = current.nextElementSibling;
current = current.nextElementSibling;
current = current.nextElementSibling;
current = current.nextElementSibling;
current = current.nextElementSibling;
current = current.nextElementSibling;
current = current.nextElementSibling;
current.textContent="eieieieieei";
newCurrent = current.nextElementSibling;;
newCurrent.textContent="nujtnututut";
console.log(current);