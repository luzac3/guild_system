<?php
	if(!empty($_POST)){
		require_once("./conection.php");
		$mysqli = db_connect();

		$sql = "SELECT * FROM character_table WHERE user_name = ".$_POST["username"];

		$result = $mysqli -> query($sql);

		if($result -> num_rows == 0){
			return;
		}

		$level_array = array();

		$gather = "";
		$gather = "";
		$gather = "";
		$gather = "";
		$gather = "";
		$gather = "";

		$character_list ="{";

		foreach($result as $raw){
			$character_list .= "'".$raw["user_name"]."':'".$raw["level"]."',";
			array_push($level_array , $raw["level"]);
		}
		$character_list = substr($character_list , 0 , strlen($character_list)-1);
		$character_list .= "}";

		$level = max($level_array);

		$sql = "UPDATE home_name_table SET character_list =";
	}
?>