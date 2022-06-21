DROP DATABASE IF EXISTS inventory_db;

CREATE DATABASE biographies_db;

USE biographies_db;

CREATE TABLE book (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

