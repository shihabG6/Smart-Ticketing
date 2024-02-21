function getElementInnerTextById(elementId){
  const element= document.getElementById(elementId);
  const elementText = element.innerText;
  const elementNumber = parseInt(elementText);
  return elementNumber
}
function setElementInterSection(elementId){
  const element =document.getElementById(elementId)
  const text =element.innerText;
  return text;
}


function getElementIdAndValueReturnNewValue(elementId, value){
  const element= document.getElementById(elementId);
  element.innerText=value;
}
function addBgAndTextColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-[#1DD100]','text-white')
}
function removeBgAndTextColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-[#1DD100]','text-white')
}

function hideSection(sectionId){
  const sectionid= document.getElementById(sectionId);
  sectionid.classList.add('hidden')
}
function showSection(sectionId){
  const sectionid= document.getElementById(sectionId);
  sectionid.classList.remove('hidden')
}
function setEnnerText(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value
}
