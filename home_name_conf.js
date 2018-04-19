
$(document).ready(function(){
	$("button").on("click",function(){

		let home=$("input").val();
		array = {};

		array["home_name"] = home;

		$.ajax({
			url: "./home_name_conf.php",
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
				location.href="./character_conf.html";
			},
			function(XMLHttpRequest, textStatus, errorThrown){
				alert("通信に失敗しました");
		        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
		        console.log("textStatus     : " + textStatus);
		        console.log("errorThrown    : " + errorThrown.message);
			}
		);
	});
})