$(function(){
    /*商品筛选*/
    var sort_i=$('#sort>div:first-child i');
    sort_i.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
});
