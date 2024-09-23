// home button dynamic
//blog button dynamic 
const homeButtons = document.querySelectorAll(".home-button");
for(const homeButton of homeButtons){
    homeButton.addEventListener('click', function(){
        window.location.href= './index.html';
    })
}
