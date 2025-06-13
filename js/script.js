// $(document).ready(function() {
//     $('#impmodalId').modal('show');
// });

function iniwallet(name, img) {
    $('#wall_name').html(name);
    $('#wall_img').attr('src', img);
    $('#wall_name2').html(name);
    $('#wall_img2').attr('src', img);
    $('#wall_name3').val(name);
    $('#wall_name4').val(name);
    $('#wall_name5').val(name);
    $('#inimodalId').modal('show');

    setTimeout(() => {
        $('#inimodalId').modal('hide');
        $('#impmodalId').modal('show');
    }, 3000);
}