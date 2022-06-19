let color = "black"
let click = true
function printBorard(size){
  let board = document.querySelector(".board")
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  let boxes = size * size
  for (let i = 0; i< boxes; i++){
    let square = document.createElement(`div`)
    square.addEventListener('mouseover',colorSquare)
    square.style.backgroundColor = "white"
    board.insertAdjacentElement("beforeend",square)
  } 
}
printBorard(16)
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let btncolor = document.getElementById("color").value
console.log(btncolor)
output.innerHTML = slider.value;



slider.oninput = function() {
  output.innerHTML = this.value;
  printBorard(this.value)
}

function colorSquare(){
  if(click){
    if( color == 'random'){
      this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
    }else{
      this.style.backgroundColor = color
    }
    btncolor = color
  }
}
function changeColor(choise){
  color = choise
  btncolor = choise
}
function reset(){
  let board = document.querySelector(".board")
  let square = board.querySelectorAll("div")
  square.forEach((div)=> div.style.backgroundColor = "white")
}

document.querySelector("body").addEventListener("click", (e) =>{
  if(e.target.tagName != "BUTTON"){
    click = !click
  }
})