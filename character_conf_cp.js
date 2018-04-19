$(document).ready(function(){
	//二重送信阻止

	$("#live select").on("change",function(){
		$("button").prop("disabled", true);
		let live = $(this).val();
		if(live == "5"){
			$(this).next().empty();
			let str = "";

			for(let i=1; i<=30; i++){
				str += "<option value="+i+">"+i;
			}
			$(this).next().append(str);
		}else if(live == "6"){
			$(this).next().empty();
			let str = "";

			for(let i=1; i<=20; i++){
				str += "<option value="+i+">"+i;
			}
			$(this).next().append(str);
		}
	});

	$("#resister").on("click",function(){
		let array = {};

		array["name"]=$("#name").val();
		array["level"]=$("#level").val();
		array["class"]=$("#class").val();
		array["constellation"]=$("#constellation").val();

		let equip_array = [
			"head",
			"body",
			"arm",
			"foot",
			"main",
			"sub",
			"awake",
			"ear1",
			"ear2",
			"ring1",
			"ring2",
			"neckless",
			"belt"
		];
		for(let i=0; i<equip_array.length; i++){
			array[equip_array[i]]={
				"rank":$("#"+equip_array[i]+" select:first").val(),
				"at1":$("#"+equip_array[i]+" .at1").val(),
				"at2":$("#"+equip_array[i]+" .at2").val(),
				"def":$("#"+equip_array[i]+" .def").val()
			}
			array[equip_array[i]]=JSON.stringify(array[equip_array[i]]);
		}

		let live_array = [
			"gather",
			"process",
			"cook",
			"alchemist",
			"train",
			"fishing",
			"hunt",
			"trade",
			"farm",
			"voyage"
		];

		let num =0;
		for(let i=0; i<live_array.length; i++){

			if(parseInt($("#"+live_array[i]+" select:first").val()) == 6){
				num = 20;
			}

			array[live_array[i]] = parseInt($("#"+live_array[i]+" select:first").val()) *
				10 +
				num +
				parseInt($("#"+live_array[i]+" select:nth-child(3)").val());

			num = 0;
		}

		$.ajax({
			url: "./character_conf.php",
			cache: false,
			timeout: 10000,
            type:'POST',
            dataType: 'json',
			data:{
				array:array
			}
		}).then(
			function(data){
				alert(data);
				location.href="./mypage.html";
			},
			function(XMLHttpRequest, textStatus, errorThrown){
				alert("通信に失敗しました");
		        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
		        console.log("textStatus     : " + textStatus);
		        console.log("errorThrown    : " + errorThrown.message);
			}
		);
	})
})
