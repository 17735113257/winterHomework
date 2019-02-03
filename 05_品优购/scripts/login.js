(function () {
  
    //获取点击按钮 添加事件
    $("#login").on('click', function () {
      //获取用户名
      var username = $("#username").val();
      //获取密码
      var password = $("#password").val();
      if (!checkNull(username, "username")) {
        return;
      }
      if (!checkNull(password, "password")) {
        return;
      }
  
      // 判断复选框的值
      var automaticLogin = $("#automaticLogin").prop("checked");
      if (automaticLogin == false) {
        alert("登录成功(不是自动登录)");
      }else {
        alert("登录成功(是自动登录)");
      }
      
      window.location.href="index.html";
     
    });
  })()
  
  //判断内容是否为空
  function checkNull(value, element) {
    //验证用户名
    if (element == "username") {
      var reg = /^[A-Za-z0-9]{3,18}$/;
       var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (value.trim() == '') {
        alert('用户名不能为空');
        return false;
      } else if (reg.test(value) == false && reg1.test(value) == false ) {
        alert('请输入正确格式用户名');
        return false;
      }
      return true;
    }
    //密码
    else if (element == "password") {
      if (value.trim() == '') {
        alert('密码不能为空');
        return false;
      }
      return true;
    }
  
  }
  
  
  function checkEqual(password, confirmPassword) {
    if (password.trim() != confirmPassword.trim()) {
      alert('俩次输入密码必须一致');
      return false;
    }
    return true;
  }