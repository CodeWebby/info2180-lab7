<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$country=$_GET["country"];

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
echo $country;

$stmt2 = $conn->prepare('SELECT * FROM countries WHERE name LIKE :country');
$country = '%' . filter_input(INPUT_GET, 'country', FILTER_SANITIZE_STRING) . '%'; // <-- filter your data first (see [Data Filtering](#data_filtering)), especially important for INSERT, UPDATE, etc.
$stmt2->bindParam(':country', $country, PDO::PARAM_STR); // <-- Automatically sanitized for SQL by PDO
$stmt2->execute();
$results2 = $stmt2;


$stmt = $conn->query("SELECT * FROM countries");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo '<ul>';
foreach ($results2 as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';



?>