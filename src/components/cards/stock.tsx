import { Avatar, Card, Stack, Typography } from "@mui/material"
import { useTheme } from '@emotion/react';
import Iconify from "../Iconify";

export interface Props {
  title: string,
  price: string,
  imgUrl: string,
}

// eslint-disable-next-line react-refresh/only-export-components
export default ({ title, price, imgUrl }: Props) => {
  const theme = useTheme();
  return (
    <Card sx={{ paddingY: 1, paddingX: 2, backgroundColor: theme.palette.background.body }}>
      <Stack flexDirection="row" gap={2}>
        <Avatar src={imgUrl} sx={{ width: 56, height: 56 }}>K</Avatar>
        <Stack>
          <Typography variant="caption">{title.toUpperCase()}</Typography>
          <Typography variant="h6">{price}</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ color: 'green', flexDirection: "row", alignItems: "center", paddingTop: 1 }} flexDirection="row" alignItems="center">
        <Iconify sx={{ width: 14, height: 14 }} icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" />
        <Typography sx={{ marginX: 1, fontSize: 14 }} variant="h6">1.56%</Typography>
      </Stack>
    </Card>
  );
}