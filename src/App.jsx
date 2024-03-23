
import './App.css'
import BarChartDraw from './Components/BarChartDraw/BarChartDraw'
import LineChart from './Components/LineChart/LineChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PieChartDraw from './Components/PieChartDraw/PieChartDraw'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
      <NavBar></NavBar>

      {/* <DaisyNav></DaisyNav> */}
  
      {/* <h1 className='text-4xl bg-green-400'>Vite + React</h1> */}
      
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChartDraw></BarChartDraw>
      <PieChartDraw></PieChartDraw>
    </>
  )
}

export default App
