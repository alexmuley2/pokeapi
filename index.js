function searchPokemon() {
    const pokemonName = $('#pokemonInput').val().toLowerCase();
    const $pokemonCard = $('#pokemon-card');
    
    if (pokemonName !== '') {
        $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function (data) {
            const stats = data.stats;
            const pokemonInfo = `
                <div class="text-center" style="margin-top: 20px;">

                    <h2>${data.name.toUpperCase()}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}" class="mx-auto max-h-56">
                    <p><b>Altura: ${data.height * 4} cm</b></p>
                    <p><b>Peso: ${data.weight / 16} kg</b></p>
                    <p><b>Ataque: ${stats[1].base_stat}</b></p>
                    <p><b>Defensa: ${stats[2].base_stat}</b></p>
                    <p><b>Velocidad: ${stats[5].base_stat}</b></p>
                    <!-- Otros atributos -->
                </div>

            `;
            $pokemonCard.html(pokemonInfo).show();
            document.body.style.backgroundImage = `url('${data.sprites.other['official-artwork'].front_default}')`;
            // Cambiar la imagen de fondo después de la búsqueda
         
        }).fail(function () {
            $pokemonCard.html('<p>No se encontró información para el Pokémon ingresado.</p>').show();
        });
    } else {
        $pokemonCard.hide();
    }
}
