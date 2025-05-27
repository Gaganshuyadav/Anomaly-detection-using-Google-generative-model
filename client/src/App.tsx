import AnalyzerBox from './pages/AnalyzerBox';
import "./App.css";
import { Route, Routes } from 'react-router';
import Home from './pages/Home';


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/analysis' element={<AnalyzerBox/>}/>
    </Routes>
  );
}

export default App;



