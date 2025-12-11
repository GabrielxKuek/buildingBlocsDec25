// import TestPage from './pages/TestPage'
// import ErrorPage from './pages/ErrorPage'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/test" element={<TestPage />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import "./App.css";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Map from "./pages/Map";
import Events from "./pages/Events";
function App() {
  return (
    <Router>
      <AppBar position="static" className="AppBar">
        <Container>
          <Toolbar disableGutters={true}>
            <Link to="/">
              <Typography variant="h6" component="div">
                Learning
              </Typography>
            </Link>
            <Link to="/map">
              <Typography>Map</Typography>
            </Link>
            <Link to="/events">
              <Typography>Events</Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Routes>
          <Route path={"/"} element={<Map />} />
          <Route path={"/map"} element={<Map />} />
          <Route path={"/events"} element={<Events />} />
        </Routes>
      </Container>
    </Router>
  );
}
export default App;
