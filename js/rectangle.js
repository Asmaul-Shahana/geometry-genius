document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWValue = getInputFieldValue('rectangle-w');
    const rectangleLValue = getInputFieldValue('rectangle-l');

    // Validation for Negative, NaN, single or no value
    if(!rectangleWValue || !rectangleLValue)
    {
        alert('Insert two non-negative values')
        return;
    }
    // Calculating area of triangle
    const areaRectangle = (rectangleWValue * rectangleLValue).toFixed(2);
    const rectangleAreaResult = document.getElementById('rectangle-area');
    // const areaValueGiven = getTextElementValue('rectangle-area-result');
    setTextElementValue('rectangle-area-result', areaRectangle);
    rectangleAreaResult.style.display='block';
})