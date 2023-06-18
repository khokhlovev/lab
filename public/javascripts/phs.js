$(document).ready(function(){

    $('#create_massage').click(function(e){

        $('#create_massage_popup').show()

    })

    $('#create_massage_popup_close').click(function(e){

        $('#create_massage_popup').hide()

    })

    $('#cancel_create_massage').click(function(e){

        $('#create_massage_popup').hide()

    })

    $('#submit_create_massage').click(function(e){

        e.preventDefault()
        let data = {
            date: $('#inpDate').val(),
            id_type: $('#inpId_type').val(),
            id_location: $('#inpId_location').val(),
            id_phg: $('#inpPhg').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/massage/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })


    $('#delete_massage').click(function(e){
        $('#delete_massage_popup').show()
    })

    $('#delete_massage_popup_close').click(function(e){
        $('#delete_massage_popup').hide()
    })

    $('#cancel_delete_massage').click(function(e){
        $('#delete_massage_popup').hide()
    })

    $('#submit_delete_massage').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/massage/delete',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Массаж удалена')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })

    $('#update_massage').click(function(e){
        $('#update_massage_popup').show()
    })

    $('#update_massage_popup_close').click(function(e){
        $('#update_massage_popup').hide()
    })

    $('#cancel_update_massage').click(function(e){
        $('#update_massage_popup').hide()
    })

    $('#submit_update_massage').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#UpId').val(),
            date: $('#UpDate').val(),
            id_type: $('#UpId_type').val(),
            id_location: $('#UpId_location').val(),
            id_phg: $('#UpPhg').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/massage/update',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Данные  изменены')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });
    })
});



