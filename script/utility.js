function getElementInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementNumber = parseInt(elementText);
  return elementNumber;
}
function setElementInterSection(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
 
                // Make a element by JavaScript Function
function makeElementAndAppenById(elementId) {
  const h4InnerText = setElementInterSection(elementId);
  const div = document.createElement("div");
  div.setAttribute("class", true);
  div.classList.add("flex", "justify-between");

  const h4 = document.createElement("h4");
  h4.setAttribute("class", true);
  h4.classList.add("py-4", "w-1/3", "text-left");
  h4.innerHTML = h4InnerText;

  const p = document.createElement("p");
  p.setAttribute("class", true);
  p.classList.add("py-4", "w-1/3", "text-left");
  p.innerText = "Economoy";

  const span = document.createElement("span");
  span.setAttribute("class", true);
  span.classList.add("py-4", "w-1/3", "text-right");
  span.innerText = "500";

  div.appendChild(h4);
  div.appendChild(p);
  div.appendChild(span);
  return div;
}

function getElementIdAndValueReturnNewValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function addBgAndTextColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]", "text-white");
}
function removeBgAndTextColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#1DD100]", "text-white");
}

function hideSection(sectionId) {
  const sectionid = document.getElementById(sectionId);
  sectionid.classList.add("hidden");
}
function showSection(sectionId) {
  const sectionid = document.getElementById(sectionId);
  sectionid.classList.remove("hidden");
}
function setEnnerText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getValueElementById(elementId) {
  const element = document.getElementById(elementId);
  const inputValue = element.value;
  return inputValue;
}
function hideValue(elementId, valus) {
  const element = document.getElementById(elementId);
  element.value = valus;
}
