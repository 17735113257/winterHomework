$(function () {
    const todoList = $(".todo-list");
    $(".new-todo").on('keydown', function (event) {

        //键盘事件 当按下enter的时候 添加新的li
        if (event.keyCode == 13) {
            let content = $(this).val();

            if (content.trim() == "") {
                alert("内容不能为空");
                return;
            }
            let li = $("<li></li>").appendTo(todoList).addClass("completed");
            let div = $("<div></div>").appendTo(li).addClass("view");
            let input = $("<input />").appendTo(div)
                .addClass("toggle")
                .attr({
                    type: "checkbox",
                    checked: false
                });
            let label = $("<label></label>").appendTo(div)
                .text(content);
            let button = $("<button></button>").appendTo(div)
                .addClass("destroy");
            $(this).val("");
            todoCount();

        }

        //点击li前的复选框
        $(".toggle").on('click', function () {
            $(this).attr({
                checked: $(this).prop("checked")
            });
            console.log($(".toggle").length);
            console.log($(".toggle[checked]").length);

            // 判断上面的总体选择框是否被选中
            if ($(".toggle").length == $(".toggle[checked]").length) {
                $(".toggle-all").attr({
                    checked: true,
                });
            } else {
                $(".toggle-all").attr({
                    checked: false,
                });
            }
            todoCount();
        });


        //    6 当点击删除按钮时,当前任务从列表中删除


        $(".destroy").on('click', function () {
            $(this).parent().parent().remove();
            todoCount();
        });




        // 8 双击类名为.todo-list的ul中的每条任务,
        // 会切换为编辑状态,可以直接修改内容.
        // 按回车键确认修改或者点击其他位置确认修改

        $(".todo-list").find("li").find("div label").on('dblclick', function () {
            $(this).parent().parent().removeClass("completed").addClass("editing");
        });






    });





    //计算span的内容
    function todoCount() {
        //重点
        let length = $(".todo-list").find("li.completed").find(".toggle:not(:checked)").length;
        $(".todo-count").find("strong").text(length);
    }


    // 9 右下角ClearAll按钮 清空ul列表中的所有任务
    // 10 当鼠标位于clearAll按钮时,按钮样式和鼠标手势会发生变化

    $(".clear-All").on('click', function () {
        $(".todo-list").text("");
        todoCount();
    });

    // 11 类名为toggle-all的input的作用是,
    // 当点击后 任务列表中的所有任务都处于已完成的状态(打钩),并且可以来回切换
    $(".toggle-all").on('click', function () {
        $(".todo-list").find("li")
            .find(".toggle")
            .attr({
                checked: $(".toggle-all").prop("checked")
            });
        $(this).attr({
            checked: $(".toggle-all").prop("checked")
        });
        todoCount();
    });
})