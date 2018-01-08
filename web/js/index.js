/*轮播*/
$('#banner ul li').eq(0).clone().appendTo('#banner ul');
var index = 0;
var banner = $('#banner');
var bannerUl = $('#banner ul');
var bannerOl_li = $('#banner ol li');
var bannerUl_li = $('#banner ul li');
/*轮播*/
bannerOl_li.click(function () {
    index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    bannerUl.stop().animate({"left": -index * bannerUl_li.width()}, 1000)
});



/*轮播函数*/
function carousel() {
    index++;
    if (index == bannerUl_li.length) {
        index = 1;
        bannerUl.css("left", 0);
    }
    bannerUl.animate({"left": -index * bannerUl_li.width()}, 1000);
    if (index == bannerUl_li.length - 1) {
        bannerOl_li.eq(0).addClass('on').siblings().removeClass('on');
    }
    else {
        bannerOl_li.eq(index).addClass('on').siblings().removeClass('on');
    }
}

/*设置定时*/
var Timer = setInterval('carousel()', 1800);
banner.hover(function () {
    clearInterval(Timer);
}, function () {
    Timer = setInterval('carousel()', 1800);
});
window.onscroll = function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if(top<550){
        $('#sidebar_right').css("display","none");
    }
    else{
        $('#sidebar_right').css("display","block");
    }
    if(top<550 || top>4500){
        $('#sidebar_left').css("display","none");
    }
    else{
        $('#sidebar_left').css("display","block");
    }
};