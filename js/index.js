
const donateButton = document.getElementById('donate-button');
const historyButton = document.getElementById('history-button');
const accountBalance = document.getElementById('accountBalance').innerText;
const accountBalanceNumber = parseFloat(accountBalance);
// console.log(donateButton, historyButton)
donateButton.addEventListener('click', function(){
    showTab('donate-tab')
    donateButton.classList.add('bg-primary');
    donateButton.classList.remove('border-gray-300');
    historyButton.classList.remove('bg-primary');
    historyButton.classList.add('border-gray-300');
})
historyButton.addEventListener('click', function(){
    showTab('history-tab')
    historyButton.classList.add('bg-primary');
    historyButton.classList.remove('border-gray-300');
    donateButton.classList.remove('bg-primary');
    donateButton.classList.add('bg-gray-200', 'border-gray-300');

})

// card-1

document.getElementById('card-1-button').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputAmount('card-1-input', accountBalanceNumber);
    console.log(amount);
})
// card-2

document.getElementById('card-2-button').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputAmount('card-2-input', accountBalanceNumber);
    console.log(amount);
})
// card-3

document.getElementById('card-3-button').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputAmount('card-3-input', accountBalanceNumber);
    console.log(amount);
})