let myInput = document.querySelector('.set-user input');
let myBtn = document.querySelector('.btn-get');
let showData = document.querySelector('.show-data');


myBtn.onclick = function () {
    
    getData();
}


function getData() {
    
    if (myInput.value === "") {
        
        showData.innerHTML = `<span>Please Enter Username of Github!</span>`
    }

    else {

    }
}

