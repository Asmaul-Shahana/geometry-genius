// On mouse over, random card background color
const pentagonCard = document.getElementById('pentagon-card');
pentagonCard.addEventListener('mouseenter', function()
{
    const color = randomHexColor();
    pentagonCard.style.backgroundColor= color;
})

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonPValue = getInputFieldValue('pentagon-p');
    const pentagonBValue = getInputFieldValue('pentagon-b');

    // Validation for Negative, NaN, single or no value
    if(!pentagonPValue || !pentagonBValue)
    {
        alert('Insert two non-negative numbers');
        return;
    }

    // Calculating area of rectangle
    const areaPentagon = (0.5 * pentagonPValue * pentagonBValue).toFixed(2);
    // Setting area result in area calculation field
    const areaContainer = document.getElementById('area-container');
    const li = document.createElement('li');
    li.innerHTML = "Pentagon&nbsp&nbsp&nbsp" + areaPentagon + "&nbsp&nbsp&nbsp cm<sup>2</sup>&nbsp&nbsp&nbsp";
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