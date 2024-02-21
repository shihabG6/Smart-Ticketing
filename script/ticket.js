// seat-1
let updateValue = 0;
let totalPrice = 0;
let A1 = false;
document.getElementById("A1").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (A1 == false && updateValue <= 4) {
    addBgAndTextColorById("A1");
    showSection("A1c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    A1 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});

// seat-2
let A2 = false;
document.getElementById("A2").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (A2 == false && updateValue <= 4) {
    addBgAndTextColorById("A2");
    showSection("A2c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    A2 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});
let A3 = false;
document.getElementById("A3").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (A3 == false && updateValue <= 4) {
    addBgAndTextColorById("A3");
    showSection("A3c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    A3 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});
let A4 = false;
document.getElementById("A4").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (A4 == false && updateValue <= 4) {
    addBgAndTextColorById("A4");
    showSection("A4c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    A4 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});
let B1 = false;
document.getElementById("B1").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (B1 == false && updateValue <= 4) {
    addBgAndTextColorById("B1");
    showSection("B1c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    B1 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});
let B2 = false;
document.getElementById("B2").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (B2 == false && updateValue <= 4) {
    addBgAndTextColorById("B2");
    showSection("B2c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    B2 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});

let B3 = false;
document.getElementById("B3").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (B3 == false && updateValue <= 4) {
    addBgAndTextColorById("B3");
    showSection("B3c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    B3 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});

let B4 = false;
document.getElementById("B4").addEventListener("click", function () {
  const value = getElementInnerTextById("selected");
  updateValue = value + 1;

  const total = getElementInnerTextById("totalPrice");
  totalPrice = total + 500;

  const seatvalue = getElementInnerTextById("seat");
  const seatupdateValue = seatvalue + 1;

  const haveSeat = getElementInnerTextById("haveSeat");
  const totleSeat = haveSeat - 1;

  if (B4 == false && updateValue <= 4) {
    addBgAndTextColorById("B4");
    showSection("B4c");
    getElementIdAndValueReturnNewValue("selected", updateValue);
    getElementIdAndValueReturnNewValue("totalPrice", totalPrice);
    getElementIdAndValueReturnNewValue("seat", seatupdateValue);
    getElementIdAndValueReturnNewValue("haveSeat", totleSeat);
    B4 = true;
    if (updateValue === 4) {
      const apply = document.getElementById("apply");
      apply.removeAttribute("disabled");
    }
  }
});

document.getElementById("apply").addEventListener("click", function () {
  const inputCuppon = getValueElementById("cupponCode");
  if (inputCuppon === "New 15") {
    const inputCuppon = getValueElementById("cupponCode");
    inputCuppon.value = ''


    const discount = totalPrice * 15 / 100;
    const grandMoney = totalPrice - discount;
    
    const table = document.getElementById('table');
    const p = document.createElement('p')
    p.innerText= `You got discount: ${discount}`
    table.appendChild(p)
    p.setAttribute("class", true);
    p.classList.add('py-4','font-bold');


    // hide input value
    const valu = '';
    hideValue('cupponCode',valu)

    getElementIdAndValueReturnNewValue("finlTotal", grandMoney);


    const apply = document.getElementById("apply");
    apply.setAttribute("disabled", true);
    
  } 
  
  
  
  else if (inputCuppon === "New 20") {
    
    const discount = totalPrice * 20 / 100;
    const grandMoney = totalPrice - discount;
    
    const table = document.getElementById('table');
    const p = document.createElement('p')
    p.innerText= `You got discount: ${discount}`
    table.appendChild(p)
    p.setAttribute("class", true);
    p.classList.add('py-4','font-bold')

    // hide input value
    const valu = '';
    hideValue('cupponCode',valu)
    
    getElementIdAndValueReturnNewValue("finlTotal", grandMoney);

    const apply = document.getElementById("apply");
    apply.setAttribute("disabled", true);
  } else {
    console.log("You don't have any cuppon code");
  }
});


document.getElementById('number').addEventListener('keyup', function(event){
  const n = document.getElementById('number');
  const g = n.value;
  const b =parseInt(g)
  console.log(typeof b)
  
  if( typeof b ==="number" ){
    console.log('h')
  }

})




