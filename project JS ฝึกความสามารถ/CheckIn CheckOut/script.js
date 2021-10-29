let numRoom1 = 0; 
let numRoom2 = 0;
let numRoom3 = 0;
let numRoom4 = 0;
let numRoom5 = 0;

function checkin() {
    
    let PeopleCheckIn = prompt("ห้องไหนดีครับ");
    
    if(PeopleCheckIn == 1  ) {
        if(numRoom1 >= 6){
            alert('ห้องนี้มีคนอยู่แล้วครับ');
        }else
        numRoom1++
    }else 

    if(PeopleCheckIn == 2  ) {
        if(numRoom2 >= 6){
            alert('ห้องนี้มีคนอยู่แล้วครับ');
        }else
        numRoom2++
    }else 

    if(PeopleCheckIn == 3  ) {
        if(numRoom3 >= 6){
            alert('ห้องนี้มีคนอยู่แล้วครับ');
        }else
        numRoom3++
    }else 

    if(PeopleCheckIn == 4  ) {
        if(numRoom4 >= 6){
            alert('ห้องนี้มีคนอยู่แล้วครับ');
        }else
        numRoom4++
    }else 

    if(PeopleCheckIn == 5  ) {
        if(numRoom5 >= 6){
            alert('ห้องนี้มีคนอยู่แล้วครับ');
        }else
        numRoom5++
    }else 

    if(PeopleCheckIn == 6  ) {
        if(numRoom6 >= 6){
            alert('ห้องนี้มีคนอยู่แล้วครับ');
        }else
        numRoom6++
    }else 

    alert('ใส่เลขห้องด้วยสิ!!');


    ChangeColorRoom()


       
}


function ChangeColorRoom(){
    
    if (numRoom1 == 1) {
        document.getElementById('dot11').style.backgroundColor = "red";
    } else if (numRoom1 == 2) {
        document.getElementById('dot12').style.backgroundColor = "red";
    } else if (numRoom1 == 3) {
        document.getElementById('dot13').style.backgroundColor = "red";
    } else if (numRoom1 == 4) {
        document.getElementById('dot14').style.backgroundColor = "red";
    } else if (numRoom1 == 5) {
        document.getElementById('dot15').style.backgroundColor = "red";
    } else if (numRoom1 == 6) {
        document.getElementById('dot16').style.backgroundColor = "red";
    }
    if (numRoom2 == 1) {
        document.getElementById('dot21').style.backgroundColor = "red";
    } else if (numRoom2 == 2) {
        document.getElementById('dot22').style.backgroundColor = "red";
    } else if (numRoom2 == 3) {
        document.getElementById('dot23').style.backgroundColor = "red";
    } else if (numRoom2 == 4) {
        document.getElementById('dot24').style.backgroundColor = "red";
    } else if (numRoom2 == 5) {
        document.getElementById('dot25').style.backgroundColor = "red";
    } else if (numRoom2 == 6) {
        document.getElementById('dot26').style.backgroundColor = "red";
    }
    if (numRoom3 == 1) {
        document.getElementById('dot31').style.backgroundColor = "red";
    } else if (numRoom3 == 2) {
        document.getElementById('dot32').style.backgroundColor = "red";
    } else if (numRoom3 == 3) {
        document.getElementById('dot33').style.backgroundColor = "red";
    } else if (numRoom3 == 4) {
        document.getElementById('dot34').style.backgroundColor = "red";
    } else if (numRoom3 == 5) {
        document.getElementById('dot35').style.backgroundColor = "red";
    } else if (numRoom3 == 6) {
        document.getElementById('dot36').style.backgroundColor = "red";
    }
    if (numRoom4 == 1) {
        document.getElementById('dot41').style.backgroundColor = "red";
    } else if (numRoom4 == 2) {
        document.getElementById('dot42').style.backgroundColor = "red";
    } else if (numRoom4 == 3) {
        document.getElementById('dot43').style.backgroundColor = "red";
    } else if (numRoom4 == 4) {
        document.getElementById('dot44').style.backgroundColor = "red";
    } else if (numRoom4 == 5) {
        document.getElementById('dot45').style.backgroundColor = "red";
    } else if (numRoom4 == 6) {
        document.getElementById('dot46').style.backgroundColor = "red";
    }
    if (numRoom5 == 1) {
        document.getElementById('dot51').style.backgroundColor = "red";
    } else if (numRoom5 == 2) {
        document.getElementById('dot52').style.backgroundColor = "red";
    } else if (numRoom5 == 3) {
        document.getElementById('dot53').style.backgroundColor = "red";
    } else if (numRoom5 == 4) {
        document.getElementById('dot54').style.backgroundColor = "red";
    } else if (numRoom5 == 5) {
        document.getElementById('dot55').style.backgroundColor = "red";
    } else if (numRoom5 == 6) {
        document.getElementById('dot56').style.backgroundColor = "red";
    }

}

