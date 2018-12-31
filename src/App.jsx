import './App.css';
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

import { Catalog } from './features/Catalog';
import { Filters } from './features/Filters';
import data from './data.json';

export class App extends Component {
  render() {
    return (
      <Grid container direction="row" spacing={8}>
        <Grid item xs={12} sm={3}>
          <Filters cars={data.cars} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Catalog cars={data.cars} />
        </Grid>
      </Grid>
    );
  }
}
