import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const[numberAllowed, setNumberAllowed]= useState(false)
  const[characterAllowed, setCharacterAllowed]= useState(false)
  const[password, setPassword]  = useState("")

  //useref hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) string+= "0123456789"
    if(characterAllowed) string+= "{}'!@#$%^&*()_-:;>=-*/"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length +1)

      pass += string.charAt(char)
      
    }

    setPassword(pass)


  },[length, numberAllowed, characterAllowed, setPassword])

  const copyToClipBoard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)},[password])

  useEffect (() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])



  return (
    <>
      <h1 className="bg-slate-300 shadow-2xl font-bold ">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800">
        <input type="text" 
          value={password} className="outline-none w-full py-1 px-3" placeholder='password' readOnly ref={passwordRef}
        />
        <button onClick={copyToClipBoard} className='bg-blue-300 rounded-2xl shadow-xl text-black py-1 px-3'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2 py-1 px-96">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=> {setLength(e.target.value)}}/>
          <label htmlFor="length"> Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=> {setNumberAllowed((prev)=> !prev);}}/>
          <label htmlFor="inputNumber"> Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" onChange={()=> {setCharacterAllowed((prev)=> !prev);}}/>
          <label htmlFor="inputCharacter"> Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
