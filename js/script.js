let myInput = document.querySelector('.set-user input');
let myBtn = document.querySelector('.btn-get');
let showData = document.querySelector('.show-data');


myBtn.onclick = function () {
    
    getData();
}


function getData() {
    
    if (myInput.value === "") {
        
        swal({
            title: "Pay Attention!",
            text: "This Field Is Important, Fill Your Username The Github.",
            icon: "error",
          });
          myInput.focus();
    }

    else {

        fetch(`https://api.github.com/users/${myInput.value}/repos`)
        
        .then ((response) => response.json())
        
        .then ((datas) => {

            showData.innerHTML = '';

            datas.forEach(data => {
                    
                let mainDiv = createDiv(data);

                createLink(data, mainDiv);

                createStarts(data, mainDiv);

                createForks(data, mainDiv);

                createWatchers(data, mainDiv);
            });
        
        })

    }
}

function createDiv(data) {
    
    let myDiv = document.createElement('div');

    let myText = document.createTextNode(data.name);

    myDiv.appendChild(myText);

    myDiv.className = 'repos-box';

    showData.appendChild(myDiv);

    return myDiv;
}

function createLink(data, mainDiv) {
    
    let myAnchor = document.createElement('a');

    let myText = document.createTextNode('Visit This Repos');

    myAnchor.href = `https://github.com/${myInput.value}/${data.name}`;

    myAnchor.setAttribute('target', '_blank');

    myAnchor.appendChild(myText);

    mainDiv.appendChild(myAnchor);

}

function createStarts(data, mainDiv) {
    
    let mySpan = document.createElement('span');

    let myText = document.createTextNode(`Star ${data.stargazers_count}`);

    mySpan.appendChild(myText);

    mainDiv.appendChild(mySpan);
}

function createForks(data, mainDiv) {
    
    let mySpan = document.createElement('span');

    let myText = document.createTextNode(`Fork ${data.forks_count}`);

    mySpan.appendChild(myText);

    mainDiv.appendChild(mySpan);
}

function createWatchers(data, mainDiv) {
    
    let mySpan = document.createElement('span');

    let myText = document.createTextNode(`Watchers ${data.watchers_count}`);

    mySpan.appendChild(myText);

    mainDiv.appendChild(mySpan);
}