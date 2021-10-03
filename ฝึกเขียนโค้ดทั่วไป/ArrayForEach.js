
let person = ['winner','nut','jack','jajar'];


console.log(person);

person.forEach((persons)=> {       //person = อันเลย์ทีละช่อง
    console.log(persons.length); 
    console.log ('=');
    console.log (person.length);
});

console.log(person);

let count = 0;

person.forEach((persons)=> {   
       
    if (persons==='jajar'){
        console.log(count);
        person[count]='jajah';
    }
    count++;
});

console.log(person);


///////////////////////////////////////////////////////////////////

 let scores = [82,75]
