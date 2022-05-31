const express = require('express');
const router = express.Router();
const mysqlcon = require('../database');

router.get('/', (req,res) => {
    mysqlcon.query('SELECT * FROM categories', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlcon.query('SELECT * FROM categories WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

router.post('/', (req, res) => {
    const {id, name, active, timestart, timeend} = req.body;
    console.log(id, name, active, timestart, timeend);
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @active = ?;
        SET @timestart = ?;
        SET @timeend = ?;
        CALL categoriesAddOrEdit(@id, @name, @active, @timestart, @timeend);
    `;
    mysqlcon.query(query, [id, name, active, timestart, timeend], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'Category saved'});
        console.log('response on bk:', res)
        } else {
        console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { name, active, timestart, timeend} = req.body;
    const { id } = req.params;
    console.log(id, name, active, timestart, timeend);
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @active = ?;
        SET @timestart = ?;
        SET @timeend = ?;
        CALL categoriesAddOrEdit(@id, @name, @active, @timestart, @timeend);
    `;
    mysqlcon.query(query, [id, name, active, timestart, timeend], (err, rows, fields) => {
        if(!err) {
        res.json({status: 'Category updated'});
        } else {
        console.log(err);
        }
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlcon.query('DELETE FROM categories WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json({status: 'Category deleted!'});
      } else {
        console.log(err);
      }
    });
  });


module.exports = router;