$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "小仙女" && pwd == "19961010") {
        $('#h').text("生日快乐！");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("提示：用户名~~~小仙女, 密码是你的生日！");
    }
});
