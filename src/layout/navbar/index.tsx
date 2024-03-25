import { Stack } from "@mui/material"
import Navigator from "./navigator"
import Account from "./account"

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  return (
    <Stack flexDirection='row' justifyContent='space-between' sx={{ marginX: 1 }}>
      <Navigator />
      <Account />
    </Stack>
  );
}