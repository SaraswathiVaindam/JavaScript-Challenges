// Challenge1: Age in Days

function ageInDays() {
    var birthYear = prompt('Whta year were you born?');
    var days = (2023-birthYear) * 365;
    
    var h1 = document.createElement('h1');
    var text = document.createTextNode('You are ' + days + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge2: Generate Cat

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/dbe.gif";
    div.appendChild(image);
}

// Challenge4: Change the color of All Buttons

var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [];
for(var i=0; i<all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i]);
}

function buttonColorChange(buttonThingy) {
    if(buttonThingy.value == 'red') {
        buttonRed();
    }
    else if(buttonThingy.value == 'green') {
        buttonGreen();
    }
    else if(buttonThingy.value == 'reset') {
        buttonColorReset();
    }
    else {
        randomColor();
    }
    
}

function buttonRed() {
    for(var i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}


function buttonGreen() {
    for(var i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for(var i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor() {
    var choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(var i=0; i<all_buttons.length; i++) {
        let randomNumner = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[randomNumner]);
    }
}