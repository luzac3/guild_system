$(document).ready(function(){
	$(".check").closest("td").siblings("td").eq(2).children("input").prop("disabled",true);
	$("#apply").on("click",function(){
		$("#apply").prop("disabled",true);
		let array = $(".check:checked").map(function(){
			return {
				"item_name" : $(this).closest("td").next().text(),
				"character_name" : $(this).closest("td").siblings("td").eq(1).children("select").val(),
				"number" : $(this).closest("td").siblings("td").eq(2).children("input").val()
			};
		}).get();

		console.log(array[0]);
		$.ajax({
			url: "./number_set.php",
			cache: false,
			timeout: 10000,
            type:'POST',
            dataType: 'json',
			data:{
				array:array[0]
			}
		}).then(
			function(data){
				alert(data);
				console.log(data);
				location.href="./number_set.html"
			},
			function(XMLHttpRequest, textStatus, errorThrown){
				alert("通信に失敗しました。");
		        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
		        console.log("textStatus     : " + textStatus);
		        console.log("errorThrown    : " + errorThrown.message);
				location.href="./number_set.html"
			}
		);
	})

	$("#rt_top").on("click",function(){
		location.href="./index.html";
	})

	//on checkを使ってチェックボックスを押している場合、値が入力されていなかったらDisabledする
	$(".check").on("change",function(){
		let obj = $(this).closest("td").siblings("td").eq(2).children("input");
		if($(this).prop("checked")){
			obj.prop("disabled",false);
		}else{
			obj.prop("disabled",true);
		}

		number = obj[0];

		if(!number.checkValidity()){
			$("#apply").prop("disabled",true);
		}else{
			$("#apply").prop("disabled",false);
		}
	})
	$(".number").on("keyup",function(){
		let number = $(".number")[0];

		if(!number.checkValidity()){
			$("#apply").prop("disabled",true);
		}else{
			$("#apply").prop("disabled",false);
		}
	})



})