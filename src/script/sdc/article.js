// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var searchList = decodeURIComponent(decodeURIComponent(location.search)).split('?r=')[1].split('&');
var pathname = searchList[0];
var stit = searchList[1];
document.title = document.title.replace('圣地彩投注技巧_圣地彩杀号技巧',stit)
var keywords = $("meta[name=keywords]").attr("content");
var description = $("meta[name=description]").attr("content");
$("meta[name=keywords]").attr('content', keywords.replace('圣地彩号码推荐', stit));
$("meta[name=description]").attr('content', description.replace('圣地彩号码推荐', stit));
var lotMenu = 'sdc_memu';
var lotteryLuzhu = "";

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);

        $sublink = $("div.method-position>a")[1];
        var sublinkhref = $sublink.getAttribute('href');
        var subarr = sublinkhref.split('/');
        $sublink.href = '/' + subarr[2] + '/' + subarr[1];

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/public/jiqiao_common.js',type:'text/javascript'}).appendTo($('body'));
    }
});