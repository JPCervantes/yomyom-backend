const express = require('express');
const router = express.Router();
const mysqlcon = require('../database');


router.get('/', (req,res) => {
    mysqlcon.query('SELECT * FROM plates', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlcon.query('SELECT * FROM plates WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });


router.post('/', (req, res) => {
    const { id, name, active, price, categoryId } = req.body;
    console.log(id, name, active, price, categoryId);
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @active = ?;
        SET @price = ?;
        SET @categoryId = ?;
        CALL platesAddOrEdit(@id, @name, @active, @price, @categoryId);
    `;
    mysqlcon.query(query, [id, name, active, price, categoryId], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'Plate saved!'});
        } else {
        console.log(err);
        }
    });
});


router.put('/:id', (req, res) => {
  const { name, active, price, categoryId } = req.body;
  const { id } = req.params;
  console.log(id, name, active, price, categoryId);
  const query = `
      SET @id = ?;
      SET @name = ?;
      SET @active = ?;
      SET @price = ?;
      SET @categoryId = ?;
      CALL platesAddOrEdit(@id, @name, @active, @price, @categoryId);
  `;
  mysqlcon.query(query, [id, name, active, price, categoryId], (err, rows, fields) => {
      if(!err) {
      res.json({status: 'Plate updated!'});
      } else {
      console.log(err);
      }
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlcon.query('DELETE FROM plates WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json({status: `Category deleted!`});
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;