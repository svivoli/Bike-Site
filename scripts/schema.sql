DROP DATABASE IF EXISTS helmet_register;

CREATE DATABASE helmet_register;

USE helmet_register;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id, name), INDEX(id), INDEX(name)
);
