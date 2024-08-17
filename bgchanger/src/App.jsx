import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1">
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button className="px-4 py-2 rounded-2xl shadow-xl bg-red-200" onClick={() => setcolor("red")}>Red</button>
            <button onClick={() => setcolor("green")} className="px-4 py-2 rounded-2xl shadow-xl bg-green-200">Green</button>
            <button onClick={() => setcolor("blue")} className="px-4 py-2 rounded-2xl shadow-xl bg-blue-200">Blue</button>
            <button onClick={() => setcolor("black")}  className="px-4 py-2 rounded-2xl shadow-xl bg-neutral-500">Black</button>
            <button onClick={() => setcolor("pink")}  className="px-4 py-2 rounded-2xl shadow-xl bg-pink-200">pink</button>
            <button onClick={() => setcolor("green")} className="px-4 py-2 rounded-2xl shadow-xl bg-green-200">Green</button>
            <button onClick={() => setcolor("blue")} className="px-4 py-2 rounded-2xl shadow-xl bg-blue-200">Blue</button>
            <button onClick={() => setcolor("black")}  className="px-4 py-2 rounded-2xl shadow-xl bg-neutral-500">Black</button>
            <button onClick={() => setcolor("pink")}  className="px-4 py-2 rounded-2xl shadow-xl bg-pink-200">pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
