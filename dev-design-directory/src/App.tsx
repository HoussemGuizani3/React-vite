import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DevelopersDirectory } from '../src/pages/DevelopersDirectory'
import { ViewProfil } from './components/developers/developer_card/ViewProfil'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DevelopersDirectory />} />
        <Route path="/ViewProfil/:id" element={<ViewProfil />} />    
   
        </Routes>

    </BrowserRouter>
  )
}

export default App
