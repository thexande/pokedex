$(document).ready(function() {
    $('#trainerSelect').material_select();
    $('#trainerSelectEdit').val($("#trainerId").val());
    $('#trainerSelectEdit').material_select();
    $(".button-collapse").sideNav();
    $("#trainerSelect").val()
    $('#pokedex').DataTable( {
        pageLength: 4,
        columnDefs: [
            {
                targets: [ 0, 1, 2 ],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ]
    } );
} );