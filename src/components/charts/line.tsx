import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTheme } from '@emotion/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// eslint-disable-next-line react-refresh/only-export-components
export default ({ lineColor }: { lineColor?: string | null }) => {
  const theme = useTheme();
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => faker.number.int({ min: 200, max: 350 })),
        borderColor: lineColor ?? theme.palette.primary.main,
        backgroundColor: lineColor ?? theme.palette.primary.main,
      },
    ],
  };
  return (
    <Line height={90} data={data} options={{
      scales: { y: { beginAtZero: true } }, plugins: {
        legend: {
          display: false,
        },
      }
    }} />
  );
}
