<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<center>
	<form action="adminLogin.php" method="POST">
		Username:<input type="text" name="username" placeholder="Enter your Username here">
		<br>
		Password:<input type="Password" name="password" placeholder="Enter Your Password here">
		<br>
		<input type="submit" name="submit" value="Login">
	</form>
	<h4 align="center">Don't have an account?  <a href="register.php">Register</a></h4>
	</center>
</body>
</html>

<?php
session_start();
require('connect.php');
	$username = @$_POST['username'];
	$password = @$_POST['password'];

	if(isset($_POST['submit']))
	{
		if ($username && $password) 
		{
			$check = mysqli_query($connect,"SELECT * FROM driver WHERE License_No='".$username."'");
			$rows = mysqli_num_rows($check);

			if (mysqli_num_rows($check) !=0) 
			{
				while($row = mysqli_fetch_assoc($check))
				{
					$db_username = $row['License_No'];
					$db_password = $row['Password'];
				}
				if ($username == $db_username && md5($password) == $db_password) 
				{
					@$_SESSION["License_No"] = $username;
					header("Location: index.php");
				}
				else{
					echo "<script type='text/javascript'>alert('Your password is wrong');</script>";
				}
			}
				else
				{
					die ("<script type='text/javascript'>alert('Username not found');</script>");
				}
		}
		else
		{
			echo "<script type='text/javascript'>alert('Please fill all the blanks');</script>";
		}
	}
?>		