// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = '';
var lotteryLuzhu = "";
var successFn = function(res){
    $('.body-content').replaceWith(res);
    $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/changlong.js',type:'text/javascript'}).appendTo($('body'));
}

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: successFn
});