import FirstScreen from "./Components/FirstScreen";
import {Routes,Route} from 'react-router-dom'
import Signup from "./Components/Signup";
import Login from "./Components/Login";


const App=()=> {
  return (
    <div className="App">
      <FirstScreen/>
      <Routes>
          <Route path='/' element={<Signup/>}/> 
          {/* <Route path='/login' element={<Login/>}/> */}
  
        </Routes>
      

    </div>
  );
}

export default App;
