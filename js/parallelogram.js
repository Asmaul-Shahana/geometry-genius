document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBValue = getInputFieldValue('parallelogram-b');
    const parallelogramHValue = getInputFieldValue('parallelogram-h');

    // Validation for Negative, NaN, single or no value
    if(!parallelogramBValue || !parallelogramHValue)
    {
        alert('Insert two non-negative values');
        return;
    }

    // Calculating area of rectangle
    const areaParallelogram = (parallelogramBValue * parallelogramHValue).toFixed(2);

    // Setting area result in area calculation field
    const areaContainer = document.getElementById('area-container');
    const li = document.createElement('li');
    li.innerHTML = "Parallelogram&nbsp&nbsp" + areaParallelogram + "&nbsp&nbsp cm<sup>2</sup>&nbsp&nbsp";
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