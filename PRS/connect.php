<?php
$connect = mysqli_connect("localhost","root","") or die("Couldn't connect to database");
mysqli_select_db($connect,"policereportingsystem") or die("Couldn't connect to database");
?>