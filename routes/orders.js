var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let orders = await req.db.any(`
        SELECT
            orders.id AS id,
            order_statuses.label AS id_status,
            clients.label AS id_client,
            massage.id AS id_massage,
            orders.amount AS amount
        FROM
            orders
        INNER JOIN
            clients ON clients.id = orders.id_client
        INNER JOIN
            order_statuses ON order_statuses.id = orders.id_status
        INNER JOIN
            massage ON massage.id = orders.id_massage
    `)
    console.log(orders)
     let clients = await req.db.any(`
        SELECT
            *
        FROM
            clients
    `)
    console.log(clients)
    let order_statuses = await req.db.any(`
    SELECT
        *
    FROM
    order_statuses
`)
console.log(order_statuses)
let massage = await req.db.any(`
SELECT
    *
FROM
    massage
`)
console.log(massage)
    res.render('orders/list', { title: 'Заказы', orders: orders, clients: clients, order_statuses:order_statuses, massage:massage })

});

router.post('/create', async function(req, res, next) {

    let order = req.body

    await req.db.none('INSERT INTO orders(id_status, id_client,id_massage , amount) VALUES( ${id_status}, ${id_client}, ${id_massage}, ${amount})', order);

    res.send({msg: ''})

});

router.delete('/delete', async function(req, res, next) {

    let order = req.body
    await req.db.none('DELETE FROM orders WHERE id = ${id}', order);
    res.send({msg: ''})
});

router.put('/update', async function(req, res, next) {

    let order = req.body

    await req.db.none('UPDATE orders SET id_status = ${id_status}, id_client= ${id_client} ,id_massage = ${id_massage} , amount = ${amount} WHERE id = ${id}', order);

    res.send({msg: ''})

});

module.exports = router;
