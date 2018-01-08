$(function(){


    /*商品评价回复*/
    var details_li=$('#details li');
    var praise_b=$('.praise b');
    var reply=$('.reply');
    var reply_sub=$('.reply input');
    var boole=false;
    praise_b.click(function(){
        var index=$(this).parents('li').index();
        if(!boole){
            details_li.eq(index).find('.reply').css("display","block");
            boole=true;
        }
        else {
            details_li.eq(index).find('.reply').css("display","none");
            boole=false;
        }
    });
    reply_sub.click(function(e){
        reply.css("display","none");
        boole=false;
        e.preventDefault();
    });
});
