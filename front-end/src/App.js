import './App.css';
import GadgetDetailsWrapper from './Components/GadgetDetailsWrapper';
import GadgetShowCase from './Components/GadgetShowCase';
import { PORT8000URL } from './port8000url'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <h1 id="title">Gadget Store</h1>
      <Routes>
        <Route exact path="/" element={
          <GadgetShowCase url={PORT8000URL} />
        } />
        <Route path="/gadgets/:id" element={
          <GadgetDetailsWrapper url={PORT8000URL} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
