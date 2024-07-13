import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import { Home } from './Home';
import PlayMovie from './components/PlayMovie';

const socket = new WebSocket("ws://localhost:5173/");

socket.addEventListener("error", (event) => {
  console.log("WebSocket error: ", event);
});
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/play' element={<PlayMovie/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
