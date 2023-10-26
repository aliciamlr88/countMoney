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
       
    });

   
    
});


formSafe.forEach((element,i) => {
    element.addEventListener('change', (evt) => {
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
    console.log($('#total-till-1').getAttribute("actual-value"));
    console.log(totalTill2);
    console.log(totalTill3);
    console.log(totalTill4);
    console.log(totalSafe);
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

    $('#nickels-total').value = (nickelTill1 - nickelDeposit1) +
                                (nickelTill2 - nickelDeposit2) +
                                (nickelTill3 - nickelDeposit3 ) + 
                                (nickelTill4 - nickelDeposit4 ) + 
                                nickelRollCount + nickelBillCount;
    
}



