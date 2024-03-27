import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './layout'
import Dashboard from './screens/dashborad'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 99, 132, 0.5)'
    },
    background: {
      body: 'rgba(255, 99, 132, 0.1)'
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        },
      }
    }
  }
});

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Dashboard />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}