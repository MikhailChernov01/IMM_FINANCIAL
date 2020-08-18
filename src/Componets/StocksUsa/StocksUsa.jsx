import React, {useEffect} from 'react';
import { addStockTable } from "../redux/action";
import { useDispatch, useSelector  } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { green, red } from '@material-ui/core/colors';



//material-ui styles
const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  percent: {
    minWidth: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
});



function StocksUsa() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.fetch.stock);
  useEffect(() => {
    dispatch(addStockTable());
  }, [dispatch]);
console.log(stocks);


const classes = useStyles();

  return (
    <>
    <TableContainer component={Paper}>
      <h2 style={{ margin: 15 }}>Акции США</h2>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Акция</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right" className={classes.percent} container
  direction="row"
  justify="center"
  alignItems="center">Изменение</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>

          {stocks.map((elem, i)=> (
            <TableRow key={i}>

              <TableCell component="th" scope="row">
                {elem["Global Quote"]["01. symbol"]}
              </TableCell>

              <TableCell align="right">{elem["Global Quote"]["05. price"]}</TableCell>

              <TableCell align="right" className={classes.percent}>
                
                 {

                 (parseFloat(elem["Global Quote"]["09. change"]) > 0)? <p style={{ color: green[500] }}> {parseFloat(elem["Global Quote"]["09. change"]).toFixed(2)}%</p> : <p style={{ color: red[500] }}> {parseFloat(elem["Global Quote"]["09. change"]).toFixed(2)}%</p>
                 
                 }&nbsp;{ (parseFloat(elem["Global Quote"]["09. change"]) > 0)? 
                <ArrowUpward style={{ color: green[500] }} /> 
                : <ArrowDownwardIcon style={{ color: red[500]}} />}


              </TableCell>
              
              
              
              
              {/* <TableCell align="right">
               
                </TableCell> */}
            </TableRow>

          ))}


        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default StocksUsa;

