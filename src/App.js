import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Who from './components/Who';
import What from './components/What';
import Where from './components/Where';
import How from './components/How';
function App() {

  const [ state, setState ] = useState('who');

  function content() {
	if (state === 'what') {
		return <What />;
	} else if (state === 'where') {
		return <Where />;
	} else if (state === 'how') {
		return <How />;
	}
	return <Who />;
  }

  return (
    <div className="App">
    	<Menu setState={setState} state={state} />
		{
			content()
		}
    </div>
  );
}

export default App;
