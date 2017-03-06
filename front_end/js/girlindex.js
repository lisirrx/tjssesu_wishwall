var wish_url = '/wish/';

function submit(){

    if($("#input_wechat").val() == "") {
        $("#wechat_alert").attr('style', 'opacity : 1');
        return
    } else {
        $("#wechat_alert").attr('style', 'opacity : 0');

    }

    if($("#input_phone_number").val() == ""){
        $("#phone_number_alert").attr('style', 'opacity : 1');
        return ;
    }
    else{
        $("#phone_number_alert").attr('style', 'opacity : 0');
    }

    if($("#inputEmail3").val() == ""){
            $("#title_alert").attr('style', 'opacity : 1');
        return;
    }
    else{
        $("#title_alert").attr('style', 'opacity : 0');
    }

    if ($("#input_introduction").val() == ""){
            $("#introduction_alert").attr('style', 'opacity : 1');
        return;
    }
    else{
        $("#introduction_alert").attr('style', 'opacity : 0');
    }
    if ($("input[type='checkbox']").is(':checked') == false){
        $("#help_alert").attr('style', 'opacity : 1');
        return;
    }
    else{
        $("#help_alert").attr('style', 'opacity : 0');
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
    $.post(wish_url, submit_information);
}
