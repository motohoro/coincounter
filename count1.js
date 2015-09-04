//$(document).on('touchmove', function(e) {e.preventDefault();});

jQuery(document).ready(function(){
	var calcing = function(){
		var coinsum=0,billsum=0,allsum=0;
		$("input[type='number']").each(function(){
			var kind = $(this).attr("id");
			var kindsum = $(this).attr("name")*$(this).val();
			$("#result"+kind).text(kindsum);
			if(0+kind>500){
				billsum+=kindsum;
			}else{
				coinsum+=kindsum;
			}
			allsum+=kindsum;
		});
		$("#coinsum").text(coinsum);
		$("#billsum").text(billsum);
		$("#allsum").text(allsum);
	}
	
	$('.ui-content').on('click', '.ui-input-clear', function(e){
//		alert('click!');
		calcing();
	});
	
    $("[name='clearbtn']").click(function(){
    	$("input").val("");
    	calcing();
/*
		$("input[type='number']").each(function(){
			var kind = $(this).attr("id");
			$("#result"+kind).text("");
		});
		$("#coinsum").text("");
		$("#billsum").text("");
		$("#allsum").text("");
*/
    });
	$("input[type='number']").blur(function(){
		calcing();
/*
		var coinsum=0,billsum=0,allsum=0;
		$("input[type='number']").each(function(){
			var kind = $(this).attr("id");
			var kindsum = $(this).attr("name")*$(this).val();
			$("#result"+kind).text(kindsum);
			if(0+kind>500){
				billsum+=kindsum;
			}else{
				coinsum+=kindsum;
			}
			allsum+=kindsum;
		});
		$("#coinsum").text(coinsum);
		$("#billsum").text(billsum);
		$("#allsum").text(allsum);
*/		
	});
});
