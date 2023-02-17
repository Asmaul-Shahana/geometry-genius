document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBValue = getInputFieldValue('triangle-b');
    const triangleHValue = getInputFieldValue('triangle-h');

    // Validation for Negative, NaN, single or no value
    if(!triangleBValue || !triangleHValue)
    {
        alert('Insert two non-negative values')
        return;
    }
    // Calculating area of triangle
    const areaTriangle = 0.5 * triangleBValue * triangleHValue;
    const triangleAreaResult = document.getElementById('triangle-area');
    const areaValueGiven = getTextElementValue('triangle-area-result');
    setTextElementValue('triangle-area-result', areaTriangle);
    triangleAreaResult.style.display='block';
})