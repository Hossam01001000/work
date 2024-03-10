import './style.css'
let rpw=2000
let spw=1248

let eyesxs=[739,665,586,518]
let eyeys=[302,302,321,321]
let eyesize=[12,18]
let newHeight=(rpw*702)/spw
// let svg= document.querySelector('svg')
let eyes = document.querySelectorAll('svg')
// console.log(svg)
// let newwidth=
// let svg=document.querySelector('svg')  
let i=0
// svg?.style.width !== undefined ? svg.style.width='6' :null
for(let eye of eyes){
   if(eye.style){
    eye.style.width=`${(12*rpw)/spw}px`
    eye.style.top=`${(eyeys[i]*rpw)/spw}px`
    eye.style.left=`${(eyesxs[i]*rpw)/spw}px`
    i++;
   }
}
function onhov(){

}
// if(svg?.style.width !== undefined){
//     console.log(svg.style.width)
//     svg.style.width=`${(12*3000)/1248}`
// }

// svg?.style.top !== undefined? svg.style.top=`${(302*3000)/1248 }`: null
// svg?.style.left!== undefined? svg.style.left=`${(739*3000)/1248}`: null


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var ctx =<CanvasRenderingContext2D> canvas.getContext('2d');
// function getrand(opt:number){
//     return  Math.floor(Math.random() * opt);
// }
// let x=500 ,y =500

// ctx.beginPath()
// // ctx.arc(x,y+500,200,0,2*Math.PI)
// ctx.arc(x,y+1000,200,0,2*Math.PI)
// ctx.arc(x+500,y,200,0,2*Math.PI)
// // ctx.arc(x,y,200,0,2*Math.PI)

// ctx.lineWidth=.1
// ctx.stroke()