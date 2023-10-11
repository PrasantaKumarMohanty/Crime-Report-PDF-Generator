import './App.css';
import Graph from './components/Graph';
import PrintButton from './components/PrintButton';
import 'chart.js/auto';

function App() {
  const crimeData = [
    {
      data_year: 2015,
      Aggravated_Assault: 1734,
      // ... (other properties)
    },
    {
      data_year: 2016,
      Aggravated_Assault: 1845,
      // ... (other properties)
    },
    // ... (repeat for other years)
  ];

  return (
    <div>
      <PrintButton />
      <Graph data={crimeData} />
    </div>
  );
}

export default App;
