document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBValue = getInputFieldValue('triangle-b');
    const triangleHValue = getInputFieldValue('triangle-h');

    // Validation for Negative, NaN, single or no value
    if(!triangleBValue || !triangleHValue)
    {
        alert('Insert two non-negative values')
        return;
    }
    // Calculating area of rectangle
    const areaTriangle = (0.5 * triangleBValue * triangleHValue).toFixed(2);
    const triangleAreaResult = document.getElementById('triangle-area');
    setTextElementValue('triangle-area-result', areaTriangle);
    triangleAreaResult.style.display='block';
})