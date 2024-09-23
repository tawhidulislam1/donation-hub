
// noakhali Donation Code
document.getElementById('noakhali-donate').addEventListener('click' , function(){
    const donatedAmount = donateAmount('noakhali-filed');
    const totalDonatedAmount = mainBalance();
    const totalNoakhaliDonatedAmount = donatingAmount('donating-amount');
    
    if(isNaN(donatedAmount) || donatedAmount <= 0 ){
        alert('Please Type number in ammount');
        return;
    }
    const newTotalBalance = totalDonatedAmount - donatedAmount;
    if(donatedAmount >= totalDonatedAmount){
        alert('You have not the money');
        const model = document.getElementById('modal').classList.add('hidden');
        return;
        
    }
    const newTotalnNoakhaliBalance = donatedAmount + totalNoakhaliDonatedAmount;
    
    document.getElementById('donating-amount').innerText = newTotalnNoakhaliBalance;
    document.getElementById('main-balance').innerText  = newTotalBalance;

    const model = document.getElementById('modal').classList.remove('hidden');

    const noakhaliTitle = document.getElementById('feni-noakhali-title').innerText;
    const time = new Date();
    // transaction history start
    const div = document.createElement('div');
    div.classList.add('card-body');
    div.innerHTML = `
        <h2 class="card-title">${donatedAmount}Taka is ${noakhaliTitle} </h2>
        <p>${time}</p>
    `
    document.getElementById('histoy').appendChild(div);


})

// Feni Donation Code

document.getElementById('feni-donate').addEventListener('click' , function(){
    const feniDonatedAmount = donateAmount('feni-filed');
    const totalDonatedAmountFeni = mainBalance();
    const totalFeniDonatedAmount = donatingAmount('donating-amount-feni');
    
    if(isNaN(feniDonatedAmount) || feniDonatedAmount <= 0 ){
        alert('Please Type number in ammount');
        return;
    }
    const newTotalBalance = totalDonatedAmountFeni - feniDonatedAmount;
    if(feniDonatedAmount >= totalDonatedAmountFeni){
        alert('You have not the money');
        const model = document.getElementById('modal').classList.add('hidden');

        return;
    }
    const newTotalnFeniBalance = feniDonatedAmount + totalFeniDonatedAmount;
    
    document.getElementById('donating-amount-feni').innerText = newTotalnFeniBalance;
    document.getElementById('main-balance').innerText  = newTotalBalance;

    const model = document.getElementById('modal').classList.remove('hidden');

    const feniTitle = document.getElementById('feni-title').innerText;
    const time = new Date();
    // transaction history start
    const div = document.createElement('div');
    div.classList.add('card-body');
    div.innerHTML = `
        <h2 class="card-title">${feniDonatedAmount}Taka is ${feniTitle} </h2>
        <p>${time}</p>
    `
    document.getElementById('histoy').appendChild(div);
})

// qouta Donation Code

document.getElementById('qouta-donate').addEventListener('click' , function(){
    const qoutaDonatedAmount = donateAmount('qouta-filed');
    const totalDonatedAmountQouta = mainBalance();
    const totalQoutaDonatedAmount = donatingAmount('donating-amount-qouta');
    
    if(isNaN(qoutaDonatedAmount) || qoutaDonatedAmount <= 0 ){
        alert('Please Type number in ammount');
        return;
    }
    const newTotalBalance = totalDonatedAmountQouta - qoutaDonatedAmount;
    if(qoutaDonatedAmount >= totalDonatedAmountQouta){
        alert('You have not the money');
        const model = document.getElementById('modal').classList.add('hidden');
        return;
    }
    const newTotalnQoutaBalance = qoutaDonatedAmount + totalQoutaDonatedAmount;
    
    document.getElementById('donating-amount-qouta').innerText = newTotalnQoutaBalance;
    document.getElementById('main-balance').innerText  = newTotalBalance;

    const model = document.getElementById('modal').classList.remove('hidden');


    const qoutaTitle = document.getElementById('qouta-title').innerText;
    const time = new Date();
    // transaction history start
    const div = document.createElement('div');
    div.classList.add('card-body');
    div.innerHTML = `
        <h2 class="card-title">${qoutaDonatedAmount}Taka is Donate For ${qoutaTitle} </h2>
        <p>${time}</p>
    `
    document.getElementById('histoy').appendChild(div);
})


// donate section show
document.getElementById('donated').addEventListener('click', function(){
    showDivSection('donate');
    const btn = document.getElementById('donated');
    btn.classList.add('actives')
    const btnDonated = document.getElementById('history');
    btnDonated.classList.remove('actives')
})


// history section show
document.getElementById('history').addEventListener('click', function(){
    showDivSection('history-section');
    const btnDonated = document.getElementById('donated');
    btnDonated.classList.remove('actives')
    const btn = document.getElementById('history');
    btn.classList.add('actives')
})