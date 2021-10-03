function person (name) {
    this.name = name;
    let CountTroll = [];  // number
    let resultOfRound =[]; //win or lose


    this.TrollDice = function(){
        resultDice =  Math.floor(Math.random() * 6)+1;
        CountTroll.push(resultDice);
        
        return resultDice;
    }

    this.CheckPerson = function(){
        return name + "\n" + CountTroll
    }

    this.AddRound = function(){
        return name + "\n" + CountTroll
    }

    this.CheckresultOfRound = ()=> resultOfRound;
    this.CheckreCountTroll= ()=> CountTroll;
}

function ComparePerson (person1,person2,round) {
        this.round = round;
        roundNew = round+1;
        CheckresultOfRound1 = person1.CheckreCountTroll();
        CheckresultOfRound2 = person2.CheckreCountTroll();
        

        if(CheckresultOfRound1[round] > CheckresultOfRound2[round] ){
            return "round : "+roundNew + " : " + person1.name + " win "
        }

        if(CheckresultOfRound1[round] < CheckresultOfRound2[round] ){
            return "round : "+roundNew + " : " + person2.name + " win "
        }

        return "round : "+round + ": draw" 
        
        
}


function play (round,person1,person2) {

    let resultGame = [];
    let roundtest = 0;

    this.ReultCal = function(person1,person2,roundtest) {

       compare = ComparePerson(person1,person2,roundtest);
        resultGame.push(compare);
        return compare;
    }

}



let person1 = new person("nut");
let person2 = new person("winner");
console.log(person1.TrollDice())
console.log(person2.TrollDice())

console.log(ComparePerson(person1,person2,0))