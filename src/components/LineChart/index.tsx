import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
  } from 'chart.js';

import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { JournalHistoryContext } from '../../contexts/HistoryContext';
import { LineChartContainer } from './styles';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  

export function LineChart() {
    const  { journalEntries } = useContext(JournalHistoryContext)

    const mapMoodToValue = (mood: string) => {
        if (mood === 'Happy') return 2;
        if (mood === 'Normal') return 1;
        if (mood === 'Sad') return 0;
      };

      const orderedEntries = journalEntries.sort(function(a, b) {
        return a.id - b.id
      })
      

      const entryMoods = orderedEntries.map((entry) => entry.mood)
      

      const dateFormatter = new Intl.DateTimeFormat('pt-BR');
      const entryDates = orderedEntries.map((entry) => dateFormatter.format(new Date(entry.createdAt)))
      

    
    const data = {
    labels: entryDates, 
    datasets: [
      {
        label: 'Humor',
        data: entryMoods.map((mood) => mapMoodToValue(mood)), // Map mood categories to numerical values
        borderColor: '#46A39A',
        backgroundColor: 'transparent',
        font: {
            family: 'Outfit'
          }, 
      },
    ],
  };


  const yAxesTicks = ['Triste', 'Normal', 'Feliz'];

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Data',
          font: {
            weight: 'bold',
            family: 'Outfit',
            size: 20
          }, 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Humor',
          font: {
            weight: 'bold', 
            family: 'Outfit',
            size: 20
          },
        },
        ticks: {
          callback: (value: number) => yAxesTicks[value], 
          font: {
            family: 'Outfit',
            size: 15
          },
        },
        max: 3.2, 
        min: -1,
      },
    },
  };
  
    return(
        <LineChartContainer >
            <Line options={options} data={data} />
        </LineChartContainer>
    )
}