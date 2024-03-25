import { Fragment, ReactNode } from "react";
import { Grid } from "@mui/material";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Grid container minHeight="100svh" sx={{ backgroundColor: '#92a8f769' }}>
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