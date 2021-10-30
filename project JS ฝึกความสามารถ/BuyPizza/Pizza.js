window.onload = startup;


function pizza (name) {
    this.name = name;
    this.Prices = [{size:"กรุณาเลือกขนาด",price:0},{size:"Small",price:159}, {size:"Medium",price:159},{size:"Large",price:259} , {size:"New York",price:399}];
    this.edge = [{size:"กรุณาเลือกรูปแบบแป้ง",price:0},{size:"Soft Pan",price:50}, {size:"Crispy Crust",price:70},{size:"Cheese",price:60} , {size:"Sausage",price:100}];

}

let pizzas =[] ; //รวมพิซซ่า

let pizza1 = new pizza("Hawaiian");
let pizza2 = new pizza("Seafood");
let pizza3 = new pizza("cheese");
let pizza4 = new pizza("Pepperoni");

pizzas.push(pizza1,pizza2,pizza3,pizza4);

function startup() {
    let h = document.createElement("H1"); //สร้าง h1
    let t = document.createTextNode("INT201 PIZZA"); //สร้าง text ธรรมดา
    h.appendChild(t); //นำ text ไปเป็นลูกของ h1
    document.body.appendChild(h); // นำ h1 ไปเป็นลูก body

    pizzaTable = document.createElement("table"); //สร้าง table
    pizzaTable.setAttribute("id", "orderTable");  //setAtt
    document.body.appendChild(pizzaTable); //นำ table ไปเป็นลูก body


    header = pizzaTable.createTHead();   //สร้างtr 
    row = header.insertRow(0);   //เพิ่มแถว
    //เพิ่มข้อมูลในแถว
    cell = row.insertCell(0); cell.innerHTML = "Number";
    cell = row.insertCell(1); cell.innerHTML = "Pizza";
    cell = row.insertCell(2); cell.innerHTML = "Picture";
    cell = row.insertCell(3); cell.innerHTML = "Size";
    cell = row.insertCell(4); cell.innerHTML = "Crust";
    cell = row.insertCell(5); cell.innerHTML = "Amount";
    cell = row.insertCell(6); cell.innerHTML = "Price";
    rowNumber = 1;

    insertPizza();

  
    totalText = document.createElement("B");
    textTotal = document.createTextNode(" Total price : ");
    totalText.appendChild(textTotal);
    document.body.appendChild(totalText);

    ///ราคารวม
    inputTotal = document.createElement("input");
    inputTotal.setAttribute("type", "text");
    inputTotal.setAttribute("id", "priceTotal");
    inputTotal.setAttribute("disabled", "");
    totalText.appendChild(inputTotal);  


    
    spaceBreaker = document.createElement("br");
    document.body.appendChild(spaceBreaker);
    spaceBreaker = document.createElement("br");
    document.body.appendChild(spaceBreaker);

    //ปุ่มเพิ่มพิซซ่า
    addButton = document.createElement("input");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "ADD MORE PIZZA");
    addButton.setAttribute("onclick", "insertPizza()");
    document.body.appendChild(addButton);


    spaceBreaker = document.createElement("br");
    document.body.appendChild(spaceBreaker);
    spaceBreaker = document.createElement("br");
    document.body.appendChild(spaceBreaker);


    //ปริ้นใบเสร็จ
    addButton2 = document.createElement("input");
    addButton2.setAttribute("type", "button");
    addButton2.setAttribute("value", "Print receipt");
    addButton2.setAttribute("onclick", "printReceipt()");
    document.body.appendChild(addButton2);

    spaceBreaker = document.createElement("br");
    document.body.appendChild(spaceBreaker);
    spaceBreaker = document.createElement("br");
    document.body.appendChild(spaceBreaker);

}



function insertPizza() {
    newRow = pizzaTable.insertRow(rowNumber);

    cell = newRow.insertCell(0);
    cell.innerHTML = rowNumber;

    //สร้างที่ให้เลือกหน้า
    cell = newRow.insertCell(1);
    selectPizza = document.createElement("select");
    selectPizza.setAttribute("id", "pizzaList" + rowNumber);

    //ตัวเลือกหน้า
    op = document.createElement("option");
    op.innerHTML = "กรุณาเลือกหน้า";

    selectPizza.appendChild(op); //เพิ่ม op ลงไปใน select

    for (let i = 0; i < pizzas.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value", pizzas[i].name);
        op.setAttribute("class", "pizzaOption");
        op.innerHTML = pizzas[i].name ;
        selectPizza.appendChild(op);
    }

    cell.appendChild(selectPizza);

    
}