$(document).ready(function(){
	$("#material input").prop("disabled",true);
	$("#material select").prop("disabled",true);
	$("#add").prop("disabled",true);

	$("#apply").on("click",function(){
		let item_name = "[ギルド]"+$("#item_name").val();
		let buy = 0
		if($("#buy").val()){
			buy = $("#buy").val();
		}
		let sale = $("#sale").val();
		let salable=0;
		if($("#salable").prop("checked")){
			salable = 1;
		}
		let str ="";
		if($("#make input[name=material]:checked").val() == "able"){
			let num = parseInt($("#material").attr("class"));
			str = {};
			for(let i=1; i<=num; i++){
				str["[ギルド]"+$("#material_"+i+" input").val()]=$("#material_"+i+" select").val();
			}
		}else{
			let str = null;
		}

		$.ajax({
			url: "./item_set.php",
			cache: false,
			timeout: 10000,
            type:'POST',
            dataType: 'json',
			data:{
				item_name:item_name,
				buy:buy,
				sale:sale,
				salable:salable,
				material:str
			}
		}).then(
			function(data){
				alert(data);
				console.log(data);
				location.href="./index.html";
			},
			function(XMLHttpRequest, textStatus, errorThrown){
				alert("通信に失敗しました");
		        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
		        console.log("textStatus     : " + textStatus);
		        console.log("errorThrown    : " + errorThrown.message);
			}
		);
	})
	$("#make input").on("change",function(){
		if(this.value == "able"){
			$("#material input").prop("disabled",false);
			$("#material select").prop("disabled",false);
			$("#add").prop("disabled",false);
		}else{
			$("#material input").prop("disabled",true);
			$("#material select").prop("disabled",true);
			$("#add").prop("disabled",true);
		}
	})

	$("#add").on("click",function(){
		let num = parseInt($("#material").attr("class"));
		let material = $("#material_"+num).clone(true);
		let new_num = num+1;
		material[0].id = "material_"+new_num;
		material.find("label:first-child").text("材料"+new_num+"：");
		material.insertAfter($("#material_"+num));
		$("#material").attr("class",new_num);
	})

	$(".mypage").on("click",function(){
		location.href="./mypage.html";
	})

	$("#back").on("click",function(){
		location.href="./index.html";
	})
});







