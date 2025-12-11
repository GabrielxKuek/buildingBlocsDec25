import TestPage from './pages/TestPage'
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './components/simplepoke.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/simplepoke" element={<Pokemon foodSaved={150}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
