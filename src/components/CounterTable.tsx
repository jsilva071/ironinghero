import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function CounterTable() {
  const classes = useStyles();

  const [homeViews, setHomeViews] = useState(0);
  const [listagemViews, setListagemViews] = useState(0);
  const [mapaViews, setMapaViews] = useState(0);

  useEffect(() => {
    setHomeViews(Number(localStorage.getItem('home-views')));
    setListagemViews(Number(localStorage.getItem('listagem-views')));
    setMapaViews(Number(localStorage.getItem('mapa-views')));
  }, [homeViews, listagemViews, mapaViews]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Página</TableCell>
            <TableCell align="right">Views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Home</TableCell>
            <TableCell align="right">{homeViews}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Listagem</TableCell>
            <TableCell align="right">{listagemViews}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Mapa</TableCell>
            <TableCell align="right">{mapaViews}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CounterTable;