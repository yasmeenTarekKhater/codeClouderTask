import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/shared/Sidebar';
import Overview from './pages/Overview';
import Activity from './pages/Activity';


function App() {
  return (
    <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Overview/>}></Route>
            <Route path='/activity' element={<Activity/>}></Route>
          </Routes>
        </Sidebar>
    </BrowserRouter>
  )
}

export default App;
