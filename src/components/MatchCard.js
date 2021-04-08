import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styled from 'styled-components';

const useStyles = makeStyles(()=>({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}))

const Image = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
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

function MatchCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={3} sm={6}>
      <Card>
      <CardContent className={classes.root}>
        <Image src={props.photo}/>
        <Name>{props.name}</Name>
        <Idade>{props.age}</Idade>
      </CardContent>
      </Card>
    </Grid>
  );
}

export default MatchCard;
