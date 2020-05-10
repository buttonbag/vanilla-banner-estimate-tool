
const adsPer = document.querySelector('#adsPer');
const creatives = document.querySelector('#creatives');
// const adsPer = parseInt(document.querySelector('#adsPer').value); 
// const creatives = parseInt(document.querySelector('#creatives').value);
/* don't know why but original const declarations throws error?? */

const images = document.querySelectorAll('img');

// click on each to toggle class name
function toggleClick() {
    this.classList.toggle('selected');
    
    const selected = document.querySelectorAll('.selected');
    const selectedCount = selected.length;
    
    // count selected images
    images.forEach(function(){
        adsPer.value = selectedCount;
    })
    handleBlur();
}

function handleBlur() {
    const firstSetDays = ((adsPer.value - 1) / 2); // 2 originals per day
    const restOfAds = ((adsPer.value * creatives.value) - adsPer.value); //ads minus first set
    const restOfAdsDays = (restOfAds / 5);
    
    // let totalDays = ((totalAds - 1) / 5) + 2 + ' days';
    let totalDays = ((restOfAdsDays + firstSetDays) + 2) + ' days';
    
    const totalDisplay = document.querySelector('.totalAds');
    const firstSetDaysDisplay = document.querySelector('.firstSetDaysDisplay');
    const daysDisplay = document.querySelector('.days');
    let totalAds = adsPer.value * creatives.value;        
    
    if(!totalAds) {
        totalDays = '0';
        totalDisplay.textContent = '0';
        firstSetDaysDisplay.textContent = '0';
        daysDisplay.textContent = totalDays;
    } else {
        totalDays;
        totalDisplay.textContent = totalAds;
        firstSetDaysDisplay.textContent = '+' + firstSetDays + ' days';
        daysDisplay.textContent = totalDays;
    }
    
}    

handleBlur();

// addeventlistener to each img
for (i = 0; i < images.length; i++) {
    images[i].addEventListener('click', toggleClick);
    // images[i].addEventListener('click', countSelected);
}

adsPer.addEventListener('change', handleBlur);
creatives.addEventListener('change', handleBlur);


