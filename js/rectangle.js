// On mouse over, random card background color
const rectangleCard = document.getElementById('rectangle-card');
rectangleCard.addEventListener('mouseenter', function()
{
    const color = randomHexColor();
    rectangleCard.style.backgroundColor= color;
})
rectangleCard.addEventListener('mouseleave', function()
{
    rectangleCard.style.backgroundColor='white';
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWValue = getInputFieldValue('rectangle-w');
    const rectangleLValue = getInputFieldValue('rectangle-l');

    // Validation for Negative, NaN, single or no value
    if(!rectangleWValue || !rectangleLValue)
    {
        alert('Insert two non-negative numbers');
        return;
    }
    // Calculating area of triangle
    const areaRectangle = (rectangleWValue * rectangleLValue).toFixed(2);

    // Setting area result in area calculation field
    const areaContainer = document.getElementById('area-container');
    const li = document.createElement('li');
    li.innerHTML = "Rectangle&nbsp&nbsp&nbsp" + areaRectangle + "&nbsp&nbsp&nbsp cm<sup>2</sup>&nbsp&nbsp&nbsp";
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