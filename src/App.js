
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Keywordspage from "./pages/keywordspage/keywordspage";

function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/keywords' exact element={<Keywordspage/>}/>

    </Routes>
 </BrowserRouter>   
    </div>
  );
}

export default App;
