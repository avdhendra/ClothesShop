
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import SearchPage from './pages/SearchPage'

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/product/:search" element={<SearchProduct/>}
   </Routes>
  )
}

export default App
