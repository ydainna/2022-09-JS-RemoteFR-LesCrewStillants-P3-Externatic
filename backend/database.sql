DROP TABLE IF EXISTS user_offer;
DROP TABLE IF EXISTS offer;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS address;
DROP TABLE IF EXISTS information;
DROP TABLE IF EXISTS role;

CREATE TABLE role(
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
role VARCHAR(80) NOT NULL);

CREATE TABLE information (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
cv VARCHAR(100) NULL,
actual_situation VARCHAR(80),
isRemote BOOLEAN NOT NULL DEFAULT FALSE,
isActiveSearch BOOLEAN NOT NULL DEFAULT FALSE,
job TEXT NULL,
technology TEXT NULL,
type_of_contract VARCHAR(80) NULL,
start_date DATE NULL,
localisation_job VARCHAR(250) NULL);

CREATE TABLE address (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
number INT NULL, type_of_street VARCHAR(20) NULL, 
street_name VARCHAR(150) NULL, 
zipcode INT NULL, city VARCHAR(50) NULL, 
country VARCHAR(50) NULL, 
complementary_info VARCHAR(250) NULL);

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
avatar VARCHAR(100) NULL,
email VARCHAR(80) NOT NULL,
password VARCHAR(250) NOT NULL,
civility VARCHAR(20) NULL,
firstname VARCHAR(100) NOT NULL,
lastname VARCHAR(150) NOT NULL,
phone_number VARCHAR(20) NULL,
created_at DATETIME NOT NULL, 
role_id INT NOT NULL,
CONSTRAINT fk_user_role
FOREIGN KEY (role_id)
REFERENCES role(id),
information_id INT,
CONSTRAINT fk_user_information
FOREIGN KEY (information_id)
REFERENCES information(id),
address_id INT,
CONSTRAINT fk_user_address
FOREIGN KEY (address_id)
REFERENCES address(id));

CREATE TABLE company (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
name VARCHAR(80) NOT NULL,
sector VARCHAR(80) NOT NULL, 
siret INT NOT NULL, 
logo VARCHAR(100) NOT NULL, 
description TEXT NOT NULL, 
banner VARCHAR(100) NOT NULL, 
link VARCHAR(250) NOT NULL, 
contact_name VARCHAR(80) NOT NULL, 
user_id INT NOT NULL,
CONSTRAINT fk_user_company FOREIGN KEY (user_id) REFERENCES user(id), 
address_id INT NOT NULL,
CONSTRAINT fk_address_company FOREIGN KEY (address_id) REFERENCES address(id));

CREATE TABLE offer (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
title VARCHAR(80) NOT NULL,
job_description TEXT NULL,
mission TEXT NULL,
seeked_profile TEXT NULL,
complementary_info TEXT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_offer_user FOREIGN KEY (user_id) REFERENCES user(id));

CREATE TABLE user_offer (
isFavorite BOOLEAN NOT NULL DEFAULT FALSE,
isApplied BOOLEAN NOT NULL DEFAULT FALSE,
user_id INT NOT NULL,
CONSTRAINT fk_user_user_offer FOREIGN KEY (user_id) REFERENCES user(id), 
offer_id INT NOT NULL,
CONSTRAINT fk_offer_user_offer FOREIGN KEY (offer_id) REFERENCES offer(id));