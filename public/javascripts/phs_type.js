$(document).ready(function(){

    $('#create_massage_type').click(function(e){

        $('#create_massage_type_popup').show()

    })

    $('#create_massage_type_popup_close').click(function(e){

        $('#create_massage_type_popup').hide()

    })

    $('#cancel_create_massage_type').click(function(e){

        $('#create_massage_type_popup').hide()

    })

    $('#submit_create_massage_type').click(function(e){

        e.preventDefault()
        let data = {
            label: $('#inLabel').val(),
            price: $('#inPrice').val()
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/massage_type/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Добавлено!')
                window.massage_type.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $('#delete_type').click(function(e){
        $('#delete_type_popup').show()
    })

    $('#delete_type_popup_close').click(function(e){
        $('#delete_type_popup').hide()
    })

    $('#cancel_delete_type').click(function(e){
        $('#delete_type_popup').hide()
    })

    $('#submit_delete_type').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#inpId').val()
        }

        $.ajax({
            type: 'DELETE',
            data: data,
            url: '/massage_type/delete',
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

    $('#update_type').click(function(e){
        $('#update_type_popup').show()
    })

    $('#update_type_popup_close').click(function(e){
        $('#update_type_popup').hide()
    })

    $('#cancel_update_type').click(function(e){
        $('#update_type_popup').hide()
    })

    $('#submit_update_type').click(function(e){
        e.preventDefault()
        let data = {
            id: $('#UpId').val(),
            label: $('#UpLabel').val(),
            price: $('#UpPrice').val()
        }

        $.ajax({
            type: 'PUT',
            data: data,
            url: '/massage_type/update',
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


