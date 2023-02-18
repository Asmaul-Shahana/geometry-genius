// On mouse over, random card background color
const rhombusCard = document.getElementById('rhombus-card');
rhombusCard.addEventListener('mouseenter', function()
{
    const color = randomHexColor();
    rhombusCard.style.backgroundColor= color;
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusD1Value = getInputFieldValue('rhombus-d1');
    const rhombusD2Value = getInputFieldValue('rhombus-d2');

    // Validation for Negative, NaN, single or no value
    if(!rhombusD1Value || !rhombusD2Value)
    {
        alert('Insert two non-negative numbers');
        return;
    }

    // Calculating area of rectangle
    const areaRhombus = (0.5 * rhombusD1Value * rhombusD2Value).toFixed(2);

    // Setting area result in area calculation field
    const areaContainer = document.getElementById('area-container');
    const li = document.createElement('li');
    li.innerHTML = "Rhombus&nbsp&nbsp&nbsp" + areaRhombus + "&nbsp&nbsp&nbsp cm<sup>2</sup>&nbsp&nbsp&nbsp";
    areaContainer.appendChild(li);
    
    // Button
    const btn = document.createElement('button');
    btn.innerHTML = 'Convert to to m<sup>2</sup>';
    btn.style.backgroundColor='#1090D8';
    btn.style.padding='5px 8px';
    btn.style.borderRadius='5px';
    btn.style.color='white';
    btn.style.marginBottom='3px';
    li.appendChild(btn);
})