document.addEventListener('DOMContentLoaded', () => {

})

function addCareerEvents(){
    let buttons = document.querySelectorAll('.career > button');
    let output = document.getElementById('grossAnnual');
    for(let button of buttons){
        button.addEventListener('click', (e) => {
            output.value = e.target.dataset.salary;
            calculateBudget();
        });
    }
}

function calculateBudget(){
    console.log('test OK')

    let income = document.getElementById(`grossAnnual`).value;
    let month = income/12;
    document.getElementById(`FederalTaxes`).value = month * 0.12;
    document.getElementById(`StateTaxes`).value = Math.floor(month *  0.007);
    document.getElementById(`Socialsecurity`).value = Math.floor(month *  0.062);
    document.getElementById(`Medicare`).value = Math.floor(month *   0.0145);
    document.getElementById(`StateDisablity`).value = Math.floor(month *  0.01);
    document.getElementById(`Retirementinvestment`).value = Math.floor(month *  0.062);
    document.getElementById(`Medicalinasurance`).value = Math.floor(month *  0.05);
    document.getElementById(`Socialsecurity`).value = Math.floor(month  - 180);

    // let grossAnnual = document.getElementById('grossAnnual'),
    //     grossMonthly = document.getElementById('grossMonthly');

    // let balance = Math.floor(getElementById('grossAnnual') / 12);
    // document.getElementById("FederalTaxes").innertext = Math.floor(balance * 0.12),
    // StateTaxes.value = Math.floor(balance.value * 0.007),
    // Socialsecurity.value = Math.floor(balance.value * 0.062),
    // Medicare.value = Math.floor(balance.value * 0.0145),
    // StateDisablity.value = Math.floor(balance.value * 0.01),
    // Retirementinvestment.value = Math.floor(balance.value * 0.05),
    // Medicalinasurance.value = Math.floor(balance.value - 180);



    console.log(`Gross Annual: ${grossAnnual.value}`);
}