$(function(){
    var m=null;
    $("#start").click(function(){
        m=setInterval(getName,100);
        $(this).attr('disabled', 1);
    
    })
    
    $("#stop").click(function(){if(m){
        clearInterval(m);
        $('#start').attr('disabled', false);
    }
    })
    

// var names=['1','2','3','4','5','6'];

function getName(){
    
        
    $.ajax({

        url:"./shuju20.xml" ,
        dataType:"xml",
        success:function(data){
            var objs=$(data).find("string");
            var  len=objs.length;
            var ran =Math.floor(Math.random() * len);
            var name=objs[ran].innerHTML;
            var imgsrc=ran%6;
            var srcstr ="../static/"+imgsrc+".bmp";
            $("#touxiang").attr("src",srcstr);
            $("#name").text(name);
        },
        error:function(){
            console.log("请求失败")
            }
})

}
        })
