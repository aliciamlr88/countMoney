import * as dom from './dom.js';

const $ = dom.$;
const numberCash = 4;
const counterContainer = $('#counterContainer');
const formMoney = $('.formMoney');
const formSafe = $('.formSafe');

const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'CAD'
});

function calculateMoney(){

}




formMoney.forEach((element,i) => {
    element.addEventListener('change', (evt) => {

        // Set input value to 0 if it's blank
        if (evt.target.value === "") {
            evt.target.value = 0;
        }

        const value = parseInt(evt.target.value);
        const amount = evt.target.getAttribute("aria-label");
        const totalLabel = evt.target.getAttribute("aria-belong");

      
       let tillNumber = totalLabel.substring(totalLabel.length - 1);
        let calculation = value * amount;
      
        const elementAmountMoney = element.nextElementSibling;
        elementAmountMoney.innerHTML = formatter.format(calculation);

        const allForm = $(`[aria-belong="${totalLabel}"]`);
        let totalCount = 0;
        allForm.forEach((elementInside,i) => {
            let valueInside = parseInt(elementInside.value);
            const amountInside = elementInside.getAttribute("aria-label");
            let calculationInside = valueInside * amountInside;
            totalCount+= calculationInside;
        });



        $('#'+totalLabel).innerHTML = formatter.format(totalCount);
        $('#'+totalLabel).setAttribute("actual-value",totalCount);

        let tillValue =  $('#total-counter-'+tillNumber).getAttribute("actual-value");
        let depositValue =  $('#total-deposit-'+tillNumber).getAttribute("actual-value");
        let totalTill = tillValue - depositValue;
        

      
      
        $('#total-till-'+tillNumber).innerHTML = formatter.format(totalTill);
        $('#total-till-'+tillNumber).setAttribute("actual-value",totalTill);

        
        getTotalSafeWithTill();
        calculateTotalCount();
        calculateTotalDepositCount();
       
    });

   
    
});


formSafe.forEach((element,i) => {
    element.addEventListener('change', (evt) => {

        // Set input value to 0 if it's blank
        if (evt.target.value === "") {
            evt.target.value = 0;
        }

        const value = parseInt(evt.target.value);
        const amount = evt.target.getAttribute("aria-label");
        const totalLabel = evt.target.getAttribute("aria-belong");
        let calculation = value * amount;
        const elementAmountMoney = element.nextElementSibling;
        elementAmountMoney.innerHTML = formatter.format(calculation);

        const allForm = $(`[aria-belong="${totalLabel}"]`);
        let totalCount = 0;
        allForm.forEach((elementInside,i) => {
            let valueInside = parseInt(elementInside.value);
            const amountInside = elementInside.getAttribute("aria-label");
            let calculationInside = valueInside * amountInside;
            totalCount+= calculationInside;
        });

        $('#'+totalLabel).innerHTML = formatter.format(totalCount);
        $('#'+totalLabel).setAttribute("actual-value",totalCount);

        let totalBill =  parseFloat($('#total-bill').getAttribute("actual-value"));
        let totalRoll =  parseFloat($('#total-roll').getAttribute("actual-value"));
        let totalSafe = totalBill + totalRoll;

        $('#total-safe').innerHTML = formatter.format(totalSafe);
        $('#total-safe').setAttribute("actual-value",totalSafe);
        calculateTotalSafeCount();
        getTotalSafeWithTill();
        calculateTotalCount();
       
    });

   
    
});

function getTotalSafeWithTill() {
    let totalTill1 = parseFloat($('#total-till-1').getAttribute("actual-value"));
    let totalTill2 = parseFloat($('#total-till-2').getAttribute("actual-value"));
    let totalTill3 = parseFloat($('#total-till-3').getAttribute("actual-value"));
    let totalTill4 = parseFloat($('#total-till-4').getAttribute("actual-value"));
    let totalSafe = parseFloat($('#total-safe').getAttribute("actual-value"));
   
    let sum = totalTill1 + totalTill2 + totalTill3 + totalTill4 + totalSafe;

    $('#total-till-safe').innerHTML = formatter.format(sum);
}



