
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Videopage from "./pages/videopage/videopage";
import Quizpage from "./pages/quizpage/quizpage";

function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/video/:id' exact element={<Videopage/>}/>
        <Route path='/quiz/:id' exact element={<Quizpage/>}/>
    </Routes>
 </BrowserRouter>   
    </div>
  );
}

export default App;
