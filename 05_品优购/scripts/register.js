(function () {

  // code runs here ...

  //获取点击按钮 添加事件
  $("#registerBtn").on('click', function () {

    
    var addressTarget= $(this).attr("href");
    // window.location.href = ""; 

    //获取用户名
    var username = $("#username").val();
    //获取邮箱
    var mail = $("#mail").val();
    //获取密码
    var password = $("#password").val();
    //获取确认密码
    var confirmPassword = $("#confirmPassword").val();
    if (!checkNull(username, "username")) {
      return;
    }
    if (!checkNull(mail, "mail")) {
      return;
    }
    if (!checkNull(password, "password")) {
      return;
    }
    if (!checkNull(confirmPassword, "confirmPassword")) {
      return;
    }
    if (!checkEqual(password, confirmPassword)) {
      return;
    }

    // 判断复选框的值
    var agree = $("#agree").prop("checked");
    if (agree == false) {
      alert("请勾选同意框");
    }
    
    window.location.href=addressTarget;
   
  });
})()

//判断内容是否为空
function checkNull(value, element) {
  //验证用户名
  if (element == "username") {
    var reg = /^[A-Za-z0-9]{3,18}$/;
    if (value.trim() == '') {
      alert('用户名不能为空');
      return false;
    } else if (!reg.test(value)) {
      alert('请输入长度在 3 ～ 12 个字符的用户名');
      return false;
    }
    return true;
  }
  // 验证邮箱
  else if (element == "mail") {
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (value.trim() == '') {
      alert('邮箱不能为空');
      return false;
    } else if (!reg.test(value)) {
      alert('请输入正确格式的邮箱');
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
  } else if (element == "confirmPassword") {
    if (value.trim() == '') {
      alert('确认密码不能为空');
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