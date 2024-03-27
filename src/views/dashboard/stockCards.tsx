import { Paper, Stack } from "@mui/material"
import StockCard, { Props as StockCardType } from "../../components/cards/stock";

const data: StockCardType[] = [
  { title: 'fox', price: '0.25$', imgUrl: "" },
  { title: 'ghost', price: '2.025$', imgUrl: "" },
  { title: 'sushi', price: '0.07$', imgUrl: "" },
];

// eslint-disable-next-line react-refresh/only-export-components
export default () => (
  <Paper sx={{ margin: 2, padding: 2 }}>
    <Stack flexDirection="row" gap={4}>
      {data.map(stock => <StockCard {...stock} />)}
    </Stack>
  </Paper>
);