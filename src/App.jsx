
import {Suspense } from 'react'
import './App.css'
import DaisyNab from './Components/DaisyNab/DaisyNab'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsCharts from './Components/ResultsCharts/ResultsCharts'


const pricingPromise = fetch('/pricingData.json')
.then(res=> res.json());

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

       <ResultsCharts></ResultsCharts>
       
      </main>
     
    </>
  )
}

export default App
