$(function(){
   function star(element){
       var star=$(element);
       var star_b=star.find('b');
       var index=null;
       var num=null;
       var amount=null;
       star_b.click(function(){
           index=$(this).index()+1;
           if(num>index){
               for(var j=index+1;j<=num;j++){
                   star_b.eq(j-1).css("background-position","0 0");
               }
           }
           else {
               for(var i=1;i<=index;i++){
                   star_b.eq(i-1).css("background-position","0 -16px");
               }
           }
           num=index;
       });
       star_b.mouseenter(function(){
           index=$(this).index()+1;
           if(num>index){
               for(var m=index+1;m<=num;m++){
                   star_b.eq(m-1).css("background-position","0 0");
               }
           }
           if(amount>index){
               for(var j=index+1;j<=amount;j++){
                   star_b.eq(j-1).css("background-position","0 0");
               }
           }
           if(amount<=index) {
               for(var i=1;i<=index;i++){
                   star_b.eq(i-1).css("background-position","0 -16px");
               }
           }
           amount=index;
       });
       star.mouseleave(function(){
           if(num>0){
               for(var i=1;i<=num;i++){
                   star_b.eq(i-1).css("background-position","0 -16px");
               }
               for(var j=num+1;j<=amount;j++){
                   star_b.eq(j-1).css("background-position","0 0");
               }
           }
           else {
               star_b.css("background-position","0 0");
           }
       })
   }
    star('#describe');
    star('#log');
    star('#seller');
});