function calculateTotalCount(){
    const nickelTill1 = parseFloat($('#nickels-till-1').value);
    const nickelDeposit1 = parseFloat($('#nickels-deposit-1').value);
    const nickelTill2 = parseFloat($('#nickels-till-2').value);
    const nickelDeposit2 = parseFloat($('#nickels-deposit-2').value);
    const nickelTill3 = parseFloat($('#nickels-till-3').value);
    const nickelDeposit3 = parseFloat($('#nickels-deposit-3').value);
    const nickelTill4 = parseFloat($('#nickels-till-4').value);
    const nickelDeposit4 = parseFloat($('#nickels-deposit-4').value);
    const nickelRollCount = parseFloat($('#nickel-roll-count').value) * 40;
    const nickelBillCount = parseFloat($('#nickel-bill-count').value);

    const nickelInput = $('#nickels-total');

    nickelInput.value = (nickelTill1 - nickelDeposit1) +
                                (nickelTill2 - nickelDeposit2) +
                                (nickelTill3 - nickelDeposit3 ) + 
                                (nickelTill4 - nickelDeposit4 ) + 
                                nickelRollCount + nickelBillCount;

    let nickelTotalCalc = nickelInput.value * nickelInput.getAttribute('aria-label');
    nickelInput.nextElementSibling.innerHTML = formatter.format(nickelTotalCalc);


    const dimesTill1 = parseFloat($('#dimes-till-1').value);
    const dimesDeposit1 = parseFloat($('#dimes-deposit-1').value);
    const dimesTill2 = parseFloat($('#dimes-till-2').value);
    const dimesDeposit2 = parseFloat($('#dimes-deposit-2').value);
    const dimesTill3 = parseFloat($('#dimes-till-3').value);
    const dimesDeposit3 = parseFloat($('#dimes-deposit-3').value);
    const dimesTill4 = parseFloat($('#dimes-till-4').value);
    const dimesDeposit4 = parseFloat($('#dimes-deposit-4').value);
    const dimesRollCount = parseFloat($('#dime-roll-count').value) * 50;
    const dimesBillCount = parseFloat($('#dime-bill-count').value);

    const dimeInput = $('#dimes-total');
    
    dimeInput.value = (dimesTill1 - dimesDeposit1) +
                                (dimesTill2 - dimesDeposit2) +
                                (dimesTill3 - dimesDeposit3 ) + 
                                (dimesTill4 - dimesDeposit4 ) + 
                                dimesRollCount + dimesBillCount;

    let dimeTotalCalc = dimeInput.value * dimeInput.getAttribute('aria-label');
    dimeInput.nextElementSibling.innerHTML = formatter.format(dimeTotalCalc);


    const quartersTill1 = parseFloat($('#quarters-till-1').value);
    const quartersDeposit1 = parseFloat($('#quarters-deposit-1').value);
    const quartersTill2 = parseFloat($('#quarters-till-2').value);
    const quartersDeposit2 = parseFloat($('#quarters-deposit-2').value);
    const quartersTill3 = parseFloat($('#quarters-till-3').value);
    const quartersDeposit3 = parseFloat($('#quarters-deposit-3').value);
    const quartersTill4 = parseFloat($('#quarters-till-4').value);
    const quartersDeposit4 = parseFloat($('#quarters-deposit-4').value);
    const quartersRollCount = parseFloat($('#quarter-roll-count').value) * 40;
    const quartersBillCount = parseFloat($('#quarter-bill-count').value);

    const quarterInput = $('#quarters-total');
    
    quarterInput.value = (quartersTill1 - quartersDeposit1) +
                                (quartersTill2 - quartersDeposit2) +
                                (quartersTill3 - quartersDeposit3 ) + 
                                (quartersTill4 - quartersDeposit4 ) + 
                                quartersRollCount + quartersBillCount;

    let quarterTotalCalc = quarterInput.value * quarterInput.getAttribute('aria-label');
    quarterInput.nextElementSibling.innerHTML = formatter.format(quarterTotalCalc);


    const looniesTill1 = parseFloat($('#loonies-till-1').value);
    const looniesDeposit1 = parseFloat($('#loonies-deposit-1').value);
    const looniesTill2 = parseFloat($('#loonies-till-2').value);
    const looniesDeposit2 = parseFloat($('#loonies-deposit-2').value);
    const looniesTill3 = parseFloat($('#loonies-till-3').value);
    const looniesDeposit3 = parseFloat($('#loonies-deposit-3').value);
    const looniesTill4 = parseFloat($('#loonies-till-4').value);
    const looniesDeposit4 = parseFloat($('#loonies-deposit-4').value);
    const looniesRollCount = parseFloat($('#loonie-roll-count').value) * 25;
    const looniesBillCount = parseFloat($('#loonie-bill-count').value);

    const loonieInput = $('#loonies-total');
    
    loonieInput.value = (looniesTill1 - looniesDeposit1) +
                                (looniesTill2 - looniesDeposit2) +
                                (looniesTill3 - looniesDeposit3 ) + 
                                (looniesTill4 - looniesDeposit4 ) + 
                                looniesRollCount + looniesBillCount;

    let loonieTotalCalc = loonieInput.value * loonieInput.getAttribute('aria-label');
    loonieInput.nextElementSibling.innerHTML = formatter.format(loonieTotalCalc);


    const tooniesTill1 = parseFloat($('#toonies-till-1').value);
    const tooniesDeposit1 = parseFloat($('#toonies-deposit-1').value);
    const tooniesTill2 = parseFloat($('#toonies-till-2').value);
    const tooniesDeposit2 = parseFloat($('#toonies-deposit-2').value);
    const tooniesTill3 = parseFloat($('#toonies-till-3').value);
    const tooniesDeposit3 = parseFloat($('#toonies-deposit-3').value);
    const tooniesTill4 = parseFloat($('#toonies-till-4').value);
    const tooniesDeposit4 = parseFloat($('#toonies-deposit-4').value);
    const tooniesRollCount = parseFloat($('#toonie-roll-count').value) * 25;
    const tooniesBillCount = parseFloat($('#toonie-bill-count').value);

    const toonieInput = $('#toonies-total');
    
    toonieInput.value = (tooniesTill1 - tooniesDeposit1) +
                                (tooniesTill2 - tooniesDeposit2) +
                                (tooniesTill3 - tooniesDeposit3 ) + 
                                (tooniesTill4 - tooniesDeposit4 ) + 
                                tooniesRollCount + tooniesBillCount;

    let toonieTotalCalc = toonieInput.value * toonieInput.getAttribute('aria-label');
    toonieInput.nextElementSibling.innerHTML = formatter.format(toonieTotalCalc);


    const fivesTill1 = parseFloat($('#fives-till-1').value);
    const fivesDeposit1 = parseFloat($('#fives-deposit-1').value);
    const fivesTill2 = parseFloat($('#fives-till-2').value);
    const fivesDeposit2 = parseFloat($('#fives-deposit-2').value);
    const fivesTill3 = parseFloat($('#fives-till-3').value);
    const fivesDeposit3 = parseFloat($('#fives-deposit-3').value);
    const fivesTill4 = parseFloat($('#fives-till-4').value);
    const fivesDeposit4 = parseFloat($('#fives-deposit-4').value);
    const fivesBillCount = parseFloat($('#five-bill-count').value);

    const fiveInput = $('#fives-total');
    
    fiveInput.value = (fivesTill1 - fivesDeposit1) +
                                (fivesTill2 - fivesDeposit2) +
                                (fivesTill3 - fivesDeposit3 ) + 
                                (fivesTill4 - fivesDeposit4 ) + 
                                fivesBillCount;

    let fiveTotalCalc = fiveInput.value * fiveInput.getAttribute('aria-label');
    fiveInput.nextElementSibling.innerHTML = formatter.format(fiveTotalCalc);


    const tensTill1 = parseFloat($('#tens-till-1').value);
    const tensDeposit1 = parseFloat($('#tens-deposit-1').value);
    const tensTill2 = parseFloat($('#tens-till-2').value);
    const tensDeposit2 = parseFloat($('#tens-deposit-2').value);
    const tensTill3 = parseFloat($('#tens-till-3').value);
    const tensDeposit3 = parseFloat($('#tens-deposit-3').value);
    const tensTill4 = parseFloat($('#tens-till-4').value);
    const tensDeposit4 = parseFloat($('#tens-deposit-4').value);
    const tensBillCount = parseFloat($('#ten-bill-count').value);

    const tenInput = $('#tens-total');
    
    tenInput.value = (tensTill1 - tensDeposit1) +
                                (tensTill2 - tensDeposit2) +
                                (tensTill3 - tensDeposit3 ) + 
                                (tensTill4 - tensDeposit4 ) + 
                                tensBillCount;

    let tenTotalCalc = tenInput.value * tenInput.getAttribute('aria-label');
    tenInput.nextElementSibling.innerHTML = formatter.format(tenTotalCalc);


    const twentiesTill1 = parseFloat($('#twenties-till-1').value);
    const twentiesDeposit1 = parseFloat($('#twenties-deposit-1').value);
    const twentiesTill2 = parseFloat($('#twenties-till-2').value);
    const twentiesDeposit2 = parseFloat($('#twenties-deposit-2').value);
    const twentiesTill3 = parseFloat($('#twenties-till-3').value);
    const twentiesDeposit3 = parseFloat($('#twenties-deposit-3').value);
    const twentiesTill4 = parseFloat($('#twenties-till-4').value);
    const twentiesDeposit4 = parseFloat($('#twenties-deposit-4').value);
    const twentiesBillCount = parseFloat($('#twenty-bill-count').value);

    const twentyInput = $('#twenties-total');
    
    twentyInput.value = (twentiesTill1 - twentiesDeposit1) +
                                (twentiesTill2 - twentiesDeposit2) +
                                (twentiesTill3 - twentiesDeposit3 ) + 
                                (twentiesTill4 - twentiesDeposit4 ) + 
                                twentiesBillCount;

    let twentyTotalCalc = twentyInput.value * twentyInput.getAttribute('aria-label');
    twentyInput.nextElementSibling.innerHTML = formatter.format(twentyTotalCalc);


    const fiftiesTill1 = parseFloat($('#fifties-till-1').value);
    const fiftiesDeposit1 = parseFloat($('#fifties-deposit-1').value);
    const fiftiesTill2 = parseFloat($('#fifties-till-2').value);
    const fiftiesDeposit2 = parseFloat($('#fifties-deposit-2').value);
    const fiftiesTill3 = parseFloat($('#fifties-till-3').value);
    const fiftiesDeposit3 = parseFloat($('#fifties-deposit-3').value);
    const fiftiesTill4 = parseFloat($('#fifties-till-4').value);
    const fiftiesDeposit4 = parseFloat($('#fifties-deposit-4').value);
    const fiftiesBillCount = parseFloat($('#fifty-bill-count').value);

    const fiftyInput = $('#fifties-total');
    
    fiftyInput.value = (fiftiesTill1 - fiftiesDeposit1) +
                                (fiftiesTill2 - fiftiesDeposit2) +
                                (fiftiesTill3 - fiftiesDeposit3 ) + 
                                (fiftiesTill4 - fiftiesDeposit4 ) + 
                                fiftiesBillCount;

    let fiftyTotalCalc = fiftyInput.value * fiftyInput.getAttribute('aria-label');
    fiftyInput.nextElementSibling.innerHTML = formatter.format(fiftyTotalCalc);


    const hundredsTill1 = parseFloat($('#hundreds-till-1').value);
    const hundredsDeposit1 = parseFloat($('#hundreds-deposit-1').value);
    const hundredsTill2 = parseFloat($('#hundreds-till-2').value);
    const hundredsDeposit2 = parseFloat($('#hundreds-deposit-2').value);
    const hundredsTill3 = parseFloat($('#hundreds-till-3').value);
    const hundredsDeposit3 = parseFloat($('#hundreds-deposit-3').value);
    const hundredsTill4 = parseFloat($('#hundreds-till-4').value);
    const hundredsDeposit4 = parseFloat($('#hundreds-deposit-4').value);
    const hundredsBillCount = parseFloat($('#hundreds-bill-count').value);

    const hundredInput = $('#hundreds-total');
    
    hundredInput.value = (hundredsTill1 - hundredsDeposit1) +
                                (hundredsTill2 - hundredsDeposit2) +
                                (hundredsTill3 - hundredsDeposit3 ) + 
                                (hundredsTill4 - hundredsDeposit4 ) + 
                                hundredsBillCount;

    let hundredTotalCalc = hundredInput.value * hundredInput.getAttribute('aria-label');
    hundredInput.nextElementSibling.innerHTML = formatter.format(hundredTotalCalc);

    calculateTotal();
    
}

