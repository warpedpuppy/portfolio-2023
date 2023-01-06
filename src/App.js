import { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Who from './components/Who';
import What from './components/What';
import Where from './components/Where';
import How from './components/How';
import trippy from './animations/trippy';
function App() {

  const [ state, setState ] = useState('who');
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
	if (!loaded) {
		trippy();
		setLoaded(true)
	}
	
  }, [])

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
		<div id="object-pooling"></div>
    </div>
  );
}

export default App;
