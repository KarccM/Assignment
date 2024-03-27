import { Card, Grid, Paper, Stack, useTheme, Avatar, Typography } from '@mui/material';
import BarChart from '../views/dashboard/barchart';
import LineChart from '../views/dashboard/lineChart';
import Table from '../views/dashboard/table';
import StockCards from '../views/dashboard/stockCards';
import Line from '../components/charts/line';
import Iconify from '../components/Iconify';

interface Graph {
  icon: string,
  title: string,
  price: string,
  color: string | null,
  grow: number,
}

const Dashboard = () => {
  const theme = useTheme()

  const graphs: Graph[] = [
    { icon: 'streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow', title: 'TVL', price: '$4.8B', color: theme.palette.success.main, grow: 1.56 },
    { icon: 'streamline:money-graph-arrow-decrease-down-stats-graph-descend-right-arrow', title: 'DHL', price: '$1.2B', color: theme.palette.error.main, grow: 1.56 },
    { icon: 'streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow', title: 'OSN', price: '$40M', color: 'grey', grow: 0.0 },
  ];

  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper sx={{ margin: 2 }}>
          <LineChart />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ margin: 2 }}>
          <BarChart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <StockCards />
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ margin: 2 }}>
          <Table />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Stack flexDirection="row" gap={1} margin={2}>
          {graphs.map(graph => (
            <Card key={graph.title} sx={{ padding: 2 }}>
              <Stack>
                <Typography variant="caption">{graph.title}</Typography>
                <Typography variant="h6">{graph.price}</Typography>
              </Stack>
              <Stack sx={{ color: graph.color, flexDirection: "row", alignItems: "center", paddingTop: 1 }} flexDirection="row" alignItems="center">
                <Iconify sx={{ width: 14, height: 14 }} icon={graph.icon} />
                <Typography sx={{ marginX: 1, fontSize: 14 }} variant="h6">{graph.grow}%</Typography>
              </Stack>
              <Line lineColor={graph.color} />
            </Card>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Dashboard