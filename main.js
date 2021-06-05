Canvas = document.getElementById("myCanvas")
ctx = Canvas.getContext("2d")
background = "background.jpg"
car1 = "car1.jpg"
car2 = "car2.jpg"
backgroundimg_height = 800
backgroundimg_width = 1000
car1_x = 10
car1_y = 10
car1_height = 90
car1_width = 100
car2_x = 10
car2_y = 120
car2_height = 90
car2_width = 100
function add(){
    backgroundimg = new Image()
    backgroundimg.onload = uploadBackground
    backgroundimg.src = background
    carimg1 = new Image()
    carimg1.onload = uploadcar1
    carimg1.src = car1
    carimg2 = new Image()
    carimg2.onload = uploadcar2
    carimg2.src = car2
}
function uploadBackground(){
    ctx.drawImage(backgroundimg,0,0,Canvas.width,Canvas.car1_height)
}
function uploadcar2(){
    ctx.drawImage(carimg2,car2_x,car2_y,car2_width,car2_height)

}
function uploadcar1(){
    ctx.drawImage(carimg1,car1_x,car1_y,car1_width,car1_height)

}
window.addEventListener("keydown",myKeyDown)
function myKeyDown(e){
keypress = e.keyCode
console.log(keypress)
if(keypress=="37"){
    Left()
    console.log("left")
}
    if(keypress=="38"){
        Up()
        console.log("up")
    }
    if(keypress=="39"){
        Right()
        console.log("right")
    }
    if(keypress=="40"){
        Down()
        console.log("down")
    }
    if(keypress=="65"){
    A()
    console.log("A")}
    if(keypress=="87"){
    W()
    console.log("W")}
    if(keypress=="83"){
        S()
        console.log("S")}
        if(keypress=="68"){
        D()
        console.log("D")}
    
    
}
function Up(){
    if(car1_y>=0){
car1_y=car1_y-10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function Left(){
    if(car1_x>=0){
car1_x=car1_x-10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function Right(){
    if(car1_x<=700){
car1_x=car1_x+10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function Down(){
    if(car1_y<=500){
car1_y=car1_y+10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function W(){
    if(car2_y>=0){
car2_y=car2_y-10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function A(){
    if(car2_x>=0){
car2_x=car2_x-10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function D(){
    if(car2_x<=700){
car2_x=car2_x+10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}
function S(){
    if(car2_y<=500){
car2_y=car2_y+10
uploadBackground()
uploadcar1()
uploadcar2()
    }
}

