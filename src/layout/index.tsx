import { Fragment, ReactNode } from "react";
import { Grid } from "@mui/material";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useTheme } from "@emotion/react";

const Layout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <Fragment>
      <Grid container minHeight="100svh" sx={{ backgroundColor: theme.palette.background.body }}>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11}>
          <Navbar />
          {children}
        </Grid>
      </Grid>
    </Fragment>
  );
}


export default Layout;