function calculateTotal() {
    const list = $('#totalContainer').querySelectorAll('.input-group');
    let total = 0;
    list.forEach(element => {
        total += parseFloat(element.lastElementChild.innerHTML.replace('$', ''));
    });

    if(total != 2200){
        $('#total-safe-counting').innerHTML = '<span >'+formatter.format(total)+'</span>';
    }else{
        $('#total-safe-counting').innerHTML = formatter.format(total);
    }
   
}

function calculateTotalDepositCount(){
    const nickelDeposit1 = parseFloat($('#nickels-deposit-1').value);
    const nickelDeposit2 = parseFloat($('#nickels-deposit-2').value);
    const nickelDeposit3 = parseFloat($('#nickels-deposit-3').value);
    const nickelDeposit4 = parseFloat($('#nickels-deposit-4').value);
   
    const nickelInput = $('#nickels-total-deposit');

    nickelInput.value =nickelDeposit1  +  nickelDeposit2 + nickelDeposit3 + nickelDeposit4 ;

    let nickelTotalCalc = nickelInput.value * nickelInput.getAttribute('aria-label');
    nickelInput.nextElementSibling.innerHTML = formatter.format(nickelTotalCalc);


    const dimesDeposit1 = parseFloat($('#dimes-deposit-1').value);
    const dimesDeposit2 = parseFloat($('#dimes-deposit-2').value);
    const dimesDeposit3 = parseFloat($('#dimes-deposit-3').value);
    const dimesDeposit4 = parseFloat($('#dimes-deposit-4').value);

    const dimeInput = $('#dimes-total-deposit');
    
    dimeInput.value =  dimesDeposit1 + dimesDeposit2 + dimesDeposit3 + dimesDeposit4 ;

    let dimeTotalCalc = dimeInput.value * dimeInput.getAttribute('aria-label');
    dimeInput.nextElementSibling.innerHTML = formatter.format(dimeTotalCalc);


    const quartersDeposit1 = parseFloat($('#quarters-deposit-1').value);
    const quartersDeposit2 = parseFloat($('#quarters-deposit-2').value);
    const quartersDeposit3 = parseFloat($('#quarters-deposit-3').value);
    const quartersDeposit4 = parseFloat($('#quarters-deposit-4').value);
   
    const quarterInput = $('#quarters-total-deposit');
    
    quarterInput.value = quartersDeposit1 + quartersDeposit2 + quartersDeposit3+ quartersDeposit4 ;

    let quarterTotalCalc = quarterInput.value * quarterInput.getAttribute('aria-label');
    quarterInput.nextElementSibling.innerHTML = formatter.format(quarterTotalCalc);


    const looniesDeposit1 = parseFloat($('#loonies-deposit-1').value);
    const looniesDeposit2 = parseFloat($('#loonies-deposit-2').value);
    const looniesDeposit3 = parseFloat($('#loonies-deposit-3').value);
    const looniesDeposit4 = parseFloat($('#loonies-deposit-4').value);
   
    const loonieInput = $('#loonies-total-deposit');
    
    loonieInput.value = looniesDeposit1 + looniesDeposit2 + looniesDeposit3 + looniesDeposit4 ;

    let loonieTotalCalc = loonieInput.value * loonieInput.getAttribute('aria-label');
    loonieInput.nextElementSibling.innerHTML = formatter.format(loonieTotalCalc);


    const tooniesDeposit1 = parseFloat($('#toonies-deposit-1').value);
    const tooniesDeposit2 = parseFloat($('#toonies-deposit-2').value);
    const tooniesDeposit3 = parseFloat($('#toonies-deposit-3').value);
    const tooniesDeposit4 = parseFloat($('#toonies-deposit-4').value);
  
    const toonieInput = $('#toonies-total-deposit');
    
    toonieInput.value = tooniesDeposit1 + tooniesDeposit2 +  tooniesDeposit3 + tooniesDeposit4;

    let toonieTotalCalc = toonieInput.value * toonieInput.getAttribute('aria-label');
    toonieInput.nextElementSibling.innerHTML = formatter.format(toonieTotalCalc);


    const fivesDeposit1 = parseFloat($('#fives-deposit-1').value);
    const fivesDeposit2 = parseFloat($('#fives-deposit-2').value);
    const fivesDeposit3 = parseFloat($('#fives-deposit-3').value);
    const fivesDeposit4 = parseFloat($('#fives-deposit-4').value);
  
    const fiveInput = $('#fives-total-deposit');
    
    fiveInput.value =  fivesDeposit1 + fivesDeposit2 + fivesDeposit3 + fivesDeposit4;

    let fiveTotalCalc = fiveInput.value * fiveInput.getAttribute('aria-label');
    fiveInput.nextElementSibling.innerHTML = formatter.format(fiveTotalCalc);


    const tensDeposit1 = parseFloat($('#tens-deposit-1').value);
    const tensDeposit2 = parseFloat($('#tens-deposit-2').value);
    const tensDeposit3 = parseFloat($('#tens-deposit-3').value);
    const tensDeposit4 = parseFloat($('#tens-deposit-4').value);
 
    const tenInput = $('#tens-total-deposit');
    
    tenInput.value =  tensDeposit1 + tensDeposit2 + tensDeposit3 + tensDeposit4 ;

    let tenTotalCalc = tenInput.value * tenInput.getAttribute('aria-label');
    tenInput.nextElementSibling.innerHTML = formatter.format(tenTotalCalc);


    const twentiesDeposit1 = parseFloat($('#twenties-deposit-1').value);
    const twentiesDeposit2 = parseFloat($('#twenties-deposit-2').value);
    const twentiesDeposit3 = parseFloat($('#twenties-deposit-3').value);
    const twentiesDeposit4 = parseFloat($('#twenties-deposit-4').value);
   
    const twentyInput = $('#twenties-total-deposit');
    
    twentyInput.value = twentiesDeposit1 + twentiesDeposit2 + twentiesDeposit3 + twentiesDeposit4 ;

    let twentyTotalCalc = twentyInput.value * twentyInput.getAttribute('aria-label');
    twentyInput.nextElementSibling.innerHTML = formatter.format(twentyTotalCalc);


    const fiftiesDeposit1 = parseFloat($('#fifties-deposit-1').value);
    const fiftiesDeposit2 = parseFloat($('#fifties-deposit-2').value);
    const fiftiesDeposit3 = parseFloat($('#fifties-deposit-3').value);
    const fiftiesDeposit4 = parseFloat($('#fifties-deposit-4').value);
  
    const fiftyInput = $('#fifties-total-deposit');
    
    fiftyInput.value = fiftiesDeposit1 + fiftiesDeposit2 + fiftiesDeposit3 + fiftiesDeposit4 ;

    let fiftyTotalCalc = fiftyInput.value * fiftyInput.getAttribute('aria-label');
    fiftyInput.nextElementSibling.innerHTML = formatter.format(fiftyTotalCalc);


    const hundredsDeposit1 = parseFloat($('#hundreds-deposit-1').value);
    const hundredsDeposit2 = parseFloat($('#hundreds-deposit-2').value);
    const hundredsDeposit3 = parseFloat($('#hundreds-deposit-3').value);
    const hundredsDeposit4 = parseFloat($('#hundreds-deposit-4').value);
   
    const hundredInput = $('#hundreds-total-deposit');
    
    hundredInput.value =  hundredsDeposit1 + hundredsDeposit2 + hundredsDeposit3 + hundredsDeposit4 ;

    let hundredTotalCalc = hundredInput.value * hundredInput.getAttribute('aria-label');
    hundredInput.nextElementSibling.innerHTML = formatter.format(hundredTotalCalc);

    calculateTotalDeposit();
    
}

