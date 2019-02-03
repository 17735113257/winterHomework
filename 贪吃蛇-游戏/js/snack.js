//蛇构造函数
function Snake () {
    this.elements  = [];//蛇组   存放一组jQuery对象div  舌头存放在蛇组的最前

    //方向
    this.direction = 'right'; //约定好 left right bottom top

}

//方法0




//计算新蛇头的位置 将来给增加新蛇头使用
Snake.prototype.getNewHeadLocation = function() {
    //获取旧的蛇头
    var oldHead = this.elements[0];
     if (oldHead == undefined) {
         //如果 返回多个值时候  可以返回数组字面量或者是对象字面量
         //如果返回的值是有意义的 建议返回一个对象字面量
        return {left:0,top:0};
     }else {
         //获取旧的蛇头的位置
         var x =  oldHead.position().left;
         var y =  oldHead.position().top;
         if (this.direction == 'right') {
            x += 20;
         }else if (this.direction == 'left') {
            x -= 20;
         }else if (this.direction == 'top') {
            y -= 20;
         }else if (this.direction == 'bottom') {
            y += 20;
         }
         return {left:x,top:y};
     }
}


//增加蛇头
Snake.prototype.insetNewHead = function() {
    //获取新的蛇头的位置
    var location = this.getNewHeadLocation();
    
    var oldHead  = this.elements[0];
    if (oldHead !=undefined) {
        oldHead.removeClass('snake-head').addClass('snake-body');
    }

    var newHead = $('<div class = "snake-head"></div>').appendTo('#map');
    this.elements.unshift(newHead);
    newHead.css({
        left:location.left,
        top:location.top
    })

}


//显示蛇
Snake.prototype.showSnake = function  () {
    for (var i = 0 ; i <3 ; i++) {
        this.insetNewHead();
    }
}

//蛇移动
Snake.prototype.move = function(){
    //1:删除蛇组中的最后一个元素 并且地图中也要删除
    var last = this.elements.pop();//删除了从数组中还在地图里面
    last.remove();
    //2:增加蛇头
    this.insetNewHead();
}

//蛇死了吗的判断  是否撞墙
Snake.prototype.isDead = function() {
    // 检测蛇头的位置
    var oldHead = this.elements[0];
    var x = oldHead.position().left;
    var y = oldHead.position().top;

    if (x < 0 || x >= $("#map").width() || y < 0 || y >= $("#map").height() ) {
        return true;
    }else {
        return false;
    }
}





// 蛇是否吃食物  

//food是形参 接受传入的食物的对象
Snake.prototype.isEat = function (food) {  
    //获取蛇头的位置
    var head  = this.elements[0];
    //获取蛇头位置
    var left = head.position().left;
    var top = head.position().top;

    if (left == food.x && top == food.y) {
        return true;
    }else {
        return false;
    }
} 