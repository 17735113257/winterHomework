(function () {

  // code runs here ...


  $(".fr.detail").find(".sui-nav.nav-tabs.tab-wraped")
  .find("li").on('click',function(){
    var  index = $(this).index();
    $(this).addClass("active").siblings()
    .removeClass("active");

   $(this).parent().next().find(".tab-pane")
   .eq(index)
   .addClass("active")
   .siblings().removeClass("active");
  });



  $(".fl.aside").find(".sui-nav.nav-tabs.tab-wraped")
  .find(".asideLi").on('click',function(){
    var  index1 = $(this).index();
    $(this).addClass("active").siblings()
    .removeClass("active");

   $(this).parent().next().find(".tab-pane")
   .eq(index1)
   .addClass("active")
   .siblings().removeClass("active");
  });



})()