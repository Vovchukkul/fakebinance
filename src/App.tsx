import './App.css';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import { About } from './pages/AboutUs/About';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<About />} />
        {/* <Route path="/why" element={<Why />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
