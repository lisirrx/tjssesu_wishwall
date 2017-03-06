
var wish_url = '/wish/';

function submit(){
    if(document.getElementById("input_wechat").getAttribute("value")){
        alert("请输入微信号！");
        return;
    }
    if(document.getElementById("input_phone_number").value == null){
        alert("请输入手机号！");
        return ;
    }
    if(document.getElementById("inputEmail3").value == null){
        alert("请输入Email！");
        return;
    }
    if (document.getElementById("input_introduction").value == null){
        alert("请输入想要实现的愿望！");
        return;
    }
    var wechat = document.getElementById("input_wechat").value;
    var phone_number = document.getElementById("input_phone_number").value;
    var title = document.getElementById("inputEmail3").value;
    var introduction = document.getElementById("input_introduction").value;

    var submit_information = {'title' : title,
        'introduction' : introduction,
        'phone_number' : phone_number,
        'wechat' : wechat,
        'accepted' : 0};
    $.post(wish_url, submit_information, alert("Successful!"));

}
