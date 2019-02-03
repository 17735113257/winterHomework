//构造函数
function Game() {
    //属性
    this.snake = new Snake();
    this.food = new Food();
    //显示一条蛇
    this.snake.showSnake();
    //
    this.food.randomLocation();

    //分数
    this.score = 0;
}


var timer;
//方法
Game.prototype.start = function () {

    clearInterval(timer);
    //把this代表的game对象存到that中
    var that = this;
    //蛇不断的移动
    timer = setInterval(function () {
        //this 代表window  在定时器中
        that.snake.move();
        //判断是否死亡
        var dead = that.snake.isDead();
        if (dead) {
            // 关闭定时器
            clearInterval(timer);
            $(".dead").show(500);
        }

        //是否吃掉食物
        var eat = that.snake.isEat(that.food);
        if (eat) {
            console.log('’吃掉了');

            that.food.randomLocation();

            //增加一个蛇头
            that.snake.insetNewHead();
            that.updateScore();
        }
    }, 100);


    //键盘可以控制移动()

    $(document).keydown(function (e) {
        var code = e.keyCode; // 
        console.log();
        //判断按键
        switch (code) {
            case 37:
                that.snake.direction = 'left'
                break;
            case 38:
                that.snake.direction = 'top'
                break;
            case 39:
                that.snake.direction = 'right'
                break;
            case 40:
                that.snake.direction = 'bottom'
                break;

        }
    });
}



//重新开始
Game.prototype.reStart  = function (params) {
    //重新加载网页
    window.location.reload();
}

//停止游戏
Game.prototype.stop = function () {
    clearInterval(timer);
}


//计算分数  更新分数
Game.prototype.updateScore = function () {
    this.score +=10;
    //获取计分元素
    $('#input').val('分数是：'+this.score);
}







