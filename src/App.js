
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Keywordspage from "./pages/keywordspage/keywordspage";
import Videopage from "./pages/videopage/videopage";

function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/keywords' exact element={<Keywordspage/>}/>
        <Route path='/video' exact element={<Videopage/>}/>
    </Routes>
 </BrowserRouter>   
    </div>
  );
}

export default App;
