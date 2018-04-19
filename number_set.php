<?php
if(!empty($_POST)){
	$array = $_POST["array"];
	$username = $_COOKIE["username"];

	require_once("./conection.php");
	$mysqli = db_connect();

	$sql = "SELECT home_name FROM character_table WHERE name = '".$array["character_name"]."'";

	$result = $mysqli -> query($sql);

	$row = $result -> fetch_assoc();
	$home_name = $row["home_name"];
	$result -> close();


	$sql = "INSERT INTO guild_item_pos ".
		"(".
			"character_name,".
			"home_name,".
			"item_name,".
			"number".
		") ".
		"VALUES ".
		"(".
			"'".$array["character_name"]."',".
			"'".$home_name."',".
			"'".$array["item_name"]."',".
			$array["number"].
		") ".
		"ON DUPLICATE KEY UPDATE number = ".
		$array["number"];

		if($mysqli -> query($sql)){
			echo json_encode("登録完了");
			$sql = "UPDATE guild_item_whole gi_whole,".
				"( ".
					"SELECT ".
					"pos.item_name AS item_name, ".
					"SUM(pos.number) AS number ".
					"FROM guild_item_pos pos ".
					"GROUP BY pos.item_name ".
				") gi_pos ".
				"SET gi_whole.number=gi_pos.number ".
				"WHERE gi_whole.item_name=gi_pos.item_name";

			$mysqli -> query($sql);
		}else{
			echo json_encode("登録失敗");
		}

}else{
	echo json_encode("1つ以上のアイテムを選択してください");
}
?>