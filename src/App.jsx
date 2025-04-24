
import {Suspense } from 'react'
import './App.css'
import DaisyNab from './Components/DaisyNab/DaisyNab'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsCharts from './Components/ResultsCharts/ResultsCharts'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'


const pricingPromise = fetch('/pricingData.json')
.then(res=> res.json());
const marksPromise = axios.get('markData.json');

function App() {


  return (
    <> 
      <header>
        <Navbar></Navbar>
      {/* <DaisyNab></DaisyNab> */}
      </header>

      <main>
       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
       </Suspense>

       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <MarksChart marksPromise={marksPromise}></MarksChart>

       </Suspense>

       <ResultsCharts></ResultsCharts>
       
      </main>
     
    </>
  )
}

export default App
