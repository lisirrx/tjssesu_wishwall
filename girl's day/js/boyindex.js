$('.container').on('click', function () {
  $('.card').toggleClass('flipped');
});


var number = 1;    //for getting the url
var Get_Card = 0;   //how many cards have you read in the arrays
var Information_arrays = new Array();
var wish_url = 'http://192.168.137.128:8000/wish';

function load(){
    setTimeout( function () {
        $.get("http://192.168.137.128:8000/wish", function(data,status){
            $("p.back_information").text(data.results[0].introduction);
            $("p.wechat_information").text("微信号：" + data.results[0].wechat);
            $("p.Phone_information").text("手机号： " + data.results[0].phone_number);
            Information_arrays = data;  //put the information into Information_arrays
        });
    }, 5000);
};




function choose() {
    var Is_Read = false;



    //how can i get the information about the showed pages?
    $.get("http://192.168.137.128:8000/wish" + number, function(data, status){
        Is_Read = data.accept;
    })
    if (Is_Read == true){
        $.get("http://192.168.137.128:8000/wish", function(data,status){
            $("p.back_information").text(data.results[0].introduction);
            $("p.wechat_information").text("微信号：" + data.results[0].wechat);
            $("p.Phone_information").text("手机号： " + data.results[0].phone_number);
            Information_arrays.length = 0;  //clear the information
            Information_arrays = data;  //put the information into Information_arrays
        });
    }
    else{
        //put an information to terminal
        $.ajax({
            url :wish_url + "/"+ number.toString(),
            data : {"title": Information_arrays.results[Get_Card].title,
                "introduction" : Information_arrays.results[Get_Card].introduction,
                "wechat" : Information_arrays.results[Get_Card].wechat,
                "phone_number" : Information_arrays.results[Get_Card].phone_number,
                "accept" : true},
            type : 'PUT',
            success:function () {
                alert('hello');
            }
        });
    }
}




function next() {
    //click next to refresh the information
    $("p.back_information").text(Information_arrays.results[Get_Card].introduction);
    $("p.wechat_information").text("微信号：" + Information_arrays.results[Get_Card].wechat);
    $("p.Phone_information").text("手机号： " + Information_arrays.results[Get_Card].phone_number);
    Get_Card++;
    if (Get_Card >= 10){
        $.get("http://192.168.137.128:8000/wish", function(data,status){
            $("p.back_information").text(data.results[0].introduction);
            $("p.wechat_information").text("微信号：" + data.results[0].wechat);
            $("p.Phone_information").text("手机号： " + data.results[0].phone_number);
            Information_arrays.length = 0;  //clear the information
            Information_arrays = data;  //put the information into Information_arrays
        });
    }

}



function confirm() {
   alert("获得卡片成功！请及时联系女生并帮助她完成心愿！");
}


function submit(){
    var wechat = document.getElementById("input_wechat").value;
    var phone_number = document.getElementById("input_phone_number").value;
    var title = document.getElementById("input_title").value;
    var introduction = document.getElementById("input_introduction").value;
    var submit_information = {'title' : title,
                                'introduction' : introduction,
                                'phone_number' : phone_number,
                                'wechat' : wechat,
                                'accept' : false};
    $.post(wish_url, submit_information, alert("Successful!"));
}