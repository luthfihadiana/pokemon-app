/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useRef, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, GridContainer } from "../../styles/layout/container";
import Header from "../../components/Header";
import Modal from "../../components/ModalGeneral";
import Sprite from "../../components/Sprite";
import Type from "../../components/Type";
import Stats from "../../components/Stats";

import Card from "../../styles/components/Card";
import Button from "../../styles/components/Button";
import Styles from "./styles";
import { getPokemonList, deletePokemon } from "../../utils/query";
import { POKEMON_DETAIL } from "../../api/query";
import LoadingIndicator from "../../components/LoadingIndicator";
import { useQuery } from "@apollo/client";

const ContentDetailPokemon = props => {
  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
    variables: { name: props.data.name }
  });

  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error {error.message}</p>;
  return (
    <React.Fragment>
      <h2 css={Styles.elementName}>
        {props.data.nickname} ({props.data.name})
      </h2>
      <Sprite sprite={data.pokemon.sprites.front_default} alt="sprites" />
      <div css={Styles.section}>
        <Type data={data.pokemon.types} />
      </div>
      <div css={Styles.section}>
        <Stats data={data.pokemon.stats} />
      </div>
      <Button css={Styles.button} onClick={props.submit}>
        Detail
      </Button>
      <Button type="danger" css={Styles.button} onClick={props.release}>
        Release
      </Button>
    </React.Fragment>
  );
};

export default function MyPokemon() {
  const history = useHistory();
  const refModalDetail = useRef(null);
  const refModalRelease = useRef(null);
  const [myPokemon, setMyPokemon] = useState(getPokemonList());
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlingChooseMyPokemon = (name, idx, nickname) => {
    setCurrentPokemon({ name, idx, nickname });
    refModalDetail.current.showModal();
  };
  const handlingSeeDetail = () => {
    history.push(`/pokemon/${currentPokemon.name}`);
  };
  const handlingModalRelease = () => {
    refModalDetail.current.hideModal();
    refModalRelease.current.showModal();
  };
  const handlingCloseModal = () => {
    refModalRelease.current.hideModal();
  };
  const handlingRelease = () => {
    setMyPokemon(deletePokemon(currentPokemon.idx));
    refModalRelease.current.hideModal();
  };

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
        <Header backgroundOnScroll={"var(--primary)"}>
          <div css={Styles.header}>
            <div css={Styles.headerIcon} onClick={() => history.push("/")}>
              <span className="material-icons">keyboard_backspace</span>
            </div>
            <h1 css={Styles.pageTitle}>My Pokemon</h1>
          </div>
        </Header>
      </HeaderContainer>
      <div css={Styles.container}>
        {(myPokemon.length > 0 && (
          <GridContainer numGrid={windowWidth <= 768 ? 1 : 2}>
            {myPokemon.map((el, idx) => (
              <Card
                key={`pokemon-list-${idx}`}
                onClick={() =>
                  handlingChooseMyPokemon(el.name, idx, el.nickname)
                }
              >
                <div css={Styles.element}>
                  <h2 css={Styles.elementName}>{el.nickname}</h2>
                  <p css={Styles.elementSpecies}>{el.name}</p>
                  <picture css={Styles.elementImageContainer}>
                    <img css={Styles.elementImage} src={el.sprite} alt="img" />
                  </picture>
                </div>
              </Card>
            ))}
          </GridContainer>
        )) || (
          <div css={Styles.empty}>
            <h2 css={Styles.emptyText}>Oops, you haven't catch Pokemon</h2>
            <Button css={Styles.button}>Go to pokedex</Button>
          </div>
        )}
      </div>
      <Modal ref={refModalDetail} closeOnBackdrop>
        {currentPokemon && (
          <ContentDetailPokemon
            data={currentPokemon}
            submit={handlingSeeDetail}
            release={handlingModalRelease}
          />
        )}
      </Modal>
      <Modal ref={refModalRelease} closeOnBackdrop>
        <h2>Are you sure release {currentPokemon?.nickname} ?</h2>
        <GridContainer numGrid={2}>
          <Button type="danger" css={Styles.button} onClick={handlingRelease}>
            Yes
          </Button>
          <Button
            type="success"
            css={Styles.button}
            onClick={handlingCloseModal}
          >
            No
          </Button>
        </GridContainer>
      </Modal>
    </div>
  );
}
