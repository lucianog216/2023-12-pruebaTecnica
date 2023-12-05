function obtenerInformacion() {
   
    const nombrePokemon = document.getElementById('pokemonInput').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`;
    
    fetch(url)
        .then(response => response.json())

        .then(data => {
            
            const nombre = data.name;
            const altura = data.height;
            const peso = data.weight;

            const habilidades = data.abilities.map(ability => ability.ability.name);
            

           
            const resultadoDiv = document.getElementById('resultado');
            console.log(resultadoDiv)

            resultadoDiv.innerHTML = `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Altura:</strong> ${altura}Cm</p>
                <p><strong>Peso:</strong> ${peso}Kg</p>
             <p><strong>Habilidades:</strong> ${habilidades.join(', ')}</p>`;
             
        })
        .catch(error => {
            console.error('Error al obtener información:', error);
        });
}
