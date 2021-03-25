import React from "react";

const routes = [
  {
    path: "/my-pokemon",
    component: React.lazy(() => import("../pages/MyPokemon"))
  },
  {
    path: "/",
    component: React.lazy(() => import("../pages/Pokedex"))
  },
  {
    path: "/pokemon/:name",
    component: React.lazy(() => import("../pages/PokemonDetail"))
  }
];

export default routes;
