/*改变元素的颜色*/
function change(){
    for(var i= 1;i<10;i++){
        document.getElementById(i).style.background = "#FFC125";
    }
    var m = new Array(3);
    for (var i=0;i<3;i++) {
        if (m[0]==m[1]||m[0]==m[2]||m[1]==m[2]) //判断产生的数字是否一样
        {
            m[0] = Math.floor(Math.random() * 9)+1;
            m[1] = Math.floor(Math.random() * 9)+1;
            m[2] = Math.floor(Math.random() * 9)+1;
        }
        var x = document.getElementById(m[i]);
        x.style = "background:" +bg();
    }
    console.log(m);
}
/*rgb随机颜色*/
function bg(){
    var r = Math.floor(Math.random() * 256); //随机生成一个小于256的值
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //console.log(r,g,b)
    return "rgb("+r+','+g+','+b+");"
}
/*定时器开始 1000毫秒执行一次change函数*/
function start(){
    str = setInterval(change,1000);//str是定时器的ID
    console.log(str);
}
/*定时器结束并恢复默认的颜色*/
function end(){
    clearInterval(str);//清除定时器
    for(var i= 1;i<10;i++){
        document.getElementById(i).style.background = "#FFC125";
    }
}

