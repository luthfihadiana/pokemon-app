const MY_POKEMON = "my-pokemon";

const setMyPokemon = val => {
  localStorage.setItem(MY_POKEMON, val);
};

const getMyPokemon = () => {
  return localStorage.getItem(MY_POKEMON);
};

export const addPokemonList = ({ name, sprite, nickname }) => {
  const dataPokemonList = JSON.parse(getMyPokemon()) || [];
  setMyPokemon(
    JSON.stringify([...dataPokemonList, { name, sprite, nickname }])
  );
  return [...dataPokemonList, { name, sprite, nickname }];
};

export const deletePokemon = idx => {
  const dataPokemonList = JSON.parse(getMyPokemon());
  dataPokemonList.splice(idx, 1);
  setMyPokemon(JSON.stringify([...dataPokemonList]));
  return dataPokemonList || [];
};

export const getPokemonList = () => {
  const dataPokemonList = JSON.parse(getMyPokemon());
  return dataPokemonList || [];
};

export const generateMapPokemon = () => {
  const dataPokemonList = JSON.parse(getMyPokemon()) || [];
  const map = {};
  dataPokemonList.forEach(element => {
    if (map[element.name]) map[element.name] += 1;
    else map[element.name] = 1;
  });
  return map;
};
