DROP DATABASE IF EXISTS helmet_register;

CREATE DATABASE helmet_register;

USE helmet_register;

CREATE TABLE bike (
    id INT NOT NULL AUTO_INCREMENT,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    estvalue INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE frequency (
    id INT NOT NULL AUTO_INCREMENT,
    often INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE uses (
    id INT NOT NULL AUTO_INCREMENT,
    use VARCHAR(100) NOT NULL,
    stolen BOOLEAN NOT NULL,
    clubs VARCHAR(1000),
    PRIMARY KEY (id)
);

CREATE TABLE client (
    id INT NOT NULL AUTO_INCREMENT,
    first VARCHAR(100) NOT NULL,
    last VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dob_month INT NOT NULL,
    dob_day INT NOT NULL,
    dob_year INT NOT NULL,
    zip INT NOT NULL,
    PRIMARY KEY (id)
);
