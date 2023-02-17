
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

document.getElementById('result-list').style.listStyle="decimal";