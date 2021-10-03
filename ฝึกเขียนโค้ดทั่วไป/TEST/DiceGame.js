function person (name) {
    this.name = name;
    let CountTroll = [];  // number
    let resultOfRound =[]; //win or lose
    let pointSolution = 0;

    this.TrollDice = function(){
        resultDice =  Math.floor(Math.random() * 6)+1;
        CountTroll.push(resultDice);
        
        return resultDice;
    }

    this.CheckPerson = function(){
        return name + "\n" + CountTroll
    }

    this.AddRoundWin = function(){
       resultOfRound.push("WIN");
       pointSolution++;
    }
    this.AddRoundLose = function(){
        resultOfRound.push("LOSE");
     }
     this.AddRoundDraw = function(){
        resultOfRound.push("Draw");
     }

    this.CheckresultOfRound = ()=> resultOfRound;
    this.CheckreCountTroll= ()=> CountTroll;
    this.CheckpointSolution= ()=> pointSolution;
    this.CheckName= ()=> name;

    this.CheckPerson = function(){
        console.log(name);
        console.log(CountTroll);
        console.log(resultOfRound);
     }
}

function ComparePerson (person1,person2,round) {
         person1.TrollDice();
        person2.TrollDice();
        this.round = round;
        roundNew = round+1;
        CheckresultOfRound1 = person1.CheckreCountTroll();
        CheckresultOfRound2 = person2.CheckreCountTroll();
        
        

        if(CheckresultOfRound1[round] > CheckresultOfRound2[round] ){
            person1.AddRoundWin();
            person2.AddRoundLose();
            return "round : "+roundNew + " : " + person1.name + " win "
        }

        if(CheckresultOfRound1[round] < CheckresultOfRound2[round] ){
            person2.AddRoundWin();
            person1.AddRoundLose();
            return "round : "+roundNew + " : " + person2.name + " win "
        }
        person1.AddRoundDraw();
        person2.AddRoundDraw();

        return "round : "+round + ": draw" 
        
        
}


function play (round,person1,person2) {

    let resultGame = [];
    

    

       
      let count=0;
        

        for (let index = 0; index < round; index++) {
            
            
           
            compare = ComparePerson(person1,person2,count)
            resultGame.push(compare);
            console.log("               ")
            console.log("####ROUND" + index +"####")
             console.log(compare);
            console.log("------------------------")
            console.log("               ")
            count++;
        }


        console.log(resultGame);

        if(person1.CheckpointSolution() > person2.CheckpointSolution()){
            console.log("               ")
            console.log("==============================================")
            console.log(`============== ${person1.name} WIN !!! ==============`)
            console.log("==============================================")
            console.log("               ")
        }else
        console.log("               ")
        console.log("==============================================")
        console.log(`============== ${person2.name} WIN !!! ==============`)
        console.log("==============================================")
        console.log("               ")
    

}



let person1 = new person("nut");
let person2 = new person("winner");

play(3,person1,person2);

person1.CheckPerson();