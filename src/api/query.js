import { gql } from "@apollo/client";

export const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      results {
        image
        name
      }
    }
  }
`;

export const POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      height
      weight
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
export const POKEMON_DETAIL_OVERVIEW = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
