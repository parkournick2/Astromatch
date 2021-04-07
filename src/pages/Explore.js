import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  dislikeIcon : {
    color: theme.palette.primary.main,
    margin: '10px',
  },
  likeIcon : {
    color: 'red',
    margin: '10px',
  }
}))

const MainContainer = styled.div`
  display: flex;
  height: 94vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 25%;
  min-width: 250px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Name = styled.h3`
  font-size: 22px;
  margin-bottom: 0px;
`;
const Idade = styled.h3`
  font-size: 18px;
  margin: 0px;
  color: gray;
`;
const Describe = styled.p`
  width: 35vw;
  min-width: 250px;
  text-align:center;
`;

function Explore() {
  const classes = useStyles();
  return (
    <MainContainer>
      <Image src={"https://picsum.photos/600"} />
      <Name>Anitta</Name>
      <Idade>23</Idade>
      <Describe>
        Amo cachorros e sair pra dançar. Procuro alguém animado e sem neuras.
      </Describe>
      <div>
        <IconButton className={classes.dislikeIcon} onClick={() => {}} children={<CloseIcon fontSize='large' />} />
        <IconButton className={classes.likeIcon} onClick={() => {}} children={<FavoriteIcon fontSize='large' />} />
      </div>
    </MainContainer>
  );
}

export default Explore;
