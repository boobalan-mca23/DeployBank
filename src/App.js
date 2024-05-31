
import './App.css';
import Navigation from './navbar.js'
import {HashRouter,Routes,Route} from 'react-router-dom'

import Create from './create.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import Alldata from './alldata.js';
import userContext from './context.js';

function App() {
  return (
    <>
   <Navigation></Navigation>
   <div id="home">
         <h3>Welcome to <span id="span-1">MCA</span>-<span id="span-2">BANK</span></h3>
         <h4>"Online banking"</h4>
         
   </div>
     <userContext.Provider value={{'users':[]}}>
     <HashRouter>
      <Routes>
      
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/deposit" element={<Deposit/>} ></Route>
        <Route path="/withdraw" element={<Withdraw/>} ></Route>
        <Route path="/alldata" element={<Alldata/>} ></Route>
      </Routes>
     </HashRouter>
     </userContext.Provider>
     
     
    </>
  );
}

export default App;
