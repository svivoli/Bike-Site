DROP DATABASE IF EXISTS helmet_register;

CREATE DATABASE helmet_register;

USE helmet_register;

CREATE TABLE bike (
    id INT NOT NULL AUTO_INCREMENT,
    make VARCHAR(100),
    model VARCHAR(100),
    year INT,
    estvalue INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE frequency (
    id INT NOT NULL AUTO_INCREMENT,
    often INT,
    PRIMARY KEY (id)
);

CREATE TABLE uses (
    id INT NOT NULL AUTO_INCREMENT,
    use VARCHAR(100),
    stolen BOOLEAN,
    clubs VARCHAR(1000),
    PRIMARY KEY (id)
);

CREATE TABLE client (
    id INT NOT NULL AUTO_INCREMENT,
    first VARCHAR(100),
    last VARCHAR(100),
    email VARCHAR(100),
    dob_month INT,
    dob_day INT,
    dob_year INT,
    zip INT,
    PRIMARY KEY (id)
);
