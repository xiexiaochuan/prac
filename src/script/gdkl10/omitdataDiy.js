// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);

// 	$('.feedbackDiv').remove();
// 	$('li[data-tag="zh"]').remove();
// 	$('li[data-tag="tbm"]').remove();
// 	$('li[data-tag="sjyy"]').remove();


// }

$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.lot-wrap').replaceWith(res);

		$(" .lot-search .car-num .lot-number-omit .ball li a").on("click", function () {
            $(" .lot-search .car-num .lot-number-omit .ball li a").removeClass("cur");
            $(this).addClass("cur");
            var ball = $(this).attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        });
        $("#dataType").bind("change", function () {
            var ball = $(".lot-search .car-num .lot-number-omit .ball .cur").attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        });
        function changeData(ball, dt) {
            $.get("/pk10/omitdata", { ball: ball, dateType: dt, t: Math.random() }, function (text) {
                $('#table-datas').html(text);
            });
        }
        function updateOmitDatas() {
            var ball = $(".lot-search .car-num .lot-number-omit .ball .cur").attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        }

	}
});


