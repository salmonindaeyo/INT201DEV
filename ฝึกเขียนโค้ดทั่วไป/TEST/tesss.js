let reverse = "";
function reverseString(value) {
  for (let index = value.length - 1; index >= 0; index--) {
    reverse += value[index];
  }
  return reverse;
}
// console.log(reverseString("kanyapat"));

let buffer = "";
function replaceVowel(value) {
  for (let i = 0; i < value.length; i++) {
    buffer += value[i].replace(/a|e|i|o|u/gi,'*');
  }return buffer;
} 
// console.log(replaceVowel("Kanyapat Wittayamanitkul"));

let count = 0;
function countVowel(value){
    for (let i = 0; i < value.length; i++) {
        if(value[i] == 'a' ||value[i] == 'e'||value[i] == 'i'||value[i] == 'o'||value[i] == 'u'){
            count++
        }
    }return count;
}
// console.log(countVowel('kianyapat'))

function menu(numOfMenu,value){
    if(numOfMenu==1){
        return reverseString(value) ;
        
    }else if(numOfMenu==2){
       return  replaceVowel(value);
    }else if(numOfMenu==3){
        return   countVowel(value);
    }else{
        return 'ไม่มีเมนูดังกล่าว';
    }
}
console.log(menu(2,'hahahaha'));