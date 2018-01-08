$(function(){
    var details_li=$('#details li');
    var index=null;
    var num_reduce=details_li.find('.num img:first-child');
    var num_plus=details_li.find('.num img:last-child');
    var label_input=details_li.find('label input');
    var sum=$('#sum');
    var money=$('#money i');
    var x=0;
    var y=0;
    var z=0;
    var num=0;
    var num_1=0;
    num_reduce.click(function(){
        index=$(this).parents('#details li').index();
        num=details_li.eq(index).find('.num input').val();      /*价格减*/
        num_1=num--;
        if(num==0){
            num=1;
        }
        details_li.eq(index).find('.num input').val(num);
    });
    num_plus.click(function(){
        index=$(this).parents('#details li').index();
        num=details_li.eq(index).find('.num input').val();      /*价格加*/
        num++;
        details_li.eq(index).find('.num input').val(num);
    });
    label_input.click (function(){
        if($(this).is(':checked')){
            x++;
            y+=$(this).parents('li').find('.num input').val()*$(this).parents('li').find('.top b i').text();
            money.text(y);
            var reduce=$(this).parents('li').find('.num img:first-child');
            var plus=$(this).parents('li').find('.num img:last-child');
            reduce.click(function(){
                z=$(this).parents('li').find('.top b i').text()*1;         /*价格减*/
                num_1--;
                if(num_1>=1) {
                    y-=z;
                    money.text(y);
                }
            });
            plus.click(function(){
                z=$(this).parents('li').find('.top b i').text();        /*价格加*/
                y+=z;
                money.text(y);
            });
        }
        else{
            x--;
            y-=$(this).parents('li').find('.num input').val()*$(this).parents('li').find('.top b i').text();
            money.text(y);
           /* reduce=$(this).parents('li').find('.num img:first-child');
            plus=$(this).parents('li').find('.num img:last-child');*/
            z=0;
            /*reduce.click(function(){
                num_1--;
                if(num_1>=1) {
                    y-=z;
                    money.text(y);
                }
            });
            plus.click(function(){
                var z=0;
                y+=z;
                money.text(y);
            });*/
        }
        sum.html(x);
    });
});
