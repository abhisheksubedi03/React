
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1 className='bg-orange-600 text-gray-900 text-center text-9xl mt-6 '>Hello  World from Context  Api</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
