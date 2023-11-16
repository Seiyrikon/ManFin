DROP DATABASE IF EXISTS jwt_security;
CREATE DATABASE jwt_security;

USE jwt_security;

DROP TABLE IF EXISTS tbl_user_mst;
CREATE TABLE tbl_user_mst (
	user_id INT(9) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);