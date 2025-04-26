import AnalyzerBox from './pages/AnalyzerBox';
import "./App.css";
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import FileUploadAPI from './pages/FileUploadAPI';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/analysis' element={<AnalyzerBox/>}/>
      <Route path='/file-upload' element={<FileUploadAPI/>}/>
    </Routes>
  );
}

export default App;



