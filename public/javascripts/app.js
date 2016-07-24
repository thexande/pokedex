$(document).ready(function() {
    $('#trainerSelect').material_select();
    $('.mselect').material_select();
    $('#trainerSelectEdit').val($("#trainerId").val());
    $('#trainerSelectEdit').material_select();

    $('#gymPoke1Select').val($('#pokemon_1_id').val());
    $('#gymPoke1Select').material_select()

    $('#gymPoke2Select').val($('#pokemon_2_id').val());
    $('#gymPoke2Select').material_select();
    
    // handle gym 1 pokemon change
    $('#gymPoke1Select').change((event) => {
        var newPoke1Id = $('#gymPoke1Select').val()
        var oldPoke1Id = $('[name = "pokemon_1_id"]').val()
        $.ajax({
            method: "POST",
            url: '/gym/updateGymPokemon',
            data: {
                newPokeId: newPoke1Id,
                oldPokeId: oldPoke1Id,
                gymPosition: 1
            }
        }).then((resp) => {
            // set h3 and select box for new pokemon
            $('#gymPoke1Select').val(resp[0].id);
            $('#gymPoke1Select').material_select()
            $('#poke1Title').html(resp[0].name)
            $('#poke1Cp').html(resp[0].cp)
            $('#pokemon_1_cp').val(resp[0].cp)
            $('#pokemon_1_id').val(resp[0].id)
            $('#pokemon_1_name').val(resp[0].name)
            console.log(resp)
        })
    })
    // handle gym 2 pokemon change
    $('#gymPoke2Select').change((event) => {
        var newPoke2Id = $('#gymPoke2Select').val()
        var oldPoke2Id = $('[name = "pokemon_2_id"]').val()
        $.ajax({
            method: "POST",
            url: '/gym/updateGymPokemon',
            data: {
                newPokeId: newPoke2Id,
                oldPokeId: oldPoke2Id,
                gymPosition: 2
            }
        }).then((resp) => {
            // set h3 and select box for new pokemon
            $('#gymPoke2Select').val(resp[0].id);
            $('#gymPoke2Select').material_select()
            $('#poke2Title').html(resp[0].name)
            $('#poke2Cp').html(resp[0].cp)
             $('#pokemon_2_cp').val(resp[0].cp)
            $('#pokemon_2_id').val(resp[0].id)
            $('#pokemon_2_name').val(resp[0].name)
            console.log(resp)
        })
    })



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