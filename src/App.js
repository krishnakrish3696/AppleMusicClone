import LeftMenu from './Components/LeftMenu/LeftMenu';
import "./App.css";
import MainContainer from './Components/MainContainer/MainContainer';
import Topbar from './Components/Topbar/Topbar';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <LeftMenu/>
        <Topbar/>
        <MainContainer/>

        {/* <div className='background'></div> */}
        {/* <Routes>
            <Route path='/' />
        </Routes> */}
        
    </div>
  );
}

export default App;
