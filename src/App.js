import BarChart from "./component/BarChart";

function App() {
  const data= [
    { name: 'Mon', value: 20 },
    { name: 'Tue', value: 40 },
    { name: 'Wed', value: 35 },
    { name: 'Thu', value: 50 },
    { name: 'Fri', value: 55 },
    { name: 'Sat', value: 40 },
    { name: 'Sun', value: 30 }
  ]
  return (
    <div className="App">
      <BarChart data={data}/>
    </div>
  );
}

export default App;
