import TestPage from './pages/TestPage'
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './components/simplepoke.jsx'
import Leaderboard from './components/leaderboard';
import StatsCard from './components/statscard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/simplepoke" element={<Pokemon foodSaved={150}/>} />
        <Route path="/leaderboard" element={<Leaderboard />}  /> 
        <Route path="/statscard" element={<StatsCard indvfoodSaved={10} indvfoodDonated={10}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
