<?php
if(!empty($_POST)){
	$array = $_POST["array"];
	$username = $_COOKIE["username"];

	require_once("./conection.php");
	$mysqli = db_connect();

	$sql = "SELECT home_name FROM home_name_table WHERE user_name = '".$username."'";

	$result = $mysqli -> query($sql);

	$row = $result -> fetch_assoc();
	$home_name = $row["home_name"];
	$result -> close();


	 $sql = "INSERT INTO character_table ".
		"(".
		"user_name,".
		"name,".
		"home_name,".
		"level,".
		"class,".
		"constellation,".
		"head,".
		"body,".
		"foot,".
		"arm,".
		"main,".
		"sub,".
		"awake,".
		"ear1,".
		"ear2,".
		"belt,".
		"neckless,".
		"ring1,".
		"ring2,".
		"gather,".
		"process,".
		"cook,".
		"alchemist,".
		"train,".
		"fishing,".
		"hunt,".
		"trade,".
		"farm,".
		"voyage".
		") ".
		"VALUES ".
		"(".
		"'".$username."',".
		"'".$array["name"]."',".
		"'".$home_name."',".
		"'".$array["level"]."',".
		"'".$array["class"]."',".
		"'".$array["constellation"]."',".
		"'".$array["head"]."',".
		"'".$array["body"]."',".
		"'".$array["foot"]."',".
		"'".$array["arm"]."',".
		"'".$array["main"]."',".
		"'".$array["sub"]."',".
		"'".$array["awake"]."',".
		"'".$array["ear1"]."',".
		"'".$array["ear2"]."',".
		"'".$array["belt"]."',".
		"'".$array["neckless"]."',".
		"'".$array["ring1"]."',".
		"'".$array["ring2"]."',".
		$array["gather"].",".
		$array["process"].",".
		$array["cook"].",".
		$array["alchemist"].",".
		$array["train"].",".
		$array["fishing"].",".
		$array["hunt"].",".
		$array["trade"].",".
		$array["farm"].",".
		$array["voyage"].
		")";

		if($mysqli -> query($sql)){
			echo json_encode("登録完了");
		}else{
			echo json_encode("登録失敗");
		}

}else{
	echo json_encode("値がありません");
}
?>