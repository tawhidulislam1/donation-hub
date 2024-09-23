
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
        return;
    }
    const newTotalnNoakhaliBalance = donatedAmount + totalNoakhaliDonatedAmount;
    
    document.getElementById('donating-amount').innerText = newTotalnNoakhaliBalance;
    document.getElementById('main-balance').innerText  = newTotalBalance;

    const model = document.getElementById('modal').classList.remove('hidden');
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
        return;
    }
    const newTotalnFeniBalance = feniDonatedAmount + totalFeniDonatedAmount;
    
    document.getElementById('donating-amount-feni').innerText = newTotalnFeniBalance;
    document.getElementById('main-balance').innerText  = newTotalBalance;

    const model = document.getElementById('modal').classList.remove('hidden');
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
        return;
    }
    const newTotalnQoutaBalance = qoutaDonatedAmount + totalQoutaDonatedAmount;
    
    document.getElementById('donating-amount-qouta').innerText = newTotalnQoutaBalance;
    document.getElementById('main-balance').innerText  = newTotalBalance;

    const model = document.getElementById('modal').classList.remove('hidden');
})
