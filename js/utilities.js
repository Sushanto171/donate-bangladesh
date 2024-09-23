// button Mouse Down up function
function buttonDownUp(id) {
    const button = id
    button.classList.add('duration-300', 'ease-in-out')
    button.addEventListener('mousedown', function () {
        button.style.scale = '.9';
    })
    button.addEventListener('mouseup', function () {
        button.style.scale = '1';
    })
}

const buttons = document.querySelectorAll('.downUp');
for (const button of buttons) {
    buttonDownUp(button);
}
// menu tab function
function showTab(id) {
    const tab = document.getElementById(id);
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('donate-tab').classList.add('hidden');
    document.getElementById('history-tab').classList.add('hidden');
    document.getElementById('modal-tab').classList.add('hidden');
    tab.classList.remove('hidden')
}


// for mobile icon
const mobileIcon = document.getElementById('mobile-icon')
mobileIcon.addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    }
    else {
        mobileMenu.classList.add('hidden')
    }
})

// function for get input valid amount 

function getInputAmount(id) {
    // account balance
    const balanceValue = document.getElementById('accountBalance').innerText;
    const balance = parseFloat(balanceValue);
    // input amount
    const inputField = document.getElementById(id).value;
    const inputValue = inputField.trim();
    const inputValueNumber = parseFloat(inputValue);
    // validation
    if (isNaN(inputValueNumber) === true || inputValueNumber <= 0) {
        alert('Invalid type number!');
        document.getElementById(id).value = '';
        return;
    }
    if (inputValueNumber > balance) {
        alert('You don\'t have enough money!');
        document.getElementById(id).value = '';
        return;
    }
    document.getElementById(id).value = '';
    return inputValueNumber;
}

// function for updated balance
function updateContainerBalance(inputValidAmount, donatedBalanceContainer) {
    if (typeof (inputValidAmount) === 'number') {
        // account balance
        const balanceValue = document.getElementById('accountBalance').innerText;
        const balance = parseFloat(balanceValue);
        // blog page account balance
        const blogPageAccount = document.getElementById('blog-account');
        // account balance update
        const updateBalance = balance - inputValidAmount;
        document.getElementById('accountBalance').innerText = updateBalance.toFixed(2);
        // blogPageAccount.innerText = updateBalance;

        // donated balance
        const donatedBalance = donatedBalanceContainer.innerText;
        const donatedBalanceNumber = parseFloat(donatedBalance);
        const updateDonatedBalance = donatedBalanceNumber + inputValidAmount;
        donatedBalanceContainer.innerText = updateDonatedBalance.toFixed(2);
    }
};

// history tab function
let num = 0;
function createDataForHistory(inputValidAmount, donationInfo) {
    if (typeof (inputValidAmount) === 'number') {
        num += 1;
        const transaction = Math.random() * 10;
        const date = new Date();
        const donationTitle = donationInfo.innerText
        const historyContainer = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = ` 
                    <p class="w-7 h-7 p-2 bg-gray-300 rounded-sm flex justify-center items-center mb-1">${num}</p>
                    <div class="border rounded-xl p-4 pl-8 space-y-5 shadow hover:shadow-md">
                    <h4 class="font-semibold">${inputValidAmount.toFixed(2)} TK. ${donationTitle}</h4>
                    <p class="text-sm">Transaction ID : ${transaction}</p>
                    <p class="text-sm">Date : ${date.toLocaleString()}</p>
                </div>
    `
        historyContainer.insertBefore(div, historyContainer.firstChild);
    }
}