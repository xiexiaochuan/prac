// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);



$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.lot-wrap').replaceWith(res);
		play();

		function play(){
        	$("#s_period").change(function () {
	            $.get("/pk10/shdd/?count=" + $(this).val() + "&ball=1",null, function (html) {
	                $("#lot-wrap").html(html);
	                play();
	            });
	        });
	        $("#ball_ul li a").on("click", function () {
	            $.get("/pk10/shdd/?count=20&ball="+$(this).attr("ball"), null, function (html) {
	                $("#lot-wrap").html(html);
	                play();
	            },'html');
	        });
		}
		
	}
});


