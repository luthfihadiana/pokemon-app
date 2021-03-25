/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { jsx } from "@emotion/react";
import { HeaderContainer, GridContainer } from "../../styles/layout/container";
import Card from "../../styles/components/Card";
import Button from "../../styles/components/Button";
import Styles from "./styles";
import { POKEMON_LIST } from "../../api/query";
import LoadingIndicator from "../../components/LoadingIndicator";
import Header from "../../components/Header";
import { useQuery } from "@apollo/client";
import { generateMapPokemon } from "../../utils/query";
import { Badge } from "../../styles/components/Badge";

// import Pokeball from "../../assets/image/Pokeball.png";

const PokemonList = props => {
  const [limit, setLimit] = useState(10);
  const [pokemonMap] = useState(generateMapPokemon());
  const history = useHistory();
  const { loading, error, data, fetchMore } = useQuery(POKEMON_LIST, {
    variables: { limit }
  });
  const changeRoute = name => {
    history.push(`/pokemon/${name}`);
  };
  const loadMoreData = () => {
    const currentLength = data.pokemons.results.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 10
      }
    }).then(fetchMoreResult => {
      // Update variables.limit for the original query to include
      // the newly added feed items.
      setLimit(currentLength + fetchMoreResult.data.pokemons.results.length);
    });
  };

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error {error.message}</p>;
  return (
    <React.Fragment>
      <GridContainer numGrid={props.windowWidth <= 768 ? 1 : 2}>
        {data.pokemons.results.map((el, idx) => (
          <Card
            key={`pokemon-list-${idx}`}
            onClick={() => changeRoute(el.name)}
          >
            <div css={Styles.element}>
              <div css={Styles.elementHeader}>
                <h2 css={Styles.elementName}>{el.name}</h2>
                {pokemonMap[el.name] && (
                  <Badge color={"var(--green)"}>
                    Owned {pokemonMap[el.name]}
                  </Badge>
                )}
              </div>
              <picture css={Styles.elementImageContainer}>
                <img css={Styles.elementImage} src={el.image} alt="img" />
              </picture>
            </div>
          </Card>
        ))}
      </GridContainer>
      <Button css={Styles.button} onClick={loadMoreData}>
        Load More
      </Button>
    </React.Fragment>
  );
};

export default function Pokedex() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  return (
    <div css={Styles.background}>
      <HeaderContainer>
        <Header backgroundOnScroll={"var(--danger)"}>
          <div css={Styles.header}>
            <h1 css={Styles.pageTitle}>Pokedex</h1>
            <Link css={Styles.link} to="/my-pokemon">
              My Pokemon
            </Link>
          </div>
        </Header>
      </HeaderContainer>
      <div css={Styles.container}>
        <PokemonList windowWidth={windowWidth} />
      </div>
    </div>
  );
}
