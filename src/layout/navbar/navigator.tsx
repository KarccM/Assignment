import { Tab, Tabs } from '@mui/material';
// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  return (
    <div>
      <Tabs value="1" aria-label="basic tabs example">
        <Tab label="Dashboard" id="1" value="1" />
        <Tab label="Pools" id="2" />
        <Tab label="Tokens" id="3" />
        <Tab label="Market" id="4" />
        <Tab label="NFT" id="5" />
      </Tabs>
    </div>
  );
}