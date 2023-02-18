
// To get the value inside input field
function getInputFieldValue(inputId)
{
   const inputField = document.getElementById(inputId);
   const inputValueString = inputField.value;
   const inputValue = parseFloat(inputValueString);
   inputField.value = '';
    if(isNaN(inputValue))
        {
            return false;
        }
    else if(inputValue<0)
        return false;

   return inputValue;
}

// To get the text from inside the element
function getTextElementValue(elementId)
{
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

// To set the text of element
function setTextElementValue(elementId, value)
{
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}
