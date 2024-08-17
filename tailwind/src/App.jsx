import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-slate-200'>Tailwind class</h1>
     <Card username="abhishek" btntext="moreeee"/>
     <Card username="Subedi" btntext="suhbmitt"/>

    </>
  )
}

export default App
