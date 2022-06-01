const express = require('express');
const router = express.Router();
const mysqlcon = require('../database');
require('dotenv').config()

const loadDataQuery = `CREATE TABLE if not exists categories (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  active tinyint(1) DEFAULT '0',
  timestart time DEFAULT '00:00:00',
  timeend time DEFAULT '24:00:00',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES categories WRITE;
INSERT IGNORE INTO categories VALUES (1,'Bebidas',1,'08:00:00','22:00:00'),(2,'Desayunos',1,'08:00:00','13:00:00'),(3,'Comidas',1,'13:00:00','18:00:00'),(4,'Postres',1,'08:00:00','22:00:00'),(5,'Licores',1,'13:00:00','22:00:00');
UNLOCK TABLES;

CREATE DEFINER='root'@'localhost' PROCEDURE IF NOT EXISTS categoriesAddOrEdit(
  IN _id INT(11),
  IN _name VARCHAR(50),
  IN _active BOOLEAN,
  IN _timestart TIME,
  IN _timeend TIME
)
BEGIN 
  IF _id = 0 THEN
    INSERT IGNORE INTO categories (name, active, timestart, timeend)
    VALUES (_name, _active ,_timestart, _timeend);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE categories
    SET
    name = _name,
    active = _active,
    timestart = _timestart,
    timeend = _timeend
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END;

CREATE TABLE if not exists plates (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  active tinyint(1) DEFAULT '0',
  price decimal(5,2) DEFAULT '0.00',
  categoryId int,
  PRIMARY KEY (id),
  KEY FK_Categories (categoryId),
  CONSTRAINT FK_Categories FOREIGN KEY (categoryId) REFERENCES categories (id) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES plates WRITE;
INSERT IGNORE INTO plates VALUES (1,'Huevo frito',1,67.00,2),(2,'Cerveza',1,35.00,5),(3,'Flan',1,25.00,4),(4,'Carne en su jugo',1,70.00,3),(6,'Huevo al gusto',1,50.00,2),(10,'Agua de temporada',1,20.00,1),(11,'Chilaquiles con huevito',1,65.00,2),(12,'Torta ahogada',1,55.00,3);

UNLOCK TABLES;

CREATE DEFINER='root'@'localhost' PROCEDURE IF NOT EXISTS platesAddOrEdit(
  IN _id INT(11),
  IN _name VARCHAR(50),
  IN _active BOOLEAN,
  IN _price DECIMAL(5,2),
  IN _categoryId INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT IGNORE INTO plates (name, active, price, categoryId)
    VALUES (_name, _active ,_price, _categoryId);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE plates
    SET
    name = _name,
    active = _active,
    price = _price,
    categoryId = _categoryId
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
`


router.get('/', (req, res) => {
  
    const databaseName = process.env.DATABASE_NAME;
    const createQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
  
    // use the query to create a Database.
    try {
        mysqlcon.query(createQuery, (err) => {
            if(err) throw err;
    
            console.log('Database Created Successfully !');
    
            const useQuery = `USE ${databaseName}`;
            mysqlcon.query(useQuery, (error) => {
                if(error) throw error;
    
                console.log('Using Database');
                
                mysqlcon.query(loadDataQuery, (error) => {
                    if(error) throw error;
        
                    console.log('Data load into Database');

                return res.send(`Created and Using ${databaseName} Database with data loaded successfully!!!`);
                })
            })
        });
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;