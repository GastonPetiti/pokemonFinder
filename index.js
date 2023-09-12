const form = document.getElementById("form");
const cardContainer = document.querySelector("#card-container");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const pokemonNumber = input.value;

    if(input.value === ""){
        cardContainer.textContent= "Porfavor ingresa un número"
    }
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          "No se pudo obtener la información del Pokémon buscado."
        );
      }

      const pokemonData = await response.json();

      const cardPokemon = `
        <div id="pokemon-card-container">
        <div id="img-container">
                <img src="${pokemonData.sprites.front_default}" alt="imagen de ${pokemonData.name}">
            </div>
            <div id="data-container">
                <h2>${pokemonData.name}</h2>
                <p>Tipo:${pokemonData.types[0].type.name}</p>
                <p>Altura: ${pokemonData.height / 10} metros</p>
                <p>Peso:${pokemonData.weight} kilos</p>
            </div>
            </div>
    `;
      cardContainer.innerHTML = cardPokemon;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  });
});
