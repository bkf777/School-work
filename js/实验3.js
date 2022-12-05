$(function(){
    var index=0;
    $('.right').click(function(){
        nextImg(true);
    })
    $('.left').click(function(){
        nextImg(false);
    })
    timer = setInterval(function() {
        nextImg(true);},800
    )

    $('#view').mouseover(function(){
        if(timer){
        clearInterval(timer);
            }
    }).mouseout(function() {
        timer=setInterval(function() {
            nextImg(true);},800
            )
        })
        

    


    function nextImg(bool){
        $('.num').removeClass('focus'); 
        var len= $('.num').length;
    
    if(bool){
        index++;
        var left=-590 * (index+1);
        if (index==len){
            index=0;
            setTimeout(function() {
                left=-590;
                $('#imgs img').css("transition"," ");
                $('#imgs img').css("transform","translate3d("+left+"px,0,0)");
            },800)
        }}
    else{
            index--;
            if (index==-1){
                index=len-1;
                
        
        }}
        var left=-590 * index;
        $('#imgs img').css("transform","translate3d(" + left +"px,0,0)");
        $('#imgs img').css("transition","transform 0.8s");
        $('.num')[index].classList.add('focus');
    }
    // setTimeout(function() {
    //     left=-590;
    //     $('#imgs img').css("transition"," ");
    //     $('#imgs img').css("transform","translate3d("+left+"px,0,0)");
    // },800)
})