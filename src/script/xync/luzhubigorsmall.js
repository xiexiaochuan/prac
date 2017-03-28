// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'xync_memu';
var lotteryLuzhu = "bjxync_luzhubigorsmall";
var lotteryLuzhu_bsoe = "xynclz_bsoe";
var vAjax = '';
function setPaiLu() {
    var isshow = getCookie("showPailu");
    if ("1" == isshow || ""==isshow) {
        $("#ckb_pailu").addClass("checked");
    } else {
        $("#ckb_pailu").removeClass("checked");
    }
}
/*冠亚和 路珠(选择时间) 异步加载*/
function LuzhuDate(selDate, unload) {
    $('#LuzhuSelectDate').css({ "width": "100%" });
    $('#LuzhuSelectDate').css("position", "relative").append("<div style='margin:0 auto; width:100%;height:100%; color:#FFF; position:absolute; top:220px; z-index:11;left:0px;'>数据正在加载中...</div><div class='loaddingBg'></div>");
    $.get("/pk10/GuanyaheSelectDate", { t: Math.random(), date: selDate }, function (text) {
        $('#LuzhuSelectDate').html(text);
        $("#pageName").attr("unload", unload);
        $('#LuzhuSelectDate').css("position", "");
    });
}
/*异步load路珠*/
function reloadLuzhu(url, date, unload) {
    url = url.replace(location.protocol+'//'+location.host, '');
    var _container = $("#pageName").attr("container");
    _container = _container ? _container : "lot-wrap";
    $('#' + _container).css({ "width": "100%" });
    $('#' + _container).css("position", "relative").append("<div style='margin:0 auto; width:100%;height:100%; color:#FFF; position:absolute; top:240px; z-index:11;left:0px;'>数据正在加载中...</div><div class='loaddingBg'></div>");
    $.get(url, { t: Math.random(), date: date }, function (text) {
        $('#' + _container).html(text);
        $("#pageName").attr("unload", unload);
        $('#' + _container).css("position", "");
    });
}
function updatePickdate(dp) {
    var selDate = $("#dateData").val();

    setPaiLu();

    if (true == vAjax) {
        var unload = "0";
        if (dp.cal.date.d == (new Date()).getDate()) {
            unload = "0";
        } else {
            unload = "1";
        }
        //冠亚和 路珠选择时间 单独处理(加载局部视图)
        LuzhuDate(selDate, unload);

    } else {
        if (dp.cal.date.d == (new Date()).getDate()) {
            reloadLuzhu(location.href, selDate, 0);
        } else {
            reloadLuzhu(location.href, selDate, 1);
        }
    }
}
function clearedDate() {
    reloadLuzhu(location.href, '', 0);
}
function getPRData_1(){
    return ["大","小","2,2,1,1,2,2,2,2,2,1,2,1,1,2,1,2,1,1,2,2,1,2,2,2,1,2,1,1,2,1,2,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,2,2,2,2,1,2,1,2,1,1,2,1,1,2,2,1,2,1,1,2,2,1,2,1,2,1,2"];
}
function getPRData_2(){
    return ["单","双","1,1,2,2,1,2,2,2,2,1,1,1,1,1,2,1,2,2,1,1,2,1,2,1,1,2,2,2,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,2,2,1,1,1,1,1,2,2,1,1,1,2,2,2,1,2,1,2,2,1,1,1,2,1,2,1,2,2,2,2,2,2,2,2,2,1,2,2,1,1,2,1,2,2,2,2,1,1,1,1,2,1,2,1,1,1,1,1"];
}
function getPRData_3(){
    return ["大","小","2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,1,2,2,2,2,1,2,2,2,1,2,2,2,1,1,1,2,1,2,2,2,2,1,1,2,1,1,2,2,1,1,2,1,2,1,2,2,2,1,1,2,1,1,2,2,1,2,1,2,2,2,2,2,2,1,2,1,1,2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,1,2"];
}
function getPRData_4(){
    return ["单","双","1,2,1,1,2,2,1,1,1,1,2,1,1,2,1,1,1,2,2,1,2,1,1,2,1,1,2,2,1,1,1,2,2,2,1,2,1,2,1,2,2,1,1,2,1,2,2,2,2,2,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,2,1,1,1,1,1,1,1,2,2,1,1,2,1,1,2,1,1,2,1"];
}
function getPRData_5(){
    return ["大","小","1,1,1,2,1,1,2,2,2,1,1,2,1,1,1,2,1,1,1,2,1,2,1,2,2,2,1,1,1,2,2,1,2,2,2,1,2,2,2,2,1,1,2,1,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,2,2,1,2,1,2,1,1,2,2,2,2,1,2,1"];
}
function getPRData_6(){
    return ["单","双","2,2,1,2,1,1,1,1,1,2,2,2,1,2,1,1,2,1,1,1,2,1,1,1,2,2,1,1,1,2,2,1,2,1,1,2,1,1,2,1,2,1,1,2,1,2,2,2,2,1,1,2,1,2,1,2,1,2,2,2,2,2,1,2,1,1,2,1,1,1,2,1,2,1,2,2"];
}
function getPRData_7(){
    return ["大","小","1,1,1,2,1,2,1,1,2,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,2,1,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,1,2,2,1,1,1,2,1,1,1,2,1,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,2,1,1,1,1,1,2,2,1,2,2,1,1,2,1"];
}
function getPRData_8(){
    return ["单","双","2,1,1,2,2,1,2,1,1,2,2,1,1,1,1,2,2,1,2,2,2,1,2,2,2,1,1,2,1,1,2,2,1,2,2,1,1,2,1,1,2,2,1,2,2,1,2,1,2,1,2,2,1,1,2,2,1,1,2,2,1,2,1,1,2,2,2,2,2,1,2,1,2,2,2,1,2"];
}
function getPRData_9(){
    return ["大","小","1,1,2,2,1,1,1,2,1,2,2,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,2,2,1,1,1,2,1,2,1,2,2,2,1,2,2,1,1,2,2,2,1,2,2,1,1,1,2,2,2,1,2,1,2,2,2,1,2,2,2,1,1,1,2,1,1,1,1,1,1,2,2,1,2,1,2,2,1,2,2,1,1,1,1"];
}
function getPRData_10(){
    return ["单","双","1,1,2,1,1,1,2,1,2,1,2,2,2,1,2,2,1,1,1,2,2,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2,2,2,2,1,2,2,1,2,1,2,1,1,1,1,2,2,1,2,1,1,1,2,2,2,1,2,1,2,1,1,1,1,2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,1,1,1"];
}
function getPRData_11(){
    return ["大","小","2,2,2,1,2,2,1,2,1,1,2,1,2,2,2,1,2,1,2,1,2,2,2,2,2,1,2,2,1,1,2,2,2,1,2,2,1,2,2,2,1,2,1,1,1,2,2,2,1,1,2,2,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,2,1,1,2,1,1,2,2,1,2,1,1,2,2,2"];
}
function getPRData_12(){
    return ["单","双","1,1,1,2,2,2,1,1,2,1,1,2,1,2,2,1,1,1,1,2,2,1,1,1,2,1,1,1,1,2,2,1,2,1,1,2,2,1,2,1,2,2,2,2,2,2,1,1,1,2,1,1,1,2,1,1,2,1,2,1,1,2,2,1,1,1,2,2,1,1,2,1,1,2,1,1,2,1,2,1,1,1,2,2,1,1,1,1"];
}
function getPRData_13(){
    return ["大","小","1,2,2,1,1,1,1,1,2,2,2,1,2,1,1,1,2,2,1,2,2,1,1,1,2,1,2,1,2,2,1,1,1,2,1,1,1,1,1,2,2,1,1,2,1,1,1,1,2,2,2,2,1,1,1,1,2,2,2,1,1,2,1,2,2,2,2,2,2,1,2,1,2,1,2,1,2,2,1,2,1,2,2,2,2,1,2,1,1"];
}
function getPRData_14(){
    return ["单","双","1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,2,2,2,2,1,1,1,2,2,2,1,1,2,1,2,2,2,1,2,2,2,1,1,2,2,2,2,1,1,1,2,2,2,1,1,1,1,2,1,2,1,2,1,2,1,1,2,1,2,2,1,1,2,2,1,1,1,2,2,2,1,1,1,2,1,1,1,1,2,1,2,1,2,2,2,1,2,2,1,1"];
}
function getPRData_15(){
    return ["大","小","2,1,1,1,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,1,1,2,2,1,1,1,2,2,2,2,1,1,1,1,2,1,1,1,1,2,2,2,1,1,1,1,1,2,2,1,2,2,1,1,1,1,2,2,1,1,1,1,2,1,2,1,2,2,2,2,2,1,2,1,2,2,1,2,2,1,2,2,2,1,1,2,1,2,1,2,2,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2"];
}
function getPRData_16(){
    return ["单","双","2,2,1,1,2,2,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,2,1,2,2,2,1,2,2,2,1,1,1,2,2,1,1,1,2,2,2,2,1,1,1,2,2,1,2,2,2,1,2,2,1,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,2,2,2,2,2,1,1,2,1,2,2"];
}
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/xync/award.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            var fixedMenu = $(".web_listOP");
            var x = fixedMenu.offset().left;
            var y = fixedMenu.offset().top;

            $(window).resize(function () {
                fixedMenu.removeAttr("style");
                x = fixedMenu.offset().left;
                y = fixedMenu.offset().top;
            });


            var scrollFunc = function (e) {
                if (location.pathname.indexOf("nineplan") > 0) return;
                e = e || window.event;
                var t1 = document.getElementById("wheelDelta");
                var t2 = document.getElementById("detail");
                var isup = false;
                if (e.wheelDelta) {//IE/Opera/Chrome
                    isup = e.wheelDelta >= 120;
                } else if (e.detail) {//Firefox
                    isup = e.detail <= -3;
                }
                var winHeight = $(document).height();
                var st = $(document).scrollTop();
                if (isup && winHeight > 3500 && st > 1500) {
                    var pos = { "background": "#f1f1f1", "border": "1px solid #999", "z-index": "9999" };
                    //if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                    //    pos = $.extend({}, pos, { "position": "absolute", "top": $(window).scrollTop()-50 + "px" });
                    //} else {
                    pos = $.extend({}, pos, { "position": "fixed", "top": "0px", "left": (x - 2) + "px" });
                    // }
                    fixedMenu.css(pos);
                    fixedMenu.find("ul").css({ "padding": "3px 0 3px 0" });
                } else {
                    fixedMenu.removeAttr("style");
                    fixedMenu.find("ul").css({ "padding": "0 0 10px 0" });
                }
            }
            /*注册事件*/
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }//W3C
            window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
        });

        $(function () {
            $(".show-bjl label").bind("click", function () {
                $("#" + $(this).prev().attr("id")).click();
            });

            $("#ckb_pailu").bind("click", function () {
                var check = $(this).hasClass("checked") ? false : true;
                var selDate = $("#dateData").val();
                var url = location.href;
                $.post("/home/pailusetting", { enable: check }, function (result) {
                    //location.reload();
                    setCookie('showPailu',check?'1':'0',5);
                    //由之前的post整个页面 变成局部更新
                    setPaiLu();

                    var unload = "0";
                    if (selDate != "" && new Date(selDate).getDate() == (new Date()).getDate()) {
                        unload = "0";
                    } else {
                        unload = "1";
                    }
                    var vselectdate = $("#pageName").attr("selectdate");
                    //冠亚和 路珠选择时间 单独处理(加载局部视图)
                    if (vselectdate == "LuzhuSelectDate") {
                        LuzhuDate(selDate, unload);
                    } else {
                        reloadLuzhu(url, selDate, unload);
                    }
                }, 'json');
            });
        });
        vAjax = Boolean("");
        $(function () {
            $("#dateData").val("");
        })

        $(function () {
            changeLuZhuBall();
            setLuzhuScroll();
        });
    }
});