function checkout() {
    if (numRoom1 == 0 && numRoom2 == 0 && numRoom3 == 0 && numRoom4 == 0 && numRoom5 == 0) {
        alert('There is no room with student.');
    } else {
        var PeopleOut = prompt('Which room?');
        if (PeopleOut == 1) {
            if (numRoom1 == 0) {
                alert('This room has no student.');
            } else {
                numRoom1--;
            }
        } else if (PeopleOut == 2) {
            if (numRoom2 == 0) {
                alert('This room has no student.');
            } else {
                numRoom2--;
            }
        } else if (PeopleOut == 3) {
            if (numRoom3 == 0) {
                alert('This room has no student.');
            } else {
                numRoom3--;
            }
        } else if (PeopleOut == 4) {
            if (numRoom4 == 0) {
                alert('This room has no student.');
            } else {
                numRoom4--;
            }
        } else if (PeopleOut == 5) {
            if (numRoom5 == 0) {
                alert('This room has no student.');
            } else {
                numRoom5--;
            }
        } else {
            alert('Please select a valid room.');
        }
    }

    if (numRoom1 == 0) {
        document.getElementById('dot11').style.backgroundColor = "green";
    } else if (numRoom1 == 1) {
        document.getElementById('dot12').style.backgroundColor = "green"; 
    } else if (numRoom1 == 2) {
        document.getElementById('dot13').style.backgroundColor = "green"; 
    } else if (numRoom1 == 3) {
        document.getElementById('dot14').style.backgroundColor = "green"; 
    } else if (numRoom1 == 4) {
        document.getElementById('dot15').style.backgroundColor = "green"; 
    } else if (numRoom1 == 5) {
        document.getElementById('dot16').style.backgroundColor = "green"; 
    }
    
    if (numRoom2 == 0) {
        document.getElementById('dot21').style.backgroundColor = "green";
    } else if (numRoom2 == 1) {
        document.getElementById('dot22').style.backgroundColor = "green"; 
    } else if (numRoom2 == 2) {
        document.getElementById('dot23').style.backgroundColor = "green"; 
    } else if (numRoom2 == 3) {
        document.getElementById('dot24').style.backgroundColor = "green"; 
    } else if (numRoom2 == 4) {
        document.getElementById('dot25').style.backgroundColor = "green"; 
    } else if (numRoom2 == 5) {
        document.getElementById('dot26').style.backgroundColor = "green"; 
    }

    if (numRoom3 == 0) {
        document.getElementById('dot31').style.backgroundColor = "green";
    } else if (numRoom3 == 1) {
        document.getElementById('dot22').style.backgroundColor = "green"; 
    } else if (numRoom3 == 2) {
        document.getElementById('dot33').style.backgroundColor = "green"; 
    } else if (numRoom3 == 3) {
        document.getElementById('dot34').style.backgroundColor = "green"; 
    } else if (numRoom3 == 4) {
        document.getElementById('dot35').style.backgroundColor = "green"; 
    } else if (numRoom3 == 5) {
        document.getElementById('dot36').style.backgroundColor = "green"; 
    }


    if (numRoom4 == 0) {
        document.getElementById('dot41').style.backgroundColor = "green";
    } else if (numRoom4 == 1) {
        document.getElementById('dot42').style.backgroundColor = "green"; 
    } else if (numRoom4 == 2) {
        document.getElementById('dot23').style.backgroundColor = "green"; 
    } else if (numRoom4 == 3) {
        document.getElementById('dot44').style.backgroundColor = "green"; 
    } else if (numRoom4 == 4) {
        document.getElementById('dot45').style.backgroundColor = "green"; 
    } else if (numRoom4 == 5) {
        document.getElementById('dot46').style.backgroundColor = "green"; 
    }

    if (numRoom5 == 0) {
        document.getElementById('dot51').style.backgroundColor = "green";
    } else if (numRoom5 == 1) {
        document.getElementById('dot52').style.backgroundColor = "green"; 
    } else if (numRoom5 == 2) {
        document.getElementById('dot53').style.backgroundColor = "green"; 
    } else if (numRoom5 == 3) {
        document.getElementById('dot54').style.backgroundColor = "green"; 
    } else if (numRoom5 == 4) {
        document.getElementById('dot55').style.backgroundColor = "green"; 
    } else if (numRoom5 == 5) {
        document.getElementById('dot56').style.backgroundColor = "green"; 
    }



}
