import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import StocksUsa from "../StocksUsa/StocksUsa";
import { makeStyles } from "@material-ui/core/styles";
import LineChartAppl from "../ChartAppl/ChartAppl";
import { addStockTable } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Container from '@material-ui/core/Container';

function World() {
  const dispatch = useDispatch()
  const useStyles = makeStyles({
   
    tables: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      display: "flex",
      flexWrap: "wrap",
      padding: '0 5%',
      minHeight: '100%'
    },
    container:{
      minHeight: '100vh',
      
    },
  });

  const classes = useStyles();

  const stocks = useSelector((state) => state.fetch.indicators);
  


  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(addStockTable());
    }
  }, [dispatch]);

console.log(stocks)

  return (
    <>
    <Container className={classes.container} component="main" maxWidth="xl" >
      <Grid className={classes.tables} container spacing={2}>
        <Grid item xs={12} sm={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi voluptatibus iure at optio quam. Eum tempora sequi deleniti perferendis impedit harum libero deserunt natus facere corporis, necessitatibus magnam temporibus, explicabo, expedita iste molestias eveniet quam doloribus recusandae sapiente labore. Quod atque quidem quisquam illo quasi minus, voluptates tempore. Nam amet, velit a quas hic corporis commodi nostrum ducimus sed, eaque necessitatibus magnam. In praesentium ipsa iste, corporis, accusamus veniam, facere incidunt perferendis corrupti deserunt porro itaque natus velit reiciendis dolorum tempore similique voluptatem consequatur aut distinctio. Ratione eligendi repudiandae earum nihil inventore! Quibusdam ipsam libero exercitationem minima totam quis, nobis corporis aliquid ex, impedit quod in amet saepe a sequi dicta quidem sed iure ipsum et! Iste explicabo quidem atque eaque eos magni iure. Odit optio perferendis vero iste consequatur quod fugiat architecto. Esse, impedit. Tenetur culpa, rerum aliquam commodi nulla maiores voluptatibus sunt hic temporibus incidunt natus iure veniam soluta nam, facere aut. Maxime, nobis consectetur quidem eveniet sed dolorem esse accusamus quod unde sunt earum ullam, eius aspernatur, aut repellat ex ipsum ratione recusandae distinctio explicabo. Sit ducimus vitae debitis similique deserunt blanditiis optio corporis, sunt sed suscipit, dolores quibusdam natus? Ipsum mollitia illum, minus praesentium sapiente quidem laboriosam nam natus necessitatibus rem animi. Atque cumque quia fugit omnis maiores! Dignissimos necessitatibus quia sunt laboriosam. Qui magni odio molestiae, non vel, quia dolores totam deserunt hic iure aut eaque atque nobis.
        </Grid>
        <Grid className={classes.tables} item xs={12} sm={8} >
          <LineChartAppl />
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <StocksUsa />
        </Grid>
        <Grid item xs={12} sm={8}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ut expedita at quam aliquid corrupti adipisci accusantium officia officiis, mollitia neque nisi alias deleniti corporis facilis temporibus magni suscipit sapiente deserunt, inventore, quo recusandae cum. Sed nulla quae delectus magnam dolore consectetur maxime eaque iste dolores exercitationem maiores ut quasi perferendis laboriosam suscipit deserunt explicabo, quidem harum, sapiente a aperiam, praesentium quo voluptatibus repellat! Autem nobis minima fugiat commodi suscipit reiciendis dolor unde, voluptatum odit atque corrupti. A consequuntur optio debitis eligendi doloremque et nostrum. Soluta odio nihil minima minus optio vitae consectetur sit vel amet? Animi odit tempora necessitatibus commodi tenetur assumenda. Possimus beatae reiciendis quidem harum magni pariatur est non sit fuga optio, tenetur accusamus aliquam commodi laudantium voluptatum quaerat exercitationem? Aliquam eligendi blanditiis perferendis saepe asperiores cum voluptatum quas, aspernatur expedita nam in illum esse sed eaque distinctio minima. At facilis eius rerum velit cum obcaecati, ab, voluptate illum corporis odio vel mollitia expedita odit ipsum incidunt culpa nihil minima eaque rem repellat aliquid! Error soluta perspiciatis doloremque deleniti aperiam perferendis eveniet ullam officia ipsum accusantium, numquam aliquid? Expedita nesciunt placeat inventore odit explicabo officia molestiae veritatis, nemo cumque recusandae natus, atque, rerum consequatur quidem quam soluta? Dolores ipsa earum iure iste ipsam doloribus facere aliquam quos consequuntur sit, ab beatae iusto nisi blanditiis voluptates officiis, debitis, incidunt reiciendis vitae quis saepe? Eos saepe assumenda voluptatem ducimus laborum dignissimos, neque repudiandae explicabo tempora! Inventore asperiores minus delectus sed libero, at quo unde ad quam laborum? Dignissimos inventore, dolor ullam dolores autem a rem similique quidem, ad commodi atque, doloremque assumenda? Fugit quae quaerat veritatis ab corporis earum, tempora itaque optio aliquam ullam, dolores illo, quia inventore cupiditate quas exercitationem ipsum a pariatur molestias reprehenderit deserunt consequatur. Deserunt minima ad qui nam harum molestias, blanditiis laboriosam commodi. Officia?
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default World;
