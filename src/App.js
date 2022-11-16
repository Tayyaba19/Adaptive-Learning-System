
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter , Route ,Routes , useParams} from 'react-router-dom';
import Keywordspage from "./pages/keywordspage/keywordspage";
import Videopage from "./pages/videopage/videopage";

function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/video/:id' exact element={<Videopage/>}/>
        <Route path='/keywords/:id' exact element={<Keywordspage/>}/>
    </Routes>
 </BrowserRouter>   
    </div>
  );
}

export default App;