function calculateTotalDeposit() {
    const list = $('#totalContainerDeposit').querySelectorAll('.input-group');
    let total = 0;
    let totalCoin = 0;
    let totalBills = 0;
    list.forEach(element => {

        const childNodes = element.childNodes;

        const childElements = Array.from(childNodes).filter(node => node.nodeType === 1);

        const secondChildElement = childElements[1];

        if(secondChildElement.getAttribute("aria-type") == 'Coin'){
            totalCoin += parseFloat(element.lastElementChild.innerHTML.replace('$', ''));
        }

       
        if(secondChildElement.getAttribute("aria-type") == 'Bill'){
            totalBills += parseFloat(element.lastElementChild.innerHTML.replace('$', ''));
        }
        total += parseFloat(element.lastElementChild.innerHTML.replace('$', ''));
    });

    $('#total-deposit-coin').innerHTML = '<span >'+formatter.format(totalCoin)+'</span>';
    $('#total-deposit-bill').innerHTML = '<span >'+formatter.format(totalBills)+'</span>';
    $('#total-deposit-counting').innerHTML = '<span >'+formatter.format(total)+'</span>';
   
   
}

function calculateTotalSafeCount(){
    const nickelRollCount = parseFloat($('#nickel-roll-count').value) * 40;
    const nickelBillCount = parseFloat($('#nickel-bill-count').value);

    const nickelInput = $('#nickels-total-safe');

    nickelInput.value =  nickelRollCount + nickelBillCount;

    let nickelTotalCalc = nickelInput.value * nickelInput.getAttribute('aria-label');
    nickelInput.nextElementSibling.innerHTML = formatter.format(nickelTotalCalc);

    const dimesRollCount = parseFloat($('#dime-roll-count').value) * 50;
    const dimesBillCount = parseFloat($('#dime-bill-count').value);

    const dimeInput = $('#dimes-total-safe');
    
    dimeInput.value = dimesRollCount + dimesBillCount;

    let dimeTotalCalc = dimeInput.value * dimeInput.getAttribute('aria-label');
    dimeInput.nextElementSibling.innerHTML = formatter.format(dimeTotalCalc);


    const quartersRollCount = parseFloat($('#quarter-roll-count').value) * 40;
    const quartersBillCount = parseFloat($('#quarter-bill-count').value);

    const quarterInput = $('#quarters-total-safe');
    
    quarterInput.value =  quartersRollCount + quartersBillCount;

    let quarterTotalCalc = quarterInput.value * quarterInput.getAttribute('aria-label');
    quarterInput.nextElementSibling.innerHTML = formatter.format(quarterTotalCalc);


    const looniesRollCount = parseFloat($('#loonie-roll-count').value) * 25;
    const looniesBillCount = parseFloat($('#loonie-bill-count').value);

    const loonieInput = $('#loonies-total-safe');
    
    loonieInput.value = looniesRollCount + looniesBillCount;

    let loonieTotalCalc = loonieInput.value * loonieInput.getAttribute('aria-label');
    loonieInput.nextElementSibling.innerHTML = formatter.format(loonieTotalCalc);


    const tooniesRollCount = parseFloat($('#toonie-roll-count').value) * 25;
    const tooniesBillCount = parseFloat($('#toonie-bill-count').value);

    const toonieInput = $('#toonies-total-safe');
    
    toonieInput.value = tooniesRollCount + tooniesBillCount;

    let toonieTotalCalc = toonieInput.value * toonieInput.getAttribute('aria-label');
    toonieInput.nextElementSibling.innerHTML = formatter.format(toonieTotalCalc);


    const fivesBillCount = parseFloat($('#five-bill-count').value);

    const fiveInput = $('#fives-total-safe');
    
    fiveInput.value =  fivesBillCount;

    let fiveTotalCalc = fiveInput.value * fiveInput.getAttribute('aria-label');
    fiveInput.nextElementSibling.innerHTML = formatter.format(fiveTotalCalc);


    const tensBillCount = parseFloat($('#ten-bill-count').value);

    const tenInput = $('#tens-total-safe');
    
    tenInput.value =  tensBillCount;

    let tenTotalCalc = tenInput.value * tenInput.getAttribute('aria-label');
    tenInput.nextElementSibling.innerHTML = formatter.format(tenTotalCalc);


    const twentiesBillCount = parseFloat($('#twenty-bill-count').value);

    const twentyInput = $('#twenties-total-safe');
    
    twentyInput.value =   twentiesBillCount;

    let twentyTotalCalc = twentyInput.value * twentyInput.getAttribute('aria-label');
    twentyInput.nextElementSibling.innerHTML = formatter.format(twentyTotalCalc);


    const fiftiesBillCount = parseFloat($('#fifty-bill-count').value);

    const fiftyInput = $('#fifties-total-safe');
    
    fiftyInput.value = fiftiesBillCount;

    let fiftyTotalCalc = fiftyInput.value * fiftyInput.getAttribute('aria-label');
    fiftyInput.nextElementSibling.innerHTML = formatter.format(fiftyTotalCalc);


    const hundredsBillCount = parseFloat($('#hundreds-bill-count').value);

    const hundredInput = $('#hundreds-total-safe');
    
    hundredInput.value =  hundredsBillCount;

    let hundredTotalCalc = hundredInput.value * hundredInput.getAttribute('aria-label');
    hundredInput.nextElementSibling.innerHTML = formatter.format(hundredTotalCalc);

    calculateTotalSafe();
    
}

function calculateTotalSafe() {
    const list = $('#total-safe-without-till').querySelectorAll('.input-group');
    let total = 0;
    list.forEach(element => {
        total += parseFloat(element.lastElementChild.innerHTML.replace('$', ''));
    });

    if(total != 2200){
        $('#total-safe-counting-safe').innerHTML = '<span >'+formatter.format(total)+'</span>';
    }else{
        $('#total-safe-counting-safe').innerHTML = formatter.format(total);
    }
   
}



