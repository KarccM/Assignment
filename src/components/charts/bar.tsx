import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTheme } from '@emotion/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const theme = useTheme();
  const data = {
    labels,
    datasets: [{
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 200, max: 350 })),
      backgroundColor: theme.palette.primary.main,
    }],
  };

  return (
    <Bar height={90} options={{
      scales: { y: { max: 600 } }, plugins: {
        legend: {
          display: false,
        },
      }
    }} data={data} />
  )
}
