import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const CarCard = ({ car }) => {
  return (
    <Card>
      <CardActionArea>
      <CardMedia
        component="img"
        height="128"
        image="https://placehold.it/128x128"
      />
      </CardActionArea>
      <CardContent>
        <Grid container spacing={16}>
          <Grid xs={6} item>
            {`${car.make} ${car.model}`}
          </Grid>
          <Grid xs={6} item>
            {car.price}
          </Grid>
          <Grid xs={6} item>
            {car.year} {car.mileage}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const StyledCard = styled(Card)`
`
