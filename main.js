"use stict"
let submitBtn = document.querySelector(".submit");
let  modal = document.querySelector(".modal-container");
let rateSelected = document.querySelector(".rate-selected-info");
let btns = document.querySelectorAll(".rating")
let ratingClicked;



submitBtn.addEventListener("click", ratedSelectedInfo)


for(i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", rated)
    
}

function ratedSelectedInfo(){
    modal.classList.add("modal-transition")
    rateSelected.innerHTML = `You selected  ${ratingClicked.innerHTML} out of 5`
}

function rated(){
    ratingClicked = this;
    checker();
    this.classList.add("rating-selected");
}

function checker(){
    for(i=0; i < btns.length; i++){
        if(btns[i].classList.contains("rating-selected")){
            btns[i].classList.remove("rating-selected")
        }
    }
}
