import './style.css'
let canvas= document.querySelector('#app') as HTMLCanvasElement
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let x=0
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.setLineDash([3,3])
  ctx.lineDashOffset=x
  ctx.strokeRect(100,100,100,100)
}
function march(){
  x++;
  draw()
  setTimeout(march,10)

}
// march()
draw()