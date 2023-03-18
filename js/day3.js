function onblurPasswordAlter(){
var password=document.getElementById("password").value
if(password.length!=6){
alert("请输入六位密码");
}
}
var count=0;
function clickbutton(){
    for(let i=0;i< document.getElementsByClassName("tr_1").length;i++){
    if( document.getElementsByClassName("tr_1")[i].style.backgroundColor=="red"){
        document.getElementsByClassName("tr_1")[i].style.backgroundColor="blue";
        document.getElementsByClassName("tr_2")[i].style.backgroundColor="red";
        count++;
    }
    else
    {  
        document.getElementsByClassName("tr_1")[i].style.backgroundColor="red";
        document.getElementsByClassName("tr_2")[i].style.backgroundColor="blue";
        count++
    }
}
}


function getDate(){
    var box = document.getElementById('getDate');
    // 获取当前日期
    var date = new Date();
    // 从Date对象以四位数字返回年份
    var year = date.getFullYear();
    // 从 Date 对象返回月份 (0 - 11)
    var month = date.getMonth() + 1;
    // 返回当前月的第几天（日期）
    var day = date.getDate();
    // 返回 Date 对象的小时（0-23）
    var hour = date.getHours();
    // 返回 Date 对象的分钟（0-59）
    var minute = date.getMinutes();
    // 返回 Date 对象的秒数（0-59）
    var second = date.getSeconds();
    var day=date.getday()
    var week;
     switch(day) {
        case 1:
            week = '星期一';
            break;
        case 2:
            week = '星期二';
            break;
        case 3:
            week = '星期三';
            break;
        case 4:
            week = '星期四';
            break;
        case 5:
            week = '星期五';
            break;
        case 6:
            week = '星期六';
            break;
        case 0:
            week = '星期日';
            break;
    }
    // 当不够两位数时，用0补齐
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    // yyyy-MM-dd HH:mm:ss 的格式
    box.innerHTML ='今天是'+ year + '年' + month + '月' + day + '日' + hour + ':' + minute + ':' +second+"  "+week;
}