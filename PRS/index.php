<?php
	session_start();
	require('connect.php');
	if (@$_SESSION["Admin_ID"]) {
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<div id="head">
	<h1 id="sub1">CROWD <a id="ad">FIX </a>&nbsp;<i class="fa fa-weixin" aria-hidden="true"></i></h1>
</div>
<ul>
	<li><a class="active" href="index.php"><i class="fa fa-home"></i> Home</a></li>
	<li><a href="account.php"><i class="fa fa-address-card"></i> My Account</a></li>
	<li><a href="members.php"><i class="fa fa-users"></i> Members</a></li>
	<li style="float: right;"><a href="index.php?action=logout"><i class="fa fa-sign-out"></i> Log Out</a></li>
	<li style="float: right;">
		</a></li>
</ul>

</body>
</html>

<?php

if(@$_GET['action'] == "logout")
{
	session_destroy();
	header("Location: login.php");
}
	}
	else
	{
		header("Location: login.php");
	}

?>