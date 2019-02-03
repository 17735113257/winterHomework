(function() {
  // code runs here ...

  let choices = $(".choice");
  init();

  //初始化数据
  function init() {
    //初始化总计数量
    let totalNum = 0;
    //初始化总计金额
    let totalPrice = 0;

    //初始化小计
    let sum = 0;
    //获取已经勾选的td
    let choicesChecked = $(".choice[checked]");

    //全部商品数量显示
    $("#category_num").text($(".choice").length);

    //计算小计
    for (let i = 0; i < choices.length; i++) {
      let count = parseInt(
        $(choices[i])
          .parent()
          .parent()
          .find("td")
          .eq(3)
          .find(".itxt")
          .val()
      );

      let price = parseFloat(
        $(choices[i])
          .parent()
          .parent()
          .find("td")
          .eq(2)
          .text()
      );
      sum = count * price;
      $(choices[i])
        .parent()
        .parent()
        .find("td")
        .eq(4)
        .find(".sum")
        .text(sum.toFixed(2));
    }
    for (let i = 0; i < choicesChecked.length; i++) {
      totalNum += parseInt(
        $(choicesChecked[i])
          .parent()
          .parent()
          .find("td")
          .eq(3)
          .find(".itxt")
          .val()
      );
      totalPrice += parseFloat(
        $(choicesChecked[i])
          .parent()
          .parent()
          .find("td")
          .eq(4)
          .find(".sum")
          .text()
      );
    }

    //
    $("#totalNum").text(totalNum);
    $("#totalPrice").text(totalPrice.toFixed(2));

    //结算按钮跳转的判断
    if (totalNum == 0) {
      $(".sum-btn")
        .attr({
          href: "javascript:"
        })
        .css({
          cursor: "not-allowed"
        });
    } else {
      console.log(totalNum);
      $(".sum-btn")
        .attr({
          href: "checkout.html"
        })
        .css({
          cursor: "pointer"
        });
    }
  }

  //点击加号;
  $(".increment.plus").on("click", function() {
    $(this)
      .prev()
      .val(
        parseInt(
          $(this)
            .prev()
            .val()
        ) + 1
      );
    init();
    return false;
  });

  //点击减号;
  $(".increment.mins").on("click", function() {
    if (
      parseInt(
        $(this)
          .next()
          .val()
      ) == 1
    ) {
      $(this)
        .next()
        .val(1);
    } else {
      $(this)
        .next()
        .val(
          parseInt(
            $(this)
              .next()
              .val()
          ) - 1
        );
    }
    init();
    return false;
  });

  //点击全选
  $("#toggle-all").on("click", function() {
    let checked = $(this).prop("checked");
    console.log(checked);
    for (let i = 0; i < choices.length; i++) {
      console.log(checked);

      //这里有一个疑问
      $(choices[i]).prop("checked", checked);
      $(choices[i]).attr("checked", checked);
    }
    init();
  });

  //点击tbody中的choice的某一项

  $(".choice").on("click", function() {
    let ischecked = $(this).prop("checked");
    $(this).attr("checked", ischecked);
    if ($(".choice").length == $(".choice[checked]").length) {
      console.log("===");
      $("#toggle-all").prop("checked", true);
    } else {
      $("#toggle-all").prop("checked", false);
    }
    init();
  });

  //点击删除选中商品
  $("#delAllBtn").on("click", function() {
    $(".choice[checked]")
      .parent()
      .parent()
      .remove();
    if ($(".choice").length == 0) {
      $("#toggle-all").prop("checked", false);
    }
    init();
  });

  // 点击每一条商品的删除按钮
  $("a[type=delBtn]").on("click", function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .remove();
    init();
  });
})();
