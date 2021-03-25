/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useRef, useEffect } from "react";
import { jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";
import { POKEMON_DETAIL } from "../../api/query";
import { HeaderContainer, GridContainer } from "../../styles/layout/container";
import { Badge } from "../../styles/components/Badge";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import LoadingIndicator from "../../components/LoadingIndicator";
import Backdrop from "../../styles/components/Backdrop";
import Button from "../../styles/components/Button";
import Input from "../../styles/components/Input";
import Pokeball from "../../assets/image/Pokeball.png";
import Styles from "./styles";
import Sprite from "../../components/Sprite";
import Type from "../../components/Type";
import Ability from "../../components/Ability";
import Stats from "../../components/Stats";
import Modal from "../../components/ModalGeneral";
import Moves from "../../components/Moves";
import PhysicalInfo from "../../components/PhysicalInfo";
import Header from "../../components/Header";
import { getPokemonList, addPokemonList } from "../../utils/query";

export default function PokemonDetail() {
  const { name } = useParams();
  const history = useHistory();
  const refCatchResult = useRef(null);
  const [animatePokeball, setAnimatePokeball] = useState(false);
  const [caught, setCaught] = useState(null);
  const [owned] = useState(false);
  const [nickname, setNickName] = useState("");
  const [validNickName, setValidNickName] = useState(true);
  const [myPokemon] = useState(getPokemonList());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
    variables: { name }
  });
  const handlingCatch = () => {
    document.body.style.overflow = "hidden";
    setAnimatePokeball(true);
    setTimeout(() => {
      setAnimatePokeball(false);
      refCatchResult.current.showModal();
      const num = Math.floor(Math.random() * 10 + 1);
      if (num % 2 === 0) setCaught(true);
    }, 2000);
  };
  const handlingSubmitNickName = () => {
    const isValidNickName =
      myPokemon.findIndex(
        el => el.name === name && el.nickname === nickname
      ) === -1;
    if (isValidNickName) {
      addPokemonList({
        name,
        sprite: data.pokemon.sprites.front_default,
        nickname
      });
      refCatchResult.current.hideModal();
      history.push(`/my-pokemon`);
    } else {
      setValidNickName(false);
    }
  };
  const handlingTryAgain = () => {
    refCatchResult.current.hideModal();
    handlingCatch();
  };
  const handlingBack = () => {
    refCatchResult.current.hideModal();
  };
  const handlingChangeNickName = name => {
    if (!validNickName) {
      setValidNickName(true);
    }
    setNickName(name);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);
  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error {error.message}</p>;
  return (
    <div css={Styles.background}>
      <HeaderContainer>
        <Header backgroundOnScroll={"var(--grey)"}>
          <div css={Styles.header}>
            <div css={Styles.headerIcon} onClick={() => history.push("/")}>
              <span className="material-icons">keyboard_backspace</span>
            </div>
            <h1 css={Styles.pageTitle}>{name}</h1>
            <Badge color={"var(--green)"} css={(!owned && Styles.hide) || ""}>
              Owned
            </Badge>
          </div>
        </Header>
        <Sprite sprite={data.pokemon.sprites.front_default} alt="sprites" />
        <GridContainer numGrid={2} css={Styles.info}>
          <Type data={data.pokemon.types} />
          <PhysicalInfo
            height={data.pokemon.height}
            weight={data.pokemon.weight}
          />
        </GridContainer>
      </HeaderContainer>
      <div css={Styles.container}>
        <div css={Styles.section}>
          <h2 css={Styles.sectionTitle}>Ability</h2>
          <Ability data={data.pokemon.abilities} />
        </div>
        <div css={Styles.section}>
          <h2 css={Styles.sectionTitle}>Stats</h2>
          <Stats data={data.pokemon.stats} windowWidth={windowWidth} />
        </div>
        <div css={Styles.section}>
          <h2 css={Styles.sectionTitle}>Moves</h2>
          <Moves data={data.pokemon.moves} windowWidth={windowWidth} />
        </div>
      </div>
      <div css={Styles.floatButton}>
        <img onClick={handlingCatch} src={Pokeball} alt="img-float-button" />
      </div>
      {animatePokeball && (
        <Backdrop>
          <div css={Styles.pokeballContainer}>
            <img
              css={[Styles.pokeball, Styles.animate]}
              src={Pokeball}
              alt="img-pokeball"
            />
          </div>
        </Backdrop>
      )}
      <Modal ref={refCatchResult}>
        <h2>{(caught && "Congratss !!") || "Not Today !!"}</h2>
        {(caught && (
          <p css={Styles.pokemonName}>
            You caught <b>{name}</b>
          </p>
        )) || (
          <p css={Styles.pokemonName}>
            {" "}
            <b>{name}</b> run away
          </p>
        )}
        <Sprite sprite={data.pokemon.sprites.front_default} alt="sprites" />
        {(caught && (
          <React.Fragment>
            <p css={Styles.inputLabel}>Nickname</p>
            <Input
              type="text"
              inputType={(!validNickName && "danger") || "primary"}
              default={validNickName}
              css={Styles.input}
              onChange={e => handlingChangeNickName(e.target.value)}
            />
            {!validNickName && (
              <p css={Styles.errorMessage}>
                {name} with name {nickname} already exist
              </p>
            )}
            <Button css={Styles.button} onClick={handlingSubmitNickName}>
              Submit
            </Button>
          </React.Fragment>
        )) || (
          <GridContainer numGrid={1} css={Styles.buttonContainer}>
            <Button css={Styles.button} onClick={handlingTryAgain}>
              {"Try Again"}
            </Button>
            <Button buttonAlt css={Styles.button} onClick={handlingBack}>
              {"Back"}
            </Button>
          </GridContainer>
        )}
      </Modal>
    </div>
  );
}
