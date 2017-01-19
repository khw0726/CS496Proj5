let startX = null
let startY = null
let endX = null
let endY = null
let isDrawing = false

// let canvas = document.createElement('canvas')
// let ctx = canvas.getContext('2d')
// canvas.id = 'goodCanvas'
// canvas.width = document.body.clientWidth
// canvas.height = document.body.clientWidth
// canvas.style.zIndex = "1" 

// document.body.appendChild(canvas)

// canvas.addEventListener('mousedown', selectRegionStart, false)
// canvas.addEventListener('mouseup', selectRegionEnd, false)


// function selectRegionStart(ev) {
//   ev.preventDefault()
//   startX = ev.clientX
//   startY = ev.clientY
//   isDrawing = true
//   canvas.style.cursor='crosshair'
// }

// function selectRegionEnd(ev) {
//   ev.preventDefault()
//   isDrawing = false
//   endX = ev.clientX
//   endY = ev.clientY
//   ctx.beginPath();
//   ctx.rect(startX, startY, endX - startX, endY - startY)
//   document.body.removeChild(canvas)
//   chrome.runtime.sendMessage({startX: startX, startY: startY, endX: endX, endY: endY})
// }

document.addEventListener('mousedown', getStartPosition, false)
document.addEventListener('mouseup', getEndPosition, false)

function getStartPosition(ev) {
  ev.preventDefault()
  startX = ev.clientX
  startY = ev.clientY
  document.style.cursor='crosshair'
  // alert('startX' + startX + 'startY' + startY)
}

function getEndPosition(ev) {
  ev.preventDefault()
  endX = ev.clientX
  endY = ev.clientY
  // document.style.cursor='default'
  alert('endX' + endX + 'endY' + endY)
  // document.removeEventListener('click', getStartPosition)
  // document.removeEventListener('contextmenu', getEndPosition)
  chrome.runtime.sendMessage({startX: startX, startY: startY, endX: endX, endY: endY})
  
}


