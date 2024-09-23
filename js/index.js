
const donateButton = document.getElementById('donate-button');
const historyButton = document.getElementById('history-button');
donateButton.addEventListener('click', function () {
    showTab('donate-tab')
    donateButton.classList.add('bg-primary');
    donateButton.classList.remove('border-gray-300');
    historyButton.classList.remove('bg-primary');
    historyButton.classList.add('border-gray-300');
})
historyButton.addEventListener('click', function () {
    showTab('history-tab')
    historyButton.classList.add('bg-primary');
    historyButton.classList.remove('border-gray-300');
    donateButton.classList.remove('bg-primary');
    donateButton.classList.add('bg-gray-200', 'border-gray-300');

})

//blog button dynamic 
const blogButtons = document.querySelectorAll(".blog-button");
for(const blogButton of blogButtons){
    blogButton.addEventListener('click', function(){
        window.open('./blogs.html', '_blank');  //new tab open
    })
}

// card-1

document.getElementById('card-1-button').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputAmount('card-1-input');
    console.log(amount)
    const donatedContainer = document.getElementById('card-1-donated-balance');
    updateContainerBalance(amount, donatedContainer);
    const cardInfo = document.getElementById('card-1-info');
    createDataForHistory(amount, cardInfo);
})
// card-2

document.getElementById('card-2-button').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputAmount('card-2-input');
    console.log(amount)
    const donatedContainer = document.getElementById('card-2-donated-balance');
    updateContainerBalance(amount, donatedContainer);
    const cardInfo = document.getElementById('card-2-info');
    createDataForHistory(amount, cardInfo);
})
// card-3

document.getElementById('card-3-button').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputAmount('card-3-input');
    const donatedContainer = document.getElementById('card-3-donated-balance');
    updateContainerBalance(amount, donatedContainer);
    const cardInfo = document.getElementById('card-3-info');
    createDataForHistory(amount, cardInfo);
    console.log(cardInfo)
})
