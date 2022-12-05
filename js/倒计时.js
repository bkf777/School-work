$(function(){
    
    
    var timer=null;
    
    
    timer=setInterval(function() {
        var tag=getTime();
        if(!tag){
            clearInterval(timer);
            $(".box1").css("display","none");
            $(".box2").css("display","block");

        }
    },100);

function getTime(){
    var d=Date.parse("2022/11/20")
    var date=new Date()
    var dd=date.getTime()
    var rd=Math.floor((d-dd)/1000)
    var days=Math.floor(rd/86400)
    var hours=Math.floor(rd%86400/3600)
    var minus=Math.floor(rd%3600/60)
    var seconds=Math.floor(rd%60)
    if (rd<0){
        return false
    }
    $('#daojishi').text(dogit(days,2)+"天"+dogit(hours,2)+"小时"+dogit(minus,2)+"分钟"+dogit(seconds,2)+"秒");
    return true;
}
function dogit(num,i){
    var str = num+"";
    while(str.length<i){
    str = "0"+str;
}return str;}
    
    
})
