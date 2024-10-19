var number = 1;
var gongde = 0;
var wuwei = new Image();
var forever = new Image();
var x = 200;
var y = 80;
var count = 0;
var doing = false;
var speed = 10;
var score = 0;
var ctx = document.querySelector("#wuweidiv").getContext("2d");
var s = false;
wuwei.src = "./img/未命名33.png";
forever.src = "./img/未命名44.png";
wuwei.onload = function() {
    ctx.drawImage(wuwei, 10, y,  60, 60)
}
document.onclick = function(){
    if (!s){
        y = 30;
        setTimeout("y = 80;", 300)
    } else {
        setTimeout(main, 1000)
        s = false;
        y = 80;
        x = 200;
        count = 0;
        doing = false;
        speed = 10;
        score = 0;
        document.querySelector("h1").innerHTML = "⭐️帮助吴魏跳过李永远⭐️";
    }
}
ctx.fillStyle = "#ffffff";
ctx.fillRect(0,0,document.querySelector("#wuweidiv").clientWidth,document.querySelector("#wuweidiv").height);
function main(){
    var a = setInterval(function(){
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,document.querySelector("#wuweidiv").clientWidth,document.querySelector("#wuweidiv").height);
        if (!doing){
            if (Math.random() < 0.5){
                doing = true;
                x = 200;
            }
        } else {
            if (x > -60){
                ctx.drawImage(forever, x, 90, 30, 43)
                x -= speed;
                speed += 0.01
                if (x >= 5 && x <= 70) {
                    if (y == 30){
                        score += 1;
                    } else if (x >= 20 && x <= 40) {
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(0,0,document.querySelector("#wuweidiv").clientWidth,document.querySelector("#wuweidiv").height);
                        document.querySelector("h1").innerHTML = "⭐️游戏结束，点击屏幕重来⭐️"
                        setTimeout("s = true;", 1000)
                        clearInterval(a);
                    }
                }
            } else {
                doing = false;
            }
        }
        ctx.drawImage(wuwei, 10, y, 60, 60);
        document.querySelector("#gd").innerHTML = "分数："+score
    }, 50);
}
setTimeout(main, 3000)
