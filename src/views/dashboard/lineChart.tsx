import { Avatar, IconButton, Stack, Typography } from "@mui/material"
import Line from "../../components/charts/line"
import Iconify from "../../components/Iconify"

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  return (
    <Stack padding={2}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" gap={2}>
          <Avatar sx={{ width: 56, height: 56 }}>A</Avatar>
          <Stack>
            <Typography variant="caption">TVL</Typography>
            <Typography variant="h6">$4.68B</Typography>
          </Stack>
        </Stack>
        <IconButton>
          <Iconify icon="tabler:dots" />
        </IconButton>
      </Stack>
      <Line />
    </Stack>
  )
}