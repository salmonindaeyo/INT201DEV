function question (ques,anw,anwReal){

    this.ques = ques;
    this.anw = anw;
    this.anwReal = anwReal;

}

function person (name){

    this.name = name;
    this.point = 0;
    point = 0;
    let AllQues = [];
    let AllAnws = [];
    let CheckAnws =[];

    this.play = function (question,playerAnw)  {

        AllQues.push(question.ques)
        AllAnws.push(playerAnw)
        
        if(question.anwReal == playerAnw) {
            point++;
            CheckAnws.push(1);
            return "true"
        }
      
        CheckAnws.push(0);
        return "fail"
    };

    this.CheckPoint = ()=> point;
    this.CheckQues = ()=> AllQues;
    this.CheckAnws = ()=> AllAnws;
}

function CheckPerson (person) {

    console.log("name :" + person.name);
    console.log("score :" + person.CheckPoint());
    console.log("question :" + person.CheckQues())
    console.log("person.anwser :" + person.CheckAnws())
    
}




let ques1 = new question("what is value of one",[1,2,3,4,5],1);
let ques2 = new question("what is value of two",[1,2,3,4,5],2);
let ques3 = new question("what is value of three",[1,2,3,4,5],3);
let ques4 = new question("what is value of four",[1,2,3,4,5],4);
let ques5 = new question("what is value of five",[1,2,3,4,5],5);


let person1 = new person("nut");
console.log(person1);
console.log(person1.play(ques1,1));
console.log(person1.play(ques4,4));
console.log(person1.play(ques5,4));
console.log(CheckPerson(person1));


