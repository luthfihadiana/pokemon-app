import { gql } from '@apollo/client';

export const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      previous
      nextOffset
      prevOffset
      results {
        url
        image
      }
    }
  }
`;
