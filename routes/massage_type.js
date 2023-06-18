var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let massage_type = await req.db.any(`
        SELECT
            *
        FROM
            massage_type
    `)
    console.log(massage_type)
    res.render('massage_type/list', { title: 'Типы массажа', massage_type: massage_type })

});

router.post('/create', async function(req, res, next) {

    let massage_type = req.body

    await req.db.none('INSERT INTO massage_type(label, price) VALUES( ${label}, ${price})', massage_type);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let massage_type = req.body
    await req.db.none('DELETE FROM massage_type WHERE id = ${id}', massage_type);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let massage_type = req.body
    await req.db.none('UPDATE massage_type SET label = ${label}, price = ${price} WHERE id = ${id}', massage_type);
    res.send({msg: ''})

});

module.exports = router;
