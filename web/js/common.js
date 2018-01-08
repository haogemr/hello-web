$(function(){
    /*头部*/
    var navSpan=$('#sub_nav>span');
    var subNav=$('#subNav');
    var sub_nav=$('#sub_nav');
    navSpan.mouseenter(function(){
        subNav.stop().slideDown();
    });
    sub_nav.mouseleave(function(){
        subNav.stop().slideUp();
    });


    /*产品展示图片切换和放大镜*/
    var goods_pic=$('#goods_list .pic');
    var goods_small=$('#goods_list .pic .small');
    var goods_big=$('#goods_list .big');
    var goods_li=$('#goods_list ul li');
    var x= 0,y=0;
    goods_pic.mousemove(function(e){
        x=e.clientX-$(this).get(0).getBoundingClientRect().left;
        y=e.clientY-$(this).get(0).getBoundingClientRect().top;
        if(x<=96){
            x=96;
        }
        if(y<88){
            y=88;
        }
        if(x>288){
            x=288;
        }
        if(y>264){
            y=264;
        }
        goods_small.css({"left":x-96,"top":y-88});
        goods_big.find('img').css({"top":-2*y+176,"left":-2*x+192});
    });
    goods_li.mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var img_src=$(this).find('img').attr("src");
        goods_pic.find('img').attr("src",img_src);
        goods_big.find('img').attr("src",img_src);
    });
    goods_pic.hover(function(){
        goods_small.css("display","block");
        goods_big.css("display","block");
    },function(){
        goods_small.css("display","none");
        goods_big.css("display","none");
    });




    /*店铺分类切换效果*/
    var classify_label=$('#classify label');
    var bool=true;
    classify_label.click(function(){
        if(bool){
            $(this).find('i').css("background","url('../img/comments_16.png') no-repeat");
            bool=false;
        }
        else{
            $(this).find('i').css("background","url('../img/comments_15.png') no-repeat");
            bool=true;
        }
    });

    /*产品推荐与热门关注切换*/
    var product_hot=$('#product,#hot');
    var product=$('#product');
    var hot=$('#hot');
    var goods=$('#goods');
    product_hot.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    product.click(function(){
        goods.stop().animate({'left':0});
    });
    hot.click(function(){
        goods.stop().animate({'left':-208});
    });

    /*商品详情，商品评价*/
    var top=$('#top span,#top i');
    top.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    /*订单数量改变*/
    function num_change(element1,element2,element3){
        var num_reduce=$(element1);
        var num_plus=$(element2);
        var num=$(element3).val();
        num_reduce.click(function(){
            num--;
            if(num==0){
                num=1;
            }
            $(element3).val(num);
        });
        num_plus.click(function(){
            num++;
            $(element3).val(num);
        })
    }
});