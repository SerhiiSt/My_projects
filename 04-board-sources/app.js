const board = document.querySelector('#board')
const colors = ['#64E408','#2CC9CC','#78FFD6','#7F00FF', '#4A00E0','#35C8CB','#3CBA92','#F83600', '#2CC9CC','#F9D423','#606C88','#061161','#EFC76C','#00C6FF','#FEE140','#9D50BB','#FFADD4','#2A0213','#2F0743','#511414']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover',()=>
    setColor(square))

  square.addEventListener('mouseleave',()=>
    removeColor(square))

  board.append(square)
}

function setColor(element){
const color = getRandomColor()
element.style.backgroundColor = color
element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
  const index = Math.floor(Math.random()* colors.length)
  return colors[index]
}