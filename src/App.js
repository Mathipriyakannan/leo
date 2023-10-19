import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leo } from './Manoj/Leo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Leo />} />
          
          <Route path="/Nav" element={<Nav />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
