(function(){

    //点击左右箭头


    
    const items = $("#banner .carousel-inner").find(".item");
    const points = $("#banner .carousel-indicators").find("li");
    const banner = $("#banner");
    console.log(items);
    // console.log($(".carousel-inner").find(".item"));
    // console.log(index);


    //当前显示的img的index;
    let index = 0;
    
    //定时器
    let timer;

    autoPlay();
    for (let i = 0 ; i < items.length; i++) {
        if ($(items[i]).hasClass("active")) {
            console.log(i);
            index = i;
        }
    }

    //点击右箭头
    $("#bannerNext").on('click',function(){
        index ++;
        if (index == 4) {
            index = 0;
        }
        items.eq(index).addClass("active")
            .siblings().removeClass("active");
        points.eq(index).addClass("active")
            .siblings().removeClass("active");
    });

    //点击左箭头
    $("#bannerPre").on('click',function(){
        index --;
        if (index == -1) {
            index = 3;
        }
        items.eq(index).addClass("active")
            .siblings().removeClass("active");
            points.eq(index).addClass("active")
            .siblings().removeClass("active");
    });

    //设置定时器
    
   

    $("#banner").on("mouseenter",function(){
        clearInterval(timer);
    });
    $("#banner").on("mouseleave",function(){
        autoPlay();
    });

    function autoPlay(){
        timer = setInterval(() => {
            index ++;
            if (index == 4) {
                index = 0;
            }
            items.eq(index).addClass("active")
                .siblings().removeClass("active");
            points.eq(index).addClass("active")
                .siblings().removeClass("active");
        }, 1000);
    }

})()


