import { Button, Stack, Typography } from "@mui/material"
import Bar from "../../components/charts/bar"


// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  return (
    <Stack padding={2}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" gap={2}>
          <Stack>
            <Typography variant="caption">Volume 1Y</Typography>
            <Typography variant="h6">$4.68B</Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row" gap={1}>
          <Button variant="contained" size="small" >1Y</Button>
          <Button variant="contained" size="small" >1M</Button>
        </Stack>
      </Stack>
      <Bar />
    </Stack>
  )
}