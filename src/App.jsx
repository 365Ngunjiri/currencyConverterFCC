import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.jsx'
import { InputBox } from './components/index.js'



function App() {
  const [ammount, setAmmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('kes')
  const [convertedAmmount, setConvertedAmmount] = useState(0)
 
 const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)
 
const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmmount(ammount)
  setAmmount(convertedAmmount)
}

const convert = () => { 
  setConvertedAmmount(ammount * currencyInfo[to])
}

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: 'url(https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400)'}}
    >
<div className='w-full'>
  <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'></div>
<form onSubmit = {(e) => {
  e.preventDefault()
  convert()
}}>
  <div className='w-full mb-1'>
    <InputBox
    label="from"
    ammount={ammount}
    currencyOptions = {options}
    onCurrencyChange= {(currency) => setFrom (currency)}
    onAmmountChange = {(ammount) => setAmmount(ammount)}
    selectedCurrency = {from}
    />
  </div>
  <div className='relative w-full h-0.5'>
    <button
    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
     onClick={swap}
    >Swap</button>
  </div>
  <div className='w-full mb-1'>
    <InputBox
    label='to'
    currencyOptions={options}
    ammount={convertedAmmount}
    onCurrencyChange={(currency) => setTo(currency)}
    selectedCurrency={to}
    ammountDisabled
    />
  </div>
  <button
  type="submit"
  className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
  >Convert {from.toUpperCase()} to {to.toUpperCase()}
  </button>
</form>
</div>
    </div>
  )
}

export default App
