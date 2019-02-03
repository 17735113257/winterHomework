//食物构造函数

function Food () {
    this.x = 0;
    this.y = 0;
    //展示食物  食物对应的div
    this.element = $('<div class = "food"></div>').appendTo('#map');
}

Food.prototype.randomLocation = function() {
    //随机位置
    //获取横向最大的格子数
   var  maxXCount = $("#map").width() / 20;
    //纵向最大的格子数
    var  maxYCount = $("#map").height() / 20;

    //随机范围内的格子数 [0,maxXCount)   [0,maxYCount)   

    var xNum = Math.floor(Math.random() * maxXCount);
    var yNum = Math.floor(Math.random() * maxYCount);

    this.x = xNum * 20;
    this.y = yNum * 20;
    console.log(this.x ,this.y);


    this.element.css({
        left:this.x,
        top:this.y
    });
    //把计算好的值给了
}