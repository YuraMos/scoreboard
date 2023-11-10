let scoreEl = document.getElementById('score-el')
let scoreEl2 = document.getElementById('score-el2')
let num1 = 0
let num2 = 0


function add1(){
   num1 += 1
   scoreEl.textContent = num1
}

function add2(){
   num1 += 2
   scoreEl.textContent = num1
}

function add3(){
   num1 += 3
   scoreEl.textContent = num1
}

function addG1(){
   num2 += 1
   scoreEl2.textContent = num2
}
function addG2(){
   num2 += 2
   scoreEl2.textContent = num2
}
function addG3(){
   num2 += 3
   scoreEl2.textContent = num2
}

function newgame(){
    scoreEl.textContent = 0
    scoreEl2.textContent = 0
    num1 = 0
    num2 = 0
   
}
