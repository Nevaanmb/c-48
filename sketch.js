//graphic cards 
var rtx3090,rtx3080ti,rtx3080,rtx3070ti,rtx3070,rtx3060ti,rtx3060,rtx2080ti,rtx2080,rtx2070,rtx2060,gtx1080ti;



function preload(){
 
rtx3090=loadImage("rtx 3090.png")
rtx3080ti=loadImage("3080tt.png")
rtx3080=loadImage("rtx 3080.png")
rtx3070ti=loadImage("rtx 3070ti.png")
rtx3070=loadImage("rtx 3070.png")
rtx3060ti=loadImage("rtx 3060ti.png")
rtx3060=loadImage("rtx 3060.png")
rtx2080ti=loadImage("rtx 2080ti.png")
rtx2080=loadImage("rtx 2080.png")
rtx2070=loadImage("rtx2070.png")
rtx2060=loadImage("rtx 2060.png")
gb8=loadImage("ram.png")
gb16=loadImage("ram.png")
gb32=loadImage("ram.png")
gb64=loadImage("ram.png")
tb1hdd=loadImage("1hdd.png")
tb1ssd=loadImage("ssd.png")
gtx1080ti=loadImage("gtx 1080ti.png")
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);

rtx3090s=createSprite(width-1700,300,100,4)
rtx3090s.addImage(rtx3090)
rtx3090s.scale=0.3
rtx3080tis= createSprite(width-1400,300,100,40)
rtx3080tis.addImage(rtx3080ti)
rtx3080tis.scale=0.2
rtx3080s= createSprite(width-1100,300,100,40)
rtx3080s.addImage(rtx3080)
rtx3080s.scale=0.2
rtx3070tis= createSprite(width-800,300,100,40)
rtx3070tis.addImage(rtx3070ti)
rtx3070tis.scale=0.7
rtx3070s= createSprite(width-500,300,100,40)
rtx3070s.addImage(rtx3070)
rtx3070s.scale=0.2
rtx3060tis= createSprite(width-200,300,100,40)
rtx3060tis.addImage(rtx3060ti)
rtx3060tis.scale=0.2
rtx3060s= createSprite(width-1700,500,100,40)
rtx3060s.addImage(rtx3060)
rtx3060s.scale=0.2
rtx2080tis= createSprite(width-1400,500,100,40)
rtx2080tis.addImage(rtx2080ti)
rtx2080tis.scale=0.2
rtx2080s= createSprite(width-1100,500,100,40)
rtx2080s.addImage(rtx2080)
rtx2080s.scale=0.2
rtx2070s= createSprite(width-800,500,100,40)
rtx2070s.addImage(rtx2070)
rtx2070s.scale=0.2
rtx2060s= createSprite(width-500,500,100,40)
rtx2060s.addImage(rtx2060)
rtx2060s.scale=0.2
gtx1080tis= createSprite(width-200,500,100,40)
gtx1080tis.addImage(gtx1080ti)
gtx1080tis.scale=0.2
}
function draw(){
background('black')
textSize(20)
fill('white')

text('rtx 3090',width-1750,400)
text('rtx 3080ti',width-1450,400)
text('rtx 3080',width-1150,400)
text('rtx 3070ti',width-850,400)
text('rtx 3070',width-550,400)
text('rtx 3060ti',width-250,400)
text('rtx 3060',width-1750,600)
text('rtx 2080ti',width-1450,600)
text('rtx 2080',width-1150,600)
text('rtx 2070',width-850,600)
text('rtx 2060',width-550,600)
text('gtx 1080ti',width-250,600)

text('a',width-1750,200)
text('b',width-1450,200)
text('c',width-1150,200)
text('d',width-850,200)
text('e',width-550,200)
text('f',width-250,200)
text('g',width-1750,700)
text('h',width-1450,700)
text('i',width-1150,700)
text('j',width-850,700)
text('k',width-550,700)
text('l',width-250,700)


 drawSprites()
 if(keyDown("a")){
  fill('white')
  textSize(30)
  text('700fps',970,790)
  console.log('text')

}
if(keyDown("b")){
  fill('white')
  textSize(30)
  text('678fps',970,790)
  console.log('text')
}
if(keyDown("c")){
  fill('white')
  textSize(30)
  text('650fps',970,790)
  console.log('text')
}
if(keyDown("d")){
  fill('white')
  textSize(30)
  text('570fps',970,790)
  console.log('text')
}
if(keyDown("e")){
  fill('white')
  textSize(30)
  text('540fps',970,790)
  console.log('text')
}
if(keyDown("f")){
  fill('white')
  textSize(30)
  text('469fps',970,790)
  console.log('text')
}
if(keyDown("g")){
  fill('white')
  textSize(30)
  text('400fps',970,790)
  console.log('text')
}
if(keyDown("h")){
  fill('white')
  textSize(30)
  text('590fps',970,790)
  console.log('text')
}
if(keyDown("i")){
  fill('white')
  textSize(30)
  text('560fps',970,790)
  console.log('text')
}
if(keyDown("j")){
  fill('white')
  textSize(30)
  text('330fps',970,790)
  console.log('text')
}
if(keyDown("k")){
  fill('white')
  textSize(30)
  text('240fps',970,790)
  console.log('text')
}
if(keyDown("l")){
  fill('white')
  textSize(30)
  text('340fps',970,790)
  console.log('text')
}

}
function drop()
{
  fill('white')
  textSize(30)
  text('700fps',970,790)
  console.log('text')
}
