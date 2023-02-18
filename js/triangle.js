const triangleCard = document.getElementById('triangle-card');
triangleCard.addEventListener('mouseenter', function()
{
    const color = randomHexColor();
    triangleCard.style.backgroundColor= color;
})
triangleCard.addEventListener('mouseleave', function()
{
    triangleCard.style.backgroundColor='white';
})

document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBValue = getInputFieldValue('triangle-b');
    const triangleHValue = getInputFieldValue('triangle-h');

    // Validation for Negative, NaN, single or no value
    if(!triangleBValue || !triangleHValue)
    {
        alert('Insert two non-negative values');
        return;
    }

    // Calculating area of rectangle
    const areaTriangle = (0.5 * triangleBValue * triangleHValue).toFixed(2);
    // Setting area result in area calculation field
    const areaContainer = document.getElementById('area-container');
    const li = document.createElement('li');
    li.innerHTML = "Triangle&nbsp&nbsp&nbsp" + areaTriangle + "&nbsp&nbsp&nbsp cm<sup>2</sup>&nbsp&nbsp&nbsp";
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