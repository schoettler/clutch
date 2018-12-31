import { Grid } from '@material-ui/core';
import React from 'react';

import { CarCard } from '../components/CarCard';

export const Catalog = ({ cars }) => {
  return (
    <Grid container>
      {cars.map(car => (
        <Grid key={car.id} item>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
}
