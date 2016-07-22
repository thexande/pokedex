$(document).ready(function() {
    $('select').material_select();
    $(".button-collapse").sideNav();
    $("#trainerSelect").val()
    $('#pokedex').DataTable( {
        pageLength: 6,
        columnDefs: [
            {
                targets: [ 0, 1, 2 ],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ]
    } );
} );