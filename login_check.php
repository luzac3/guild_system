<?php
if(!empty($_POST)){
	// 平文パスワード
	$username = $_POST["username"];
	$password = $_POST["password"];


	require_once("./conection.php");
	$mysqli = db_connect();

	$sql="SELECT * FROM login WHERE user_name = '".$username."'";

	$result = $mysqli -> query($sql);

	if(($result -> num_rows)<1){
		echo json_encode("ユーザー名が間違っています");
		return;
	}

	$login_info = $result->fetch_assoc();

	$hash = $login_info["hash"];

	// パスワードを検証する
	if (hash_equals($hash,crypt($password, $hash))) {
		$authorizations = $login_info["authorizations"];
		setcookie("username",$username);
		setcookie("authorizations",$authorizations);
	    echo json_encode("正しいパスワードです");
	} else {
	    echo json_encode("パスワードが間違っています");
	}

}else{
	echo json_encode("未知のエラーです");
}

?>