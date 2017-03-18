// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = '/gdkl10/changlongdaystat';
var lotMenu = 'gdkl10_memu';

function changeSelect() {
    var type = $("#choose_type .cur").attr("data-type");
    var pos = $("#choose_pos .cur").attr("data-pos");
    $("#type").html($("#choose_type .cur").attr("data-text"));
    var _container = $("#callFun").attr("container");
    _container = _container ? _container : "lot-wrap";
    $.get(location.pathname, { t: Math.random(), type: type, pos: pos }, function (text) {
        $('#' + _container).html(text);
    });
}

function chooseItems() {
    var type = ~~$("#choose_type .cur").attr("data-type");
    $("#choose_pos li").show();
    var pos = ~~$("#choose_pos .cur").attr("data-pos");
    if (type == 7 || type == 8) {
        $("#choose_pos li[filter*=nolonghu]").hide();
        if (pos == -1 || pos > 4) {
            $("#choose_pos a").removeClass("cur");
            $("#choose_pos a:first").addClass("cur");
        }
    } else if (type == 12 || type == 13) {
        $("#choose_pos li[filter*=noheshu]").hide();
        if (pos == -1) {
            $("#choose_pos a").removeClass("cur");
            $("#choose_pos a:first").addClass("cur");
        }
    }
}


$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));

        $("#type").html($("#choose_type .cur").attr("data-text"));
        $(function () {
            $("#choose_type a").removeClass("cur");
            $("#choose_pos a").removeClass("cur");
            $("#choose_type a[data-type=1]").addClass("cur");
            $("#choose_pos a[data-pos=1]").addClass("cur");
            $("#type").html($("#choose_type .cur").attr("data-text"));
            setTimeout(function () {
                chooseItems();
            }, 100);
            $("#refresh").live("click", function () {
                changeSelect();
            });
            $("#choose_pos a ").on("click", function () {
                $("#choose_pos a").removeClass("cur");
                $(this).addClass("cur");
                changeSelect();
            });
        });

       

        $(function () {

            $("#choose_type a ").on("click", function () {
                $("#choose_type a").removeClass("cur");
                $(this).addClass("cur");
                chooseItems();
                changeSelect();
            });
           
        });

    }
});