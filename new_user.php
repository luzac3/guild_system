<?php
if(!empty($_POST)){
	$password = $_POST["password"];
	$username = $_POST["username"];

	//$password = "111111";
	//$username = "test";

	$date = date("Ymd");

	require_once("./conection.php");
	$mysqli = db_connect();

	$str  = array_merge(range('a', 'z'), range('0', '9'), range('A', 'Z'),array(".","/"));

	$salt = "$2y$10$";

	for($i=0; $i<22; $i++){
		$salt .= $str[rand(0,count($str)-1)];
	}

	$salt .= "$";

	$hash = crypt($password, $salt);

	$sql="INSERT INTO login (user_name,hash,make_date) VALUES ('".$username."','".$hash."','".$date."')";
	if($mysqli -> query($sql)){
		echo json_encode("ユーザー作成完了");
		//echo ("ユーザー作成完了");
	}else{
		echo json_encode("通信失敗");
		//echo ($sql);
	}

}else{
	echo json_encode("作成失敗");
}

?>