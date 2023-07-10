var number = 1;
var gongde = 0;
var password = prompt("品正的WIFI密码");
if (!(password == "67676767")){
    alert("密码错误");
    location.reload();
}
var zhengbin = new Image();
var shaoxiang = new Image();
var x = 200;
var y = 80;
var count = 0;
var doing = false;
var speed = 10;
var score = 0;
var ctx = document.querySelector("#zhengbindiv").getContext("2d");
zhengbin.src = "./img/郑斌.png";
shaoxiang.src = "./img/烧香.png";
zhengbin.onload = function() {
    ctx.drawImage(zhengbin, 10, y,  60, 60)
}
document.onclick = function(){
    y = 30;
    setTimeout("y = 80;", 300)
}
var a = setInterval(function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,document.querySelector("#zhengbindiv").clientWidth,document.querySelector("#zhengbindiv").height);
    if (!doing){
        if (Math.random() < 0.5){
            doing = true;
            x = 200;
        }
    } else {
        if (x > -60){
            ctx.drawImage(shaoxiang, x, 85, 30, 50)
            x -= speed;
            speed += 0.01
            if (x >= 5 && x <= 70) {
                if (y == 30){
                    score += 1;
                } else if (x >= 20 && x <= 40) {
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0,0,document.querySelector("#zhengbindiv").clientWidth,document.querySelector("#zhengbindiv").height);
                    document.querySelector("h1").innerHTML = "⭐️游戏结束⭐️"
                    clearInterval(a);
                }
            }
        } else {
            doing = false;
        }
    }
    ctx.drawImage(zhengbin, 10, y, 60, 60);
    document.querySelector("#gd").innerHTML = "分数："+score
}, 50);
