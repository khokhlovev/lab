var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let more_service = await req.db.any(`SELECT * FROM more_service`)
    console.log(more_service)
    res.render('more_service/list', { title: 'Дополнительные услуги', more_service: more_service })

});

router.post('/create', async function(req, res, next) {

    let more_service = req.body

    await req.db.none('INSERT INTO more_service(label) VALUES( ${label})', more_service);

    res.send({msg: ''})

});


router.delete('/delete', async function(req, res, next) {

    let more_service = req.body
    await req.db.none('DELETE FROM more_service WHERE id = ${id}', more_service);
    res.send({msg: ''})
});


router.put('/update', async function(req, res, next) {

    let more_service = req.body
    await req.db.none('UPDATE more_service SET label = ${label} WHERE id = ${id}', more_service);
    res.send({msg: ''})

});
module.exports = router;
