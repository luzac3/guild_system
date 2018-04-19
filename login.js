$(document).ready(function(){
	$("#login").on("click",function(){
		let username = $("#username").val();
		let password = $("#password").val();

		$.ajax({
			url: "./login_check.php",
			cache: false,
			timeout: 10000,
            type:'POST',
            dataType: 'json',
			data:{
				username:username,
				password:password
			}
		}).then(
			function(data){
				alert(data);

				//update(username).then(function(){
					location.href="./index.html";
				//});

			},
			function(XMLHttpRequest, textStatus, errorThrown){
				alert("通信に失敗しました");
		        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
		        console.log("textStatus     : " + textStatus);
		        console.log("errorThrown    : " + errorThrown.message);
			}
		);
	});

	$("#new_user").on("click",function(){
		location.href="./new_user.html";
	});
});

function update(username){
	$.ajax({
		url: "./update.php",
		cache: false,
		timeout: 10000,
        type:'POST',
        dataType: 'json',
		data:{
			username:username
		}
	}).then(
		function(data){
			alert(data);
			return;
		},
		function(XMLHttpRequest, textStatus, errorThrown){
			alert("更新処理に失敗しました");
	        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
	        console.log("textStatus     : " + textStatus);
	        console.log("errorThrown    : " + errorThrown.message);
			return;
		}
	);
}