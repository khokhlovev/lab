var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let therapist = await req.db.any(`
        SELECT
            *
        FROM
            therapist
    `)
    console.log(therapist)
    res.render('therapist/list', { title: 'Массажисты', therapist: therapist })

});

router.post('/create', async function(req, res, next) {

    let phg = req.body

    await req.db.none('INSERT INTO therapist(label, phone) VALUES( ${label}, ${phone})', phg);

    res.send({msg: ''})

});


router.delete('/delete', async function(req, res, next) {

    let phg = req.body
    await req.db.none('DELETE FROM therapist WHERE id = ${id}', phg);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let phg = req.body

    await req.db.none('UPDATE therapist SET label = ${label}, phone = ${phone} WHERE id = ${id}', phg);

    res.send({msg: ''})

});
module.exports = router;
