import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Seven from './components/Seven';
import Six from './components/Six';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
          <Route path="third" element={<Fourth />} />
          <Route path="third" element={<Fifth />} />
          <Route path="third" element={<Six />} />
          <Route path="third" element={<Seven />} />
          <Route path="third" element={<Third />} />
          <Route path="third" element={<Third />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
