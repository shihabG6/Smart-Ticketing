


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

  const element = makeElementAndAppenById("A1");
  const constainer = document.getElementById("containerf");

  if (A1 == false && updateValue <= 4) {
    addBgAndTextColorById("A1");
    // showSection("A1c");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("A2");
  const constainer = document.getElementById("containerf");

  if (A2 == false && updateValue <= 4) {
    constainer.appendChild(element);
    addBgAndTextColorById("A2");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("A3");
  const constainer = document.getElementById("containerf");

  if (A3 == false && updateValue <= 4) {
    addBgAndTextColorById("A3");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("A4");
  const constainer = document.getElementById("containerf");

  if (A4 == false && updateValue <= 4) {
    addBgAndTextColorById("A4");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("B1");
  const constainer = document.getElementById("containerf");

  if (B1 == false && updateValue <= 4) {
    addBgAndTextColorById("B1");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("B2");
  const constainer = document.getElementById("containerf");

  if (B2 == false && updateValue <= 4) {
    addBgAndTextColorById("B2");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("B3");
  const constainer = document.getElementById("containerf");

  if (B3 == false && updateValue <= 4) {
    addBgAndTextColorById("B3");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
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

  const element = makeElementAndAppenById("B4");
  const constainer = document.getElementById("containerf");

  if (B4 == false && updateValue <= 4) {
    addBgAndTextColorById("B4");
    constainer.appendChild(element);
    getElementIdAndValueReturnNewValue("abailableSeat", totleSeat);
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
  else{
    alert("You cannot select more than four seats.")
  }
});

document.getElementById("apply").addEventListener("click", function () {
  const inputCuppon = getValueElementById("cupponCode");
  if (inputCuppon === "New 15") {
    const inputCuppon = getValueElementById("cupponCode");
    inputCuppon.value = "";

    const discount = (totalPrice * 15) / 100;
    const grandMoney = totalPrice - discount;

    const table = document.getElementById("table");
    const p = document.createElement("p");
    p.innerText = `You got the discount: ${discount} `;
    table.appendChild(p);
    p.setAttribute("class", true);
    p.classList.add("py-4", "font-bold");

    // hide input value
    const valu = "";
    hideValue("cupponCode", valu);

    getElementIdAndValueReturnNewValue("finlTotal", grandMoney);

    const apply = document.getElementById("apply");
    apply.setAttribute("disabled", true);
  } else if (inputCuppon === "New 20") {
    const discount = (totalPrice * 20) / 100;
    const grandMoney = totalPrice - discount;

    const table = document.getElementById("table");
    const p = document.createElement("p");
    p.innerText = `You got discount: ${discount}`;
    table.appendChild(p);
    p.setAttribute("class", true);
    p.classList.add("py-4", "font-bold");

    // hide input value
    const valu = "";
    hideValue("cupponCode", valu);

    getElementIdAndValueReturnNewValue("finlTotal", grandMoney);

    const apply = document.getElementById("apply");
    apply.setAttribute("disabled", true);
  } else {
    const table = document.getElementById("table");
    const p = document.createElement("p");
    p.innerText = `You don't have any cuppon code.`;
    table.appendChild(p);
    // hide input value
    const valu = "";
    hideValue("cupponCode", valu);

    const apply = document.getElementById("apply");
    apply.setAttribute("disabled", true);
  }
});

document.getElementById("number").addEventListener("input", function () {
  const input = document.getElementById("number");
  const inputText = input.value;
  const inputNumber = parseInt(inputText);
  if (typeof inputNumber === "number") {
    const nextButton = document.getElementById("next");
    nextButton.removeAttribute("disabled");
  }
});

function reload() {
  window.location.reload();
}
