$('.container').on('click', function () {
  $('.card').toggleClass('flipped');
});

var Information_arrays = new Array();
var wish_url = '/wish';
var Showed_Card = 0;   //index in the array
var Temp = '';

function load(){
    setTimeout( function () {
        $.get(wish_url, function(data,status){
            $("p.back_information").text(data.results[0].introduction);
            $("p.wechat_information").text("微信号：" + data.results[0].wechat);
            $("p.Phone_information").text("手机号： " + data.results[0].phone_number);
            for (var i = 0; i < data.results.length; i++)
                Information_arrays.push(data.results[i])
            Temp = data['next'];
        });
    }, 3000);
};

function choose(){
    var Is_Read = false;
    $.get(wish_url + '/' + Information_arrays[Showed_Card].id, function(data, status){
        Is_Read = data.accepted;
    })
    if (Is_Read == true){
        $.get(wish_url, function(data,status){
            $("p.back_information").text(data.results[0].introduction);
            $("p.wechat_information").text("微信号：" + data.results[0].wechat);
            $("p.Phone_information").text("手机号： " + data.results[0].phone_number);
            Information_arrays.clear();
            for (var i = 0; i < data.results.length; i++)
                Information_arrays.push(data.results[i])
        });
    }
    else{
        $.ajax({
            url :wish_url + "/"+ Information_arrays[Showed_Card].id,
            data : {"title": Information_arrays[Showed_Card].title,
                "introduction" : Information_arrays[Showed_Card].introduction,
                "wechat" : Information_arrays[Showed_Card].wechat,
                "phone_number" : Information_arrays[Showed_Card].phone_number,
                "accepted" : 1},
            type : 'PUT',
            success:function () {
                alert('hello');
            }
        });
    }
}

function next(){
    if(Showed_Card < Information_arrays.length - 1){
        Showed_Card++;
        $("p.back_information").text(Information_arrays[Showed_Card].introduction);
        $("p.wechat_information").text("微信号：" + Information_arrays[Showed_Card].wechat);
        $("p.Phone_information").text("手机号： " + Information_arrays[Showed_Card].phone_number);
        if (Showed_Card % 10 == 5 && Temp != null){
            try{
                $.get(Temp , function(data,status){
                    for (var i = 0; i < data.results.length; i++)
                        Information_arrays.push(data.results[i]);
                    Temp = data['next'];
                });
            }catch (e){}
        }
    }
}

function front(){
    if (Showed_Card >= 1){
        Showed_Card--;
        $("p.back_information").text(Information_arrays[Showed_Card].introduction);
        $("p.wechat_information").text("微信号：" + Information_arrays[Showed_Card].wechat);
        $("p.Phone_information").text("手机号： " + Information_arrays[Showed_Card].phone_number);
    }
}

function Pop() {
    if (Information_arrays.length > 1){
        Information_arrays.splice(Showed_Card, 1);
        Showed_Card = 0;
        $("p.back_information").text(Information_arrays[Showed_Card].introduction);
        $("p.wechat_information").text("微信号：" + Information_arrays[Showed_Card].wechat);
        $("p.Phone_information").text("手机号： " + Information_arrays[Showed_Card].phone_number);
    }
    else{
        $("p.back_information").text("请点击下一张卡片");
        $("p.wechat_information").text("presented by");
        $("p.Phone_information").text("tjssesu");
    }
}