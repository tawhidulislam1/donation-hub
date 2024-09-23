document.getElementById('noakhali-donate').addEventListener('click' , function(){
    const donatedAmount = donateAmount('noakhali-filed');
    const totalDonatedAmount = mainBalance();
    const totalNoakhaliDonatedAmount = donatingAmount();
    
    if(donatedAmount < 0  &&  isNaN(donatedAmount)  ){
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
})