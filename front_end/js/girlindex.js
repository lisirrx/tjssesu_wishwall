
var wish_url = 'http://192.168.137.130:8000/wish/';

function submit(){
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