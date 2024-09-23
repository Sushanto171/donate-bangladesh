// button Mouse Down up function
function buttonDownUp(id){
    const button = id
    button.classList.add('duration-300', 'ease-in-out')
    button.addEventListener('mousedown',function(){
        button.style.scale ='.9';
    })
    button.addEventListener('mouseup',function(){
        button.style.scale ='1';
    })
}

const buttons = document.querySelectorAll('.downUp');
for(const button of buttons){
    buttonDownUp(button);
}
// menu tab function
function showTab(id){
    const tab = document.getElementById(id);
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('donate-tab').classList.add('hidden');
    document.getElementById('history-tab').classList.add('hidden');
    document.getElementById('modal-tab').classList.add('hidden');
    tab.classList.remove('hidden')
}


// for mobile icon
const mobileIcon = document.getElementById('mobile-icon')
mobileIcon.addEventListener('click',function(){
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden');
    }
    else{
        mobileMenu.classList.add('hidden')
    }
})

// input amount value

function getInputAmount(id){
    const balanceValue = document.getElementById('accountBalance').innerText;
    const balance = parseFloat(balanceValue);
    const inputField = document.getElementById(id).value;
    const inputValue = inputField.trim();
    const inputValueNumber = parseFloat(inputValue);
// validation
    if(typeof(inputValueNumber) === 'string' || isNaN(inputValueNumber) || inputValueNumber <= 0){
        alert('Invalid type number!');
        document.getElementById(id).value = '';
        return;
    }
    else if(inputValueNumber > balance ){
        alert('You don\'t have enough money!');
        document.getElementById(id).value = '';
        return;
    }
    
    const updateBalance = balance - inputValueNumber;
    document.getElementById('accountBalance').innerText=updateBalance;



    console.log(balance, inputValueNumber, updateBalance)

    document.getElementById(id).value = '';
    return inputValueNumber;

}