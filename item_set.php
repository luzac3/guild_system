<?php
if(!empty($_POST)){
	// 平文パスワード
	$item_name = $_POST["item_name"];
	$buy = $_POST["buy"];
	$sale = $_POST["sale"];
	$salable = $_POST["salable"];
	$material = json_encode($_POST["material"]);

	require_once("./conection.php");
	$mysqli = db_connect();

	$sql = "INSERT INTO guild_item_list (item_name,price,price_sale,salable,material) VALUE (";
	$sql .= "'".$item_name."',";
	$sql .= $buy.",";
	$sql .= $sale.",";
	$sql .= $salable.",";
	$sql .= "'".$material."')";

	if($mysqli -> query($sql)){
		$sql = "INSERT INTO guild_item_whole (item_name,number) VALUE (".
				"'".$item_name."',".
				"0".
				")";
		$mysqli -> query($sql);
		echo json_encode("登録完了");
	}else{
		echo json_encode("データベースのアップデートに失敗しました");
	}
	$mysqli -> close();
}else{
	echo json_encode("未知のエラーです");
}
?>