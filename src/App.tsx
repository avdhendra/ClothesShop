
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import SearchPage from './pages/SearchPage'
import SearchProduct from './pages/SearchProduct'

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/product/:id" element={<SearchProduct/>}/>
   </Routes>
  )
}

export default App
