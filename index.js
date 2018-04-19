$(document).ready(function(){
	$(".item_name").on("click",function(){
		let item_name = $(this).attr("name");
		item_name = encodeURI(item_name);
		location.href = "./guild_item_detail.html?item_name="+item_name;
	});

	$("#item_set").on("click",function(){
		location.href = "./item_set.html";
	});

	$(".mypage").on("click",function(){
		location.href = "./mypage.html";
	})

	$("#number_set").on("click",function(){
		location.href = "./number_set.html";
	})
})
