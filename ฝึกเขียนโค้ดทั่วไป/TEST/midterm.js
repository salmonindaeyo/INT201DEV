//ข้อ 2.1 (นัฐวัฒ รอดสมบุญ 069)
function Student (name,status) {   //ชื่อ,สถานภาพ
    this.name=name; 
    let AllSemester = [];      //วิชาแต่ละเทอม
    let SubjectAllforAdd = []; //เก็บวิชา
    this.status = status ; 
    let Allcredit = 0 ;
    this.AddSubject = function(subject) { //ใส่วิชาและเกรดของเรา
        SubjectAllforAdd.push(subject);     //นำไปสะสม
    }
    this.AddSemester= function(term) { //ใส่เทอมที่จะแอด แล้วนำวิชาทั้งหมดใส่เทอมนั้น

        AllSemester[term-1] = SubjectAllforAdd.map(c=>c) ;
        SubjectAllforAdd.splice(0,SubjectAllforAdd.length)
        
      }

    this.CheckSemesterCredit = function (term){   // เช็คเกรด 1 เทอม
        let sum = 0;
       
       
       for (let index = 0; index < AllSemester[term].length; index++) {
           
        sum = sum + AllSemester[term][index].credit ;
           
       }
        Allcredit = Allcredit+sum;  //หากเรียกหน่วยกิต 1 เทอม จะมีหน่วยกิตรวม1เทอม
                                    //ถ้าเรียก 2 เทอม จะมีหน่วยกิต สองเทอม
        return sum;
    }

    this.CheckAllCredit = function () {     //เช็คหน่วยกิตทั้งหมด
        
        return Allcredit;
        
    }

    this.CheckOneGradeString = function(term,subject) {   //ปริ้นทุกวิชา ว่าแต่ละวิชา ได้เกรดอะไรฤ

        if ( AllSemester[term][subject].grade == 4) {
            

            console.log("วิชา " + AllSemester[term][subject].nameSubject + "แต้มเกรด 4 " + "ได้เกรด A") ;
        }
        if ( AllSemester[term][subject].grade == 3.5) {
            console.log("วิชา " + AllSemester[term][subject].nameSubject + "แต้มเกรด 3.5 " + "ได้เกรด B+") 
        }
        if ( AllSemester[term][subject].grade == 3) {

            console.log("วิชา " + AllSemester[term][subject].nameSubject + "แต้มเกรด 3 " + "ได้เกรด B") 
        }
        if ( AllSemester[term][subject].grade == 2.5) {

            console.log("วิชา " + AllSemester[term][subject].nameSubject + "แต้มเกรด 2.5 " + "ได้เกรด C+") 
        }
        if ( AllSemester[term][subject].grade == 2) {
            console.log("วิชา " + AllSemester[term][subject].nameSubject + "แต้มเกรด 2 " + "ได้เกรด C") 
        }
    }

    this.CheckAllGreadeeString = function(term){            //เช็คทีละวิชาว่าได้เกรดอะไร

        for (let index = 0; index < AllSemester[term].length ; index++) {
            this.CheckOneGradeString(term,index);
            
        }
    }

}


function subject(nameSubject,credit,grade) {  //ชื่อวิชา,หน่วยกิต ,เกรดที่ได้
    this.nameSubject=nameSubject;
    this.credit=credit;
    this.grade=grade;
}




let subject1 = new subject("int201",2,4); //แอดวิชา
let subject2 = new subject("int202",3,2); //แอดวิชา
let subject3 = new subject("int204",1,4);
let Student1 = new Student("Nuttawat","นักศึกษาปกติ"); //แอด นศ

Student1.AddSubject(subject1); //เลือกวิชาที่เรียน
Student1.AddSubject(subject2); //เลือกวิชาที่เรียน
Student1.AddSemester(1);

Student1.AddSubject(subject1); 
Student1.AddSubject(subject3); 
Student1.AddSemester(2);



Student1.CheckAllGreadeeString(0);









let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']



let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2