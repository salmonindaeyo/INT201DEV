window.onload = startup;


function pizza (name) {
    this.name = name;
    this.Prices = [{size:"Small",price:159}, {size:"Medium",price:259},{size:"Large",price:329} , {size:"New York",price:399}];
    this.edge = [{name:"Soft Pan",price:50}, {name:"Crispy Crust",price:70},{name:"Cheese",price:60} , {name:"Sausage",price:100}];

}

let pizzas =[] ; //รวมพิซซ่า

let pizza1 = new pizza("Hawaiian");
let pizza2 = new pizza("Seafood");
let pizza3 = new pizza("cheese");
let pizza4 = new pizza("Pepperoni");

pizzas.push(pizza1,pizza2,pizza3,pizza4);

//console.log(pizzas[0].edge[0].price)
//console.log(pizzas[0].Prices[0].size)


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


 

}



function insertPizza() {

    //สร้างนัมเบอร์ เซล 0
    newRow = pizzaTable.insertRow(rowNumber);

    cell = newRow.insertCell(0);
    cell.innerHTML = rowNumber;

    //สร้างที่ให้เลือกหน้า เซลหนึ่ง
    cell = newRow.insertCell(1);
    selectPizza = document.createElement("select");
    selectPizza.setAttribute("id", "pizzaList" + rowNumber);
   selectPizza.setAttribute("onchange", "showImage(" + rowNumber + ")");
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

    //เพิ่มรูป เซลสอง
    cell = newRow.insertCell(2);
    imgPizza = document.createElement("img");
    imgPizza.setAttribute("id", "pizzaImage" + rowNumber);
    imgPizza.setAttribute("src", "pizza.png");
    imgPizza.setAttribute("width", "250px");
    cell.appendChild(imgPizza);


    //เพิ่มตัวเลือกขนาดพิซซ่า เซลสาม
    cell = newRow.insertCell(3);
    selectSize = document.createElement("select");
    selectSize.setAttribute("id", "size" + rowNumber);
    selectSize.setAttribute("onchange", "calculatePrice(" + rowNumber + ")");


    op = document.createElement("option");
    op.setAttribute("value", "Nnnnn");
    op.innerHTML = "เลือกขนาดพิซซ่า";
    selectSize.appendChild(op);

    for (let i = 0; i < pizzas[0].Prices.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value", pizzas[i].Prices[i].size);
        op.setAttribute("class", "sizeOption");
        op.innerHTML = pizzas[i].Prices[i].size;
        selectSize.appendChild(op);
    }
    cell.appendChild(selectSize);


    //เพิ่มแป้ง เซลสี่

   cell = newRow.insertCell(4);
    selectCrust = document.createElement("select");
    selectCrust.setAttribute("id", "edge" + rowNumber);
    selectCrust.setAttribute("onchange", "calculatePrice(" + rowNumber + ")");
    op = document.createElement("option");
    op.setAttribute("value", "Nnnnn");
    op.innerHTML = "กรุณาเลือกแป้ง";
    selectCrust.appendChild(op);
    for (let i = 0; i < pizzas[0].edge.length; i++) {
        op = document.createElement("option");
        op.setAttribute("value", pizzas[i].edge[i].name);
        op.setAttribute("class", "crustOption");
        op.innerHTML = pizzas[i].edge[i].name;
        selectCrust.appendChild(op);
    }
    cell.appendChild(selectCrust);

    cell = newRow.insertCell(5);
    inputAmount = document.createElement("input");
    inputAmount.setAttribute("type", "number");
    inputAmount.setAttribute("id", "amount" + rowNumber);
    inputAmount.setAttribute("onchange", "calculatePrice(" + rowNumber + ")");
    cell.appendChild(inputAmount);

    cell = newRow.insertCell(6);
    inputPrice = document.createElement("input");
    inputPrice.setAttribute("type", "text");
    inputPrice.setAttribute("id", "price" + rowNumber);
    inputPrice.setAttribute("disabled", "");
    cell.appendChild(inputPrice);



    rowNumber++;

}

function pizzaSelected(row) {
    var pizzaC = document.getElementById("pizzaList" + row);  // ดึง index ของ slect ตอนนั้น -1
    var chosenPizzaIndex = pizzaC.selectedIndex - 1;
    return chosenPizzaIndex;
}


function showImage(row) {
    chosenPizzaIndex = pizzaSelected(row);   
    document.getElementById("pizzaImage" + row).src = pizzas[chosenPizzaIndex].name+".jpg";
}

function sizeSelected(row) {
    var sizeC = document.getElementById("size" + row);
    var chosenSizeIndex = sizeC.selectedIndex - 1;
    return chosenSizeIndex;
}
function edgeSelected(row) {
    var edgeC = document.getElementById("edge" + row);
    var chosenEdgeIndex = edgeC.selectedIndex - 1;
    return chosenEdgeIndex;
}

function calculatePrice(row) {

    userChoice = pizzaSelected(row);
    piece = document.getElementById("amount" + row).value;  //ซื้อกี่ถาด
        
    sizeChoice = sizeSelected(row);   //ดึงไซต์
    edgeChoice = edgeSelected(row);   //ดึงแป้ง


    pizzaAndEdge = pizzas[userChoice].Prices[sizeChoice].price + pizzas[userChoice].edge[edgeChoice].price
    

    pizzaPrice = pizzaAndEdge * piece;
    document.getElementById("price" + row).value = pizzaPrice;


    var total = 0;
    for (let index = 1; index < rowNumber; index++) {
        total += parseInt(document.getElementById("price" + index).value);  //ที่เราได้มามันเป็น char ต้องเปลี่ยนเป็น int
    }
    document.getElementById("priceTotal").value = total + "฿";
    

}