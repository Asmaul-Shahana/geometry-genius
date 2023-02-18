// On mouse over, random card background color
const ellipseCard = document.getElementById('ellipse-card');
ellipseCard.addEventListener('mouseenter', function()
{
    const color = randomHexColor();
    ellipseCard.style.backgroundColor= color;
})
ellipseCard.addEventListener('mouseleave', function()
{
    ellipseCard.style.backgroundColor='white';
})

document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseAValue = getInputFieldValue('ellipse-a');
    const ellipseBValue = getInputFieldValue('ellipse-b');

    // Validation for Negative, NaN, single or no value
    if(!ellipseAValue || !ellipseBValue)
    {
        alert('Insert two non-negative numbers');
        return;
    }

    // Calculating area of rectangle
    const areaEllipse = (Math.PI * ellipseAValue * ellipseBValue).toFixed(2);

    // Setting area result in area calculation field
    const areaContainer = document.getElementById('area-container');
    const li = document.createElement('li');
    li.innerHTML = "Ellipse&nbsp&nbsp&nbsp" + areaEllipse + "&nbsp&nbsp&nbsp cm<sup>2</sup>&nbsp&nbsp&nbsp";
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