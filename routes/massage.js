var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let massage = await req.db.any(`
        SELECT
            massage.id as id,
            massage.date as date,
            massage_type.label as id_type,
            more_service.label as id_service,
            therapist.label as id_therapist

        FROM
            massage
        INNER JOIN
            massage_type ON massage_type.id = massage.id_type
        INNER JOIN
        more_service on more_service.id = massage.id_service
        INNER JOIN
            therapist on therapist.id = massage.id_therapist
    `)
    console.log(massage)
    let therapist = await req.db.any(`
        SELECT
            *
        FROM
            therapist
        `)
        console.log(therapist)
    
    let more_service = await req.db.any(`
        SELECT
            *
        FROM
        more_service
        `)
        console.log(more_service)
        let massage_type = await req.db.any(`
        SELECT
            *
        FROM
        massage_type
        `)
        console.log(massage_type)
    res.render('massage/list', { title: 'Массаж', massage: massage, therapist: therapist, more_service:more_service, massage_type:massage_type})

});

router.post('/create', async function(req, res, next) {

    let massage = req.body

    await req.db.none('INSERT INTO massage(date, id_type, id_service, id_therapist) VALUES( ${date}, ${id_type}, ${id_service}, ${id_therapist})', massage);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let massage = req.body
    await req.db.none('DELETE FROM massage WHERE id = ${id}', massage);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let massage = req.body

    await req.db.none('UPDATE massage SET date = ${date}, id_type = ${id_type}, id_service= ${id_service} , id_therapist = ${id_therapist} WHERE id = ${id}', massage);

    res.send({msg: ''})

});
module.exports = router;
