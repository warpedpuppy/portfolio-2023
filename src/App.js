import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Who from './components/Who';
import What from './components/What';
import Where from './components/Where';
function App() {

  const [ state, setState ] = useState('who');
  
  return (
    <div className="App">
		<BrowserRouter>
    		<Menu setState={setState} state={state} />
			<Routes>
			
				<Route path='/' element={ <Who /> } />
				<Route path='/who' element={ <Who /> } />
				<Route path='what' element={ <What /> } />
				<Route path='where' element={ <Where /> } />
				<Route path='*' element={ <Who /> } />
			</Routes>
		</BrowserRouter>
		<a rel="me" href="https://tech.lgbt/@tugboatmcpuppy">&nbsp;</a>
    </div>
  );
}

export default App;
