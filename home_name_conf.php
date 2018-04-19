<?php
if(!empty($_POST)){
	$array = $_POST["array"];
	$username = $_COOKIE["username"];

	require_once("./conection.php");
	$mysqli = db_connect();

	$sql = "INSERT INTO home_name_table (user_name,home_name) VALUES ('".$username."','".$array["home_name"]."')";

	if($mysqli -> query($sql)){
		echo json_encode("登録完了");
	}else{
		echo json_encode("登録失敗");
	}

}else{
	echo json_encode("値がありません");
}
?>